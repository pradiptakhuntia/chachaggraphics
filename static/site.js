import { initScrollScene } from "./scroll-scene.js";

function startAtTop() {
  window.history.scrollRestoration = "manual";
  if (window.location.hash) {
    window.history.replaceState(
      window.history.state,
      "",
      `${window.location.pathname}${window.location.search}`,
    );
  }
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}

function initMobileNavigation() {
  const menu = document.querySelector(".mobile-nav");
  if (!menu) return;

  menu.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.open = false;
    });
  });
}

function initClientGallery() {
  const section = document.querySelector(".client-section");
  const wall = document.querySelector(".client-wall");
  const track = document.querySelector(".client-track");
  const progressBar = document.querySelector(".client-progress i");
  if (!section || !wall || !track || !progressBar) return;

  let frameId = 0;
  const update = () => {
    frameId = 0;
    const sectionRect = section.getBoundingClientRect();
    const travel = Math.max(1, section.offsetHeight - wall.offsetHeight - 48);
    const progress = Math.min(1, Math.max(0, (82 - sectionRect.top) / travel));
    const wallWidth = wall.clientWidth;
    const trackWidth = track.scrollWidth;
    const edge = Math.min(64, wallWidth * 0.08);
    const startX = edge;
    const endX = Math.min(startX, wallWidth - trackWidth - edge);
    const x = startX + (endX - startX) * progress;

    track.style.transform = `translate3d(${x}px, -50%, 0)`;
    progressBar.style.transform = `scaleX(${progress})`;

    track.querySelectorAll(".client-frame").forEach((frame, index) => {
      const center = x + frame.offsetLeft + frame.offsetWidth / 2;
      const delta = center - wallWidth / 2;
      const distance = Math.min(1, Math.abs(delta) / Math.max(1, wallWidth * 0.58));
      const verticalOffset = index % 3 === 0 ? -34 : index % 3 === 1 ? 26 : -4;
      frame.style.transform = `translateY(${verticalOffset}px) perspective(900px) rotateY(${Math.max(-12, Math.min(12, (-delta / Math.max(1, wallWidth)) * 24))}deg) scale(${1.08 - distance * 0.2})`;
      frame.style.opacity = String(1 - distance * 0.5);
      frame.style.filter = `saturate(${1 - distance * 0.28}) brightness(${1.08 - distance * 0.25})`;
      frame.style.zIndex = String(Math.round((1 - distance) * 10));
    });
  };

  const requestUpdate = () => {
    if (!frameId) frameId = window.requestAnimationFrame(update);
  };
  update();
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
}

function initDeviceShowcases() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const stages = document.querySelectorAll(".order-device-stage");
  if (!stages.length) return;
  let frameId = 0;
  const update = () => {
    frameId = 0;
    stages.forEach((stage) => {
      const rect = stage.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      const signedDistance = Math.max(-1, Math.min(1, (rect.top + rect.height / 2 - viewport / 2) / (viewport * 0.72)));
      const proximity = 1 - Math.abs(signedDistance);
      const eased = 1 - Math.pow(1 - proximity, 2.4);
      const direction = stage.classList.contains("order-device-stage-laptop") ? -1 : 1;

      stage.style.setProperty("--device-lift", `${signedDistance * 74}px`);
      stage.style.setProperty("--device-tilt-x", `${signedDistance * 14}deg`);
      stage.style.setProperty("--device-tilt-y", `${direction * signedDistance * 38}deg`);
      stage.style.setProperty("--device-rotate-z", `${direction * signedDistance * 4}deg`);
      stage.style.setProperty("--device-scale", `${0.72 + eased * 0.3}`);
      stage.style.setProperty("--device-opacity", `${0.48 + eased * 0.52}`);
      stage.style.setProperty("--screen-shift", `${signedDistance * 3}%`);
    });
  };
  const requestUpdate = () => {
    if (!frameId) frameId = window.requestAnimationFrame(update);
  };
  update();
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
}

function initReviewCarousel() {
  const track = document.querySelector(".review-track");
  const previous = document.querySelector('.review-controls button[aria-label="Previous review"]');
  const next = document.querySelector('.review-controls button[aria-label="Next review"]');
  const toggle = document.querySelector(".review-toggle");
  if (!track || !previous || !next || !toggle) return;

  let manuallyPaused = false;
  let userPaused = false;
  let resumeTimer = 0;
  const pauseTemporarily = () => {
    manuallyPaused = true;
    window.clearTimeout(resumeTimer);
    resumeTimer = window.setTimeout(() => {
      manuallyPaused = false;
      resumeTimer = 0;
    }, 8000);
  };
  const move = (direction) => {
    const card = track.querySelector(".review-card");
    const distance = (card?.offsetWidth ?? 320) + 20;
    const cloneStart = track.querySelector("[data-carousel-clone='true']")?.offsetLeft;
    if (direction === -1 && track.scrollLeft < distance && cloneStart) track.scrollLeft = cloneStart;
    track.scrollBy({ left: direction * distance, behavior: "smooth" });
  };

  previous.addEventListener("click", () => {
    pauseTemporarily();
    move(-1);
  });
  next.addEventListener("click", () => {
    pauseTemporarily();
    move(1);
  });
  toggle.addEventListener("click", () => {
    userPaused = !userPaused;
    toggle.textContent = userPaused ? "▶" : "Ⅱ";
    toggle.setAttribute("aria-label", userPaused ? "Resume automatic review movement" : "Pause automatic review movement");
  });
  track.addEventListener("pointerdown", pauseTemporarily);

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let frameId = 0;
  let previousTime = window.performance.now();
  const animate = (time) => {
    const elapsed = Math.min(time - previousTime, 64);
    previousTime = time;
    const cloneStart = track.querySelector("[data-carousel-clone='true']")?.offsetLeft;
    if (!userPaused && !manuallyPaused && !document.hidden && cloneStart && track.scrollWidth > track.clientWidth) {
      track.scrollLeft += elapsed * 0.035;
      if (track.scrollLeft >= cloneStart) track.scrollLeft -= cloneStart;
    }
    frameId = window.requestAnimationFrame(animate);
  };
  frameId = window.requestAnimationFrame(animate);
  window.addEventListener("pagehide", () => {
    window.cancelAnimationFrame(frameId);
    window.clearTimeout(resumeTimer);
  }, { once: true });
}

startAtTop();
initMobileNavigation();
initClientGallery();
initDeviceShowcases();
initReviewCarousel();
initScrollScene();
