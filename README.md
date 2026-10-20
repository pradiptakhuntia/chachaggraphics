# Chacha G Graphics

The Chacha G Graphics portfolio and service website. The server is a Python
Flask application; the browser UI uses plain HTML, CSS, and JavaScript. No Node
runtime, React, or frontend build step is needed to run the site.

## Requirements

- Python 3.11 or newer
- pip

## Run locally

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
python app.py
```

Open `http://localhost:8000`. Set `HOST` or `PORT` environment variables to
override the local server address. Each page load or refresh starts at the top
of the homepage, even if the previous URL contained a section fragment.

## Tests

```powershell
python -m unittest discover -s tests -p "test_*.py"
```

## Project structure

- `app.py` — Flask application and static resource routes.
- `templates/index.html` — the website's server-served HTML.
- `static/site.css` — website styles.
- `static/site.js` and `static/scroll-scene.js` — browser interactions.
- `static/vendor/three/` — local Three.js modules and their MIT license.
- `public/` — original website resources, including images, icons, videos, and
  the 3D model.
- `requirements.txt` — Python runtime dependencies.
