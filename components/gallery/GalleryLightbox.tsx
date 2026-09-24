"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
import styles from "./GalleryLightbox.module.css";

export interface GalleryImage {
  src: string;
  alt: string;
}

interface Props {
  images: GalleryImage[];
}

export default function GalleryLightbox({ images }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const isOpen = activeIndex !== null;

  // ── Navigation ──────────────────────────────────────────
  const prev = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  }, [images.length]);

  const next = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i + 1) % images.length));
  }, [images.length]);

  const close = useCallback(() => setActiveIndex(null), []);

  // ── Keyboard handling ────────────────────────────────────
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close, prev, next]);

  // ── Scroll lock ──────────────────────────────────────────
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Move focus to close button for accessibility
      closeRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // ── Click-outside (backdrop) ─────────────────────────────
  const onBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) close();
  };

  return (
    <>
      {/* ── Clickable grid items ─────────────────────────── */}
      {images.map((img, i) => (
        <button
          key={i}
          className={styles.thumb}
          onClick={() => setActiveIndex(i)}
          aria-label={`Open preview: ${img.alt}`}
          type="button"
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className={styles.thumbImg}
            sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
          />
          <span className={styles.thumbOverlay} aria-hidden="true" />
        </button>
      ))}

      {/* ── Lightbox overlay ─────────────────────────────── */}
      {isOpen && activeIndex !== null && (
        <div
          className={styles.backdrop}
          onClick={onBackdrop}
          role="dialog"
          aria-modal="true"
          aria-label={`Gallery preview: ${images[activeIndex].alt}`}
        >
          {/* Close */}
          <button
            ref={closeRef}
            className={styles.close}
            onClick={close}
            aria-label="Close image preview"
            type="button"
          >
            ✕
          </button>

          {/* Prev */}
          <button
            className={`${styles.navBtn} ${styles.navPrev}`}
            onClick={prev}
            aria-label="Previous image"
            type="button"
          >
            ‹
          </button>

          {/* Image */}
          <div className={styles.imgWrap}>
            <Image
              key={activeIndex}
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              fill
              className={styles.fullImg}
              sizes="(max-width:768px) 100vw, 90vw"
              priority
            />
          </div>

          {/* Caption + counter */}
          <div className={styles.caption}>
            <span className={styles.captionText}>{images[activeIndex].alt}</span>
            <span className={styles.counter}>{activeIndex + 1} / {images.length}</span>
          </div>

          {/* Dot nav */}
          <div className={styles.dots}>
            {images.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ""}`}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to image ${i + 1}`}
                type="button"
              />
            ))}
          </div>

          {/* Next */}
          <button
            className={`${styles.navBtn} ${styles.navNext}`}
            onClick={next}
            aria-label="Next image"
            type="button"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
