"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link href="/" className="logo-link">
          <Image
            src="/images/website_logo.svg"
            alt="Melbourne Property Management and Services"
            width={260}
            height={60}
            priority
            style={{ height: '60px', width: 'auto' }}
          />
        </Link>

        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="nav-actions">
          <Link href="/contact" className="cta-btn">Get a Quote</Link>
        </div>

        <button className="burger" aria-label="Toggle menu" onClick={() => setOpen(o => !o)}>
          <span /><span /><span />
        </button>
      </div>

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <Link href="/" onClick={() => setOpen(false)}>Home</Link>
        <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
        <Link href="/gallery" onClick={() => setOpen(false)}>Gallery</Link>
        <Link href="/reviews" onClick={() => setOpen(false)}>Reviews</Link>
        <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        <Link href="/contact" className="cta-btn" onClick={() => setOpen(false)} style={{marginTop:'0.5rem'}}>Get a Quote</Link>
      </div>
    </header>
  );
}

