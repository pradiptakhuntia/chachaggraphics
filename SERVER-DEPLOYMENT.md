# Chacha G Graphics — Node.js Server Deployment

This package contains the complete editable source code and all website assets.

## Requirements

- Node.js 22.13 or newer
- npm
- A reverse proxy such as Nginx or Caddy for HTTPS in production

The current website does not require a database, object storage, API keys, or secret environment variables.

## Run locally or on a VPS

From the project directory:

```bash
npm ci
npm run build
HOST=0.0.0.0 PORT=8000 npm run start
```

Open `http://SERVER_IP:8000` to verify the site. Keep the process running with your preferred service manager (for example, systemd, PM2, Docker, or your hosting control panel), then point your domain's reverse proxy to port 8000.

## Nginx reverse-proxy example

```nginx
server {
    listen 80;
    server_name example.com www.example.com;

    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Replace `example.com` with your domain, then add HTTPS using your hosting panel or Certbot.

## Common commands

```bash
npm run dev      # local Node.js server at http://localhost:8000
npm run build    # compile the JSX server and browser bundles
npm run start    # Node.js server (builds bundles on startup)
npm test         # build and check rendered HTML and static resources
```

## Main project locations

- `app/` — pages, components, and styling
- `public/` — images, logos, favicons, 3D model, and other static assets
- `server.js` — native Node.js HTTP server
- `build.js` — esbuild-based JSX compilation
- `package.json` — dependencies and scripts

## Notes

- Do not upload `node_modules`; install dependencies on the target server with `npm ci`.
- The server renders the homepage with React and serves the original files in `public/`.
- esbuild compiles JSX and bundles the browser-side React interactions; Vite and TypeScript are not used.
- If your host only supports static HTML and cannot run Node.js, use a Node-capable VPS/container or adapt the project to a static export first.
