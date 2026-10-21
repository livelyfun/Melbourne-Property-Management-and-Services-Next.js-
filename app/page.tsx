import HeroSlider from "@/components/home/HeroSlider";
import ServicesSection from "@/components/home/ServicesSection";
import Process from "@/components/home/Process";
import GalleryPreview from "@/components/home/GalleryPreview";
import WhyMPM from "@/components/home/WhyMPM";
import ReviewsSection from "@/components/home/ReviewsSection";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <ServicesSection />
      <Process />
      <GalleryPreview />
      <WhyMPM />
      <ReviewsSection />
      <ContactCTA />
    </main>
  );
}
