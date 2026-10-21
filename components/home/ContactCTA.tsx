import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import styles from "./ContactCTA.module.css";

const points = [
  { icon: "clipboard-check" as const, label: "Free, no-obligation quotes" },
  { icon: "map-pin" as const, label: "Melbourne-based team" },
  { icon: "calendar" as const, label: "Flexible scheduling" },
];

export default function ContactCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.bg}>
        <Image
          src="/images/house-exterior.webp"
          alt=""
          fill
          sizes="100vw"
          className={styles.bgImg}
        />
      </div>
      <div className={styles.overlay} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <Reveal className={styles.cardWrap}>
          <div className={styles.card}>
            <div className={styles.cardTop}>
              <span className="eyebrow">06 — Start here</span>
              <span className={styles.badge}>Free quote</span>
            </div>

            <h2 className={`display ${styles.heading}`}>
              Ready to look after
              <br />
              <em>your property?</em>
            </h2>

            <p className={styles.sub}>
              Tell us a little about the property and what you need. We will get back
              to you with a clear, no-obligation quote.
            </p>

            <div className={styles.ctas}>
              <Link href="/contact" className="btn btn-primary">
                Request a free quote
                <Icon name="arrow-right" size={16} />
              </Link>
              <a href="tel:+61451460307" className={styles.phone}>
                <Icon name="phone" size={15} />
                0451 460 307
              </a>
            </div>

            <ul className={styles.points}>
              {points.map((point) => (
                <li key={point.label}>
                  <Icon name={point.icon} size={14} />
                  {point.label}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className={styles.aside}>
          <span className={styles.asideTag}>Melbourne · VIC</span>
          <p className={styles.quote}>
            The details
            <br />
            are the <em>difference.</em>
          </p>
          <span className={styles.rule} aria-hidden="true" />
          <p className={styles.asideNote}>Residential &amp; commercial property care</p>
        </div>
      </div>
    </section>
  );
}
