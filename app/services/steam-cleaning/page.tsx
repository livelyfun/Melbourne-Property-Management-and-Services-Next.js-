import Image from "next/image";
import Link from "next/link";
import styles from "../service-detail.module.css";

export const metadata = {
  title: "Steam Cleaning Melbourne | MPM Services",
  description: "Professional steam cleaning for carpets, upholstery, and surfaces across Melbourne."
};

export default function SteamCleaning() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroImg}>
          <Image src="/gallery/30424815_-2108796815801217-_1635916427438308022_o.jpg" alt="Steam cleaning Melbourne" fill className={styles.img} priority />
          <div className={styles.overlay} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.eyebrow}>MPM SERVICES</span>
          <h1>Steam Cleaning</h1>
          <p>Deep, professional steam cleaning designed to refresh high-use surfaces across Melbourne properties.</p>
          <Link href="/contact" className={styles.cta}>Get a Free Quote</Link>
        </div>
      </section>

      <section className={styles.detail}>
        <div className={`container ${styles.detailGrid}`}>
          <div className={styles.textCol}>
            <h2>What is Steam Cleaning?</h2>
            <p>Steam cleaning uses high-temperature steam to deep-clean carpets, upholstery, and other compatible surfaces — removing embedded dirt, allergens, and bacteria without harsh chemicals.</p>
            <p>It is an ideal service for properties undergoing tenancy changeovers, regular maintenance cleans, or post-renovation refreshes.</p>
            <h3 style={{marginTop:'2rem'}}>What We Clean</h3>
            <ul className={styles.list}>
              <li>Carpets</li>
              <li>Upholstery & sofas</li>
              <li>Dining chairs</li>
              <li>Hard floors (compatible types)</li>
              <li>Residential, rental & commercial</li>
            </ul>
            <div className={styles.ctas}>
              <Link href="/contact" className={styles.primary}>Request a Quote</Link>
              <Link href="/services" className={styles.secondary}>View All Services</Link>
            </div>
          </div>
          <div className={styles.imgCol}>
            <div className={styles.sideImg}>
              <Image src="/gallery/330x330.png" alt="Steam cleaning results" fill className={styles.img} />
            </div>
            <div className={styles.sideImg} style={{marginTop:'1rem'}}>
              <Image src="/gallery/330x330-1-.png" alt="Professional steam cleaning" fill className={styles.img} />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta2}>
        <div className="container" style={{textAlign:'center'}}>
          <h2>Ready to Book a Steam Clean?</h2>
          <p>Contact MPM Services for a free quote on your property.</p>
          <Link href="/contact" className={styles.primary} style={{marginTop:'1.5rem',display:'inline-block'}}>Get in Touch</Link>
        </div>
      </section>
    </main>
  );
}
