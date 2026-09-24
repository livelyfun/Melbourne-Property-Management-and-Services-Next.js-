import GalleryLightbox from "@/components/gallery/GalleryLightbox";
import styles from "./gallery.module.css";

export const metadata = {
  title: "Gallery | MPM Services Melbourne",
  description:
    "View our gallery of property cleaning, floor polishing and maintenance work across Melbourne.",
};

// Complete gallery — all 20 actual images from /public/gallery
const imgs = [
  { src: "/gallery/28947752_-2087775021236730-_1933692262219483355_o.jpg",  alt: "MPM Services property work" },
  { src: "/gallery/29662461_-2087774927903406-_186873304590838189_o.jpg",   alt: "Property maintenance Melbourne" },
  { src: "/gallery/30420503_-2118379494842949-_8355277186875145840_o.jpg",  alt: "Professional steam cleaning results" },
  { src: "/gallery/30424815_-2108796815801217-_1635916427438308022_o.jpg",  alt: "Professional floor care Melbourne" },
  { src: "/gallery/33814017_-2170416399639258-_8398402273486569472_o.jpg",  alt: "Strip and polish Melbourne" },
  { src: "/gallery/33964491_-2170416142972617-_6091564240609476608_o.jpg",  alt: "Polished floor results" },
  { src: "/gallery/34730459_-2186837627997135-_1100437588365279232_n-2-.jpg", alt: "MPM property maintenance work" },
  { src: "/gallery/34838324_-2186837634663801-_8718002085745917952_n.jpg",  alt: "Property services completed" },
  { src: "/gallery/330x330.png",    alt: "MPM Services completed project" },
  { src: "/gallery/330x330-1-.png", alt: "Property cleaning Melbourne" },
  { src: "/gallery/330x330-2-.png", alt: "Professional property service" },
  { src: "/gallery/330x330-3-.png", alt: "Melbourne property care result" },
  { src: "/gallery/330x330-4-.png", alt: "Property maintenance completed" },
  { src: "/gallery/330x330-5-.png", alt: "Clean property result" },
  { src: "/gallery/330x330-6-.png", alt: "MPM Services work result" },
  { src: "/gallery/330x330-7-.png", alt: "Professional cleaning result" },
  { src: "/gallery/330x330-8-.png", alt: "MPM Services property project" },
  { src: "/gallery/330x330-9-.png", alt: "Melbourne property service" },
  { src: "/gallery/330x330-10-.png", alt: "Property care Melbourne" },
  { src: "/gallery/330x330-11-.png", alt: "MPM Services completed work" },
];

export default function GalleryPage() {
  return (
    <main className={styles.main}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.eyebrow}>OUR WORK</span>
          <h1>MPM Services Gallery</h1>
          <p>
            A visual record of properties we&apos;ve looked after across
            Melbourne. Click any image to view it in full.
          </p>
        </div>
      </section>

      {/* Gallery grid — GalleryLightbox renders clickable thumbnails + overlay */}
      <section className={styles.gridSection}>
        <div className="container">
          <div className={styles.grid}>
            <GalleryLightbox images={imgs} />
          </div>
        </div>
      </section>
    </main>
  );
}
