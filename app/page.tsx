import StickyBar from "@/components/StickyBar";
import Hero from "@/components/Hero";
import ScienceSection from "@/components/ScienceSection";
import PhilosophySection from "@/components/PhilosophySection";
import PortfolioBand from "@/components/PortfolioBand";
import ServicesSection from "@/components/ServicesSection";
import SuccessSection from "@/components/SuccessSection";
import PlaceSection from "@/components/PlaceSection";
import RitualsRail from "@/components/RitualsRail";
import NorthStar from "@/components/NorthStar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="lpl" id="top">
      <StickyBar />
      <Hero />
      <ScienceSection />
      <PhilosophySection />
      <PortfolioBand />
      <ServicesSection />
      <SuccessSection />
      <PlaceSection />
      <RitualsRail />
      <NorthStar />
      <ContactSection />
      <Footer />
    </div>
  );
}
