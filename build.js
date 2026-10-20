import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { build } from "esbuild";

const rootDirectory = dirname(fileURLToPath(import.meta.url));
const outputDirectory = resolve(rootDirectory, ".build");

export async function buildSite() {
  await mkdir(outputDirectory, { recursive: true });

  await Promise.all([
    build({
      absWorkingDir: rootDirectory,
      entryPoints: ["app/server-render.js"],
      outfile: resolve(outputDirectory, "server-render.mjs"),
      bundle: true,
      packages: "external",
      platform: "node",
      format: "esm",
      target: "node22",
      jsx: "automatic",
      loader: { ".js": "jsx" },
    }),
    build({
      absWorkingDir: rootDirectory,
      entryPoints: ["app/client.js"],
      outfile: resolve(outputDirectory, "site.js"),
      bundle: true,
      platform: "browser",
      format: "esm",
      target: "es2022",
      jsx: "automatic",
      loader: { ".js": "jsx" },
    }),
  ]);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await buildSite();
}
