import Link from "next/link";
import GalleryLightbox from "@/components/gallery/GalleryLightbox";
import ContactCTA from "@/components/home/ContactCTA";
import Icon from "@/components/ui/Icon";
import PageHero from "@/components/layout/PageHero";
import styles from "./gallery.module.css";

export const metadata = {
  title: "Gallery",
  description:
    "A closer look at the spaces, surfaces and finishes MPM Services cares for across Melbourne.",
};

const images = [
  { src: "/images/living-warm.webp", title: "Warm living room", alt: "Softly styled living room with cream furnishings", category: "Living spaces", ratio: 1.37 },
  { src: "/images/living-beamed.webp", title: "Timber floors", alt: "Living room with warm timber flooring", category: "Floors", ratio: 0.75 },
  { src: "/images/cleaner.webp", title: "Steam cleaning", alt: "Professional steam cleaning in a modern property", category: "Carpet & upholstery", ratio: 0.67 },
  { src: "/images/bedroom.webp", title: "Fresh bedroom", alt: "Freshly cleaned bedroom with soft textiles", category: "Living spaces", ratio: 1.5 },
  { src: "/images/living-modern.webp", title: "Polished floors", alt: "Polished hard floors in a modern living space", category: "Floors", ratio: 1.47 },
  { src: "/images/handyman.webp", title: "Property maintenance", alt: "General property maintenance and repairs", category: "Maintenance", ratio: 0.67 },
  { src: "/images/house-exterior.webp", title: "Home at dusk", alt: "Well-maintained modern Melbourne home at dusk", category: "Exteriors", ratio: 1.5 },
  { src: "/images/living-dining.webp", title: "Dining space", alt: "Light-filled dining and entertaining space", category: "Living spaces", ratio: 1.5 },
  { src: "/images/sofa-clean.webp", title: "Upholstery care", alt: "Upholstery extraction during a steam clean", category: "Carpet & upholstery", ratio: 1.5 },
  { src: "/images/window-clean.webp", title: "Window detailing", alt: "Careful window and surface cleaning", category: "Maintenance", ratio: 1.5 },
  { src: "/images/melbourne-market.webp", title: "Queen Victoria Market", alt: "Queen Victoria Market in Melbourne", category: "Melbourne", ratio: 1.5 },
  { src: "/images/living-gallery.webp", title: "Gallery wall living", alt: "Living room with layered art and natural light", category: "Living spaces", ratio: 1.5 },
  { src: "/images/floor-room.webp", title: "Restored flooring", alt: "Freshly polished hard flooring", category: "Floors", ratio: 1.5 },
  { src: "/images/hero-living.webp", title: "Open-plan living", alt: "Warm open-plan living space", category: "Living spaces", ratio: 1.9 },
  { src: "/images/melbourne.webp", title: "Melbourne skyline", alt: "Melbourne city skyline", category: "Melbourne", ratio: 1.33 },
  { src: "/images/carpet-clean.webp", title: "Carpet steam clean", alt: "Carpet steam cleaning in progress", category: "Carpet & upholstery", ratio: 1.33 },
  { src: "/images/team.webp", title: "Our team", alt: "Professional cleaning team in a modern home", category: "Our team", ratio: 0.67 },
  { src: "/images/hero-living-2.webp", title: "Considered living", alt: "Considered living room with gallery wall", category: "Living spaces", ratio: 1.33 },
  { src: "/images/bathroom.webp", title: "Stone bathroom", alt: "Freshly finished bathroom with stone surfaces", category: "Living spaces", ratio: 1.5 },
  { src: "/images/carpet-vac.webp", title: "Carpet care", alt: "Vacuuming a patterned carpet during a property clean", category: "Carpet & upholstery", ratio: 0.75 },
];

export default function GalleryPage() {
  return (
    <main>
      <PageHero
        eyebrow="Gallery — The standard"
        title={
          <>
            A closer look
            <br />
            at <em>the details.</em>
          </>
        }
        description="A look at the spaces, surfaces and finishes we care for across Melbourne — from restored floors and refreshed living spaces to the finishing touches that make a property feel complete."
        image="/images/bathroom.webp"
        imageAlt="Freshly finished bathroom with stone surfaces and natural light"
        meta={[
          { value: `${images.length}`, label: "Spaces to explore" },
          { value: "07", label: "Categories" },
          { value: "5.0", label: "Client rating" },
        ]}
      >
        <Link href="/contact" className="btn btn-primary">
          Request a free quote
          <Icon name="arrow-right" size={16} />
        </Link>
      </PageHero>

      <section className={`section ${styles.gridSection}`}>
        <div className="container">
          <div className={styles.gridHead}>
            <div className={styles.headCopy}>
              <span className="eyebrow">01 — The collection</span>
              <h2 className={`display ${styles.headTitle}`}>
                Spaces, surfaces
                <br />
                <em>&amp; finishes.</em>
              </h2>
            </div>
            <p className={styles.headNote}>
              Browse by space or surface, then open any image for a closer look.
              Every property is treated to the same considered standard.
            </p>
          </div>

          <GalleryLightbox images={images} showFilters />
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
