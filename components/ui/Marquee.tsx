import styles from "./Marquee.module.css";

interface MarqueeProps {
  items: string[];
  duration?: number;
  className?: string;
}

export default function Marquee({ items, duration = 40, className = "" }: MarqueeProps) {
  return (
    <div className={`${styles.marquee} ${className}`} aria-label="Our specialities">
      <div className={styles.track} style={{ animationDuration: `${duration}s` }}>
        {[0, 1].map((copy) => (
          <div key={copy} className={styles.group} aria-hidden={copy === 1}>
            {items.map((item, i) => (
              <span key={`${copy}-${i}`} className={styles.item}>
                {item}
                <span className={styles.dot} aria-hidden="true" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
