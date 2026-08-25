import Navbar from "@/components/sections/Navbar";
import LandingFooter from "@/components/landing/LandingFooter";
import ClientLogosSection from "@/components/sections/ClientLogosSection";
import PressBar from "@/components/sections/PressBar";
import PricingSection from "@/components/sections/PricingSection";

export default function Prezzi() {
  return (
    <>
      <Navbar />
      <PricingSection />
      <ClientLogosSection />
      <PressBar />
      <LandingFooter />
    </>
  );
}
