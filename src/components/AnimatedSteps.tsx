

import { useEffect, useRef, useState } from "react";

type Step = {
  num: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
};

export default function AnimatedSteps({ steps }: { steps: Step[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          obs.disconnect();
          // Sequential reveal: step 0 → line 0 → step 1 → line 1 → step 2
          setActiveStep(0);
          setTimeout(() => setActiveStep(1), 800);
          setTimeout(() => setActiveStep(2), 1600);
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid md:grid-cols-3 gap-8 max-w-[900px] mx-auto">
      {steps.map((step, i) => (
        <div key={step.num} className="relative text-center">
          {/* Connector line between steps */}
          {i < steps.length - 1 && (
            <div className="hidden md:block absolute top-7 left-[calc(50%+32px)] w-[calc(100%-64px)] h-px bg-border overflow-hidden">
              <div
                className="h-full bg-primary transition-transform duration-700 ease-out origin-left"
                style={{
                  transform: activeStep > i ? "scaleX(1)" : "scaleX(0)",
                  transitionDelay: activeStep > i ? "200ms" : "0ms",
                }}
              />
            </div>
          )}

          {/* Step content */}
          <div
            className="transition-all duration-500 ease-out"
            style={{
              opacity: activeStep >= i ? 1 : 0,
              transform: activeStep >= i ? "translateY(0)" : "translateY(24px)",
            }}
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/8 flex items-center justify-center mx-auto mb-4">
              {step.icon}
            </div>
            <span className="text-[11px] font-bold text-primary/40 uppercase tracking-wider">
              {step.num}
            </span>
            <h3 className="font-display text-[17px] font-bold text-dark mt-1 mb-2">
              {step.title}
            </h3>
            <p className="text-[13px] text-secondary leading-relaxed max-w-[280px] mx-auto">
              {step.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
