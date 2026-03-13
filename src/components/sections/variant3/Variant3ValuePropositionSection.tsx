

import { useEffect, useRef, useState } from "react";

export default function Variant3ValuePropositionSection() {
  const features = [
    {
      iconBg: "bg-primary/10",
      title: "Centralized Property Maintenance Ticketing",
      bullets: [
        "Create, assign, and track maintenance tickets for any issue, from a leaky faucet to a broken appliance.",
        "Field staff and cleaners can report issues directly from their mobile app with photos, giving you instant awareness.",
        "Monitor the status of every job in real-time, ensuring nothing ever falls through the cracks.",
      ],
      imagePosition: "left" as const,
      mockup: "ticketing",
    },
    {
      iconBg: "bg-blue-50",
      title: "Capture Issues Instantly with Doinn AI",
      bullets: [
        "Simply upload a photo of the damage. Doinn AI analyzes the image and automatically generates a detailed issue ticket for you.",
        "Record a voice note in any language. The system assesses the request, translates it to your preferred admin language, and creates the ticket instantly.",
        "Eliminate manual typing. Streamline your workflow with intelligent, automated issue creation.",
      ],
      imagePosition: "right" as const,
      mockup: "ai",
    },
    {
      iconBg: "bg-green-50",
      title: "Seamless Resolution & Transparent Owner Reporting",
      bullets: [
        "Rank tasks by severity and oversee the entire resolution lifecycle, from missing items to damages in real-time.",
        "Build trust by sharing live job summaries and property status updates via unique public links, reducing back-and-forth communication.",
        "Automatically compile completed tasks and associated activities into clear, professional reports that showcase your management excellence to owners.",
      ],
      imagePosition: "left" as const,
      mockup: "reporting",
    },
    {
      iconBg: "bg-orange-50",
      title: "Optimize Your Budget with Precise Expense Tracking",
      bullets: [
        "Log and track all expenses related to each property maintenance issue.",
        "Detailed view to monitor and manage all repairing expenses, providing quick access to current costs for each reported issue.",
        "Attach invoices, link costs directly to specific tickets or properties, and gain a clear understanding of your true operational costs.",
      ],
      imagePosition: "right" as const,
      mockup: "budget",
    },
  ];

  const renderMockup = (type: string) => {
    switch (type) {
      case "ticketing":
        return (
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
            </div>
            <div className="p-5 space-y-3">
              {[
                { status: "Open", color: "bg-red-100 text-red-600", title: "Broken AC Unit - Apt 4B" },
                { status: "In Progress", color: "bg-yellow-100 text-yellow-700", title: "Leaking Faucet - Unit 12" },
                { status: "Resolved", color: "bg-green-100 text-green-600", title: "Door Lock Replacement - 7A" },
              ].map((ticket, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 bg-primary rounded" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-body truncate">{ticket.title}</p>
                    <p className="text-xs text-body-light">Assigned to Team A</p>
                  </div>
                  <span className={`text-[10px] font-semibold px-2 py-1 rounded-full ${ticket.color} whitespace-nowrap`}>
                    {ticket.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );
      case "ai":
        return (
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-blue-500 px-5 py-4">
              <p className="text-white font-bold text-sm">Doinn AI</p>
              <p className="text-white/70 text-xs">Intelligent Issue Detection</p>
            </div>
            <div className="p-5 space-y-4">
              <div className="flex gap-3">
                <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-body mb-1">AI Analysis Complete</p>
                  <p className="text-xs text-body-light">Detected: Water damage on ceiling</p>
                  <p className="text-xs text-body-light">Severity: High Priority</p>
                </div>
              </div>
              <div className="bg-primary/5 border border-primary/10 rounded-lg p-3">
                <p className="text-xs font-medium text-primary mb-1">Auto-generated ticket</p>
                <p className="text-[11px] text-body-light">Category: Plumbing · Priority: High · Location: Unit 3A</p>
              </div>
            </div>
          </div>
        );
      case "reporting":
        return (
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-100">
              <p className="text-sm font-bold text-body">Job Summary Report</p>
              <p className="text-xs text-body-light">Property: Ocean View Apt #12</p>
            </div>
            <div className="p-5 space-y-3">
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Issues", value: "12", color: "text-primary" },
                  { label: "Resolved", value: "10", color: "text-green-600" },
                  { label: "Pending", value: "2", color: "text-orange-500" },
                ].map((stat, i) => (
                  <div key={i} className="bg-gray-50 rounded-lg p-3 text-center">
                    <p className={`text-lg font-bold ${stat.color}`}>{stat.value}</p>
                    <p className="text-[10px] text-body-light">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="bg-green-50 border border-green-100 rounded-lg p-3 flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-xs text-green-700 font-medium">Shareable link generated</p>
              </div>
            </div>
          </div>
        );
      case "budget":
        return (
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-100">
              <p className="text-sm font-bold text-body">Expense Tracker</p>
            </div>
            <div className="p-5 space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-body">Total Expenses</p>
                  <p className="text-xs text-body-light">This month</p>
                </div>
                <p className="text-xl font-bold text-primary">$4,250</p>
              </div>
              {[
                { name: "Plumbing Repair", cost: "$850", property: "Unit 4B" },
                { name: "AC Maintenance", cost: "$1,200", property: "Unit 12" },
                { name: "Lock Replacement", cost: "$320", property: "Unit 7A" },
              ].map((expense, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                  <div>
                    <p className="text-xs font-medium text-body">{expense.name}</p>
                    <p className="text-[10px] text-body-light">{expense.property}</p>
                  </div>
                  <p className="text-sm font-semibold text-body">{expense.cost}</p>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-site mx-auto px-8 space-y-24 lg:space-y-36">
        {features.map((feature, i) => (
          <FeatureRow key={i} feature={feature} index={i} renderMockup={renderMockup} />
        ))}
      </div>
    </section>
  );
}

function FeatureRow({
  feature,
  index,
  renderMockup,
}: {
  feature: {
    iconBg: string;
    title: string;
    bullets: string[];
    imagePosition: "left" | "right";
    mockup: string;
  };
  index: number;
  renderMockup: (type: string) => React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const fromLeft = feature.imagePosition === "left";

  return (
    <div
      ref={ref}
      className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 0.05}s` }}
    >
      {/* Mockup */}
      <div
        className={`flex-1 w-full max-w-[520px] transition-all duration-700 ease-out ${
          fromLeft ? "" : "lg:order-2"
        } ${visible ? "opacity-100 translate-x-0" : fromLeft ? "opacity-0 -translate-x-8" : "opacity-0 translate-x-8"}`}
        style={{ transitionDelay: `${index * 0.05 + 0.1}s` }}
      >
        {renderMockup(feature.mockup)}
      </div>

      {/* Text */}
      <div
        className={`flex-1 transition-all duration-700 ease-out ${
          fromLeft ? "lg:order-2" : "lg:order-1"
        } ${visible ? "opacity-100 translate-x-0" : fromLeft ? "opacity-0 translate-x-8" : "opacity-0 -translate-x-8"}`}
        style={{ transitionDelay: `${index * 0.05 + 0.2}s` }}
      >
        <div className="flex items-start gap-3 mb-4">
          <div className={`w-8 h-8 ${feature.iconBg} rounded-lg flex items-center justify-center flex-shrink-0 mt-1`}>
            <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h2 className="text-xl lg:text-2xl font-bold text-body leading-tight">
            {feature.title}
          </h2>
        </div>
        <ul className="check-list list-none space-y-0 text-body text-sm lg:text-base mb-6">
          {feature.bullets.map((bullet, j) => (
            <li key={j}>{bullet}</li>
          ))}
        </ul>
        <a
          href="#demo"
          className="inline-block bg-primary hover:bg-primary-hover text-white font-semibold text-sm rounded-lg px-6 py-3 no-underline tracking-wide transition-colors"
        >
          Book a demo
        </a>
      </div>
    </div>
  );
}
