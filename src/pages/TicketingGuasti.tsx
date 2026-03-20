import Navbar from "@/components/sections/Navbar";
import LandingFooter from "@/components/landing/LandingFooter";
import TicketingSection from "@/components/sections/TicketingSection";
import CTASection from "@/components/sections/CTASection";

export default function TicketingGuasti() {
  return (
    <>
      <Navbar />
      <TicketingSection />
      <CTASection
        title={<>Smetti di rincorrere tecnici.<br />Inizia a gestire i guasti davvero.</>}
        subtitle="2.000+ property manager gestiscono i guasti con Hommi. Zero telefonate al giorno, in media."
        image="https://images.unsplash.com/photo-1622266234556-faab3e09f67b?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.1.0"
      />
      <LandingFooter />
    </>
  );
}
