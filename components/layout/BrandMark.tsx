import Link from "next/link";
import styles from "./BrandMark.module.css";

interface BrandMarkProps {
  href?: string;
  light?: boolean;
  className?: string;
}

export default function BrandMark({ href = "/", light = false, className }: BrandMarkProps) {
  const content = (
    <span className={`${styles.brand} ${light ? styles.light : ""} ${className ?? ""}`}>
      <span className={styles.mark} aria-hidden="true">
        <svg viewBox="0 0 44 44" width="44" height="44" role="presentation">
          <rect width="44" height="44" rx="13" fill="currentColor" />
          <path
            d="M9.5 25.5 22 13l12.5 12.5"
            fill="none"
            stroke="#fffdf9"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.5 26v6.5M22 19.5V33M29.5 26v6.5"
            fill="none"
            stroke="#fffdf9"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className={styles.text}>
        <strong>MPM</strong>
        <span>Property Management &amp; Services</span>
      </span>
    </span>
  );

  if (!href) return content;

  return (
    <Link href={href} aria-label="MPM Services — home" className={styles.link}>
      {content}
    </Link>
  );
}
