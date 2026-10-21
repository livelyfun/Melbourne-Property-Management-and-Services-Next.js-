import Marquee from "@/components/ui/Marquee";
import Icon from "@/components/ui/Icon";
import styles from "./TrustStrip.module.css";

const items = [
  "Steam cleaning",
  "Strip & polish",
  "Property maintenance",
  "End-of-lease cleans",
  "Pre-tenancy preparation",
  "Residential care",
  "Commercial spaces",
  "Melbourne-wide",
];

export default function TrustStrip() {
  return (
    <section className={styles.section} aria-label="Our specialities">
      <div className={styles.lead}>
        <span className={styles.leadInner}>
          <Icon name="award" size={15} />
          Property care, end to end
        </span>
      </div>
      <Marquee items={items} duration={46} />
    </section>
  );
}
