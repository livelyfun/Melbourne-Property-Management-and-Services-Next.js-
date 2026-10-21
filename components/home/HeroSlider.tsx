"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import Icon from "@/components/ui/Icon";
import styles from "./HeroSlider.module.css";

const slides = [
  {
    src: "/images/hero-living.webp",
    alt: "Warm, light-filled living room in a Melbourne home",
    label: "Living spaces",
    caption: "Reset for everyday living",
  },
  {
    src: "/images/hero-living-2.webp",
    alt: "Considered living room with layered textures and natural light",
    label: "Interior care",
    caption: "A finish that feels considered",
  },
  {
    src: "/images/living-warm.webp",
    alt: "Softly styled living room with cream furnishings",
    label: "Soft furnishings",
    caption: "Deep cleaned, gently handled",
  },
  {
    src: "/images/house-exterior.webp",
    alt: "Modern Melbourne home at dusk",
    label: "Whole-property care",
    caption: "Inside, outside and everything between",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((index: number) => {
    setCurrent((index + slides.length) % slides.length);
  }, []);

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
        setCurrent((value) => (value + 1) % slides.length);
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

  return (
    <section
      className={styles.hero}
      aria-roledescription="carousel"
      aria-label="MPM Services — Melbourne property care"
    >
      <div className={styles.grid}>
        <div className={styles.copy}>
          <span className={`eyebrow eyebrow--light ${styles.eyebrow}`}>
            Melbourne · Property services
          </span>

          <h1 className={styles.title}>
            A higher standard
            <br />
            of <em>property care.</em>
          </h1>

          <p className={styles.lead}>
            Steam cleaning, strip &amp; polish and property maintenance — delivered
            with care by a local Melbourne team for homes, rentals and commercial
            spaces.
          </p>

          <div className={styles.actions}>
            <Link href="/contact" className="btn btn-primary">
              Get a free quote
              <Icon name="arrow-right" size={15} />
            </Link>
            <a href="tel:+61451460307" className="btn btn-light">
              <Icon name="phone" size={14} />
              0451 460 307
            </a>
          </div>

          <div className={styles.proof}>
            <span className={styles.stars} aria-hidden="true">
              ★★★★★
            </span>
            <p>
              <strong>5.0</strong> from Melbourne homeowners, landlords &amp; agents
            </p>
          </div>

          <ul className={styles.metaRow}>
            <li>
              <strong>03</strong>
              <span>Specialist services</span>
            </li>
            <li>
              <strong>Local</strong>
              <span>Melbourne team</span>
            </li>
            <li>
              <strong>Free</strong>
              <span>On-site quotes</span>
            </li>
          </ul>
        </div>

        <div className={styles.media}>
          {slides.map((slide, index) => (
            <div
              key={slide.src}
              className={`${styles.slide} ${index === current ? styles.active : ""}`}
              aria-hidden={index !== current}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${slides.length}`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                loading={index === 0 ? "eager" : "lazy"}
                sizes="(max-width: 900px) 100vw, 55vw"
                className={styles.image}
              />
            </div>
          ))}

          <div className={styles.shade} aria-hidden="true" />

          <div className={styles.mediaTop}>
            <span className={styles.live}>
              <span className={styles.liveDot} aria-hidden="true" />
              Now booking
            </span>
            <span className={styles.counter} aria-live="polite">
              <strong>0{current + 1}</strong>
              <span>/ 0{slides.length}</span>
            </span>
          </div>

          <div className={styles.caption}>
            <span className={styles.captionIndex} aria-hidden="true">
              0{current + 1}
            </span>
            <div>
              <strong>{slides[current].label}</strong>
              <span>{slides[current].caption}</span>
            </div>
          </div>

          <div className={styles.controls}>
            <div className={styles.bars} role="tablist" aria-label="Choose slide">
              {slides.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  role="tab"
                  aria-selected={index === current}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`${styles.bar} ${index === current ? styles.barActive : ""}`}
                  onClick={() => goTo(index)}
                />
              ))}
            </div>

            <div className={styles.arrows}>
              <button
                type="button"
                className={styles.arrow}
                onClick={() => goTo(current - 1)}
                aria-label="Previous slide"
              >
                <Icon name="chevron-left" size={17} />
              </button>
              <button
                type="button"
                className={styles.arrow}
                onClick={() => goTo(current + 1)}
                aria-label="Next slide"
              >
                <Icon name="chevron-right" size={17} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
