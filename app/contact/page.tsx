import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/contact/ContactForm";
import Accordion from "@/components/ui/Accordion";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/lib/data/services";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Melbourne Property Management and Services for a free quote on steam cleaning, strip and polish, and property maintenance.",
};

const faqs = [
  {
    question: "What services does MPM provide?",
    answer:
      "We provide professional steam cleaning, strip & polish, and property maintenance services across Melbourne for residential, rental and commercial properties.",
  },
  {
    question: "Where does MPM Services operate?",
    answer:
      "We operate throughout Melbourne and surrounding suburbs, including the CBD, Richmond, South Yarra, Fitzroy, St Kilda, Carlton and beyond.",
  },
  {
    question: "How do I request a quote?",
    answer:
      "Fill in the quote form on this page or call us directly on 0451 460 307. A few details about the property and the work required is all we need to get started.",
  },
  {
    question: "Can I send photos with my enquiry?",
    answer:
      "Yes — you can upload photos with your quote request. Photos help us understand the scope and give you a more accurate estimate without a site visit.",
  },
  {
    question: "Do you work with residential and commercial properties?",
    answer:
      "We do. Our services are tailored for homes, rentals, offices and commercial spaces, and we work regularly with landlords, agents and property managers.",
  },
  {
    question: "How soon will I hear back?",
    answer:
      "We aim to respond to every enquiry promptly during business hours. If your request is urgent, calling us directly is the fastest way to reach the team.",
  },
];

const steps = [
  {
    number: "01",
    title: "Tell us what you need",
    body: "Send a few details, photos or a quick call. We will ask the right questions.",
  },
  {
    number: "02",
    title: "We review your request",
    body: "We consider the property, surface types and scope before recommending a service.",
  },
  {
    number: "03",
    title: "We discuss the options",
    body: "You receive a clear, no-obligation quote and we answer any questions.",
  },
  {
    number: "04",
    title: "We arrange the next step",
    body: "Once you are happy, we lock in a time that suits you and get to work.",
  },
];

const checklist = [
  "Free, no-obligation quotes",
  "Local Melbourne team",
  "Residential & commercial",
  "Flexible scheduling",
];

const suburbs = [
  "Melbourne CBD",
  "Richmond",
  "South Yarra",
  "Fitzroy",
  "St Kilda",
  "Carlton",
];

export default function ContactPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/living-dining.webp"
            alt=""
            fill
            loading="eager"
            sizes="100vw"
            className={styles.cover}
          />
        </div>
        <div className={styles.heroOverlay} aria-hidden="true" />

        <div className={`container ${styles.heroInner}`}>
          <span className="eyebrow eyebrow--light">Get in touch</span>
          <h1 className={`display ${styles.title}`}>
            Let&apos;s talk about
            <br />
            <em>your property.</em>
          </h1>
          <p className={styles.heroLead}>
            Tell us what you need and we will help you find the right service. No
            pressure, no jargon — just a straightforward conversation.
          </p>

          <div className={styles.heroActions}>
            <Link href="#quote" className="btn btn-primary">
              Request a free quote
              <Icon name="arrow-right" size={15} />
            </Link>
            <a href="tel:+61451460307" className="btn btn-light">
              <Icon name="phone" size={15} />
              0451 460 307
            </a>
          </div>

          <ul className={styles.heroMeta}>
            <li>
              <Icon name="check" size={13} /> Free quotes
            </li>
            <li>
              <Icon name="map-pin" size={13} /> Melbourne wide
            </li>
            <li>
              <Icon name="clock" size={13} /> Mon – Sat
            </li>
          </ul>

          <span className={styles.heroStamp} aria-hidden="true">
            MPM / Contact
          </span>
        </div>
      </section>

      <section className={styles.railSection} aria-label="Contact details">
        <div className={`container ${styles.rail}`}>
          <a href="tel:+61451460307" className={styles.railCard}>
            <span className={styles.railIcon}>
              <Icon name="phone" size={18} />
            </span>
            <span className={styles.railBody}>
              <span className={styles.railLabel}>Call the team</span>
              <strong>0451 460 307</strong>
              <span>Mon – Sat · 7:00am – 6:00pm</span>
            </span>
            <Icon
              name="arrow-up-right"
              size={16}
              className={styles.railArrow}
            />
          </a>

          <a href="mailto:info@mpmservices.com.au" className={styles.railCard}>
            <span className={styles.railIcon}>
              <Icon name="mail" size={18} />
            </span>
            <span className={styles.railBody}>
              <span className={styles.railLabel}>Email us</span>
              <strong>info@mpmservices.com.au</strong>
              <span>We reply during business hours</span>
            </span>
            <Icon
              name="arrow-up-right"
              size={16}
              className={styles.railArrow}
            />
          </a>

          <a
            href="https://maps.google.com/?q=Melbourne+VIC+3000"
            target="_blank"
            rel="noreferrer"
            className={styles.railCard}
          >
            <span className={styles.railIcon}>
              <Icon name="map-pin" size={18} />
            </span>
            <span className={styles.railBody}>
              <span className={styles.railLabel}>Service area</span>
              <strong>Melbourne wide</strong>
              <span>CBD &amp; surrounding suburbs</span>
            </span>
            <Icon
              name="arrow-up-right"
              size={16}
              className={styles.railArrow}
            />
          </a>
        </div>
      </section>

      <section id="quote" className={`section ${styles.quote}`}>
        <div className="container">
          <div className={styles.quoteHead}>
            <div className={styles.quoteHeadCopy}>
              <span className="eyebrow">01 — Request a quote</span>
              <h2 className={`display ${styles.quoteTitle}`}>
                A few details
                <br />
                <em>is all it takes.</em>
              </h2>
            </div>
            <p className={`lead ${styles.quoteLead}`}>
              Provide some information about your property and the services you need.
              Our team will get back to you promptly to discuss how we can help.
            </p>
          </div>

          <div className={styles.quoteGrid}>
            <div className={styles.formWrap}>
              <ContactForm />
            </div>

            <aside className={styles.aside}>
              <div className={styles.asideCard}>
                <span className={styles.asideEyebrow}>What you can expect</span>
                <ul className={styles.checklist}>
                  {checklist.map((item) => (
                    <li key={item}>
                      <span className={styles.check}>
                        <Icon name="check" size={12} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className={styles.asideDivider} aria-hidden="true" />

                <div className={styles.asideHours}>
                  <Icon name="clock" size={16} />
                  <span>
                    <small>Opening hours</small>
                    <strong>Mon – Sat · 7:00am – 6:00pm</strong>
                  </span>
                </div>

                <div className={styles.asideFoot}>
                  <span>Follow the work</span>
                  <div className={styles.socials}>
                    <a
                      href="https://www.facebook.com/Melbournepropertymanagementandservices/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="MPM Services on Facebook"
                    >
                      <Icon name="facebook" size={15} />
                    </a>
                    <a
                      href="https://www.instagram.com/mpm_services"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="MPM Services on Instagram"
                    >
                      <Icon name="instagram" size={15} />
                    </a>
                  </div>
                </div>
              </div>

              <div className={`${styles.asideCard} ${styles.areaCard}`}>
                <span className={styles.asideEyebrow}>Service area</span>
                <h3>Based in Melbourne, servicing the suburbs.</h3>
                <ul className={styles.suburbs}>
                  {suburbs.map((suburb) => (
                    <li key={suburb}>{suburb}</li>
                  ))}
                </ul>
                <a
                  href="https://maps.google.com/?q=Melbourne+VIC+3000"
                  target="_blank"
                  rel="noreferrer"
                  className="link-arrow"
                >
                  Open in Google Maps
                  <Icon name="arrow-up-right" size={14} />
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className={`section ${styles.process}`}>
        <div className="container">
          <div className="section-head">
            <div className="section-head__copy">
              <span className="eyebrow">02 — What happens next</span>
              <h2 className={`display h2 ${styles.processTitle}`}>
                From enquiry to
                <br />
                <em>finished job.</em>
              </h2>
            </div>
            <div className="section-head__aside">
              <p className="lead">
                A simple, transparent process. You always know what is happening and
                what comes next.
              </p>
            </div>
          </div>

          <div className={styles.processGrid}>
            {steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 70}>
                <div className={styles.step}>
                  <span className={styles.stepNum}>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.faq}`}>
        <div className={`container ${styles.faqGrid}`}>
          <div className={styles.faqIntro}>
            <span className="eyebrow">03 — FAQs</span>
            <h2 className={`display h2 ${styles.faqTitle}`}>
              Questions,
              <br />
              <em>answered.</em>
            </h2>
            <p className="lead">
              Everything you need to know before getting in touch. If your question is
              not here, just ask.
            </p>
            <a href="tel:+61451460307" className="link-arrow">
              Call the team
              <Icon name="phone" size={14} />
            </a>
          </div>
          <Accordion items={faqs} />
        </div>
      </section>

      <section className={`section ${styles.services}`}>
        <div className="container">
          <div className="section-head">
            <div className="section-head__copy">
              <span className="eyebrow">04 — Explore services</span>
              <h2 className={`display h2 ${styles.servicesTitle}`}>
                Need help with
                <br />
                <em>your property?</em>
              </h2>
            </div>
            <Link href="/services" className="link-arrow">
              View all services
              <Icon name="arrow-right" size={15} />
            </Link>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <Link key={service.id} href={service.slug} className={styles.serviceCard}>
                <div className={styles.serviceImg}>
                  <Image
                    src={service.cardImage ?? service.heroImage}
                    alt={service.heroAlt}
                    fill
                    sizes="(max-width: 800px) 100vw, 33vw"
                    className={styles.cover}
                  />
                  <span className={styles.serviceArrow}>
                    <Icon name="arrow-up-right" size={17} />
                  </span>
                </div>
                <div className={styles.serviceBody}>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
