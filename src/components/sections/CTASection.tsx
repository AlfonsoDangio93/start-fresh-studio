
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative rounded-[10px] overflow-hidden px-8 py-24 md:px-16 md:py-32 text-center">
      <img
        src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=2970&auto=format&fit=crop"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-dark/75" aria-hidden="true" />

      <div className="relative z-10 max-w-site mx-auto">
        <h2 className="font-display text-[30px] md:text-[46px] font-bold text-white leading-[1.1] tracking-tight">
          Pronto a dormire tranquillo
          <br />
          anche con 50 alloggi?
        </h2>
        <p className="mt-5 text-white/60 text-[16px] md:text-[18px] max-w-[460px] mx-auto leading-relaxed">
          2.000+ property manager hanno gi&agrave; scelto Hommi.
          Nessun vincolo annuale, prezzo fisso, zero sorprese.
        </p>
        <div className="mt-8">
          <a
            href="https://prenota.hommi.it/richiedi-accesso?_gl=1*1clkze1*_up*MQ..*_ga*MjkzODMxMTE4LjE3NzE5Mzk1MzY.*_ga_4NVKFSN1CY*czE3NzE5Mzk1MzUkbzEkZzAkdDE3NzE5Mzk1MzUkajYwJGwwJGgw"
            className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white font-semibold text-[15px] rounded-[10px] px-8 py-3.5 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/30 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-dark"
          >
            Richiedi accesso prioritario
            <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
