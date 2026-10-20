import { createReadStream } from "node:fs";
import { readFile, stat } from "node:fs/promises";
import { createServer as createHttpServer } from "node:http";
import { extname, resolve, sep } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { pipeline } from "node:stream/promises";
import { buildSite } from "./build.js";

const rootDirectory = fileURLToPath(new URL(".", import.meta.url));
const publicDirectory = resolve(rootDirectory, "public");
const outputDirectory = resolve(rootDirectory, ".build");
const stylesheetPath = resolve(rootDirectory, "app", "globals.css");

const contentTypes = new Map([
  [".css", "text/css; charset=utf-8"],
  [".glb", "model/gltf-binary"],
  [".html", "text/html; charset=utf-8"],
  [".ico", "image/x-icon"],
  [".jpeg", "image/jpeg"],
  [".jpg", "image/jpeg"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".mp4", "video/mp4"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"],
  [".webp", "image/webp"],
]);

function send(response, method, status, body, contentType) {
  response.writeHead(status, {
    "content-type": contentType,
    "content-length": Buffer.byteLength(body),
    "cache-control": "no-cache",
    "x-content-type-options": "nosniff",
  });
  response.end(method === "HEAD" ? undefined : body);
}

async function sendFile(response, method, filePath) {
  let fileStats;
  try {
    fileStats = await stat(filePath);
  } catch (error) {
    if (error.code === "ENOENT" || error.code === "ENOTDIR") return false;
    throw error;
  }

  if (!fileStats.isFile()) return false;

  response.writeHead(200, {
    "content-type": contentTypes.get(extname(filePath).toLowerCase()) ?? "application/octet-stream",
    "content-length": fileStats.size,
    "cache-control": "no-cache",
    "x-content-type-options": "nosniff",
  });
  if (method === "HEAD") {
    response.end();
    return true;
  }

  await pipeline(createReadStream(filePath), response);
  return true;
}

export function createServer(renderHomePage) {
  if (typeof renderHomePage !== "function") {
    throw new TypeError("createServer requires a homepage renderer.");
  }

  return createHttpServer(async (request, response) => {
    const method = request.method ?? "GET";
    if (method !== "GET" && method !== "HEAD") {
      response.writeHead(405, { allow: "GET, HEAD" });
      response.end("Method not allowed");
      return;
    }

    try {
      const pathname = new URL(request.url ?? "/", "http://localhost").pathname;
      if (pathname === "/") {
        send(response, method, 200, renderHomePage(), "text/html; charset=utf-8");
        return;
      }
      if (pathname === "/site.css") {
        const stylesheet = await readFile(stylesheetPath);
        send(response, method, 200, stylesheet, "text/css; charset=utf-8");
        return;
      }
      if (pathname === "/site.js") {
        if (await sendFile(response, method, resolve(outputDirectory, "site.js"))) return;
      } else {
        let relativePath;
        try {
          relativePath = decodeURIComponent(pathname.slice(1));
        } catch (error) {
          if (error instanceof URIError) {
            send(response, method, 400, "Bad request", "text/plain; charset=utf-8");
            return;
          }
          throw error;
        }
        const filePath = resolve(publicDirectory, relativePath);
        if (
          filePath !== publicDirectory &&
          !filePath.startsWith(`${publicDirectory}${sep}`)
        ) {
          send(response, method, 403, "Forbidden", "text/plain; charset=utf-8");
          return;
        }
        if (await sendFile(response, method, filePath)) return;
      }

      send(response, method, 404, "Not found", "text/plain; charset=utf-8");
    } catch (error) {
      console.error("Request failed:", error);
      if (!response.headersSent) {
        send(response, method, 500, "Internal server error", "text/plain; charset=utf-8");
      } else {
        response.destroy(error);
      }
    }
  });
}

async function start() {
  const port = Number(process.env.PORT ?? 3000);
  if (!Number.isInteger(port) || port < 0 || port > 65535) {
    throw new Error("PORT must be an integer from 0 to 65535.");
  }

  await buildSite();
  const { renderHomePage } = await import(
    pathToFileURL(resolve(outputDirectory, "server-render.mjs")).href
  );
  const server = createServer(renderHomePage);
  const host = process.env.HOST ?? "127.0.0.1";
  server.listen(port, host, () => {
    const address = server.address();
    const listeningPort = typeof address === "object" && address ? address.port : port;
    console.log(`Chacha G Graphics is running at http://${host}:${listeningPort}`);
  });
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  start().catch((error) => {
    console.error("Unable to start the Node.js server:", error);
    process.exitCode = 1;
  });
}
