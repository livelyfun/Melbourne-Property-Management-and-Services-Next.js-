import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/layout/PageHero";
import { services } from "@/lib/data/services";
import styles from "./services.module.css";

export const metadata = {
  title: "Property Services Melbourne",
  description:
    "Steam cleaning, strip & polish and property maintenance services across Melbourne for residential and commercial properties.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="01 — Our services"
        title={
          <>
            Property services
            <br />
            that <em>make a difference.</em>
          </>
        }
        description="Three specialist services to keep your property clean, polished and well maintained — delivered by a local Melbourne team that takes the time to do it properly."
        image="/images/hero-living-2.webp"
        imageAlt="Considered Melbourne living room with natural light and layered textures"
        meta={[
          { value: "03", label: "Specialist services" },
          { value: "5.0", label: "Client rating" },
          { value: "Free", label: "No-obligation quotes" },
        ]}
      >
        <Link href="/contact" className="btn btn-primary">
          Get a free quote
          <Icon name="arrow-right" size={16} />
        </Link>
        <a href="tel:+61451460307" className="btn btn-light">
          <Icon name="phone" size={15} />
          0451 460 307
        </a>
      </PageHero>

      <section className={`section ${styles.listSection}`}>
        <div className="container">
          <div className="section-head">
            <div className="section-head__copy">
              <span className="eyebrow">02 — Capabilities</span>
              <h2 className={`display h2 ${styles.listTitle}`}>
                Specialist care
                <br />
                <em>for every surface.</em>
              </h2>
            </div>
            <div className="section-head__aside">
              <p className="lead">
                From carpets and upholstery to timber floors, windows and general
                property upkeep — one team, one standard.
              </p>
            </div>
          </div>

          <div className={styles.rows}>
            {services.map((service, index) => (
              <Reveal key={service.id}>
                <article
                  className={`${styles.row} ${index % 2 === 1 ? styles.reverse : ""}`}
                >
                  <div className={styles.media}>
                    <Image
                      src={service.heroImage}
                      alt={service.heroAlt}
                      fill
                      sizes="(max-width: 900px) 100vw, 50vw"
                      className={styles.cover}
                    />
                    <span className={styles.mediaShade} aria-hidden="true" />
                    <span className={styles.index}>0{index + 1}</span>
                    <span className={styles.mediaTag}>{service.eyebrow}</span>
                  </div>

                  <div className={styles.text}>
                    <span className={styles.textEyebrow}>
                      0{index + 1} — {service.eyebrow}
                    </span>
                    <h2 className="display h2">{service.title}</h2>
                    <p className={styles.summary}>{service.summary}</p>

                    <ul className={styles.benefits}>
                      {service.includes.slice(0, 6).map((item) => (
                        <li key={item}>
                          <span className={styles.check}>
                            <Icon name="check" size={12} />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className={styles.rowActions}>
                      <Link href={service.slug} className="btn btn-dark">
                        Explore {service.title}
                        <Icon name="arrow-right" size={15} />
                      </Link>
                      <Link href="/contact" className="link-arrow">
                        Get a quote
                        <Icon name="arrow-up-right" size={15} />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaBg} aria-hidden="true">
          <Image
            src="/images/living-gallery.webp"
            alt=""
            fill
            sizes="100vw"
            className={styles.cover}
          />
        </div>
        <div className={styles.ctaOverlay} aria-hidden="true" />
        <div className={`container ${styles.ctaInner}`}>
          <span className="eyebrow eyebrow--light">Not sure what you need?</span>
          <h2 className={`display ${styles.ctaTitle}`}>
            Tell us about the property.
            <br />
            <em>We will point you in the right direction.</em>
          </h2>
          <p>
            A quick conversation is often all it takes. Send through the details and
            we will recommend the right service — with no obligation.
          </p>
          <div className={styles.ctaActions}>
            <Link href="/contact" className="btn btn-primary">
              Request a quote
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
