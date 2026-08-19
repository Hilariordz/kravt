import ChalkScrubber from "@/components/ChalkScrubber";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ChooseUs from "@/components/chooseUs";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Hero */}
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

      {/* Equipo */}
      <TeamSection />

      {/* Contacto */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </>
  );
}
