import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import styles from "./WhyMPM.module.css";

const reasons = [
  {
    title: "Melbourne based",
    body: "A local team that understands Melbourne properties and what clients expect. No out-of-town crews.",
  },
  {
    title: "Residential & commercial",
    body: "Homes, rentals, offices and commercial spaces — one reliable team for every property type.",
  },
  {
    title: "Quality focused",
    body: "We take care with every detail, delivering results that meet the standard we would want ourselves.",
  },
  {
    title: "Professional service",
    body: "Reliable, respectful and clear to deal with, from the first message to the final walkthrough.",
  },
];

export default function WhyMPM() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.media}>
          <Reveal className={styles.mediaMain}>
            <Image
              src="/images/house-exterior.webp"
              alt="Modern Melbourne home at dusk"
              fill
              sizes="(max-width: 980px) 100vw, 43vw"
              className={styles.image}
            />
          </Reveal>

          <Reveal delay={120} className={styles.mediaSmall}>
            <Image
              src="/images/window-clean.webp"
              alt="Careful surface and window cleaning in a Melbourne home"
              fill
              sizes="(max-width: 980px) 45vw, 25vw"
              className={styles.image}
            />
          </Reveal>

          <div className={styles.ratingCard}>
            <span className={styles.score}>5.0</span>
            <span className={styles.ratingMeta}>
              <span className={styles.stars} aria-hidden="true">
                ★★★★★
              </span>
              <span>Average client rating</span>
            </span>
          </div>

          <span className={styles.mediaTag}>
            <Icon name="map-pin" size={13} />
            Melbourne · Local team
          </span>
        </div>

        <div className={styles.content}>
          <span className="eyebrow">04 — Why MPM</span>
          <h2 className={`display h2 ${styles.heading}`}>
            A local team,
            <br />
            <em>a higher standard.</em>
          </h2>
          <p className={styles.copy}>
            We are a Melbourne-based property services team committed to delivering
            professional, quality work on every job — for residential, rental and
            commercial clients.
          </p>

          <div className={styles.reasons}>
            {reasons.map((reason, index) => (
              <Reveal key={reason.title} delay={index * 70}>
                <div className={styles.reason}>
                  <span className={styles.number} aria-hidden="true">
                    0{index + 1}
                  </span>
                  <div>
                    <h3>{reason.title}</h3>
                    <p>{reason.body}</p>
                  </div>
                  <Icon name="check" size={16} className={styles.check} />
                </div>
              </Reveal>
            ))}
          </div>

          <div className={styles.ctaRow}>
            <Link href="/contact" className="btn btn-primary">
              Request a quote
              <Icon name="arrow-right" size={16} />
            </Link>
            <a href="tel:+61451460307" className={styles.phone}>
              <Icon name="phone" size={15} />
              0451 460 307
            </a>
          </div>

          <div className={styles.local}>
            <span className={styles.localIcon}>
              <Icon name="map-pin" size={16} />
            </span>
            <p>
              <strong>Servicing Melbourne &amp; surrounds.</strong>
              CBD, Richmond, South Yarra, Fitzroy, St Kilda, Carlton and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
