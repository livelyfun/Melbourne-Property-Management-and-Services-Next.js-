import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import Accordion from "@/components/ui/Accordion";
import { services, type Service } from "@/lib/data/services";
import styles from "./ServiceDetailPage.module.css";

const highlightIcons = ["sparkles", "shield", "clock", "award"] as const;

interface ServiceDetailPageProps {
  service: Service;
}

export default function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const related = services.filter((item) => item.id !== service.id);
  const index = services.findIndex((item) => item.id === service.id) + 1;

  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroImg}>
          <Image
            src={service.detailHeroImage ?? service.heroImage}
            alt={service.detailHeroAlt ?? service.heroAlt}
            fill
            loading="eager"
            sizes="100vw"
            className={styles.cover}
          />
          <div className={styles.overlay} aria-hidden="true" />
        </div>

        <div className={`container ${styles.crumbWrap}`}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/services">Services</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{service.title}</span>
          </nav>
        </div>

        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <span className="eyebrow eyebrow--light">
              Service 0{index} · {service.eyebrow}
            </span>
            <h1 className={`display ${styles.heroTitle}`}>{service.title}</h1>
            <p className={styles.heroCopy}>{service.summary}</p>

            <div className={styles.heroActions}>
              <Link href="/contact" className="btn btn-primary">
                Get a free quote
                <Icon name="arrow-right" size={16} />
              </Link>
              <a href="tel:+61451460307" className="btn btn-light">
                <Icon name="phone" size={15} />
                0451 460 307
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.detail}`}>
        <div className={`container ${styles.detailGrid}`}>
          <div className={styles.textCol}>
            <span className="eyebrow">The service</span>
            <h2 className={`display h2 ${styles.detailTitle}`}>
              {service.tagline}
            </h2>

            {service.paragraphs.map((paragraph) => (
              <p key={paragraph} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}

            <div className={styles.includesBlock}>
              <h3>What&apos;s included</h3>
              <ul className={styles.includes}>
                {service.includes.map((item) => (
                  <li key={item}>
                    <span className={styles.check}>
                      <Icon name="check" size={12} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.actions}>
              <Link href="/contact" className="btn btn-primary">
                Request a quote
                <Icon name="arrow-right" size={15} />
              </Link>
              <Link href="/services" className="btn btn-outline">
                All services
              </Link>
            </div>

            <div className={styles.glance}>
              <span className={styles.glanceTitle}>At a glance</span>
              <ul className={styles.glanceList}>
                <li>
                  <Icon name="check" size={12} /> Free, no-obligation quote
                </li>
                <li>
                  <Icon name="check" size={12} /> Residential &amp; commercial
                </li>
                <li>
                  <Icon name="check" size={12} /> Melbourne-based team
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.sideCol}>
            <div className={styles.sideImgWrap}>
              <Image
                src={service.gallery[0].src}
                alt={service.gallery[0].alt}
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
                className={styles.cover}
              />
              <div className={styles.floatCard}>
                <span className={styles.floatIcon}>
                  <Icon name="shield" size={17} />
                </span>
                <span>
                  <strong>Careful, professional service</strong>
                  Local Melbourne team
                </span>
              </div>
            </div>

            <div className={styles.thumbs}>
              {service.gallery.slice(1).map((image) => (
                <div key={image.src} className={styles.thumb}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 900px) 45vw, 22vw"
                    className={styles.cover}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.highlights}`}>
        <div className="container">
          <div className={styles.highlightsHead}>
            <div className="section-head__copy">
              <span className="eyebrow">Why it works</span>
              <h2 className={`display h2 ${styles.highlightsTitle}`}>
                Care in every detail.
              </h2>
            </div>
            <p className="lead">
              The small things make the biggest difference. Here is what you can
              expect when you book {service.title.toLowerCase()} with MPM.
            </p>
          </div>

          <div className={styles.highlightGrid}>
            {service.highlights.map((highlight, i) => (
              <Reveal key={highlight.title} delay={i * 70}>
                <div className={styles.highlightCard}>
                  <span className={styles.highlightIcon}>
                    <Icon name={highlightIcons[i % highlightIcons.length]} size={19} />
                  </span>
                  <span className={styles.highlightNumber} aria-hidden="true">
                    0{i + 1}
                  </span>
                  <h3>{highlight.title}</h3>
                  <p>{highlight.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.faqSection}`}>
        <div className={`container ${styles.faqGrid}`}>
          <div className={styles.faqIntro}>
            <span className="eyebrow">FAQs</span>
            <h2 className={`display h2 ${styles.faqTitle}`}>Good to know.</h2>
            <p className="lead">
              A few common questions about {service.title.toLowerCase()}. Still
              unsure? We are happy to talk it through.
            </p>
            <Link href="/contact" className="link-arrow">
              Ask us a question
              <Icon name="arrow-right" size={15} />
            </Link>
          </div>
          <Accordion items={service.faqs} />
        </div>
      </section>

      <section className={`section ${styles.related}`}>
        <div className="container">
          <div className="section-head">
            <div className="section-head__copy">
              <span className="eyebrow">More services</span>
              <h2 className={`display h2 ${styles.relatedTitle}`}>
                Explore what else we do.
              </h2>
            </div>
            <Link href="/services" className="link-arrow">
              View all services
              <Icon name="arrow-right" size={15} />
            </Link>
          </div>

          <div className={styles.relatedGrid}>
            {related.map((item) => (
              <Link key={item.id} href={item.slug} className={styles.relatedCard}>
                <div className={styles.relatedImg}>
                  <Image
                    src={item.heroImage}
                    alt={item.heroAlt}
                    fill
                    sizes="(max-width: 700px) 100vw, 50vw"
                    className={styles.cover}
                  />
                  <span className={styles.relatedArrow}>
                    <Icon name="arrow-up-right" size={18} />
                  </span>
                </div>
                <div className={styles.relatedBody}>
                  <span className={styles.relatedTag}>{item.eyebrow}</span>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaGlow} aria-hidden="true" />
        <div className={`container ${styles.ctaInner}`}>
          <span className="eyebrow eyebrow--light">Ready when you are</span>
          <h2 className={`display ${styles.ctaTitle}`}>
            Let&apos;s take care of the
            <br />
            <em>{service.title.toLowerCase()}.</em>
          </h2>
          <p>
            Send through a few details and we will come back with a clear, no-obligation
            quote.
          </p>
          <div className={styles.ctaActions}>
            <Link href="/contact" className="btn btn-primary">
              Request a free quote
              <Icon name="arrow-right" size={16} />
            </Link>
            <a href="tel:+61451460307" className="btn btn-light">
              <Icon name="phone" size={15} />
              0451 460 307
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
