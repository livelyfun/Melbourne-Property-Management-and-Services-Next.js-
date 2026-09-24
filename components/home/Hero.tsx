import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.heroContainer}`}>
        
        {/* Left Column: Content */}
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Melbourne Property Services</span>
          <h1 className={styles.headline}>
            Professional Care for Cleaner, Better-Maintained Properties.
          </h1>
          <p className={styles.supportingCopy}>
            From steam cleaning and floor restoration to ongoing property maintenance, MPM Services helps keep Melbourne properties clean, polished and looked after.
          </p>
          
          <div className={styles.ctaGroup}>
            <Link href="/contact" className="btn btn-primary">
              Get a Free Quote
            </Link>
            <a href="tel:+61451460307" className={`btn btn-secondary ${styles.callBtn}`}>
              Call +61 451 460 307
            </a>
          </div>
          
          <div className={styles.serviceStrip}>
            <span>Steam Cleaning</span>
            <span className={styles.dot}>&bull;</span>
            <span>Strip & Polish</span>
            <span className={styles.dot}>&bull;</span>
            <span>Property Maintenance</span>
          </div>
        </div>

        {/* Right Column: Visual */}
        <div className={styles.heroVisual}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/hero-demo.jpg"
              alt="Professional property cleaning and maintenance in a modern interior"
              fill
              className={styles.heroImage}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            
            <div className={styles.floatingCard}>
              <strong>MPM Services</strong>
              <span>Melbourne, VIC</span>
              <span className={styles.floatingTag}>Professional Property Care</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
