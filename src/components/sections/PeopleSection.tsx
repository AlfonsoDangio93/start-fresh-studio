

import { useEffect, useRef, useState } from "react";

const STORIES = [
  {
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
    alt: "Manutentore al lavoro in un appartamento",
    name: "Luigi, idraulico",
    location: "Milano",
    quote:
      "Mi piace il mio mestiere. Ora posso farlo senza impazzire dietro ai pagamenti e alle telefonate.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    alt: "Property manager al lavoro",
    name: "Sara, property manager",
    location: "32 alloggi a Roma",
    quote:
      "Alle 23 non rispondo pi\u00F9 al telefono. I guasti si risolvono anche senza di me. Finalmente.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
    alt: "Tecnico e property manager collaborano",
    name: "Marco e il suo tecnico dedicato",
    location: "Firenze",
    quote:
      "Ogni guasto risolto non \u00E8 solo un ticket chiuso. \u00C8 un ospite che torna, un proprietario che si fida.",
  },
];

export default function PeopleSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVis(true);
          obs.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="max-w-site mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 reveal ${vis ? "revealed" : ""}`}>
          <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-[0.12em] mb-5">
            Le persone di Hommi
          </span>
          <h2 className="font-display text-[28px] md:text-[40px] lg:text-[46px] font-bold text-dark leading-[1.08] tracking-tight">
            Dietro ogni ticket,{" "}
            <br className="hidden md:block" />
            ci sono persone vere.
          </h2>
          <p className="mt-5 text-secondary text-[15px] md:text-[17px] max-w-[520px] mx-auto leading-relaxed">
            Manutentori che si sporcano le mani. Property manager che dormono
            tranquilli. Persone che si fidano le une delle altre.
          </p>
        </div>

        {/* Stories */}
        <div className="space-y-8 md:space-y-0">
          {STORIES.map((story, i) => (
            <div
              key={story.name}
              className={`reveal ${vis ? "revealed" : ""} ${
                i % 2 === 0
                  ? "md:flex md:flex-row"
                  : "md:flex md:flex-row-reverse"
              } items-center gap-10 lg:gap-16 mb-8 md:mb-0`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              {/* Photo */}
              <div className="md:w-1/2 mb-6 md:mb-0">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <img
                    src={story.image}
                    alt={story.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Subtle gradient overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/30 via-transparent to-transparent" />
                </div>
              </div>

              {/* Quote */}
              <div className="md:w-1/2">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="mb-4 text-primary/20"
                >
                  <path
                    d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"
                    fill="currentColor"
                  />
                  <path
                    d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"
                    fill="currentColor"
                  />
                </svg>
                <p className="font-display text-[20px] md:text-[24px] lg:text-[28px] font-medium text-dark leading-[1.4] italic mb-6">
                  &ldquo;{story.quote}&rdquo;
                </p>
                <div>
                  <p className="text-[15px] font-bold text-dark">
                    {story.name}
                  </p>
                  <p className="text-[13px] text-secondary/50 mt-0.5">
                    {story.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
