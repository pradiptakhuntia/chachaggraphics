# Chacha G Graphics — Flask Deployment

## Requirements

- Python 3.11 or newer
- pip
- A reverse proxy such as Nginx or Caddy for HTTPS in production

The application does not require a database, API keys, or secret environment
variables.

## Run locally or on a server

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
$env:HOST = "0.0.0.0"
$env:PORT = "8000"
python app.py
```

Open `http://SERVER_IP:8000` to verify the site. For production, run Flask
behind a production WSGI server and reverse proxy; Flask's built-in server is
intended for local development.

## Nginx reverse-proxy example

```nginx
server {
    listen 80;
    server_name example.com www.example.com;

    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Replace `example.com` with your domain, then configure HTTPS using your hosting
provider or Certbot.

## Tests

```powershell
python -m unittest discover -s tests -p "test_*.py"
```

## Main locations

- `app.py` — Flask application.
- `templates/` — homepage HTML.
- `static/` — CSS, JavaScript, and locally served Three.js modules.
- `public/` — original images, logos, favicons, 3D model, and other resources.
- `requirements.txt` — Python dependencies.
