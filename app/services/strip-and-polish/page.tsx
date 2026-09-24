import Image from "next/image";
import Link from "next/link";
import styles from "../service-detail.module.css";

export const metadata = {
  title: "Strip & Polish Melbourne | MPM Services",
  description: "Professional strip and polish services for hard floors across Melbourne."
};

export default function StripAndPolish() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroImg}>
          <Image src="/gallery/33964491_-2170416142972617-_6091564240609476608_o.jpg" alt="Strip and polish Melbourne" fill className={styles.img} priority />
          <div className={styles.overlay} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.eyebrow}>MPM SERVICES</span>
          <h1>Strip & Polish</h1>
          <p>Restore and protect your hard flooring with a professional strip and polish treatment.</p>
          <Link href="/contact" className={styles.cta}>Get a Free Quote</Link>
        </div>
      </section>

      <section className={styles.detail}>
        <div className={`container ${styles.detailGrid}`}>
          <div className={styles.textCol}>
            <h2>Restore the Finish of Your Floors</h2>
            <p>Strip and polish is a specialist hard floor treatment that removes old, worn coatings from the floor surface and replaces them with a fresh, protective seal.</p>
            <p>The result is a cleaner, brighter floor with an improved finish — ideal for rental properties, commercial spaces, and any property with high-traffic hard floors.</p>
            <h3 style={{marginTop:'2rem'}}>Floor Types We Work With</h3>
            <ul className={styles.list}>
              <li>Vinyl & vinyl composite tiles</li>
              <li>Timber floors</li>
              <li>Ceramic & porcelain tiles</li>
              <li>Terrazzo & polished concrete</li>
              <li>Commercial & residential</li>
            </ul>
            <div className={styles.ctas}>
              <Link href="/contact" className={styles.primary}>Request a Quote</Link>
              <Link href="/services" className={styles.secondary}>View All Services</Link>
            </div>
          </div>
          <div className={styles.imgCol}>
            <div className={styles.sideImg}>
              <Image src="/gallery/330x330-2-.png" alt="Strip and polish result" fill className={styles.img} />
            </div>
            <div className={styles.sideImg} style={{marginTop:'1rem'}}>
              <Image src="/gallery/330x330-3-.png" alt="Polished floor Melbourne" fill className={styles.img} />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta2}>
        <div className="container" style={{textAlign:'center'}}>
          <h2>Ready to Restore Your Floors?</h2>
          <p>Contact MPM Services for a free, no-obligation quote.</p>
          <Link href="/contact" className={styles.primary} style={{marginTop:'1.5rem',display:'inline-block'}}>Get in Touch</Link>
        </div>
      </section>
    </main>
  );
}
