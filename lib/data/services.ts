export interface ServiceHighlight {
  title: string;
  body: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  eyebrow: string;
  tagline: string;
  summary: string;
  heroImage: string;
  heroAlt: string;
  detailHeroImage?: string;
  detailHeroAlt?: string;
  cardImage?: string;
  gallery: { src: string; alt: string }[];
  paragraphs: string[];
  includes: string[];
  highlights: ServiceHighlight[];
  faqs: ServiceFaq[];
  icon: "droplet" | "layers" | "wrench";
}

export const services: Service[] = [
  {
    id: "steam-cleaning",
    title: "Steam Cleaning",
    slug: "/services/steam-cleaning",
    eyebrow: "Deep clean",
    tagline: "Deep clean. Fresher spaces.",
    summary:
      "High-temperature steam cleaning for carpets, upholstery and compatible surfaces — lifting embedded dirt without harsh chemicals.",
    heroImage: "/images/cleaner.webp",
    heroAlt: "Professional cleaner steam cleaning a modern Melbourne property",
    detailHeroImage: "/images/living-warm.webp",
    detailHeroAlt: "Freshly cleaned living space with soft furnishings and natural light",
    cardImage: "/images/cleaner.webp",
    gallery: [
      { src: "/images/sofa-clean.webp", alt: "Upholstery extraction during a steam clean" },
      { src: "/images/carpet-clean.webp", alt: "Carpet steam cleaning in progress" },
      { src: "/images/living-warm.webp", alt: "Freshly cleaned living space" },
    ],
    paragraphs: [
      "Steam cleaning uses high-temperature steam to deep-clean carpets, upholstery and other compatible surfaces — removing embedded dirt, allergens and bacteria without harsh chemicals.",
      "It is an ideal service for properties undergoing tenancy changeovers, regular maintenance cleans, or a post-renovation refresh. We work carefully around your furniture and finishes, and leave each space ready to use.",
    ],
    includes: [
      "Carpets & rugs",
      "Upholstery & sofas",
      "Dining chairs",
      "Mattresses",
      "Hard floors (compatible types)",
      "Residential, rental & commercial",
    ],
    highlights: [
      {
        title: "High-temperature clean",
        body: "Heat does the hard work — lifting deep-set dirt and allergens from carpet and fabric fibres.",
      },
      {
        title: "No harsh chemicals",
        body: "A gentler clean for homes with children, pets or sensitive occupants — without compromising results.",
      },
      {
        title: "Tenancy ready",
        body: "A reliable pre- or post-tenancy clean that helps properties present at their best for inspections.",
      },
      {
        title: "Careful on-site",
        body: "We protect surrounds, work methodically and leave the space tidy when we are done.",
      },
    ],
    faqs: [
      {
        question: "How long does steam cleaning take to dry?",
        answer:
          "Most carpets and upholstery are touch-dry within a few hours, depending on the fabric, ventilation and weather. We can talk through drying times when we quote your property.",
      },
      {
        question: "Can you clean rugs and delicate upholstery?",
        answer:
          "We assess each fabric before starting. Most rugs and upholstery are suitable for steam cleaning, and we will always flag anything that needs a different approach.",
      },
      {
        question: "Do you bring your own equipment?",
        answer:
          "Yes. We arrive with professional-grade equipment and everything needed for the job — you only need to provide access to the property.",
      },
    ],
    icon: "droplet",
  },
  {
    id: "strip-and-polish",
    title: "Strip & Polish",
    slug: "/services/strip-and-polish",
    eyebrow: "Floor restoration",
    tagline: "Restore the finish. Protect the floor.",
    summary:
      "A professional strip, seal and polish treatment that removes worn coatings and brings hard floors back to their best.",
    heroImage: "/images/living-beamed.webp",
    heroAlt: "Warm timber floors and a beautifully presented living space",
    cardImage: "/images/living-beamed.webp",
    gallery: [
      { src: "/images/floor-room.webp", alt: "Freshly polished timber flooring" },
      { src: "/images/living-modern.webp", alt: "Polished hard floors in a modern living space" },
      { src: "/images/living-warm.webp", alt: "Restored floors in a light-filled living room" },
    ],
    paragraphs: [
      "Strip and polish is a specialist hard floor treatment that removes old, worn coatings and replaces them with a fresh, protective seal.",
      "The result is a cleaner, brighter floor with an even finish — ideal for rental properties, commercial spaces and any home with high-traffic hard floors. We match the treatment to your floor type and the level of wear.",
    ],
    includes: [
      "Vinyl & vinyl composite tiles",
      "Timber floors",
      "Ceramic & porcelain tiles",
      "Terrazzo",
      "Polished concrete",
      "Commercial & residential",
    ],
    highlights: [
      {
        title: "Brings back the shine",
        body: "Old build-up and dull coatings are stripped away for a clean, uniform surface.",
      },
      {
        title: "A protective seal",
        body: "A fresh finish helps protect the floor from daily wear, scuffs and moisture.",
      },
      {
        title: "Built for traffic",
        body: "Ideal for entryways, retail, offices and rentals where floors work hard.",
      },
      {
        title: "Matched to your floor",
        body: "We assess the material and condition first, then recommend the right treatment.",
      },
    ],
    faqs: [
      {
        question: "How often should hard floors be stripped and polished?",
        answer:
          "It depends on traffic and the existing coating. Busy commercial spaces may need it every six to twelve months, while many homes can go considerably longer.",
      },
      {
        question: "Can you polish floors in an occupied property?",
        answer:
          "Yes, with some planning. We can work in sections and advise on drying times and access so disruption stays manageable.",
      },
      {
        question: "Will stripping damage my floors?",
        answer:
          "No. We identify the floor type first and use a suitable process. If a floor is not appropriate for stripping, we will tell you before any work begins.",
      },
    ],
    icon: "layers",
  },
  {
    id: "property-maintenance",
    title: "Property Maintenance",
    slug: "/services/property-maintenance",
    eyebrow: "Ongoing care",
    tagline: "Practical care, all year round.",
    summary:
      "Reliable maintenance support that keeps properties presentable, functional and ready — for landlords, agents and owners.",
    heroImage: "/images/window-clean.webp",
    heroAlt: "Careful property maintenance and surface care in a Melbourne home",
    cardImage: "/images/handyman.webp",
    gallery: [
      { src: "/images/handyman.webp", alt: "General property maintenance and repairs" },
      { src: "/images/house-exterior.webp", alt: "Well-maintained modern Melbourne home" },
      { src: "/images/cleaner.webp", alt: "Professional property care team at work" },
    ],
    paragraphs: [
      "Our property maintenance service helps owners, landlords and real estate agents keep properties clean, presentable and properly maintained — without the hassle of coordinating multiple trades.",
      "Whether you need help between tenancies, ongoing scheduled maintenance, or support after a renovation, our team delivers reliable, quality property care with clear communication throughout.",
    ],
    includes: [
      "General property maintenance",
      "Pre & post tenancy preparation",
      "Property presentation",
      "Landlord & agent support",
      "Post-renovation support",
      "Residential & commercial properties",
    ],
    highlights: [
      {
        title: "One reliable team",
        body: "A single point of contact for the practical jobs that keep a property in order.",
      },
      {
        title: "Presentation focused",
        body: "Small details matter for inspections, open homes and guest-ready spaces.",
      },
      {
        title: "Landlord friendly",
        body: "Clear scopes and dependable scheduling that work around tenants and agents.",
      },
      {
        title: "Flexible support",
        body: "One-off jobs or recurring care — we shape the service around your property.",
      },
    ],
    faqs: [
      {
        question: "Do you work with real estate agents and landlords?",
        answer:
          "Yes. A significant part of our work is supporting landlords, property managers and agents with between-tenancy preparation and ongoing property care.",
      },
      {
        question: "Can you handle one-off maintenance jobs?",
        answer:
          "Absolutely. We take on both one-off tasks and recurring maintenance arrangements, depending on what your property needs.",
      },
      {
        question: "How do I get a maintenance quote?",
        answer:
          "Send us a short description of the property and the work required, and we will arrange the next step — including an on-site visit where needed.",
      },
    ],
    icon: "wrench",
  },
];

export function getService(id: string): Service | undefined {
  return services.find((service) => service.id === id);
}
