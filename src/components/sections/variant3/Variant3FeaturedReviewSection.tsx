export default function Variant3FeaturedReviewSection() {
  const logos = [
    "Rentals Pro", "Habyt", "Hosticasa", "Viva Portugal",
    "GuestReady", "Altido", "Limehome", "Olala Homes",
    "Cubos Holiday", "Be Mate",
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-site mx-auto px-8">
        <p className="text-center text-body-light text-sm mb-8">
          The leading property maintenance solution built for the vacation rental industry:
        </p>

        {/* Logo slider */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-[-10px] top-0 h-full w-[100px] bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-[-10px] top-0 h-full w-[100px] bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee whitespace-nowrap items-center">
            {[...logos, ...logos, ...logos].map((name, i) => (
              <div
                key={i}
                className="inline-flex items-center justify-center mx-6 flex-shrink-0 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all"
              >
                <div className="bg-gray-100 rounded-lg px-5 py-3 flex items-center justify-center min-w-[100px]">
                  <span className="text-xs font-bold text-gray-500 tracking-wide uppercase whitespace-nowrap">
                    {name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
