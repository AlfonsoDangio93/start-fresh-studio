

import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 2000, suffix: "+", label: "Alloggi gestiti" },
  { value: 15000, suffix: "+", label: "Interventi completati" },
  { value: 97, suffix: "%", label: "Risolti entro 24h" },
  { value: 45, suffix: "min", label: "Tempo medio di risposta" },
];

function useCountUp(target: number, duration = 2000, start: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    const t0 = performance.now();
    const step = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      setValue(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return value;
}

function StatCard({ stat, inView }: { stat: typeof STATS[0]; inView: boolean }) {
  const count = useCountUp(stat.value, 2200, inView);
  return (
    <div className="flex flex-col items-center text-center px-6 py-8">
      <span className="text-[38px] md:text-[46px] font-display font-bold text-dark tracking-tight leading-none">
        {count.toLocaleString("it-IT")}
        <span className="text-primary">{stat.suffix}</span>
      </span>
      <span className="mt-2 text-[14px] text-secondary font-medium">{stat.label}</span>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-14 md:py-20">
      <div className="max-w-site mx-auto px-6">
        <div className="bg-white rounded-2xl border border-border shadow-sm grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
          {STATS.map((s) => (
            <StatCard key={s.label} stat={s} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
