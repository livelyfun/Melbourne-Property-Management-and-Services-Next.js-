import Image from "next/image";
import Link from "next/link";
import styles from "./ContactCTA.module.css";

export default function ContactCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.bg}>
        <Image src="/gallery/33814017_-2170416399639258-_8398402273486569472_o.jpg" alt="" fill className={styles.bgImg} />
        <div className={styles.overlay} />
      </div>
      <div className={`container ${styles.content}`}>
        <h2 className={styles.heading}>Ready to Get Started?</h2>
        <p className={styles.sub}>Tell us about your property and we'll help you find the right service.</p>
        <div className={styles.ctas}>
          <Link href="/contact" className={styles.primary}>Request a Quote</Link>
          <a href="tel:+61451460307" className={styles.secondary}>+61 451 460 307</a>
        </div>
      </div>
    </section>
  );
}

