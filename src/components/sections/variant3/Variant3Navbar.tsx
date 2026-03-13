

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Variant3Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="w-full border-b border-gray-100">
        <div className="max-w-site mx-auto px-8 flex items-center justify-between h-[64px]">
          {/* Logo */}
          <a href="#" className="flex items-center no-underline">
            <span className="text-[22px] font-bold text-black tracking-tight">
              <span style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>C</span>oreShift
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-[15px] font-medium text-gray-600 hover:text-black no-underline transition-colors">
              Product
            </a>
            <a href="#" className="text-[15px] font-medium text-gray-600 hover:text-black no-underline transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-[15px] font-medium text-gray-600 hover:text-black no-underline transition-colors">
              Pricing
            </a>
            <a href="#" className="text-[15px] font-medium text-gray-600 hover:text-black no-underline transition-colors">
              Resources
            </a>
          </nav>

          {/* Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#"
              className="text-sm font-medium text-gray-800 no-underline border border-gray-300 rounded-full px-6 py-2.5 hover:border-gray-500 transition-colors"
            >
              Sign in
            </a>
            <a
              href="#"
              className="text-sm font-medium text-white bg-black hover:bg-gray-800 no-underline rounded-full px-6 py-2.5 transition-colors"
            >
              Request a Demo
            </a>
          </div>

          {/* Mobile burger */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-8 py-6 space-y-4">
          <a href="#" className="block text-[15px] font-medium text-gray-600 py-2 no-underline">Product</a>
          <a href="#" className="block text-[15px] font-medium text-gray-600 py-2 no-underline">Features</a>
          <a href="#pricing" className="block text-[15px] font-medium text-gray-600 py-2 no-underline">Pricing</a>
          <a href="#" className="block text-[15px] font-medium text-gray-600 py-2 no-underline">Resources</a>
          <div className="flex gap-3 pt-2">
            <a href="#" className="text-sm font-medium text-gray-800 border border-gray-300 rounded-full px-5 py-2.5 no-underline">Sign in</a>
            <a href="#" className="text-sm font-medium text-white bg-black rounded-full px-5 py-2.5 no-underline">Request a Demo</a>
          </div>
        </div>
      )}
    </header>
  );
}