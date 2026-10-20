"use client";

import { useEffect, useRef } from "react";

export default function ClientGallery({ clients }) {
  const sectionRef = useRef(null);
  const wallRef = useRef(null);
  const trackRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const wall = wallRef.current;
    const track = trackRef.current;
    const progressBar = progressRef.current;
    if (!section || !wall || !track || !progressBar) return;

    let frameId = 0;

    const update = () => {
      frameId = 0;
      const sectionRect = section.getBoundingClientRect();
      const stickyTop = 82;
      const travel = Math.max(1, section.offsetHeight - wall.offsetHeight - 48);
      const progress = Math.min(1, Math.max(0, (stickyTop - sectionRect.top) / travel));
      const wallWidth = wall.clientWidth;
      const trackWidth = track.scrollWidth;
      const edge = Math.min(64, wallWidth * 0.08);
      const startX = edge;
      const endX = Math.min(startX, wallWidth - trackWidth - edge);
      const x = startX + (endX - startX) * progress;

      track.style.transform = `translate3d(${x}px, -50%, 0)`;
      progressBar.style.transform = `scaleX(${progress})`;

      const wallCenter = wallWidth / 2;
      track.querySelectorAll(".client-frame").forEach((frame, index) => {
        const center = x + frame.offsetLeft + frame.offsetWidth / 2;
        const delta = center - wallCenter;
        const distance = Math.min(1, Math.abs(delta) / Math.max(1, wallWidth * 0.58));
        const scale = 1.08 - distance * 0.2;
        const rotate = Math.max(-12, Math.min(12, (-delta / Math.max(1, wallWidth)) * 24));
        const verticalOffset = index % 3 === 0 ? -34 : index % 3 === 1 ? 26 : -4;

        frame.style.transform = `translateY(${verticalOffset}px) perspective(900px) rotateY(${rotate}deg) scale(${scale})`;
        frame.style.opacity = String(1 - distance * 0.5);
        frame.style.filter = `saturate(${1 - distance * 0.28}) brightness(${1.08 - distance * 0.25})`;
        frame.style.zIndex = String(Math.round((1 - distance) * 10));
      });
    };

    const requestUpdate = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section className="client-section" aria-labelledby="client-title" ref={sectionRef}>
      <div className="client-heading">
        <div>
          <p className="section-kicker" id="client-title">Wall of trust</p>
          <h2>Organizations that chose our work.</h2>
        </div>
        <p>Scroll through selected government, institutional and commercial clients.</p>
      </div>
      <div className="client-wall-scroll">
        <div className="client-wall" aria-label="Cinematic scroll-controlled client gallery" ref={wallRef}>
          <div className="client-wall-ui" aria-hidden="true">
            <span>13 client relationships</span>
            <span>Scroll to walk through the gallery&nbsp; →</span>
          </div>
          <div className="client-spotlight" aria-hidden="true" />
          <div className="client-track" ref={trackRef}>
            {clients.map(([name, logo]) => (
              <article className="client-frame" key={name}>
                <div className="client-frame-face">
                  <img src={logo} alt={name} loading="lazy" />
                  <p>{name}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="client-progress" aria-hidden="true"><i ref={progressRef} /></div>
        </div>
      </div>
    </section>
  );
}
