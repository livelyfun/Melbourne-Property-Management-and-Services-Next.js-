import Link from "next/link";
import ContactCTA from "@/components/home/ContactCTA";
import Icon from "@/components/ui/Icon";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/ui/Reveal";
import styles from "./reviews.module.css";

export const metadata = {
  title: "Client Reviews",
  description: "Read reviews from MPM Services clients across Melbourne.",
};

const reviews = [
  { name: "Sarah M.", suburb: "Richmond", service: "Strip & Polish", text: "MPM Services did a fantastic job on our rental property. The floors looked brand new. Highly recommended!", stars: 5 },
  { name: "James T.", suburb: "South Yarra", service: "Steam Cleaning", text: "Very professional service. Punctual, respectful of our space, and the steam cleaning results were excellent.", stars: 5 },
  { name: "Linda K.", suburb: "Carlton", service: "Commercial Cleaning", text: "Booked them for our office space. Reliable, well-priced, and great quality work. Will definitely use again.", stars: 5 },
  { name: "Michael P.", suburb: "St Kilda", service: "Property Maintenance", text: "Great team. Sorted out a range of issues at our rental quickly and professionally. Very happy.", stars: 5 },
  { name: "Emma R.", suburb: "Fitzroy", service: "Steam Cleaning", text: "The carpets look fantastic. Very happy with the results and will be recommending MPM to others.", stars: 5 },
  { name: "David N.", suburb: "Collingwood", service: "Strip & Polish", text: "Our old tiles look amazing now. The team were friendly and the whole process was seamless.", stars: 5 },
];

export default function ReviewsPage() {
  return (
    <main>
      <PageHero
        eyebrow="05 — Client reviews"
        title={
          <>
            What our clients
            <br />
            <em>say about us.</em>
          </>
        }
        description="Read what Melbourne property owners, landlords and agents say about working with MPM Services — and the standard of care they remember."
        image="/images/living-gallery.webp"
        imageAlt="Considered living room with layered art and natural light"
        meta={[
          { value: "5.0", label: "Average rating" },
          { value: `${reviews.length}`, label: "Client reviews" },
          { value: "Melbourne", label: "Wide coverage" },
        ]}
      >
        <Link href="/contact" className="btn btn-primary">
          Request a free quote
          <Icon name="arrow-right" size={16} />
        </Link>
        <a href="tel:+61451460307" className="btn btn-light">
          <Icon name="phone" size={15} />
          0451 460 307
        </a>
      </PageHero>

      <section className={`section ${styles.reviews}`}>
        <div className="container">
          <div className="section-head">
            <div className="section-head__copy">
              <span className="eyebrow">01 — In their words</span>
              <h2 className={`display h2 ${styles.heading}`}>
                Kind words from
                <br />
                <em>Melbourne clients.</em>
              </h2>
            </div>
            <div className="section-head__aside">
              <div className={styles.ratingPanel}>
                <span className={styles.score}>5.0</span>
                <div className={styles.ratingInfo}>
                  <span className={styles.stars} aria-hidden="true">
                    ★★★★★
                  </span>
                  <strong>Average client rating</strong>
                  <span>Based on feedback from {reviews.length} Melbourne clients</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.grid}>
            {reviews.map((review, index) => (
              <Reveal
                key={review.name}
                delay={(index % 3) * 70}
                className={index === 0 ? styles.featuredWrap : undefined}
              >
                <article className={`${styles.card} ${index === 0 ? styles.featured : ""}`}>
                  <div className={styles.cardTop}>
                    <span className={styles.stars} aria-label={`${review.stars} out of 5 stars`}>
                      {"★".repeat(review.stars)}
                    </span>
                    <span className={styles.service}>{review.service}</span>
                  </div>

                  <p className={styles.text}>&ldquo;{review.text}&rdquo;</p>

                  <div className={styles.meta}>
                    <span className={styles.avatar} aria-hidden="true">
                      {review.name.charAt(0)}
                    </span>
                    <div>
                      <strong>{review.name}</strong>
                      <span>{review.suburb}</span>
                    </div>
                    <Icon name="check" size={14} className={styles.verified} />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <p className={styles.note}>
            <Icon name="sparkles" size={14} />
            Reviews reflect genuine feedback shared by clients after their service.
          </p>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
