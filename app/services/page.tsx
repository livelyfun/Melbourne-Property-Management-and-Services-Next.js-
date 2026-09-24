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
            <div key={s.slug} className={`${styles.serviceRow} ${i % 2 === 1 ? styles.reverse : ''}`}>
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

