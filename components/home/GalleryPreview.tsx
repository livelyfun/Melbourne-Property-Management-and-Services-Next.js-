import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import styles from "./GalleryPreview.module.css";

const tiles = [
  {
    src: "/images/living-warm.webp",
    alt: "Softly styled living room with cream furnishings",
    label: "Living spaces",
    note: "Reset for everyday living",
    className: "large",
  },
  {
    src: "/images/bathroom.webp",
    alt: "Modern bathroom with marble and timber details",
    label: "Bathroom detail",
    note: "End-of-lease finish",
    className: "small",
  },
  {
    src: "/images/bedroom.webp",
    alt: "Freshly cleaned bedroom with soft textiles",
    label: "Carpet care",
    note: "Deep cleaned, gently handled",
    className: "small",
  },
  {
    src: "/images/living-beamed.webp",
    alt: "Living room with warm timber flooring",
    label: "Timber floors",
    note: "Stripped, sealed, restored",
    className: "tall",
  },
];

export default function GalleryPreview() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-head">
          <div className="section-head__copy">
            <span className="eyebrow">03 — The finish</span>
            <h2 className={`display h2 ${styles.heading}`}>
              The details are
              <br />
              <em>the difference.</em>
            </h2>
          </div>
          <div className="section-head__aside">
            <p className="lead">
              A look at the standard we bring to every property — considered spaces,
              cared-for surfaces and a finish that feels complete.
            </p>
            <Link href="/gallery" className="link-arrow">
              View full gallery
              <Icon name="arrow-right" size={15} />
            </Link>
          </div>
        </div>
      </div>

      <div className={`container ${styles.mosaicWrap}`}>
        <Reveal>
          <div className={styles.mosaic}>
            {tiles.map((tile) => (
              <Link
                key={tile.src}
                href="/gallery"
                className={`${styles.tile} ${styles[tile.className]}`}
              >
                <Image
                  src={tile.src}
                  alt={tile.alt}
                  fill
                  sizes="(max-width: 900px) 85vw, 45vw"
                  className={styles.image}
                />
                <span className={styles.overlay} aria-hidden="true" />
                <span className={styles.caption}>
                  <span className={styles.captionLabel}>{tile.label}</span>
                  <span className={styles.captionNote}>{tile.note}</span>
                </span>
                <span className={styles.arrow} aria-hidden="true">
                  <Icon name="arrow-up-right" size={17} />
                </span>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>

      <div className={`container ${styles.footer}`}>
        <span className={styles.count}>
          <Icon name="sparkles" size={14} />
          A closer look at the spaces and finishes we care for
        </span>
        <Link href="/gallery" className="btn btn-outline">
          Explore the gallery
          <Icon name="arrow-right" size={16} />
        </Link>
      </div>
    </section>
  );
}
