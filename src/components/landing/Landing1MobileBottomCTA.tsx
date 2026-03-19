import { useEffect, useState, useCallback } from "react";

const CTA_URL =
  "https://prenota.hommi.it/richiedi-accesso?_gl=1*1clkze1*_up*MQ..*_ga*MjkzODMxMTE4LjE3NzE5Mzk1MzY.*_ga_4NVKFSN1CY*czE3NzE5Mzk1MzUkbzEkZzAkdDE3NzE5Mzk1MzUkajYwJGwwJGgw";

export default function Landing1MobileBottomCTA() {
  const [show, setShow] = useState(false);

  const update = useCallback(() => {
    setShow(window.scrollY > window.innerHeight * 0.7);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, [update]);

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-[calc(0.5rem+env(safe-area-inset-bottom))] pt-2 transition-all duration-300 ${
        show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <a
        href={CTA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-primary text-white font-semibold text-[13px] rounded-[10px] py-2.5 shadow-md shadow-primary/15 hover:bg-primary-hover transition-colors duration-200 cursor-pointer"
      >
        Inizia ora
      </a>
    </div>
  );
}
