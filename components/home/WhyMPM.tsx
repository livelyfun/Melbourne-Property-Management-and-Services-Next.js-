import styles from "./WhyMPM.module.css";

const reasons = [
  { num: "01", title: "Melbourne Based", body: "We are a local Melbourne team that understands local properties and client expectations." },
  { num: "02", title: "Residential & Commercial", body: "We work across homes, rentals, offices, and commercial properties." },
  { num: "03", title: "Quality-Focused", body: "We take care with every job, delivering results that meet client expectations." },
  { num: "04", title: "Professional Service", body: "Reliable, professional, and respectful of your property every step of the way." },
];

export default function WhyMPM() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <span className={styles.eyebrow}>WHY CHOOSE US</span>
            <h2 className={styles.heading}>The MPM Services Difference</h2>
            <p className={styles.body}>We are a Melbourne-based property services team committed to delivering professional, quality work on every job — for residential, rental, and commercial clients.</p>
            <a href="/contact" className={styles.cta}>Request a Quote</a>
          </div>
          <div className={styles.right}>
            {reasons.map(r => (
              <div key={r.num} className={styles.item}>
                <span className={styles.num}>{r.num}</span>
                <div>
                  <h4>{r.title}</h4>
                  <p>{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

