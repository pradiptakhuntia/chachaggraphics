"use client";

import { useRef } from "react";

export default function MobileNavigation({ quotationUrl }) {
  const menuRef = useRef(null);

  const closeMenu = () => {
    if (menuRef.current) menuRef.current.open = false;
  };

  return (
    <details className="mobile-nav" ref={menuRef}>
      <summary aria-label="Open navigation">
        <span className="mobile-menu-icon" aria-hidden="true"><i /><i /><i /></span>
      </summary>
      <nav aria-label="Mobile navigation">
        <a href="#work" onClick={closeMenu}>Work</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#about" onClick={closeMenu}>About Us</a>
        <a href="#order-online" onClick={closeMenu}>Order online</a>
        <a href="#location" onClick={closeMenu}>Location</a>
        <a href={quotationUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>Request a quotation</a>
      </nav>
    </details>
  );
}
