import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Image src="/images/website_logo.svg" alt="MPM Services Logo" width={160} height={40} style={{height:'40px',width:'auto',marginBottom:'1rem'}} />
          <p>Professional property services across Melbourne — steam cleaning, strip & polish, and property maintenance.</p>
          <div className={styles.socials}>
            <a href="https://www.facebook.com/Melbournepropertymanagementandservices/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <Image src="/images/facebook.svg" alt="Facebook" width={24} height={24} />
            </a>
            <a href="https://www.instagram.com/mpm_services" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Image src="/images/instagram.svg" alt="Instagram" width={24} height={24} />
            </a>
          </div>
        </div>

        <div className={styles.col}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/reviews">Reviews</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Services</h4>
          <ul>
            <li><Link href="/services/steam-cleaning">Steam Cleaning</Link></li>
            <li><Link href="/services/strip-and-polish">Strip & Polish</Link></li>
            <li><Link href="/services/property-maintenance">Property Maintenance</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:+61451460307">+61 451 460 307</a></li>
            <li><a href="mailto:info@mpmservices.com.au">info@mpmservices.com.au</a></li>
            <li>Melbourne, VIC 3000</li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Melbourne Property Management and Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

