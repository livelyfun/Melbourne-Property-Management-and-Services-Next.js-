import Link from "next/link";
import styles from "./reviews.module.css";

export const metadata = {
  title: "Client Reviews | MPM Services Melbourne",
  description: "Read reviews from MPM Services clients across Melbourne."
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
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.eyebrow}>REVIEWS</span>
          <h1>What Our Clients Say</h1>
          <p>Read what Melbourne property owners, landlords, and agents say about MPM Services.</p>
        </div>
      </section>

      <section className={styles.reviews}>
        <div className="container">
          <div className={styles.grid}>
            {reviews.map((r, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.stars}>{"★".repeat(r.stars)}</div>
                <p className={styles.text}>"{r.text}"</p>
                <div className={styles.meta}>
                  <strong>{r.name}</strong>
                  <span>{r.suburb} · {r.service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container" style={{textAlign:'center'}}>
          <h2>Ready to experience the MPM difference?</h2>
          <p>Get in touch for a free, no-obligation quote.</p>
          <Link href="/contact" className={styles.ctaBtn}>Request a Quote</Link>
        </div>
      </section>
    </main>
  );
}

