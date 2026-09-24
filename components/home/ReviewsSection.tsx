"use client";
import { useState, useEffect, useCallback } from "react";
import styles from "./ReviewsSection.module.css";

const reviews = [
  {
    name: "Sarah M.",
    location: "Richmond",
    text: "MPM Services did a fantastic job on our rental property. The floors looked brand new after the strip and polish. Highly recommend!",
    stars: 5,
  },
  {
    name: "James T.",
    location: "South Yarra",
    text: "Very professional service. The team was punctual, respectful of our space, and the steam cleaning results were excellent.",
    stars: 5,
  },
  {
    name: "Linda K.",
    location: "Carlton",
    text: "Booked them for our commercial office space. Reliable, well-priced, and great quality. Will definitely use again.",
    stars: 5,
  },
  {
    name: "Michael P.",
    location: "St Kilda",
    text: "Great team. Sorted out a range of maintenance issues at our rental quickly and professionally. Very happy with the result.",
    stars: 5,
  },
  {
    name: "Emma R.",
    location: "Fitzroy",
    text: "The carpets look fantastic. Very happy with the results and will be recommending MPM to others without hesitation.",
    stars: 5,
  },
];

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % reviews.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + reviews.length) % reviews.length), []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [paused, next]);

  return (
    <section
      className={styles.section}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>CLIENT REVIEWS</span>
          <h2 className={styles.heading}>What Melbourne Clients Say</h2>
        </div>

        <div className={styles.sliderWrap}>
          {/* Prev */}
          <button className={`${styles.arrow} ${styles.prev}`} onClick={prev} aria-label="Previous review">
            ‹
          </button>

          {/* Cards — three visible, centre active */}
          <div className={styles.track}>
            {[-1, 0, 1].map((offset) => {
              const idx = (current + offset + reviews.length) % reviews.length;
              const r = reviews[idx];
              const isActive = offset === 0;
              return (
                <div
                  key={idx}
                  className={`${styles.card} ${isActive ? styles.active : styles.side}`}
                  aria-hidden={!isActive}
                  onClick={() => !isActive && setCurrent(idx)}
                >
                  <div className={styles.stars}>{"★".repeat(r.stars)}</div>
                  <p className={styles.text}>&ldquo;{r.text}&rdquo;</p>
                  <div className={styles.meta}>
                    <strong>{r.name}</strong>
                    <span>{r.location}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Next */}
          <button className={`${styles.arrow} ${styles.next}`} onClick={next} aria-label="Next review">
            ›
          </button>
        </div>

        {/* Dots */}
        <div className={styles.dots}>
          {reviews.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
