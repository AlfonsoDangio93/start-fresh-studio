import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import TicketingSection from "@/components/sections/TicketingSection";

export default function TicketingGuasti() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen overflow-x-hidden">
      <Navbar />
      <TicketingSection />
      <Footer />
    </main>
  );
}
