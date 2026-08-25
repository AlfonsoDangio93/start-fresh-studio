import Navbar from "@/components/sections/Navbar";
import LandingFooter from "@/components/landing/LandingFooter";
import ClientLogosSection from "@/components/sections/ClientLogosSection";
import PressBar from "@/components/sections/PressBar";
import HostSection from "@/components/sections/HostSection";

export default function PerHostProfessionali() {
  return (
    <>
      <Navbar />
      <HostSection />
      <ClientLogosSection />
      <PressBar />
      <LandingFooter />
    </>
  );
}
