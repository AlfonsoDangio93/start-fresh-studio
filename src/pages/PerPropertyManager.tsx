import Navbar from "@/components/sections/Navbar";
import LandingFooter from "@/components/landing/LandingFooter";
import ClientLogosSection from "@/components/sections/ClientLogosSection";
import PressBar from "@/components/sections/PressBar";
import PropertyManagerSection from "@/components/sections/PropertyManagerSection";

export default function PerPropertyManager() {
  return (
    <>
      <Navbar />
      <PropertyManagerSection />
      <ClientLogosSection />
      <PressBar />
      <LandingFooter />
    </>
  );
}
