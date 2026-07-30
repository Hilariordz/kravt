import ChalkScrubber from "@/components/ChalkScrubber";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ChooseUs from "@/components/chooseUs";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      {/* Hero — scrub cinematográfico */}
      <ChalkScrubber />

      {/* Quiénes somos */}
      <AboutSection />

      {/* Servicios */}
      <ServicesSection />

      {/* Antes / Después */}
      <ChooseUs />

      {/* Precios */}
      <Pricing />

      {/* Testimonios + Marcas */}
      <Testimonials />
    </>
  );
}
