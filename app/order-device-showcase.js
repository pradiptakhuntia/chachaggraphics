"use client";

import { useEffect, useRef } from "react";

export default function OrderDeviceShowcase({ device, image, alt }) {
  const stageRef = useRef(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = stage.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      const stageCenter = rect.top + rect.height / 2;
      const viewportCenter = viewport / 2;
      const signedDistance = Math.max(-1, Math.min(1, (stageCenter - viewportCenter) / (viewport * 0.72)));
      const proximity = 1 - Math.abs(signedDistance);
      const eased = 1 - Math.pow(1 - proximity, 2.4);
      const direction = device === "laptop" ? -1 : 1;
      const minimumScale = 0.72;

      stage.style.setProperty("--device-lift", `${signedDistance * 74}px`);
      stage.style.setProperty("--device-tilt-x", `${signedDistance * 14}deg`);
      stage.style.setProperty("--device-tilt-y", `${direction * signedDistance * 38}deg`);
      stage.style.setProperty("--device-rotate-z", `${direction * signedDistance * 4}deg`);
      stage.style.setProperty("--device-scale", `${minimumScale + eased * (1.02 - minimumScale)}`);
      stage.style.setProperty("--device-opacity", `${0.48 + eased * 0.52}`);
      stage.style.setProperty("--screen-shift", `${signedDistance * 3}%`);
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [device]);

  return (
    <div className={`order-device-stage order-device-stage-${device}`} ref={stageRef}>
      <div className="order-device-orbit" aria-hidden="true" />
      <div className="order-device-motion">
        {device === "laptop" ? (
          <div className="device-laptop">
            <div className="device-laptop-screen">
              <span className="device-camera" aria-hidden="true" />
              <img src={image} alt={alt} width="1280" height="800" />
              <span className="device-screen-glare" aria-hidden="true" />
            </div>
            <div className="device-laptop-base" aria-hidden="true">
              <div className="device-laptop-keyboard">
                {Array.from({ length: 60 }, (_, index) => <i key={index} />)}
              </div>
              <span className="device-laptop-trackpad" />
              <span className="device-laptop-lip" />
            </div>
          </div>
        ) : (
          <div className="device-phone">
            <span className="device-phone-button device-phone-button-one" aria-hidden="true" />
            <span className="device-phone-button device-phone-button-two" aria-hidden="true" />
            <span className="device-phone-button device-phone-button-three" aria-hidden="true" />
            <span className="device-phone-island" aria-hidden="true" />
            <img src={image} alt={alt} width="390" height="844" />
            <span className="device-screen-glare" aria-hidden="true" />
          </div>
        )}
      </div>
      <p className="order-device-cue"><span aria-hidden="true" /> Scroll to rotate</p>
    </div>
  );
}
