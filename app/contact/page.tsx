import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/contact/ContactForm";
import styles from "./contact.module.css";


export const metadata = {
  title: "Contact MPM Services | Melbourne Property Services",
  description: "Get in touch with Melbourne Property Management and Services for a free quote on steam cleaning, strip and polish, and property maintenance."
};

export default function ContactPage() {
  return (
    <main className={styles.main}>
      {/* 1. CONTACT HERO */}
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.eyebrow}>GET IN TOUCH</span>
          <h1 className={styles.headline}>Let's Talk About Your Property</h1>
          <p className={styles.heroCopy}>Tell us what you need and we'll help you find the right service for your property.</p>
        </div>
      </section>

      {/* 2. CONTACT INFORMATION */}
      <section className={styles.infoSection}>
        <div className={`container ${styles.infoGrid}`}>
          <div className={styles.infoCard}>
            <h3>Phone</h3>
            <p>+61 451 460 307</p>
            <a href="tel:+61451460307" className="btn btn-secondary">Call MPM Services</a>
          </div>
          <div className={styles.infoCard}>
            <h3>Email</h3>
            <p>info@mpmservices.com.au</p>
            <a href="mailto:info@mpmservices.com.au" className="btn btn-secondary">Email Us</a>
          </div>
          <div className={styles.infoCard}>
            <h3>Location</h3>
            <p>Melbourne, VIC<br/>Australia 3000</p>
          </div>
          <div className={styles.infoCard}>
            <h3>Follow Us</h3>
            <div className={styles.socialLinks}>
              <a href="https://www.facebook.com/Melbournepropertymanagementandservices/" target="_blank" rel="noreferrer" aria-label="Facebook" className={styles.socialIcon}>
                <Image src="/images/facebook.svg" alt="Facebook" width={28} height={28} />
                <span>Facebook</span>
              </a>
              <a href="https://www.instagram.com/mpm_services" target="_blank" rel="noreferrer" aria-label="Instagram" className={styles.socialIcon}>
                <Image src="/images/instagram.svg" alt="Instagram" width={28} height={28} />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MAIN QUOTE SECTION */}
      <section id="quote" className={styles.quoteSection}>
        <div className={`container ${styles.quoteGrid}`}>
          <div className={styles.quoteEditorial}>
            <h2>Request a Quote</h2>
            <p>Provide us with some details about your property and the services you require, and our team will get back to you promptly to discuss how we can help.</p>
            <div className={styles.mapWrapper}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509198!2d144.95605!3d-37.81714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sMelbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sau!4v1693000000000!5m2!1sen!2sau"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '10px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MPM Services — Melbourne, VIC"
              />
            </div>
          </div>
          <div className={styles.quoteFormWrapper}>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* 5. WHAT TO EXPECT SECTION */}
      <section className={styles.processSection}>
        <div className="container">
          <h2 className="text-center" style={{marginBottom: '3rem'}}>What Happens Next?</h2>
          <div className={styles.processGrid}>
            <div className={styles.processStep}>
              <span className={styles.stepNum}>01</span>
              <h4>Tell us what you need</h4>
            </div>
            <div className={styles.processStep}>
              <span className={styles.stepNum}>02</span>
              <h4>We'll review your request</h4>
            </div>
            <div className={styles.processStep}>
              <span className={styles.stepNum}>03</span>
              <h4>We'll discuss the right service</h4>
            </div>
            <div className={styles.processStep}>
              <span className={styles.stepNum}>04</span>
              <h4>We'll arrange the next step</h4>
            </div>
          </div>
        </div>
      </section>

      {/* 6. THREE SERVICE QUICK LINKS */}
      <section className={styles.servicesSection}>
        <div className="container">
          <h2 className="text-center" style={{marginBottom: '3rem'}}>Need help with your property?</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceImage}>
                <Image src="/gallery/30424815_-2108796815801217-_1635916427438308022_o.jpg" alt="Steam Cleaning Melbourne" fill className={styles.imgCover} />
              </div>
              <h3>Steam Cleaning</h3>
              <p>Refresh carpets, upholstery and suitable surfaces.</p>
              <Link href="/services/steam-cleaning" className="btn btn-secondary">Explore Steam Cleaning</Link>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceImage}>
                <Image src="/gallery/33964491_-2170416142972617-_6091564240609476608_o.jpg" alt="Strip and Polish Melbourne" fill className={styles.imgCover} />
              </div>
              <h3>Strip & Polish</h3>
              <p>Give hard flooring surfaces a cleaner, polished finish.</p>
              <Link href="/services/strip-and-polish" className="btn btn-secondary">Explore Strip & Polish</Link>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceImage}>
                <Image src="/gallery/29662461_-2087774927903406-_186873304590838189_o.jpg" alt="Property Maintenance Melbourne" fill className={styles.imgCover} />
              </div>
              <h3>Property Maintenance</h3>
              <p>Practical property-care support for your space.</p>
              <Link href="/services/property-maintenance" className="btn btn-secondary">Explore Property Maintenance</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className={styles.faqSection}>
        <div className={`container ${styles.faqContainer}`}>
          <h2 className="text-center" style={{marginBottom: '2rem'}}>Frequently Asked Questions</h2>
          <div className={styles.faqItem}>
            <h4>What services does MPM provide?</h4>
            <p>We provide professional Steam Cleaning, Strip & Polish, and Property Maintenance services across Melbourne.</p>
          </div>
          <div className={styles.faqItem}>
            <h4>Where does MPM Services operate?</h4>
            <p>We operate throughout Melbourne, VIC, providing services to residential and commercial properties.</p>
          </div>
          <div className={styles.faqItem}>
            <h4>How do I request a quote?</h4>
            <p>Simply fill out the contact form on this page or call us directly at +61 451 460 307.</p>
          </div>
          <div className={styles.faqItem}>
            <h4>Can I send photos with my enquiry?</h4>
            <p>Yes, you can upload optional photos when submitting a quote request to help us understand your needs better.</p>
          </div>
          <div className={styles.faqItem}>
            <h4>Do you work with residential and commercial properties?</h4>
            <p>Yes, our services are tailored for homes, rentals, offices, and commercial properties.</p>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBackground}>
          <Image src="/gallery/33814017_-2170416399639258-_8398402273486569472_o.jpg" alt="Ready to look after your property?" fill className={styles.imgCover} style={{ opacity: 0.2 }} />
        </div>
        <div className={`container ${styles.ctaContent}`}>
          <h2>Ready to Look After Your Property?</h2>
          <p>Tell us what you need and let's start the conversation.</p>
          <div className={styles.ctaActions}>
            <Link href="#quote" className="btn btn-primary">Get a Free Quote</Link>
            <a href="tel:+61451460307" className="btn btn-secondary">Call +61 451 460 307</a>
          </div>
        </div>
      </section>

    </main>
  );
}
