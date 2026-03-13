

import { useState } from "react";

export default function Variant3PricingSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    properties: "",
    message: "",
  });

  return (
    <section
      id="demo"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #377CD1 -38.03%, #2139A3 13.99%, #25176A 75.84%)",
      }}
    >
      {/* Decorative gradient blob */}
      <div
        className="absolute bottom-0 left-0 w-[297px] h-[277px] opacity-60 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(111,94,255,0.4) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-site mx-auto px-8 py-16 lg:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left text */}
          <div className="flex-1">
            <h2 className="text-3xl lg:text-[42px] font-bold text-white leading-tight mb-6">
              Stop Reacting to Property Maintenance Issues and Get Ahead of Them.
            </h2>
            <p className="text-white/80 text-base lg:text-lg leading-relaxed">
              With Doinn, you&apos;ll gain the ultimate control over your property&apos;s quality, maintenance efficiency, and financial health. Experience the future of property operations and improve your daily operations by +50%.
            </p>
          </div>

          {/* Right form */}
          <div className="flex-1 w-full max-w-md">
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full border border-border rounded-lg px-3 py-2.5 text-sm text-body placeholder-gray-400 focus:outline-none focus:border-primary"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-full border border-border rounded-lg px-3 py-2.5 text-sm text-body placeholder-gray-400 focus:outline-none focus:border-primary"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email*"
                  className="w-full border border-border rounded-lg px-3 py-2.5 text-sm text-body placeholder-gray-400 focus:outline-none focus:border-primary"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Company name"
                  className="w-full border border-border rounded-lg px-3 py-2.5 text-sm text-body placeholder-gray-400 focus:outline-none focus:border-primary"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
                <select
                  className="w-full border border-border rounded-lg px-3 py-2.5 text-sm text-body appearance-none bg-white focus:outline-none focus:border-primary"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath fill='%234D4D4D' fill-rule='nonzero' d='M10.59.295 6 4.875 1.41.295 0 1.705l6 6 6-6z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 12px center",
                    paddingRight: "32px",
                  }}
                  value={formData.properties}
                  onChange={(e) => setFormData({ ...formData, properties: e.target.value })}
                >
                  <option value="">Number of properties</option>
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-200">51-200</option>
                  <option value="200+">200+</option>
                </select>
                <textarea
                  placeholder="Message"
                  rows={3}
                  className="w-full border border-border rounded-lg px-3 py-2.5 text-sm text-body placeholder-gray-400 focus:outline-none focus:border-primary resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-hover text-white font-semibold text-sm rounded-lg px-6 py-3 transition-colors tracking-wide"
                >
                  Book a demo
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
