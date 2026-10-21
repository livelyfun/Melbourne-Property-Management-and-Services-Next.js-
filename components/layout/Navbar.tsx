"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandMark from "./BrandMark";
import Icon from "@/components/ui/Icon";
import styles from "./Navbar.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [openFor, setOpenFor] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const open = openFor === pathname;

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = Math.max(0, window.scrollY);
      setScrolled(y > 12);

      if (Math.abs(y - lastY) > 4) {
        setHidden(y > lastY && y > 140);
        lastY = y;
      }

      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenFor(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${
          hidden && !open ? styles.hidden : ""
        }`}
        inert={hidden && !open}
      >
        <div className={`container ${styles.inner}`}>
          <BrandMark light />

          <nav className={styles.nav} aria-label="Main navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${isActive(link.href) ? styles.active : ""}`}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={styles.actions}>
            <a href="tel:+61451460307" className={styles.phone}>
              <Icon name="phone" size={16} />
              <span>0451 460 307</span>
            </a>
            <Link href="/contact" className={`btn btn-primary btn-sm ${styles.cta}`}>
              Get a quote
              <Icon name="arrow-right" size={15} />
            </Link>

            <button
              type="button"
              className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}
              onClick={() => {
                setOpenFor(open ? null : pathname);
                setHidden(false);
              }}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`${styles.mobile} ${open ? styles.mobileOpen : ""}`}
        aria-hidden={!open}
      >
        <div className={styles.mobileInner}>
          <nav className={styles.mobileNav} aria-label="Mobile navigation">
            {links.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.mobileLink} ${isActive(link.href) ? styles.mobileActive : ""}`}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpenFor(null)}
              >
                <span className={styles.mobileIndex}>0{index + 1}</span>
                {link.label}
                <Icon name="arrow-up-right" size={22} />
              </Link>
            ))}
          </nav>

          <div className={styles.mobileFoot}>
            <div className={styles.mobileContact}>
              <a href="tel:+61451460307" className={styles.mobileContactItem}>
                <span className={styles.mobileContactIcon}>
                  <Icon name="phone" size={17} />
                </span>
                <span>
                  <small>Call us</small>
                  0451 460 307
                </span>
              </a>
              <a href="mailto:info@mpmservices.com.au" className={styles.mobileContactItem}>
                <span className={styles.mobileContactIcon}>
                  <Icon name="mail" size={17} />
                </span>
                <span>
                  <small>Email us</small>
                  info@mpmservices.com.au
                </span>
              </a>
            </div>

            <Link
              href="/contact"
              className={`btn btn-primary ${styles.mobileCta}`}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpenFor(null)}
            >
              Request a free quote
              <Icon name="arrow-right" size={16} />
            </Link>

            <div className={styles.mobileSocials}>
              <a
                href="https://www.facebook.com/Melbournepropertymanagementandservices/"
                target="_blank"
                rel="noreferrer"
                aria-label="MPM Services on Facebook"
              >
                <Icon name="facebook" size={18} />
              </a>
              <a
                href="https://www.instagram.com/mpm_services"
                target="_blank"
                rel="noreferrer"
                aria-label="MPM Services on Instagram"
              >
                <Icon name="instagram" size={18} />
              </a>
              <span>Melbourne, VIC</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
