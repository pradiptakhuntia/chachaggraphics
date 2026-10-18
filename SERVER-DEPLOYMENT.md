# Chacha G Graphics Option 5 — Server Deployment

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
HOST=0.0.0.0 PORT=3000 npm run start
```

Open `http://SERVER_IP:3000` to verify the site. Keep the process running with your preferred service manager (for example, systemd, PM2, Docker, or your hosting control panel), then point your domain's reverse proxy to port 3000.

## Nginx reverse-proxy example

```nginx
server {
    listen 80;
    server_name example.com www.example.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
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
npm run dev      # development server
npm run build    # production build
npm run start    # production server
npm test         # build and run the included test
```

## Main project locations

- `app/` — pages, components, and styling
- `public/` — images, logos, favicons, 3D model, and other static assets
- `worker/` — current Vinext/Cloudflare worker entry point
- `package.json` — dependencies and scripts

## Notes

- Do not upload `node_modules`; install dependencies on the target server with `npm ci`.
- The app uses Vinext and is already configured for production builds.
- If your host only supports static HTML and cannot run Node.js, use a Node-capable VPS/container or adapt the project to a static export first.
