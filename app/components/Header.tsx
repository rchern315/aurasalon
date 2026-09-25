"use client";

import Link from "next/link";
import { useState } from "react";

const bookingUrl =
  "https://online-booking.salonbiz.com/olb/web_booking.home?p_mobile=y&p_start=1&theme=1234&wbid=c1454t201505041904p3Ay8iJ843mrN7zrx6563";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="Aura Salon home" onClick={closeMenu}>
          <span className="brand-word">AURA</span>
          <span className="brand-hair">HAIR SALON</span>
          <span className="brand-leaf" aria-hidden="true" />
          <span className="brand-sub">AVEDA SALON</span>
        </Link>

        <nav className="main-nav" aria-label="Primary navigation">
          <Link href="/services">Services</Link>
          <Link href="/aveda">Aveda</Link>
          <Link href="/team">Our Team</Link>

          <div className="nav-dropdown">
            <Link className="nav-dropdown-trigger" href="/about">
              About
              <span className="nav-caret" aria-hidden="true">▾</span>
            </Link>
            <div className="nav-submenu" aria-label="About submenu">
              <Link href="/about/policies">Policies</Link>
            </div>
          </div>

          <Link href="/contact">Contact</Link>
        </nav>

        <a className="button button-outline header-book" href={bookingUrl}>
          Book Appointment
        </a>

        <button
          className={`mobile-menu-toggle${menuOpen ? " is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`mobile-nav${menuOpen ? " is-open" : ""}`}
      >
        <nav className="shell mobile-nav-inner" aria-label="Mobile navigation">
          <Link href="/services" onClick={closeMenu}>Services</Link>
          <Link href="/aveda" onClick={closeMenu}>Aveda</Link>
          <Link href="/team" onClick={closeMenu}>Our Team</Link>
          <Link href="/about" onClick={closeMenu}>About</Link>
          <Link className="mobile-sub-link" href="/about/policies" onClick={closeMenu}>Policies</Link>
          <Link href="/contact" onClick={closeMenu}>Contact</Link>
          <a className="button button-primary mobile-book" href={bookingUrl} onClick={closeMenu}>
            Book Appointment
          </a>
        </nav>
      </div>
    </header>
  );
}
