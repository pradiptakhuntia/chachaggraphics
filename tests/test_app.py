import unittest

from app import app


class WebsiteTests(unittest.TestCase):
    def setUp(self):
        app.config.update(TESTING=True)
        self.client = app.test_client()

    def test_homepage_contains_site_content_and_python_static_entry(self):
        response = self.client.get("/")
        self.assertEqual(response.status_code, 200)
        self.assertIn("text/html", response.content_type)
        html = response.get_data(as_text=True)
        self.assertIn("<title>Signage, Safety Signs and Printing | Chacha G Graphics</title>", html)
        self.assertIn("Make your", html)
        self.assertIn("Wall of trust", html)
        self.assertIn("Request on WhatsApp", html)
        self.assertIn('/static/site.js', html)
        self.assertIn('/static/site.css', html)
        self.assertIn('history.scrollRestoration="manual"', html)

    def test_vanilla_frontend_and_local_three_modules_are_served(self):
        for path, expected_type in (
            ("/static/site.js", "application/javascript"),
            ("/static/scroll-scene.js", "application/javascript"),
            ("/static/site.css", "text/css"),
            ("/static/vendor/three/build/three.module.js", "application/javascript"),
            ("/static/vendor/three/build/three.core.js", "application/javascript"),
            ("/static/vendor/three/examples/jsm/loaders/GLTFLoader.js", "application/javascript"),
        ):
            with self.subTest(path=path):
                response = self.client.get(path, buffered=True)
                self.assertEqual(response.status_code, 200)
                self.assertIn(expected_type, response.content_type)

        script = self.client.get("/static/site.js", buffered=True).get_data(as_text=True)
        self.assertIn("history.replaceState", script)
        self.assertIn("scrollRestoration", script)
        self.assertNotIn("hydrateRoot", script)

    def test_original_images_and_model_remain_available(self):
        for path, expected_type in (
            ("/assets/models/kamran.glb", "model/gltf-binary"),
            ("/assets/app-showcase/chachag-app-desktop.png", "image/png"),
            ("/assets/studio-campaign-v2/illuminated-signage-installation.webp", "image/webp"),
            ("/og.png", "image/png"),
            ("/hyperframe/chachag-concepts.js", "javascript"),
        ):
            with self.subTest(path=path):
                response = self.client.get(path, buffered=True)
                self.assertEqual(response.status_code, 200)
                self.assertIn(expected_type, response.content_type)
                self.assertGreater(len(response.data), 0)

    def test_missing_resource_returns_not_found(self):
        response = self.client.get("/assets/does-not-exist.png")
        self.assertEqual(response.status_code, 404)

    def test_post_is_not_allowed_on_homepage(self):
        response = self.client.post("/")
        self.assertEqual(response.status_code, 405)


if __name__ == "__main__":
    unittest.main()
