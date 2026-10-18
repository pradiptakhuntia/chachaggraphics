"use client";

import { useEffect, useRef, useState } from "react";
import type { Review } from "./homepage-content";

export default function ReviewCarousel({ reviews }: { reviews: Review[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const manualPausedRef = useRef(false);
  const userPausedRef = useRef(false);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const pauseTemporarily = () => {
    manualPausedRef.current = true;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      manualPausedRef.current = false;
      resumeTimerRef.current = null;
    }, 8000);
  };

  const move = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".review-card");
    const gap = 20;
    const distance = (card?.offsetWidth ?? 320) + gap;
    const cloneStart = track.querySelector<HTMLElement>("[data-carousel-clone='true']")?.offsetLeft;
    if (direction === -1 && track.scrollLeft < distance && cloneStart) track.scrollLeft = cloneStart;
    track.scrollBy({ left: direction * distance, behavior: "smooth" });
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let previousTime = window.performance.now();
    const animate = (time: number) => {
      const track = trackRef.current;
      const elapsed = Math.min(time - previousTime, 64);
      previousTime = time;

      if (track && !userPausedRef.current && !manualPausedRef.current && !document.hidden) {
        const cloneStart = track.querySelector<HTMLElement>("[data-carousel-clone='true']")?.offsetLeft;
        if (cloneStart && track.scrollWidth > track.clientWidth) {
          track.scrollLeft += elapsed * 0.035;
          if (track.scrollLeft >= cloneStart) track.scrollLeft -= cloneStart;
        }
      }
      frame = window.requestAnimationFrame(animate);
    };
    frame = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frame);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  return (
    <div
      className="review-carousel"
    >
      <div className="review-controls" aria-label="Review carousel controls">
        <button type="button" onClick={() => { pauseTemporarily(); move(-1); }} aria-label="Previous review">←</button>
        <button
          className="review-toggle"
          type="button"
          onClick={() => {
            userPausedRef.current = !userPausedRef.current;
            setIsPaused(userPausedRef.current);
          }}
          aria-label={isPaused ? "Resume automatic review movement" : "Pause automatic review movement"}
        >{isPaused ? "▶" : "Ⅱ"}</button>
        <button type="button" onClick={() => { pauseTemporarily(); move(1); }} aria-label="Next review">→</button>
      </div>
      <div className="review-track" ref={trackRef} role="region" aria-label="Customer reviews" onPointerDown={pauseTemporarily}>
          {reviews.map((review, index) => (
          <article className="review-card" key={`${review.name}-${index}`}>
            <div className="review-card-top">
              <span className="review-avatar" aria-hidden="true">{review.name.charAt(0)}</span>
              <div><strong>{review.name}</strong><small>{review.meta}</small></div>
            </div>
            <span className="review-stars" aria-label="Five out of five stars">★★★★★</span>
            <blockquote>{review.text}</blockquote>
          </article>
        ))}
        {reviews.map((review, index) => (
          <article className="review-card" data-carousel-clone="true" aria-hidden="true" key={`clone-${review.name}-${index}`}>
            <div className="review-card-top">
              <span className="review-avatar" aria-hidden="true">{review.name.charAt(0)}</span>
              <div><strong>{review.name}</strong><small>{review.meta}</small></div>
            </div>
            <span className="review-stars" aria-hidden="true">★★★★★</span>
            <blockquote>{review.text}</blockquote>
          </article>
        ))}
      </div>
      <div className="review-actions">
        <a className="review-all-link" href="https://maps.app.goo.gl/3rvcvFrTMQtirerm7" target="_blank" rel="noreferrer">
          Read all Google reviews <span aria-hidden="true">↗</span>
        </a>
        <a className="review-write-link" href="https://g.page/r/CQ4UD-myi1PyEAI/review" target="_blank" rel="noreferrer">
          Leave a Google review <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  );
}
