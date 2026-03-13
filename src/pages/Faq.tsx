import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FAQSection from "@/components/sections/FAQSection";

export default function Faq() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen overflow-x-hidden">
      <Navbar />
      <FAQSection />
      <Footer />
    </main>
  );
}
