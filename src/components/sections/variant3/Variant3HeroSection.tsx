export default function Variant3HeroSection() {
  return (
    <section
      id="section-hero"
      className="pt-[56px]"
      style={{
        background: "radial-gradient(92.9% 222.09% at 4.6% 97.38%, #377CD1 0%, #2139A3 55.22%, #3D2B97 100%)",
      }}
    >
      <div className="max-w-site mx-auto px-8 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left text */}
          <div className="flex-1 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-tight">
              {[
                "Streamline", "Property", "Maintenance:",
                "Issues,", "Tracking", "&", "Cost", "Control"
              ].map((word, i) => (
                <span
                  key={i}
                  className="stagger-word"
                  style={{ animationDelay: `${i * 0.13}s`, marginRight: "0.28em" }}
                >
                  {word}
                </span>
              ))}
            </h1>
            <p className="text-white/80 text-base lg:text-lg leading-relaxed max-w-lg">
              Manage property maintenance with Doinn&apos;s advanced tickets, real-time issue tracking, and precise cost control, designed for vacation rental property managers and cleaning companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#"
                className="inline-block text-center bg-primary hover:bg-primary-hover text-white font-semibold text-sm rounded-lg px-6 py-3 no-underline tracking-wide transition-colors"
              >
                Start 14-day Free Trial
              </a>
              <a
                href="#demo"
                className="inline-block text-center bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-lg px-6 py-3 no-underline border border-white/30 tracking-wide transition-colors"
              >
                Book a demo
              </a>
            </div>
          </div>

          {/* Right image */}
          <div className="flex justify-center lg:justify-end w-full lg:w-[420px] flex-shrink-0">
            <div className="relative w-full">
              {/* Placeholder hero image - property maintenance dashboard mockup */}
              <div className="bg-white rounded-2xl shadow-2xl p-4 relative">
                <div className="bg-gray-50 rounded-xl overflow-hidden">
                  {/* Mock dashboard UI */}
                  <div className="bg-white border-b border-gray-100 px-4 py-3 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                    <div className="ml-4 bg-gray-100 rounded-full h-6 flex-1 max-w-[200px]" />
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex gap-3">
                      <div className="bg-primary/10 rounded-lg p-3 flex-1">
                        <div className="w-8 h-8 bg-primary rounded-lg mb-2" />
                        <div className="h-2 bg-primary/20 rounded w-3/4 mb-1" />
                        <div className="h-2 bg-primary/20 rounded w-1/2" />
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3 flex-1">
                        <div className="w-8 h-8 bg-blue-500 rounded-lg mb-2" />
                        <div className="h-2 bg-blue-200 rounded w-3/4 mb-1" />
                        <div className="h-2 bg-blue-200 rounded w-1/2" />
                      </div>
                    </div>
                    <div className="bg-white border border-gray-100 rounded-lg p-3">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                          <span className="text-orange-500 text-xs font-bold">!</span>
                        </div>
                        <div className="flex-1">
                          <div className="h-2.5 bg-gray-200 rounded w-2/3 mb-1.5" />
                          <div className="h-2 bg-gray-100 rounded w-1/2" />
                        </div>
                        <span className="text-xs font-semibold text-orange-500 bg-orange-50 px-2 py-1 rounded">High</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <span className="text-green-500 text-xs font-bold">✓</span>
                        </div>
                        <div className="flex-1">
                          <div className="h-2.5 bg-gray-200 rounded w-3/5 mb-1.5" />
                          <div className="h-2 bg-gray-100 rounded w-2/5" />
                        </div>
                        <span className="text-xs font-semibold text-green-500 bg-green-50 px-2 py-1 rounded">Done</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="h-16 bg-primary/5 rounded-lg flex-1 border border-primary/10" />
                      <div className="h-16 bg-blue-50 rounded-lg flex-1 border border-blue-100" />
                      <div className="h-16 bg-green-50 rounded-lg flex-1 border border-green-100" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating phone mockup */}
              <div className="absolute -left-8 bottom-4 w-28 bg-white rounded-xl shadow-xl p-2 hidden lg:block">
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  <div className="bg-primary h-6 flex items-center justify-center">
                    <div className="h-1.5 w-8 bg-white/40 rounded" />
                  </div>
                  <div className="p-2 space-y-1.5">
                    <div className="h-1.5 bg-gray-200 rounded w-full" />
                    <div className="h-1.5 bg-gray-200 rounded w-3/4" />
                    <div className="h-6 bg-primary/10 rounded mt-2" />
                    <div className="h-6 bg-primary/10 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
