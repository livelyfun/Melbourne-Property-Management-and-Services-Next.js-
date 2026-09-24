import Image from "next/image";
import Link from "next/link";
import styles from "../service-detail.module.css";

export const metadata = {
  title: "Property Maintenance Melbourne | MPM Services",
  description: "Professional property maintenance services for residential and commercial properties in Melbourne."
};

export default function PropertyMaintenance() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroImg}>
          <Image src="/gallery/29662461_-2087774927903406-_186873304590838189_o.jpg" alt="Property maintenance Melbourne" fill className={styles.img} priority />
          <div className={styles.overlay} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.eyebrow}>MPM SERVICES</span>
          <h1>Property Maintenance</h1>
          <p>Practical, professional property maintenance that keeps your spaces looking and functioning at their best.</p>
          <Link href="/contact" className={styles.cta}>Get a Free Quote</Link>
        </div>
      </section>

      <section className={styles.detail}>
        <div className={`container ${styles.detailGrid}`}>
          <div className={styles.textCol}>
            <h2>Keeping Melbourne Properties in Top Shape</h2>
            <p>Our property maintenance service is designed to help property owners, landlords, and real estate agents keep properties clean, presentable, and properly maintained — without the hassle.</p>
            <p>Whether you need assistance between tenancies, ongoing scheduled maintenance, or support after a renovation, our team is experienced in delivering reliable, quality property care.</p>
            <h3 style={{marginTop:'2rem'}}>What We Help With</h3>
            <ul className={styles.list}>
              <li>General property maintenance</li>
              <li>Pre & post tenancy preparation</li>
              <li>Property presentation</li>
              <li>Landlord & agent support</li>
              <li>Residential & commercial properties</li>
            </ul>
            <div className={styles.ctas}>
              <Link href="/contact" className={styles.primary}>Request a Quote</Link>
              <Link href="/services" className={styles.secondary}>View All Services</Link>
            </div>
          </div>
          <div className={styles.imgCol}>
            <div className={styles.sideImg}>
              <Image src="/gallery/330x330-4-.png" alt="Property maintenance Melbourne" fill className={styles.img} />
            </div>
            <div className={styles.sideImg} style={{marginTop:'1rem'}}>
              <Image src="/gallery/330x330-5-.png" alt="Property care" fill className={styles.img} />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta2}>
        <div className="container" style={{textAlign:'center'}}>
          <h2>Looking for Property Maintenance Support?</h2>
          <p>Get in touch with MPM Services for a free, no-obligation quote.</p>
          <Link href="/contact" className={styles.primary} style={{marginTop:'1.5rem',display:'inline-block'}}>Get in Touch</Link>
        </div>
      </section>
    </main>
  );
}
