import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/lib/data/services";
import styles from "./ServicesSection.module.css";

export default function ServicesSection() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-head">
          <div className="section-head__copy">
            <span className="eyebrow">01 — What we do</span>
            <h2 className={`display h2 ${styles.heading}`}>
              Three services.
              <br />
              <em>One standard.</em>
            </h2>
          </div>
          <div className="section-head__aside">
            <p className="lead">
              Specialist care for the surfaces and spaces that matter most — for
              homes, rentals and commercial properties across Melbourne.
            </p>
            <Link href="/services" className="link-arrow">
              View all services
              <Icon name="arrow-right" size={15} />
            </Link>
          </div>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <Reveal
              key={service.id}
              delay={index * 90}
              className={index === 0 ? styles.feature : styles.cardWrap}
            >
              <Link href={service.slug} className={styles.card}>
                <Image
                  src={service.cardImage ?? service.heroImage}
                  alt={service.heroAlt}
                  fill
                  sizes={index === 0 ? "(max-width: 900px) 100vw, 58vw" : "(max-width: 900px) 100vw, 42vw"}
                  className={styles.image}
                />

                <span className={styles.scrim} aria-hidden="true" />

                <span className={styles.topRow}>
                  <span className={styles.index}>0{index + 1}</span>
                  <span className={styles.tag}>{service.eyebrow}</span>
                </span>

                <span className={styles.content}>
                  <span className={styles.icon}>
                    <Icon name={service.icon} size={20} />
                  </span>
                  <h3 className={styles.title}>{service.title}</h3>
                  <p className={styles.copy}>{service.summary}</p>
                  <span className={styles.link}>
                    Explore service
                    <Icon name="arrow-up-right" size={16} />
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
