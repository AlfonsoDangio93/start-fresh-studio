import Navbar from "@/components/sections/Navbar";
import LandingFooter from "@/components/landing/LandingFooter";
import ClientLogosSection from "@/components/sections/ClientLogosSection";
import PressBar from "@/components/sections/PressBar";
import TicketingSection from "@/components/sections/TicketingSection";

export default function TicketingGuasti() {
  return (
    <>
      <Navbar />
      <TicketingSection />
      <ClientLogosSection />
      <PressBar />
      <LandingFooter />
    </>
  );
}
