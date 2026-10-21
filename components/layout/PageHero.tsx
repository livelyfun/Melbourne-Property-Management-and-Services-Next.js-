import Image from "next/image";
import type { ReactNode } from "react";
import Icon from "@/components/ui/Icon";
import styles from "./PageHero.module.css";

interface PageHeroMeta {
  value: string;
  label: string;
}

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  image: string;
  imageAlt: string;
  meta?: PageHeroMeta[];
  children?: ReactNode;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  meta = [],
  children,
}: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.grid}>
        <div className={styles.copy}>
          <span className="eyebrow eyebrow--light">{eyebrow}</span>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>

          {children && <div className={styles.actions}>{children}</div>}

          {meta.length > 0 && (
            <ul className={styles.meta}>
              {meta.map((item) => (
                <li key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className={styles.media}>
          <Image
            src={image}
            alt={imageAlt}
            fill
            loading="eager"
            sizes="(max-width: 900px) 100vw, 52vw"
            className={styles.image}
          />
          <div className={styles.overlay} aria-hidden="true" />
          <span className={styles.mediaTag}>
            <Icon name="map-pin" size={13} />
            Melbourne · VIC
          </span>
          <span className={styles.mediaIndex} aria-hidden="true">
            MPM / 03
          </span>
        </div>
      </div>
    </section>
  );
}
