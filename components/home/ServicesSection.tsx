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

