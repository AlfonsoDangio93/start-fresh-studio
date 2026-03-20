import Navbar from "@/components/sections/Navbar";
import LandingFooter from "@/components/landing/LandingFooter";
import DashboardSection from "@/components/sections/DashboardSection";
import CTASection from "@/components/sections/CTASection";

export default function DashboardRealtime() {
  return (
    <>
      <Navbar />
      <DashboardSection />
      <CTASection
        title={<>Basta fogli Excel e gruppi WhatsApp.<br />Passa ad Hommi.</>}
        subtitle="2.000+ property manager hanno già scelto Hommi. Nessun vincolo annuale, prezzo fisso, zero sorprese."
        image="https://images.unsplash.com/photo-1622266234556-faab3e09f67b?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.1.0"
      />
      <LandingFooter />
    </>
  );
}
