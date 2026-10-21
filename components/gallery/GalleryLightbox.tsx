"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type MouseEvent,
  type TouchEvent,
} from "react";
import Icon from "@/components/ui/Icon";
import styles from "./GalleryLightbox.module.css";

export interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
  category?: string;
  /** width / height, used to keep the masonry rhythm intact */
  ratio?: number;
}

interface Props {
  images: GalleryImage[];
  showFilters?: boolean;
}

const pad = (value: number) => String(value).padStart(2, "0");

export default function GalleryLightbox({ images, showFilters = false }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState("All");
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const filmstripRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const isOpen = activeIndex !== null;

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(images.map((img) => img.category).filter(Boolean)))],
    [images],
  ) as string[];

  const filtered = useMemo(
    () => (filter === "All" ? images : images.filter((img) => img.category === filter)),
    [images, filter],
  );

  const current = activeIndex !== null ? filtered[activeIndex] : null;

  // ── Navigation ──────────────────────────────────────────
  const prev = useCallback(() => {
    setActiveIndex((i) =>
      i === null ? null : (i - 1 + filtered.length) % filtered.length,
    );
  }, [filtered.length]);

  const next = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i + 1) % filtered.length));
  }, [filtered.length]);

  const close = useCallback(() => {
    setActiveIndex(null);
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  }, []);

  // ── Keyboard handling ────────────────────────────────────
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        prev();
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        next();
        return;
      }

      if (event.key === "Home") {
        event.preventDefault();
        setActiveIndex(0);
        return;
      }

      if (event.key === "End") {
        event.preventDefault();
        setActiveIndex(filtered.length - 1);
        return;
      }

      if (event.key === "Tab") {
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
        );
        if (!focusable || focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close, prev, next, filtered.length]);

  // ── Focus + scroll lock ──────────────────────────────────
  useEffect(() => {
    if (!isOpen) return;

    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    const previousOverflow = document.body.style.overflow;
    const previousPadding = document.body.style.paddingRight;

    document.body.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;

    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPadding;
    };
  }, [isOpen]);

  // ── Keep the active thumbnail in view ────────────────────
  useEffect(() => {
    if (!isOpen) return;
    const strip = filmstripRef.current;
    if (!strip) return;

    const active = strip.querySelector<HTMLElement>('[data-current="true"]');
    active?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [isOpen, activeIndex]);

  const onBackdrop = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) close();
  };

  const onTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const onTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const start = touchStart.current;
    if (!start) return;

    const touch = event.changedTouches[0];
    const dx = touch.clientX - start.x;
    const dy = touch.clientY - start.y;
    touchStart.current = null;

    if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) next();
      else prev();
    }
  };

  return (
    <>
      <div className={styles.toolbar}>
        {showFilters && categories.length > 1 ? (
          <div className={styles.filters} role="group" aria-label="Filter gallery by category">
            {categories.map((category) => {
              const count =
                category === "All"
                  ? images.length
                  : images.filter((img) => img.category === category).length;

              return (
                <button
                  key={category}
                  type="button"
                  className={`${styles.filter} ${filter === category ? styles.filterActive : ""}`}
                  onClick={() => {
                    setFilter(category);
                    setActiveIndex(null);
                  }}
                  aria-pressed={filter === category}
                >
                  {category}
                  <span>{pad(count)}</span>
                </button>
              );
            })}
          </div>
        ) : (
          <span />
        )}

        <p className={styles.result} aria-live="polite">
          <strong>{pad(filtered.length)}</strong>
          spaces
        </p>
      </div>

      <div className={styles.masonry} key={filter}>
        {filtered.map((img, index) => (
          <button
            key={img.src}
            type="button"
            className={styles.card}
            onClick={(event) => {
              triggerRef.current = event.currentTarget;
              setActiveIndex(index);
            }}
            aria-label={`Open larger view: ${img.alt}`}
          >
            <span
              className={styles.frame}
              style={{ aspectRatio: `${img.ratio ?? 1.5}` }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className={styles.thumbImg}
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
              />
              <span className={styles.shade} aria-hidden="true" />
              <span className={styles.hover} aria-hidden="true">
                <span className={styles.hoverInner}>
                  <span className={styles.hoverTitle}>{img.title ?? img.category}</span>
                  <span className={styles.hoverText}>{img.alt}</span>
                </span>
              </span>
            </span>
            <span className={styles.caption}>
              <span className={styles.captionCat}>{img.category}</span>
              <span className={styles.captionArrow} aria-hidden="true">
                <Icon name="arrow-up-right" size={13} />
              </span>
            </span>
          </button>
        ))}
      </div>

      {isOpen && current && activeIndex !== null && (
        <div
          ref={dialogRef}
          className={styles.backdrop}
          onClick={onBackdrop}
          role="dialog"
          aria-modal="true"
          aria-label={`Gallery image ${activeIndex + 1} of ${filtered.length}: ${current.alt}`}
        >
          <div className={styles.stage}>
            <header className={styles.top}>
              <div className={styles.topLeft}>
                <span className={styles.brand}>MPM</span>
                <span className={styles.rule} aria-hidden="true" />
                <span className={styles.topCategory}>{current.category ?? "Gallery"}</span>
              </div>

              <div className={styles.topRight}>
                <span className={styles.counter} aria-hidden="true">
                  <strong>{pad(activeIndex + 1)}</strong>
                  <span>/ {pad(filtered.length)}</span>
                </span>
                <button
                  ref={closeRef}
                  className={styles.close}
                  onClick={close}
                  aria-label="Close image preview"
                  type="button"
                >
                  <Icon name="x" size={18} />
                </button>
              </div>
            </header>

            <div
              className={styles.viewer}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <button
                className={`${styles.navBtn} ${styles.navPrev}`}
                onClick={prev}
                aria-label="Previous image"
                type="button"
              >
                <Icon name="chevron-left" size={20} />
              </button>

              <div className={styles.imageWrap}>
                <Image
                  key={current.src}
                  src={current.src}
                  alt={current.alt}
                  width={1600}
                  height={Math.round(1600 / (current.ratio ?? 1.5))}
                  className={styles.fullImg}
                  sizes="(max-width: 900px) 92vw, 82vw"
                  loading="eager"
                />
              </div>

              <button
                className={`${styles.navBtn} ${styles.navNext}`}
                onClick={next}
                aria-label="Next image"
                type="button"
              >
                <Icon name="chevron-right" size={20} />
              </button>
            </div>

            <footer className={styles.bottom}>
              <div className={styles.detail}>
                <span className={styles.detailLabel}>
                  {current.category ?? "Gallery"}
                </span>
                {current.title ? (
                  <strong className={styles.detailTitle}>{current.title}</strong>
                ) : null}
                <p className={styles.detailText}>{current.alt}</p>
              </div>

              <div className={styles.filmstrip} ref={filmstripRef}>
                {filtered.map((img, index) => (
                  <button
                    key={img.src}
                    type="button"
                    className={`${styles.film} ${index === activeIndex ? styles.filmActive : ""}`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`View image ${index + 1}: ${img.alt}`}
                    aria-current={index === activeIndex}
                    data-current={index === activeIndex}
                  >
                    <Image
                      src={img.src}
                      alt=""
                      fill
                      sizes="96px"
                      className={styles.filmImg}
                    />
                  </button>
                ))}
              </div>

              <span className={styles.hint}>
                <kbd>←</kbd>
                <kbd>→</kbd>
                to browse · <kbd>Esc</kbd> to close
              </span>
            </footer>
          </div>
        </div>
      )}
    </>
  );
}
