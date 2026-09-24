const fs = require('fs');
const path = require('path');

const write = (file, content) => {
  const dir = path.dirname(file);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(file, content.trimStart() + '\n', 'utf8');
  console.log('wrote:', file);
};

// ─── GALLERY IMAGE MAP ───────────────────────────────────────────────────────
// 4 large JPGs from actual project gallery
const galleryJpgs = [
  '28947752_-2087775021236730-_1933692262219483355_o.jpg',
  '29662461_-2087774927903406-_186873304590838189_o.jpg',
  '30420503_-2118379494842949-_8355277186875145840_o.jpg',
  '30424815_-2108796815801217-_1635916427438308022_o.jpg',
  '33814017_-2170416399639258-_8398402273486569472_o.jpg',
  '33964491_-2170416142972617-_6091564240609476608_o.jpg',
  '34730459_-2186837627997135-_1100437588365279232_n-2-.jpg',
  '34838324_-2186837634663801-_8718002085745917952_n.jpg',
];
const galleryPngs = Array.from({length:12}, (_,i) => i===0 ? '330x330.png' : `330x330-${i}-.png`);
const allGallery = [...galleryJpgs, ...galleryPngs];

// ─── 1. NAVBAR CSS ───────────────────────────────────────────────────────────
write('components/layout/Navbar.css', `
.navbar {
  background: #ffffff;
  border-bottom: 1px solid #ebebeb;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 1px 4px rgba(0,0,0,0.06);
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.logo-link {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.logo-link img {
  height: 44px !important;
  width: auto !important;
  object-fit: contain;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.75rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links a {
  font-size: 0.9rem;
  font-weight: 500;
  color: #333;
  text-decoration: none;
  letter-spacing: 0.01em;
  transition: color 0.2s;
  white-space: nowrap;
}

.nav-links a:hover {
  color: #005ce6;
}

.nav-actions .cta-btn {
  background-color: #005ce6;
  color: #fff;
  padding: 0.45rem 1.1rem;
  border-radius: 5px;
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.2s;
  white-space: nowrap;
}

.nav-actions .cta-btn:hover {
  background-color: #004abf;
}

/* Mobile burger */
.burger {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}
.burger span {
  display: block;
  width: 22px;
  height: 2px;
  background: #333;
  border-radius: 2px;
  transition: all 0.3s;
}

/* Mobile menu */
.mobile-menu {
  display: none;
  flex-direction: column;
  background: #fff;
  border-top: 1px solid #ebebeb;
  padding: 1rem 2rem;
  gap: 0.75rem;
}
.mobile-menu a {
  font-size: 1rem;
  color: #333;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0;
  border-bottom: 1px solid #f0f0f0;
}
.mobile-menu.open {
  display: flex;
}

@media (max-width: 768px) {
  .nav-links, .nav-actions {
    display: none;
  }
  .burger {
    display: flex;
  }
}
`);

// ─── 2. NAVBAR TSX ───────────────────────────────────────────────────────────
write('components/layout/Navbar.tsx', `
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link href="/" className="logo-link">
          <Image
            src="/images/website_logo.svg"
            alt="Melbourne Property Management and Services"
            width={200}
            height={44}
            priority
            style={{ height: '44px', width: 'auto' }}
          />
        </Link>

        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="nav-actions">
          <Link href="/contact" className="cta-btn">Get a Quote</Link>
        </div>

        <button className="burger" aria-label="Toggle menu" onClick={() => setOpen(o => !o)}>
          <span /><span /><span />
        </button>
      </div>

      <div className={\`mobile-menu \${open ? 'open' : ''}\`}>
        <Link href="/" onClick={() => setOpen(false)}>Home</Link>
        <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
        <Link href="/gallery" onClick={() => setOpen(false)}>Gallery</Link>
        <Link href="/reviews" onClick={() => setOpen(false)}>Reviews</Link>
        <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        <Link href="/contact" className="cta-btn" onClick={() => setOpen(false)} style={{marginTop:'0.5rem'}}>Get a Quote</Link>
      </div>
    </header>
  );
}
`);

// ─── 3. HERO SLIDER CLIENT COMPONENT ─────────────────────────────────────────
write('components/home/HeroSlider.tsx', `
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
            className={\`\${styles.slide} \${i === current ? styles.active : ''}\`}
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
            className={\`\${styles.dot} \${i === current ? styles.dotActive : ''}\`}
            onClick={() => setCurrent(i)}
            aria-label={\`Go to slide \${i + 1}\`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button className={\`\${styles.arrow} \${styles.prev}\`} onClick={() => setCurrent(c => (c - 1 + slides.length) % slides.length)} aria-label="Previous slide">‹</button>
      <button className={\`\${styles.arrow} \${styles.next}\`} onClick={() => setCurrent(c => (c + 1) % slides.length)} aria-label="Next slide">›</button>
    </section>
  );
}
`);

write('components/home/HeroSlider.module.css', `
.hero {
  position: relative;
  height: 90vh;
  min-height: 520px;
  max-height: 860px;
  overflow: hidden;
  background: #111;
}

.slides {
  position: absolute;
  inset: 0;
}

.slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 1s ease;
}

.slide.active {
  opacity: 1;
}

.slideImg {
  object-fit: cover;
  object-position: center;
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.3) 60%,
    rgba(0, 0, 0, 0.1) 100%
  );
}

.content {
  position: relative;
  z-index: 10;
  height: 100%;
  display: flex;
  align-items: center;
}

.content .container {
  max-width: 720px;
}

.eyebrow {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 700;
  color: #60a5fa;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 1.25rem;
}

.headline {
  font-size: clamp(2.25rem, 5vw, 4rem);
  font-weight: 700;
  color: #fff;
  line-height: 1.1;
  margin-bottom: 1.25rem;
  letter-spacing: -0.02em;
}

.sub {
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: rgba(255,255,255,0.85);
  line-height: 1.6;
  margin-bottom: 2.5rem;
  max-width: 540px;
}

.ctas {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.primary {
  background: #005ce6;
  color: #fff;
  padding: 0.85rem 2rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: background 0.2s;
}
.primary:hover { background: #004abf; }

.secondary {
  background: rgba(255,255,255,0.12);
  color: #fff;
  border: 1.5px solid rgba(255,255,255,0.5);
  padding: 0.85rem 2rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  backdrop-filter: blur(4px);
  transition: background 0.2s;
}
.secondary:hover { background: rgba(255,255,255,0.22); }

/* Dots */
.dots {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 20;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255,255,255,0.4);
  border: none;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
  padding: 0;
}

.dotActive {
  background: #fff;
  transform: scale(1.3);
}

/* Arrows */
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  background: rgba(255,255,255,0.12);
  border: 1.5px solid rgba(255,255,255,0.3);
  color: #fff;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  backdrop-filter: blur(4px);
  transition: background 0.2s;
  line-height: 1;
  padding: 0;
}
.arrow:hover { background: rgba(255,255,255,0.25); }
.prev { left: 1.5rem; }
.next { right: 1.5rem; }

@media (max-width: 768px) {
  .hero { height: 75vh; }
  .prev { left: 0.75rem; }
  .next { right: 0.75rem; }
  .arrow { width: 38px; height: 38px; font-size: 1.2rem; }
  .overlay {
    background: rgba(0,0,0,0.5);
  }
}
`);

// ─── 4. SERVICES SECTION (homepage) ──────────────────────────────────────────
write('components/home/ServicesSection.tsx', `
import Image from "next/image";
import Link from "next/link";
import styles from "./ServicesSection.module.css";

const services = [
  {
    title: "Steam Cleaning",
    description: "Deep cleaning designed to refresh carpets, upholstery, and other surfaces. Great for residential, rental, and commercial properties.",
    img: "/gallery/30424815_-2108796815801217-_1635916427438308022_o.jpg",
    href: "/services/steam-cleaning",
  },
  {
    title: "Strip & Polish",
    description: "Restore and protect hard flooring surfaces with a professional strip and polish service that brings floors back to their best.",
    img: "/gallery/33964491_-2170416142972617-_6091564240609476608_o.jpg",
    href: "/services/strip-and-polish",
  },
  {
    title: "Property Maintenance",
    description: "Practical maintenance support that keeps properties presentable, functional, and well looked after — for landlords, agents, and owners.",
    img: "/gallery/29662461_-2087774927903406-_186873304590838189_o.jpg",
    href: "/services/property-maintenance",
  },
];

export default function ServicesSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>WHAT WE DO</span>
          <h2 className={styles.heading}>Core Property Services</h2>
          <p className={styles.sub}>Three specialist services to keep Melbourne properties clean, maintained, and looking their best.</p>
        </div>
        <div className={styles.grid}>
          {services.map((s) => (
            <div key={s.title} className={styles.card}>
              <div className={styles.imgWrap}>
                <Image src={s.img} alt={s.title} fill className={styles.img} sizes="(max-width:768px) 100vw, 33vw" />
              </div>
              <div className={styles.body}>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <Link href={s.href} className={styles.link}>Learn More →</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`);

write('components/home/ServicesSection.module.css', `
.section {
  padding: 5rem 0;
  background: #fff;
}

.header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.eyebrow {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 700;
  color: #005ce6;
  letter-spacing: 2px;
  margin-bottom: 0.75rem;
}

.heading {
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.sub {
  font-size: 1.1rem;
  color: #666;
  max-width: 560px;
  margin: 0 auto;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.card {
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #eaeaea;
  background: #fff;
  transition: box-shadow 0.3s, transform 0.3s;
}
.card:hover {
  box-shadow: 0 12px 32px rgba(0,0,0,0.1);
  transform: translateY(-4px);
}

.imgWrap {
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
  background: #f0f0f0;
}

.img {
  object-fit: cover;
  transition: transform 0.5s;
}
.card:hover .img {
  transform: scale(1.05);
}

.body {
  padding: 1.5rem;
}

.body h3 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  color: #1a1a1a;
}

.body p {
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.25rem;
}

.link {
  font-size: 0.9rem;
  font-weight: 600;
  color: #005ce6;
  text-decoration: none;
  transition: color 0.2s;
}
.link:hover { color: #004abf; text-decoration: underline; }

@media (max-width: 1024px) {
  .grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 640px) {
  .grid { grid-template-columns: 1fr; }
  .imgWrap { height: 200px; }
}
`);

// ─── 5. GALLERY PREVIEW SECTION (homepage) ───────────────────────────────────
write('components/home/GalleryPreview.tsx', `
import Image from "next/image";
import Link from "next/link";
import styles from "./GalleryPreview.module.css";

const previewImgs = [
  { src: "/gallery/34838324_-2186837634663801-_8718002085745917952_n.jpg", alt: "Property work by MPM Services" },
  { src: "/gallery/34730459_-2186837627997135-_1100437588365279232_n-2-.jpg", alt: "Professional cleaning results" },
  { src: "/gallery/330x330.png", alt: "MPM Services gallery" },
  { src: "/gallery/330x330-1-.png", alt: "MPM Services gallery" },
  { src: "/gallery/330x330-2-.png", alt: "MPM Services gallery" },
  { src: "/gallery/330x330-3-.png", alt: "MPM Services gallery" },
];

export default function GalleryPreview() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>OUR WORK</span>
          <h2 className={styles.heading}>Results You Can See</h2>
          <p className={styles.sub}>A selection of properties we've worked on across Melbourne.</p>
        </div>
        <div className={styles.grid}>
          {previewImgs.map((img, i) => (
            <div key={i} className={styles.item}>
              <Image src={img.src} alt={img.alt} fill className={styles.img} sizes="(max-width:640px) 50vw, 33vw" />
            </div>
          ))}
        </div>
        <div className={styles.viewAll}>
          <Link href="/gallery" className={styles.viewBtn}>View Full Gallery →</Link>
        </div>
      </div>
    </section>
  );
}
`);

write('components/home/GalleryPreview.module.css', `
.section {
  padding: 5rem 0;
  background: #f8f9fa;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
}

.eyebrow {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 700;
  color: #005ce6;
  letter-spacing: 2px;
  margin-bottom: 0.75rem;
}

.heading {
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  margin-bottom: 1rem;
  color: #1a1a1a;
}

.sub {
  font-size: 1.1rem;
  color: #666;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.item {
  position: relative;
  aspect-ratio: 1;
  border-radius: 8px;
  overflow: hidden;
  background: #eaeaea;
}

.img {
  object-fit: cover;
  transition: transform 0.4s;
}
.item:hover .img {
  transform: scale(1.06);
}

.viewAll {
  text-align: center;
  margin-top: 2.5rem;
}

.viewBtn {
  display: inline-block;
  border: 2px solid #005ce6;
  color: #005ce6;
  padding: 0.75rem 2rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
}
.viewBtn:hover {
  background: #005ce6;
  color: #fff;
}

@media (max-width: 768px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 480px) {
  .grid { grid-template-columns: repeat(2, 1fr); gap: 0.5rem; }
}
`);

// ─── 6. WHY MPM SECTION ───────────────────────────────────────────────────────
write('components/home/WhyMPM.tsx', `
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
`);

write('components/home/WhyMPM.module.css', `
.section {
  padding: 5rem 0;
  background: #1a1a1a;
  color: #fff;
}

.inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;
}

.eyebrow {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 700;
  color: #60a5fa;
  letter-spacing: 2px;
  margin-bottom: 1rem;
}

.heading {
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  color: #fff;
  margin-bottom: 1.25rem;
}

.body {
  font-size: 1.05rem;
  color: rgba(255,255,255,0.75);
  line-height: 1.7;
  margin-bottom: 2rem;
}

.cta {
  display: inline-block;
  background: #005ce6;
  color: #fff;
  padding: 0.8rem 1.75rem;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s;
}
.cta:hover { background: #004abf; }

.item {
  display: flex;
  gap: 1.25rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.item:first-child { padding-top: 0; }

.num {
  font-size: 2rem;
  font-weight: 700;
  color: rgba(255,255,255,0.12);
  flex-shrink: 0;
  line-height: 1;
}

.item h4 {
  font-size: 1rem;
  color: #fff;
  margin-bottom: 0.4rem;
}

.item p {
  font-size: 0.9rem;
  color: rgba(255,255,255,0.65);
  line-height: 1.6;
}

@media (max-width: 900px) {
  .inner { grid-template-columns: 1fr; gap: 3rem; }
}
`);

// ─── 7. REVIEWS SECTION ───────────────────────────────────────────────────────
write('components/home/ReviewsSection.tsx', `
import styles from "./ReviewsSection.module.css";

const reviews = [
  { name: "Sarah M.", text: "MPM Services did a fantastic job on our rental property. The floors looked brand new after the strip and polish. Highly recommend!", stars: 5 },
  { name: "James T.", text: "Very professional service. The team was punctual, respectful of our space, and the steam cleaning results were excellent.", stars: 5 },
  { name: "Linda K.", text: "Booked them for our commercial office space. Reliable, well-priced, and great quality. Will definitely use again.", stars: 5 },
];

export default function ReviewsSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>CLIENT REVIEWS</span>
          <h2 className={styles.heading}>What Melbourne Clients Say</h2>
        </div>
        <div className={styles.grid}>
          {reviews.map((r, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.stars}>{"★".repeat(r.stars)}</div>
              <p className={styles.text}>"{r.text}"</p>
              <span className={styles.name}>— {r.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`);

write('components/home/ReviewsSection.module.css', `
.section {
  padding: 5rem 0;
  background: #fff;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
}

.eyebrow {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 700;
  color: #005ce6;
  letter-spacing: 2px;
  margin-bottom: 0.75rem;
}

.heading {
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  color: #1a1a1a;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.card {
  background: #f8f9fa;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.stars {
  color: #f59e0b;
  font-size: 1.1rem;
  letter-spacing: 2px;
}

.text {
  font-size: 1rem;
  color: #444;
  line-height: 1.7;
  flex: 1;
}

.name {
  font-size: 0.9rem;
  font-weight: 600;
  color: #888;
}

@media (max-width: 900px) { .grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 600px) { .grid { grid-template-columns: 1fr; } }
`);

// ─── 8. CONTACT CTA SECTION ───────────────────────────────────────────────────
write('components/home/ContactCTA.tsx', `
import Image from "next/image";
import Link from "next/link";
import styles from "./ContactCTA.module.css";

export default function ContactCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.bg}>
        <Image src="/gallery/33814017_-2170416399639258-_8398402273486569472_o.jpg" alt="" fill className={styles.bgImg} />
        <div className={styles.overlay} />
      </div>
      <div className={\`container \${styles.content}\`}>
        <h2 className={styles.heading}>Ready to Get Started?</h2>
        <p className={styles.sub}>Tell us about your property and we'll help you find the right service.</p>
        <div className={styles.ctas}>
          <Link href="/contact" className={styles.primary}>Request a Quote</Link>
          <a href="tel:+61451460307" className={styles.secondary}>+61 451 460 307</a>
        </div>
      </div>
    </section>
  );
}
`);

write('components/home/ContactCTA.module.css', `
.section {
  position: relative;
  padding: 7rem 0;
  overflow: hidden;
}

.bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.bgImg {
  object-fit: cover;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.62);
}

.content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: #fff;
}

.heading {
  font-size: clamp(2rem, 4vw, 3.25rem);
  color: #fff;
  margin-bottom: 1.25rem;
}

.sub {
  font-size: 1.2rem;
  color: rgba(255,255,255,0.82);
  margin-bottom: 2.5rem;
}

.ctas {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.primary {
  background: #005ce6;
  color: #fff;
  padding: 0.9rem 2.25rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: background 0.2s;
}
.primary:hover { background: #004abf; }

.secondary {
  background: rgba(255,255,255,0.12);
  border: 1.5px solid rgba(255,255,255,0.5);
  color: #fff;
  padding: 0.9rem 2.25rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  backdrop-filter: blur(4px);
  transition: background 0.2s;
}
.secondary:hover { background: rgba(255,255,255,0.22); }
`);

// ─── 9. FOOTER WITH REAL SOCIAL LOGOS ────────────────────────────────────────
write('components/layout/Footer.tsx', `
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={\`container \${styles.grid}\`}>
        <div className={styles.brand}>
          <Image src="/images/website_logo.svg" alt="MPM Services Logo" width={160} height={40} style={{height:'40px',width:'auto',marginBottom:'1rem'}} />
          <p>Professional property services across Melbourne — steam cleaning, strip & polish, and property maintenance.</p>
          <div className={styles.socials}>
            <a href="https://www.facebook.com/Melbournepropertymanagementandservices/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <Image src="/images/facebook.svg" alt="Facebook" width={24} height={24} />
            </a>
            <a href="https://www.instagram.com/mpm_services" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Image src="/images/instagram.svg" alt="Instagram" width={24} height={24} />
            </a>
          </div>
        </div>

        <div className={styles.col}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/reviews">Reviews</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Services</h4>
          <ul>
            <li><Link href="/services/steam-cleaning">Steam Cleaning</Link></li>
            <li><Link href="/services/strip-and-polish">Strip & Polish</Link></li>
            <li><Link href="/services/property-maintenance">Property Maintenance</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:+61451460307">+61 451 460 307</a></li>
            <li><a href="mailto:info@mpmservices.com.au">info@mpmservices.com.au</a></li>
            <li>Melbourne, VIC 3000</li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Melbourne Property Management and Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
`);

write('components/layout/Footer.module.css', `
.footer {
  background: #111;
  color: #ccc;
  padding-top: 4rem;
  font-size: 0.9rem;
}

.grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

.brand p {
  color: #aaa;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  max-width: 280px;
}

.socials {
  display: flex;
  gap: 0.75rem;
}

.socials a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255,255,255,0.08);
  transition: background 0.2s;
}
.socials a:hover { background: rgba(255,255,255,0.16); }

.col h4 {
  color: #fff;
  font-size: 0.95rem;
  margin-bottom: 1.25rem;
  font-weight: 600;
}

.col ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.col a {
  color: #aaa;
  text-decoration: none;
  transition: color 0.2s;
}
.col a:hover { color: #fff; }

.bottom {
  padding: 1.5rem 0;
  text-align: center;
}

.bottom p {
  color: #555;
  font-size: 0.8rem;
}

@media (max-width: 900px) {
  .grid { grid-template-columns: 1fr 1fr; gap: 2rem; }
}
@media (max-width: 560px) {
  .grid { grid-template-columns: 1fr; }
  .brand p { max-width: 100%; }
}
`);

// ─── 10. HOMEPAGE ─────────────────────────────────────────────────────────────
write('app/page.tsx', `
import HeroSlider from "@/components/home/HeroSlider";
import ServicesSection from "@/components/home/ServicesSection";
import GalleryPreview from "@/components/home/GalleryPreview";
import WhyMPM from "@/components/home/WhyMPM";
import ReviewsSection from "@/components/home/ReviewsSection";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <ServicesSection />
      <GalleryPreview />
      <WhyMPM />
      <ReviewsSection />
      <ContactCTA />
    </main>
  );
}
`);

// ─── 11. SERVICES PAGE ────────────────────────────────────────────────────────
write('app/services/page.tsx', `
import Image from "next/image";
import Link from "next/link";
import styles from "./services.module.css";

export const metadata = {
  title: "Property Services Melbourne | MPM Services",
  description: "Steam cleaning, strip & polish, and property maintenance services across Melbourne."
};

const services = [
  {
    title: "Steam Cleaning",
    slug: "/services/steam-cleaning",
    img: "/gallery/30424815_-2108796815801217-_1635916427438308022_o.jpg",
    description: "Deep professional steam cleaning for carpets, upholstery, and surfaces. Ideal for residential, rental, and commercial properties.",
    benefits: ["Carpet & upholstery cleaning","Hard floor steam cleaning","Residential & commercial","Pre/post tenancy cleans"],
  },
  {
    title: "Strip & Polish",
    slug: "/services/strip-and-polish",
    img: "/gallery/33964491_-2170416142972617-_6091564240609476608_o.jpg",
    description: "Restore the finish of hard flooring surfaces with a professional strip and polish treatment. Bring floors back to their best.",
    benefits: ["Hard floor restoration","Strip & reseal","Vinyl, tiles & more","Rental & commercial properties"],
  },
  {
    title: "Property Maintenance",
    slug: "/services/property-maintenance",
    img: "/gallery/29662461_-2087774927903406-_186873304590838189_o.jpg",
    description: "Practical property maintenance support that keeps spaces presentable, functional, and well looked after.",
    benefits: ["General maintenance","Property presentation","Landlord & agent support","Residential & commercial"],
  },
];

export default function ServicesPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.eyebrow}>OUR SERVICES</span>
          <h1>Professional Property Services in Melbourne</h1>
          <p>Three specialist services to keep your property clean, polished, and well-maintained.</p>
        </div>
      </section>

      <section className={styles.list}>
        <div className="container">
          {services.map((s, i) => (
            <div key={s.slug} className={\`\${styles.serviceRow} \${i % 2 === 1 ? styles.reverse : ''}\`}>
              <div className={styles.imgCol}>
                <div className={styles.imgWrap}>
                  <Image src={s.img} alt={s.title} fill className={styles.img} sizes="(max-width:768px)100vw,50vw" />
                </div>
              </div>
              <div className={styles.textCol}>
                <h2>{s.title}</h2>
                <p>{s.description}</p>
                <ul className={styles.benefits}>
                  {s.benefits.map(b => <li key={b}>✓ {b}</li>)}
                </ul>
                <div className={styles.rowCtas}>
                  <Link href={s.slug} className={styles.learn}>Learn More</Link>
                  <Link href="/contact" className={styles.quote}>Get a Quote</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
`);

write('app/services/services.module.css', `
.main { width: 100%; }

.hero {
  background: #f8f9fa;
  padding: 5rem 0;
  border-bottom: 1px solid #eaeaea;
  text-align: center;
}

.eyebrow {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 700;
  color: #005ce6;
  letter-spacing: 2px;
  margin-bottom: 1rem;
}

.hero h1 { font-size: clamp(2rem,4vw,3rem); margin-bottom: 1rem; }
.hero p { font-size: 1.1rem; color: #666; max-width: 560px; margin: 0 auto; }

.list { padding: 5rem 0; }

.serviceRow {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 6rem;
}
.serviceRow:last-child { margin-bottom: 0; }

.reverse { direction: rtl; }
.reverse > * { direction: ltr; }

.imgCol {}
.imgWrap {
  position: relative;
  width: 100%;
  aspect-ratio: 4/3;
  border-radius: 10px;
  overflow: hidden;
}
.img { object-fit: cover; }

.textCol { display: flex; flex-direction: column; gap: 1.25rem; }
.textCol h2 { font-size: clamp(1.6rem, 2.5vw, 2.25rem); }
.textCol p { font-size: 1.05rem; color: #555; line-height: 1.7; }

.benefits { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.5rem; }
.benefits li { font-size: 0.95rem; color: #444; }

.rowCtas { display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 0.5rem; }

.learn {
  border: 2px solid #005ce6;
  color: #005ce6;
  padding: 0.7rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
}
.learn:hover { background: #005ce6; color: #fff; }

.quote {
  background: #005ce6;
  color: #fff;
  padding: 0.7rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  transition: background 0.2s;
}
.quote:hover { background: #004abf; }

@media (max-width: 768px) {
  .serviceRow { grid-template-columns: 1fr; gap: 2rem; }
  .reverse { direction: ltr; }
}
`);

// ─── 12. GALLERY PAGE ─────────────────────────────────────────────────────────
write('app/gallery/page.tsx', `
import Image from "next/image";
import styles from "./gallery.module.css";

export const metadata = {
  title: "Gallery | MPM Services Melbourne",
  description: "View our gallery of property cleaning, floor polishing and maintenance work across Melbourne."
};

const imgs = [
  { src: "/gallery/28947752_-2087775021236730-_1933692262219483355_o.jpg", alt: "MPM Services work", large: true },
  { src: "/gallery/29662461_-2087774927903406-_186873304590838189_o.jpg", alt: "Property maintenance Melbourne" },
  { src: "/gallery/30420503_-2118379494842949-_8355277186875145840_o.jpg", alt: "Steam cleaning results" },
  { src: "/gallery/30424815_-2108796815801217-_1635916427438308022_o.jpg", alt: "Professional floor care" },
  { src: "/gallery/33814017_-2170416399639258-_8398402273486569472_o.jpg", alt: "Strip and polish Melbourne", large: true },
  { src: "/gallery/33964491_-2170416142972617-_6091564240609476608_o.jpg", alt: "Polished floor results" },
  { src: "/gallery/34730459_-2186837627997135-_1100437588365279232_n-2-.jpg", alt: "MPM property work" },
  { src: "/gallery/34838324_-2186837634663801-_8718002085745917952_n.jpg", alt: "Property services" },
  { src: "/gallery/330x330.png", alt: "MPM Services gallery" },
  { src: "/gallery/330x330-1-.png", alt: "Gallery image" },
  { src: "/gallery/330x330-2-.png", alt: "Gallery image" },
  { src: "/gallery/330x330-3-.png", alt: "Gallery image" },
  { src: "/gallery/330x330-4-.png", alt: "Gallery image" },
  { src: "/gallery/330x330-5-.png", alt: "Gallery image" },
  { src: "/gallery/330x330-6-.png", alt: "Gallery image" },
  { src: "/gallery/330x330-7-.png", alt: "Gallery image" },
  { src: "/gallery/330x330-8-.png", alt: "Gallery image" },
  { src: "/gallery/330x330-9-.png", alt: "Gallery image" },
  { src: "/gallery/330x330-10-.png", alt: "Gallery image" },
  { src: "/gallery/330x330-11-.png", alt: "Gallery image" },
];

export default function GalleryPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.eyebrow}>OUR WORK</span>
          <h1>MPM Services Gallery</h1>
          <p>A visual record of properties we've looked after across Melbourne.</p>
        </div>
      </section>

      <section className={styles.grid_section}>
        <div className="container">
          <div className={styles.grid}>
            {imgs.map((img, i) => (
              <div key={i} className={\`\${styles.item} \${img.large ? styles.large : ''}\`}>
                <Image src={img.src} alt={img.alt} fill className={styles.img} sizes="(max-width:640px)100vw,(max-width:1024px)50vw,33vw" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
`);

write('app/gallery/gallery.module.css', `
.main { width: 100%; }

.hero {
  background: #f8f9fa;
  padding: 5rem 0;
  border-bottom: 1px solid #eaeaea;
  text-align: center;
}

.eyebrow {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 700;
  color: #005ce6;
  letter-spacing: 2px;
  margin-bottom: 1rem;
}

.hero h1 { font-size: clamp(2rem,4vw,3rem); margin-bottom: 1rem; }
.hero p { font-size: 1.1rem; color: #666; max-width: 560px; margin: 0 auto; }

.grid_section { padding: 4rem 0; }

.grid {
  columns: 3;
  column-gap: 1rem;
}

.item {
  position: relative;
  display: block;
  break-inside: avoid;
  margin-bottom: 1rem;
  border-radius: 8px;
  overflow: hidden;
  background: #eaeaea;
  aspect-ratio: 1;
}

.item.large {
  aspect-ratio: 4/3;
}

.img {
  object-fit: cover;
  position: relative !important;
  width: 100% !important;
  height: auto !important;
}

@media (max-width: 768px) {
  .grid { columns: 2; }
}
@media (max-width: 480px) {
  .grid { columns: 1; }
}
`);

// ─── 13. REVIEWS PAGE ─────────────────────────────────────────────────────────
write('app/reviews/page.tsx', `
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
`);

write('app/reviews/reviews.module.css', `
.main { width: 100%; }

.hero {
  background: #f8f9fa;
  padding: 5rem 0;
  border-bottom: 1px solid #eaeaea;
  text-align: center;
}

.eyebrow {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 700;
  color: #005ce6;
  letter-spacing: 2px;
  margin-bottom: 1rem;
}
.hero h1 { font-size: clamp(2rem,4vw,3rem); margin-bottom: 1rem; }
.hero p { font-size: 1.1rem; color: #666; max-width: 560px; margin: 0 auto; }

.reviews { padding: 5rem 0; }

.grid {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 2rem;
}

.card {
  background: #fff;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.stars { color: #f59e0b; font-size: 1.1rem; letter-spacing: 2px; }

.text { font-size: 1rem; color: #444; line-height: 1.7; flex: 1; }

.meta { display: flex; flex-direction: column; gap: 0.25rem; }
.meta strong { font-size: 0.95rem; color: #1a1a1a; }
.meta span { font-size: 0.85rem; color: #888; }

.cta {
  padding: 5rem 0;
  background: #f8f9fa;
}

.cta h2 { font-size: clamp(1.75rem,3vw,2.5rem); margin-bottom: 1rem; }
.cta p { font-size: 1.1rem; color: #666; margin-bottom: 2rem; }

.ctaBtn {
  background: #005ce6;
  color: #fff;
  padding: 0.85rem 2rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: background 0.2s;
  display: inline-block;
}
.ctaBtn:hover { background: #004abf; }

@media (max-width: 900px) { .grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 600px) { .grid { grid-template-columns: 1fr; } }
`);

// ─── 14. GLOBALS.CSS ──────────────────────────────────────────────────────────
write('app/globals.css', `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

:root {
  --primary: #005ce6;
  --primary-dark: #004abf;
  --text: #1a1a1a;
  --text-light: #666;
  --bg: #fff;
  --bg-subtle: #f8f9fa;
  --border: #eaeaea;
  --font: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

body {
  font-family: var(--font);
  color: var(--text);
  background: var(--bg);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

h1,h2,h3,h4,h5,h6 {
  font-weight: 700;
  line-height: 1.15;
  margin-bottom: 0.5rem;
}

a { color: inherit; text-decoration: none; }
img { display: block; max-width: 100%; }

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.2s;
  cursor: pointer;
  border: none;
  text-decoration: none;
}

.btn-primary { background: var(--primary); color: #fff; }
.btn-primary:hover { background: var(--primary-dark); }

.btn-secondary { background: var(--bg-subtle); border: 1.5px solid var(--border); color: var(--text); }
.btn-secondary:hover { background: #eaeaea; }
`);

console.log("All components built successfully.");
