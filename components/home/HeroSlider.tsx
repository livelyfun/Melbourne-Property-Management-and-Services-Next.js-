"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./HeroSlider.module.css";

const slides = [
  {
    src: "/gallery/33964491_-2170416142972617-_6091564240609476608_o.jpg",
    alt: "Professionally polished floors in a Melbourne property",
  },
  {
    src: "/gallery/33814017_-2170416399639258-_8398402273486569472_o.jpg",
    alt: "Clean and maintained Melbourne property interior",
  },
  {
    src: "/gallery/30420503_-2118379494842949-_8355277186875145840_o.jpg",
    alt: "Professional steam cleaning and property care",
  },
  {
    src: "/gallery/28947752_-2087775021236730-_1933692262219483355_o.jpg",
    alt: "High-quality property maintenance and services",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero}>
      {/* Slides */}
      <div className={styles.slides}>
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`${styles.slide} ${i === current ? styles.active : ''}`}
            aria-hidden={i !== current}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              className={styles.slideImg}
              sizes="100vw"
            />
            <div className={styles.overlay} />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className="container">
          <span className={styles.eyebrow}>Melbourne Property Services</span>
          <h1 className={styles.headline}>
            Professional Care for Your Property.
          </h1>
          <p className={styles.sub}>
            Steam cleaning, strip & polish, and property maintenance — done properly across Melbourne.
          </p>
          <div className={styles.ctas}>
            <Link href="/contact" className={styles.primary}>Get a Free Quote</Link>
            <a href="tel:+61451460307" className={styles.secondary}>Call +61 451 460 307</a>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className={styles.dots}>
        {slides.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button className={`${styles.arrow} ${styles.prev}`} onClick={() => setCurrent(c => (c - 1 + slides.length) % slides.length)} aria-label="Previous slide">‹</button>
      <button className={`${styles.arrow} ${styles.next}`} onClick={() => setCurrent(c => (c + 1) % slides.length)} aria-label="Next slide">›</button>
    </section>
  );
}

