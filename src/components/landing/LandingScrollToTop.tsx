

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function LandingScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Torna su"
      className={`hidden md:flex fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-dark/80 hover:bg-primary text-white shadow-lg shadow-black/15 items-center justify-center transition-all duration-300 cursor-pointer ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
