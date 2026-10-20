export function startAtTop() {
  window.history.scrollRestoration = "manual";

  if (window.location.hash) {
    const url = new URL(window.location.href);
    url.hash = "";
    window.history.replaceState(window.history.state, "", `${url.pathname}${url.search}`);
  }

  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}
