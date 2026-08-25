import Navbar from "@/components/sections/Navbar";
import LandingFooter from "@/components/landing/LandingFooter";
import ClientLogosSection from "@/components/sections/ClientLogosSection";
import PressBar from "@/components/sections/PressBar";
import GestioneTecniciSection from "@/components/sections/GestioneTecniciSection";

export default function GestioneTecnici() {
  return (
    <>
      <Navbar />
      <GestioneTecniciSection />
      <ClientLogosSection />
      <PressBar />
      <LandingFooter />
    </>
  );
}
