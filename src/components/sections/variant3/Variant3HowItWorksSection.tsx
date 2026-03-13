export default function Variant3HowItWorksSection() {
  const features = [
    {
      icon: "issues",
      title: "Real-time Issues Management",
      description: "Staff can create issues and inform about: type, priority, damages report, or generic issues.",
    },
    {
      icon: "cost",
      title: "Comprehensive Cost Tracking",
      description: "With the issues dashboard, users can manage expenses for maintenance tasks.",
    },
    {
      icon: "link",
      title: "Shareable Job Summary Link",
      description: "Automatically share maintenance issues job summaries with your customers and owners, including start/finish times, and attached photos/videos.",
    },
    {
      icon: "upload",
      title: "Robust Bulk Upload Capabilities",
      description: "Bring your existing issues lists from other software providers and upload them in bulk, easily.",
    },
    {
      icon: "quality",
      title: "Detailed Quality Tools",
      description: "Including real-time job summaries, inspections, problem reports, and service scores.",
    },
    {
      icon: "clock",
      title: "Service Time Tracking",
      description: "Monitor start and stop times for all services, enabling you to compare expected vs. real service times for greater efficiency.",
    },
    {
      icon: "dashboard",
      title: "Real-Time Operational Insights",
      description: "On quality, time/schedule, people & teams, financials, and logistics.",
    },
    {
      icon: "chat",
      title: "Multilingual Chat & Notifications",
      description: "Notifications and instant translation for seamless team communication through Doinn\u2019s mobile app.",
    },
    {
      icon: "payroll",
      title: "Employees Payroll",
      description: "Access in real-time, filterable and exportable, with insights into margins per service worker.",
    },
    {
      icon: "roles",
      title: "Role-Based Access Control",
      description: "Assign roles (Account Owner, Admin, Manager, Coordinator, Service Worker, etc.) with specific permissions.",
    },
    {
      icon: "flag",
      title: "Priority Services Flag",
      description: "Stay informed in real-time about properties with check-out and check-in on the same day.",
    },
  ];

  const getIcon = (type: string) => {
    const iconClass = "w-8 h-8";
    switch (type) {
      case "issues":
        return (
          <svg className={iconClass} viewBox="0 0 32 32" fill="none">
            <rect x="4" y="4" width="24" height="24" rx="4" stroke="#6F5EFF" strokeWidth="2"/>
            <path d="M10 16h12M10 12h8M10 20h10" stroke="#6F5EFF" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        );
      case "cost":
        return (
          <svg className={iconClass} viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="12" stroke="#6F5EFF" strokeWidth="2"/>
            <path d="M16 10v12M12 14h8M13 18h6" stroke="#6F5EFF" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        );
      case "link":
        return (
          <svg className={iconClass} viewBox="0 0 32 32" fill="none">
            <path d="M13 19l6-6M11 17l-2 2a3 3 0 004 4l2-2M21 15l2-2a3 3 0 00-4-4l-2 2" stroke="#6F5EFF" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
      case "upload":
        return (
          <svg className={iconClass} viewBox="0 0 32 32" fill="none">
            <path d="M16 20V10m0 0l-4 4m4-4l4 4" stroke="#6F5EFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 22v2a2 2 0 002 2h12a2 2 0 002-2v-2" stroke="#6F5EFF" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
      case "quality":
        return (
          <svg className={iconClass} viewBox="0 0 32 32" fill="none">
            <path d="M16 6l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z" stroke="#6F5EFF" strokeWidth="2" strokeLinejoin="round"/>
          </svg>
        );
      case "clock":
        return (
          <svg className={iconClass} viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="12" stroke="#6F5EFF" strokeWidth="2"/>
            <path d="M16 10v6l4 4" stroke="#6F5EFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case "dashboard":
        return (
          <svg className={iconClass} viewBox="0 0 32 32" fill="none">
            <rect x="4" y="4" width="10" height="10" rx="2" stroke="#6F5EFF" strokeWidth="2"/>
            <rect x="18" y="4" width="10" height="6" rx="2" stroke="#6F5EFF" strokeWidth="2"/>
            <rect x="4" y="18" width="10" height="6" rx="2" stroke="#6F5EFF" strokeWidth="2"/>
            <rect x="18" y="14" width="10" height="10" rx="2" stroke="#6F5EFF" strokeWidth="2"/>
          </svg>
        );
      case "chat":
        return (
          <svg className={iconClass} viewBox="0 0 32 32" fill="none">
            <path d="M6 8a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2H12l-4 4v-4H8a2 2 0 01-2-2V8z" stroke="#6F5EFF" strokeWidth="2"/>
            <path d="M12 12h8M12 16h5" stroke="#6F5EFF" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        );
      case "payroll":
        return (
          <svg className={iconClass} viewBox="0 0 32 32" fill="none">
            <rect x="6" y="8" width="20" height="16" rx="2" stroke="#6F5EFF" strokeWidth="2"/>
            <path d="M6 14h20" stroke="#6F5EFF" strokeWidth="2"/>
            <path d="M12 19h8" stroke="#6F5EFF" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        );
      case "roles":
        return (
          <svg className={iconClass} viewBox="0 0 32 32" fill="none">
            <circle cx="12" cy="12" r="4" stroke="#6F5EFF" strokeWidth="2"/>
            <path d="M4 26c0-4 4-7 8-7s8 3 8 7" stroke="#6F5EFF" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="22" cy="10" r="3" stroke="#6F5EFF" strokeWidth="1.5"/>
            <path d="M22 16c3 0 6 2 6 5" stroke="#6F5EFF" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        );
      case "flag":
        return (
          <svg className={iconClass} viewBox="0 0 32 32" fill="none">
            <path d="M8 6v20" stroke="#6F5EFF" strokeWidth="2" strokeLinecap="round"/>
            <path d="M8 6h14l-4 5 4 5H8" stroke="#6F5EFF" strokeWidth="2" strokeLinejoin="round"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="section-features" className="py-16 lg:py-24 bg-bg-f4">
      <div className="max-w-site mx-auto px-8">
        <h2 className="text-center text-3xl lg:text-[42px] font-bold text-body mb-16 lg:mb-20">
          Discover All Property Maintenance Features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col">
              <div className="mb-4">
                {getIcon(feature.icon)}
              </div>
              <h3 className="text-base font-semibold text-body mb-2">{feature.title}</h3>
              <p className="text-sm text-body-light leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
