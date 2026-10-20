import mimetypes
import os
from pathlib import Path

from flask import Flask, render_template, send_from_directory


ROOT_DIRECTORY = Path(__file__).resolve().parent
PUBLIC_DIRECTORY = ROOT_DIRECTORY / "public"
mimetypes.add_type("model/gltf-binary", ".glb")
mimetypes.add_type("image/webp", ".webp")
app = Flask(__name__, static_folder="static", static_url_path="/static")


@app.after_request
def add_security_headers(response):
    response.headers.setdefault("X-Content-Type-Options", "nosniff")
    response.headers.setdefault("Cache-Control", "no-cache")
    return response


@app.get("/")
def home():
    return render_template("index.html")


@app.route("/<path:asset_path>", methods=["GET", "HEAD"])
def public_asset(asset_path):
    return send_from_directory(PUBLIC_DIRECTORY, asset_path, conditional=True)


if __name__ == "__main__":
    host = os.environ.get("HOST", "127.0.0.1")
    port = int(os.environ.get("PORT", "8000"))
    app.run(host=host, port=port, debug=False)
