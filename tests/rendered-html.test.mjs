import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import test from "node:test";
import { createServer } from "../server.js";

async function withServer(callback) {
  const rendererUrl = new URL("../.build/server-render.mjs", import.meta.url);
  rendererUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { renderHomePage } = await import(rendererUrl.href);
  const server = createServer(renderHomePage);
  server.listen(0, "127.0.0.1");
  await new Promise((resolve, reject) => {
    server.once("listening", resolve);
    server.once("error", reject);
  });

  try {
    const address = server.address();
    return await callback(`http://127.0.0.1:${address.port}`);
  } finally {
    await new Promise((resolve, reject) => {
      server.close((error) => (error ? reject(error) : resolve()));
    });
  }
}

test("server-renders the refreshed Chacha G portfolio", async () => {
  assert.equal(existsSync(new URL("../public/assets/models/kamran.glb", import.meta.url)), true);
  await withServer(async (baseUrl) => {
    const response = await fetch(baseUrl);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

    const html = await response.text();
    assert.match(html, /<title>Signage, Safety Signs and Printing \| Chacha G Graphics<\/title>/i);
    assert.match(html, /Make your/i);
    assert.match(html, /stand out/i);
    assert.match(html, /intro-showcase/i);
    assert.match(html, /Order online/i);
    assert.match(html, /Clear scope\. Right material\./i);
    assert.match(html, /Scroll to view our capabilities/i);
    assert.match(html, /What we can design, produce and install\./i);
    assert.match(html, /href="#about">About Us/i);
    assert.match(html, /mobile-menu-icon/i);
    assert.match(html, /service provider based in Odisha/i);
    assert.match(html, /What you can order from us\./i);
    assert.match(html, /Details we confirm before production\./i);
    assert.match(html, /Wallpaper/i);
    assert.match(html, /Label Printing and Cutting/i);
    assert.match(html, /Choudwar College/i);
    assert.match(html, /Wall of trust/i);
    assert.match(html, /Saloni Sahoo/i);
    assert.match(html, /Binod Behera/i);
    assert.match(html, /Read all Google reviews/i);
    assert.match(html, /Leave a Google review/i);
    assert.match(html, /Pause automatic review movement/i);
    assert.match(html, /g\.page\/r\/CQ4UD-myi1PyEAI\/review/i);
    assert.match(html, /Order online or use our mobile app\./i);
    assert.match(html, /Website link coming soon/i);
    assert.match(html, /App-store link coming soon/i);
    assert.match(html, /Chachag App ordering homepage displayed on a laptop/i);
    assert.match(html, /Chachag App ordering homepage displayed on a mobile phone/i);
    assert.match(html, /\/assets\/app-showcase\/chachag-app-desktop\.png/i);
    assert.match(html, /\/assets\/app-showcase\/chachag-app-mobile\.png/i);
    assert.match(html, /device-laptop-keyboard/i);
    assert.match(html, /contact-email-link/i);
    assert.match(html, /mailto:chachaggraphics@gmail\.com/i);
    assert.match(html, /Google Play link coming soon/i);
    assert.match(html, /footer-social-link/i);
    assert.match(html, /studio-campaign-v2\/industrial-safety-wayfinding\.webp/i);
    assert.match(html, /Find our office/i);
    assert.match(html, /google\.com\/maps\?q=/i);
    assert.match(html, /Request on WhatsApp/i);
    assert.match(html, /\/og.png/);
    assert.match(html, /id="root"/);
    assert.match(html, /src="\/site\.js"/);
    assert.match(html, /href="\/site\.css"/);
    assert.doesNotMatch(html, /\/hyperframe\/chachag-concepts\.(?:css|js)/);
    assert.doesNotMatch(html, /SkeletonPreview|react-loading-skeleton/i);
  });
});

test("serves the browser bundle, styles, and public assets", async () => {
  await withServer(async (baseUrl) => {
    const [script, stylesheet, model, socialImage] = await Promise.all([
      fetch(`${baseUrl}/site.js`),
      fetch(`${baseUrl}/site.css`),
      fetch(`${baseUrl}/assets/models/kamran.glb`, { method: "HEAD" }),
      fetch(`${baseUrl}/og.png`, { method: "HEAD" }),
    ]);
    assert.equal(script.status, 200);
    assert.match(script.headers.get("content-type") ?? "", /^text\/javascript\b/i);
    assert.match(await script.text(), /hydrateRoot/);
    assert.equal(stylesheet.status, 200);
    assert.match(stylesheet.headers.get("content-type") ?? "", /^text\/css\b/i);
    assert.match(await stylesheet.text(), /--paper:/);
    assert.equal(model.status, 200);
    assert.match(model.headers.get("content-type") ?? "", /^model\/gltf-binary\b/i);
    assert.ok(Number(model.headers.get("content-length")) > 0);
    assert.equal(socialImage.status, 200);
    assert.match(socialImage.headers.get("content-type") ?? "", /^image\/png\b/i);
  });
});

test("returns not found for missing resources", async () => {
  await withServer(async (baseUrl) => {
    const response = await fetch(`${baseUrl}/missing-resource.png`);
    assert.equal(response.status, 404);
  });
});
