import Link from "next/link";
import BrandMark from "./BrandMark";
import Icon from "@/components/ui/Icon";
import styles from "./Footer.module.css";

const services = [
  { href: "/services/steam-cleaning", label: "Steam Cleaning" },
  { href: "/services/strip-and-polish", label: "Strip & Polish" },
  { href: "/services/property-maintenance", label: "Property Maintenance" },
];

const company = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.glow} aria-hidden="true" />

      <div className={`container ${styles.ctaRow}`}>
        <span className="eyebrow eyebrow--light">Melbourne property care</span>
        <Link href="/contact" className={styles.ctaLine}>
          Let&apos;s care for your property
          <Icon name="arrow-up-right" size={26} />
        </Link>
      </div>

      <div className={`container ${styles.top}`}>
        <div className={styles.brandCol}>
          <BrandMark light />
          <p className={styles.brandCopy}>
            Professional property services across Melbourne — steam cleaning, strip &amp;
            polish, and property maintenance for homes, rentals and commercial spaces.
          </p>

          <div className={styles.socials}>
            <a
              href="https://www.facebook.com/Melbournepropertymanagementandservices/"
              target="_blank"
              rel="noreferrer"
              aria-label="MPM Services on Facebook"
            >
              <Icon name="facebook" size={17} />
            </a>
            <a
              href="https://www.instagram.com/mpm_services"
              target="_blank"
              rel="noreferrer"
              aria-label="MPM Services on Instagram"
            >
              <Icon name="instagram" size={17} />
            </a>
          </div>

          <span className={styles.badge}>
            <Icon name="map-pin" size={13} />
            Melbourne &amp; surrounding suburbs
          </span>
        </div>

        <div className={styles.col}>
          <h4>Services</h4>
          <ul>
            {services.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Company</h4>
          <ul>
            {company.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={`${styles.col} ${styles.contactCol}`}>
          <h4>Get in touch</h4>
          <ul className={styles.contactList}>
            <li>
              <a href="tel:+61451460307">
                <span className={styles.contactIcon}>
                  <Icon name="phone" size={14} />
                </span>
                <span>
                  <small>Phone</small>
                  0451 460 307
                </span>
              </a>
            </li>
            <li>
              <a href="mailto:info@mpmservices.com.au">
                <span className={styles.contactIcon}>
                  <Icon name="mail" size={14} />
                </span>
                <span>
                  <small>Email</small>
                  info@mpmservices.com.au
                </span>
              </a>
            </li>
            <li>
              <span className={styles.address}>
                <span className={styles.contactIcon}>
                  <Icon name="map-pin" size={14} />
                </span>
                <span>
                  <small>Location</small>
                  Melbourne, VIC 3000
                </span>
              </span>
            </li>
          </ul>

          <div className={styles.hours}>
            <Icon name="clock" size={14} />
            <span>Mon – Sat</span>
            <strong>7:00am – 6:00pm</strong>
          </div>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>
          &copy; {new Date().getFullYear()} Melbourne Property Management and Services.
          All rights reserved.
        </p>
        <p className={styles.bottomNote}>Locally owned · Fully insured · Free quotes</p>
        <a href="#main" className={styles.backTop}>
          Back to top
          <Icon name="arrow-up-right" size={13} />
        </a>
      </div>
    </footer>
  );
}
