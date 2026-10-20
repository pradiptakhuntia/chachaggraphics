import assert from "node:assert/strict";
import test from "node:test";
import { startAtTop } from "../app/start-at-top.js";

test("removes the current hash, disables scroll restoration, and returns to the top", () => {
  const originalWindow = globalThis.window;
  const calls = [];
  globalThis.window = {
    history: {
      state: { page: "home" },
      scrollRestoration: "auto",
      replaceState(...args) {
        calls.push(["replaceState", ...args]);
      },
    },
    location: {
      href: "http://localhost:8000/#work",
      hash: "#work",
    },
    scrollTo(...args) {
      calls.push(["scrollTo", ...args]);
    },
  };

  try {
    startAtTop();

    assert.equal(window.history.scrollRestoration, "manual");
    assert.deepEqual(calls, [
      ["replaceState", { page: "home" }, "", "/"],
      ["scrollTo", { top: 0, left: 0, behavior: "instant" }],
    ]);
  } finally {
    if (originalWindow === undefined) {
      delete globalThis.window;
    } else {
      globalThis.window = originalWindow;
    }
  }
});

test("preserves the query string while clearing a hash", () => {
  const originalWindow = globalThis.window;
  let replacedUrl;
  globalThis.window = {
    history: {
      state: null,
      scrollRestoration: "auto",
      replaceState(_state, _title, url) {
        replacedUrl = url;
      },
    },
    location: {
      href: "http://localhost:8000/?source=bookmark#work",
      hash: "#work",
    },
    scrollTo() {},
  };

  try {
    startAtTop();
    assert.equal(replacedUrl, "/?source=bookmark");
  } finally {
    if (originalWindow === undefined) {
      delete globalThis.window;
    } else {
      globalThis.window = originalWindow;
    }
  }
});
