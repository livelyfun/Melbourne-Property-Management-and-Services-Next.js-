import Link from "next/link";
import GalleryLightbox from "@/components/gallery/GalleryLightbox";
import styles from "./GalleryPreview.module.css";

// All 16 actual gallery images used in the 4×4 homepage grid
const allImgs = [
  { src: "/gallery/28947752_-2087775021236730-_1933692262219483355_o.jpg", alt: "MPM Services property work" },
  { src: "/gallery/29662461_-2087774927903406-_186873304590838189_o.jpg", alt: "Property maintenance Melbourne" },
  { src: "/gallery/30420503_-2118379494842949-_8355277186875145840_o.jpg", alt: "Steam cleaning results" },
  { src: "/gallery/30424815_-2108796815801217-_1635916427438308022_o.jpg", alt: "Professional floor care" },
  { src: "/gallery/33814017_-2170416399639258-_8398402273486569472_o.jpg", alt: "Strip and polish Melbourne" },
  { src: "/gallery/33964491_-2170416142972617-_6091564240609476608_o.jpg", alt: "Polished floor results" },
  { src: "/gallery/34730459_-2186837627997135-_1100437588365279232_n-2-.jpg", alt: "MPM property work" },
  { src: "/gallery/34838324_-2186837634663801-_8718002085745917952_n.jpg", alt: "Property services result" },
  { src: "/gallery/330x330.png", alt: "MPM Services completed work" },
  { src: "/gallery/330x330-1-.png", alt: "Property cleaning Melbourne" },
  { src: "/gallery/330x330-2-.png", alt: "Professional property service" },
  { src: "/gallery/330x330-3-.png", alt: "Melbourne property care" },
  { src: "/gallery/330x330-4-.png", alt: "Property maintenance result" },
  { src: "/gallery/330x330-5-.png", alt: "Clean property result" },
  { src: "/gallery/330x330-6-.png", alt: "MPM Services work" },
  { src: "/gallery/330x330-7-.png", alt: "Professional cleaning result" },
];

export default function GalleryPreview() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>OUR WORK</span>
          <h2 className={styles.heading}>Results You Can See</h2>
          <p className={styles.sub}>
            A selection of properties we&apos;ve worked on across Melbourne.
          </p>
        </div>

        {/* 4 × 4 grid — rendered by the Client Component which also handles the lightbox */}
        <div className={styles.grid}>
          <GalleryLightbox images={allImgs} />
        </div>

        <div className={styles.viewAll}>
          <Link href="/gallery" className={styles.viewBtn}>
            View Full Gallery →
          </Link>
        </div>
      </div>
    </section>
  );
}
