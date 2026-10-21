import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import styles from "./Process.module.css";

const steps = [
  {
    number: "01",
    title: "Tell us about the property",
    body: "Send a few details, upload photos or give us a quick call. We will ask the right questions up front.",
  },
  {
    number: "02",
    title: "Get a clear quote",
    body: "We review the scope and come back with a straightforward, no-obligation price.",
  },
  {
    number: "03",
    title: "We schedule the work",
    body: "Choose a time that suits you. We arrive with the right team and equipment.",
  },
  {
    number: "04",
    title: "Enjoy the result",
    body: "We finish the job, tidy up and leave your property clean, polished and ready.",
  },
];

export default function Process() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={styles.bg} aria-hidden="true">
        <Image
          src="/images/living-gallery.webp"
          alt=""
          fill
          sizes="100vw"
          className={styles.bgImage}
        />
      </div>
      <div className={styles.overlay} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <div className={styles.intro}>
          <span className="eyebrow eyebrow--light">02 — How it works</span>
          <h2 className={`display h2 ${styles.heading}`}>
            Simple from the
            <br />
            <em>first message.</em>
          </h2>
          <p className={styles.copy}>
            No long forms, no guesswork. A straightforward process designed to get
            your property looking its best with minimal fuss.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Start with a free quote
            <Icon name="arrow-right" size={15} />
          </Link>

          <div className={styles.note}>
            <Icon name="clock" size={15} />
            Clear quotes. No obligation.
          </div>
        </div>

        <div className={styles.steps}>
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 80}>
              <div className={styles.step}>
                <span className={styles.number}>{step.number}</span>
                <div className={styles.stepBody}>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
                <span className={styles.line} aria-hidden="true" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
