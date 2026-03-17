

const PRESS_OUTLETS = [
  "Simplybiz",
  "Re2bit.com",
  "Corriere Nazionale",
  "Corriere della Sera",
  "Milano Finanza",
  "DailyNet",
];

function PressLogo({ name }: { name: string }) {
  return (
    <span
      className="text-[18px] md:text-[21px] font-bold text-dark/25 tracking-tight select-none whitespace-nowrap px-8 blur-[0.4px]"
      style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
    >
      {name}
    </span>
  );
}

export default function PressBar() {
  return (
    <section className="py-10 md:py-14 border-t border-border overflow-hidden">
      <div className="max-w-site mx-auto px-6 flex items-center gap-8 md:gap-12">
        {/* Fixed text on the left */}
        <div className="shrink-0">
          <p className="text-[13px] md:text-[14px] text-dark font-semibold leading-snug">
            Hanno parlato di noi:
          </p>
        </div>

        {/* Infinite scrolling press logos */}
        <div className="relative flex-1 overflow-hidden mask-edges">
          <div className="flex items-center logo-marquee">
            {/* Double for seamless loop */}
            {[...PRESS_OUTLETS, ...PRESS_OUTLETS].map((name, i) => (
              <PressLogo key={`${name}-${i}`} name={name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
