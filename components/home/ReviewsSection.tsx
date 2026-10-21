"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import Icon from "@/components/ui/Icon";
import styles from "./ReviewsSection.module.css";

const reviews = [
  {
    name: "Sarah M.",
    location: "Richmond",
    service: "Strip & Polish",
    text: "MPM Services did a fantastic job on our rental property. The floors looked brand new after the strip and polish. Highly recommend!",
    stars: 5,
  },
  {
    name: "James T.",
    location: "South Yarra",
    service: "Steam Cleaning",
    text: "Very professional service. The team was punctual, respectful of our space, and the steam cleaning results were excellent.",
    stars: 5,
  },
  {
    name: "Linda K.",
    location: "Carlton",
    service: "Commercial Cleaning",
    text: "Booked them for our commercial office space. Reliable, well-priced, and great quality. Will definitely use again.",
    stars: 5,
  },
  {
    name: "Michael P.",
    location: "St Kilda",
    service: "Property Maintenance",
    text: "Great team. Sorted out a range of maintenance issues at our rental quickly and professionally. Very happy with the result.",
    stars: 5,
  },
  {
    name: "Emma R.",
    location: "Fitzroy",
    service: "Steam Cleaning",
    text: "The carpets look fantastic. Very happy with the results and will be recommending MPM to others without hesitation.",
    stars: 5,
  },
];

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % reviews.length), []);
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length),
    [],
  );

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timer: number | undefined;

    const stop = () => {
      if (timer !== undefined) window.clearInterval(timer);
      timer = undefined;
    };

    const start = () => {
      stop();
      timer = window.setInterval(() => {
        setCurrent((c) => (c + 1) % reviews.length);
      }, 6000);
    };

    const onVisibilityChange = () => {
      if (document.hidden) stop();
      else start();
    };

    start();
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  const review = reviews[current];

  return (
    <section
      className={`section ${styles.section}`}
      aria-roledescription="carousel"
      aria-label="Client reviews"
    >
      <div className={`container ${styles.inner}`}>
        <div className={styles.intro}>
          <span className="eyebrow">05 — Reviews</span>
          <h2 className={`display h2 ${styles.heading}`}>
            A reputation
            <br />
            built on <em>care.</em>
          </h2>
          <p className={styles.copy}>
            The little things matter. Here is what Melbourne homeowners, landlords
            and businesses say about working with us.
          </p>

          <div className={styles.ratingBlock}>
            <span className={styles.score}>5.0</span>
            <span className={styles.ratingMeta}>
              <span className={styles.stars} aria-hidden="true">
                ★★★★★
              </span>
              <span>Average client rating</span>
            </span>
          </div>

          <Link href="/reviews" className="link-arrow">
            Read all reviews
            <Icon name="arrow-right" size={15} />
          </Link>
        </div>

        <div className={styles.panel}>
          <div className={styles.quoteMark} aria-hidden="true">
            &ldquo;
          </div>

          <div key={current} className={styles.review} aria-live="polite">
            <span className={styles.stars} aria-label={`${review.stars} out of 5 stars`}>
              {"★".repeat(review.stars)}
            </span>
            <p className={styles.text}>{review.text}</p>

            <div className={styles.meta}>
              <span className={styles.avatar} aria-hidden="true">
                {review.name.charAt(0)}
              </span>
              <div>
                <strong>{review.name}</strong>
                <span>
                  {review.location} · {review.service}
                </span>
              </div>
              <span className={styles.verified}>
                <Icon name="check" size={12} />
                Verified client
              </span>
            </div>
          </div>

          <div className={styles.controls}>
            <span className={styles.counter}>
              <strong>0{current + 1}</strong>
              <span>/ 0{reviews.length}</span>
            </span>

            <div className={styles.progress} aria-hidden="true">
              <span
                className={styles.progressBar}
                style={{ width: `${((current + 1) / reviews.length) * 100}%` }}
              />
            </div>

            <div className={styles.arrows}>
              <button className={styles.arrow} onClick={prev} aria-label="Previous review">
                <Icon name="chevron-left" size={17} />
              </button>
              <button className={styles.arrow} onClick={next} aria-label="Next review">
                <Icon name="chevron-right" size={17} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
