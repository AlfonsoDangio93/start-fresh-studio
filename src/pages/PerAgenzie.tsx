import Navbar from "@/components/sections/Navbar";
import LandingFooter from "@/components/landing/LandingFooter";
import ClientLogosSection from "@/components/sections/ClientLogosSection";
import PressBar from "@/components/sections/PressBar";
import AgenzieSection from "@/components/sections/AgenzieSection";

export default function PerAgenzie() {
  return (
    <>
      <Navbar />
      <AgenzieSection />
      <ClientLogosSection />
      <PressBar />
      <LandingFooter />
    </>
  );
}
