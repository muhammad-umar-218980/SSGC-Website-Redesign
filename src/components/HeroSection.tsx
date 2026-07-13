import { useState } from "react";
import {
  Flame,
  Phone,
  Mail,
  Menu,
  X,
  ChevronDown,
  FileCheck2,
  FilePenLine,
  IdCard,
  FileClock,
  FileSignature,
  UserX,
} from "lucide-react";

interface NavItem {
  label: string;
  sublabel?: string;
  dropdown?: string[];
}

interface QuickLink {
  label: string;
  icon: React.ElementType;
  bg: string;
  underline: string;
}

const quickLinks: QuickLink[] = [
  { label: "Careers", icon: FileCheck2, bg: "bg-blue-500", underline: "bg-blue-500" },
  { label: "Pay / View Bill", icon: Flame, bg: "bg-orange-500", underline: "bg-orange-500" },
  { label: "Register for E-Bill", icon: FilePenLine, bg: "bg-green-600", underline: "bg-green-600" },
  { label: "Update Your CNIC", icon: IdCard, bg: "bg-amber-500", underline: "bg-amber-500" },
  { label: "New RLNG Domestic Gas", icon: FileClock, bg: "bg-teal-500", underline: "bg-teal-500" },
  { label: "Contract For the Supply of Gas", icon: FileSignature, bg: "bg-purple-500", underline: "bg-purple-500" },
  { label: "Defaulters' List", icon: UserX, bg: "bg-blue-600", underline: "bg-blue-600" },
];

const navItems: NavItem[] = [
  { label: "Home" },
  {
    label: "About Us",
    dropdown: [
      "The State-Owned Enterprises (C-Level Appointments) Guidelines 2024",
      "Profile",
      "Vision",
      "Mission",
      "Core Values",
      "Meter Manufacturing Plant",
      "Board Of Directors And Management",
      "Gender Pay Gap",
      "Company Offices",
      "Policies",
      "Focal Person As Per Right Of Access To Information Act 2017",
      "Gas Transportation",
    ],
  },
  {
    label: "Financial",
    sublabel: "Highlights",
    dropdown: [
      "Ten Years At A Glance",
      "Financial Reports",
      "Annual Progress On Business Plan FY 2024-2027",
      "SECP Compliance Certificate",
    ],
  },
  {
    label: "Customer",
    sublabel: "Management",
    dropdown: [
      "Update Your CNIC",
      "Domestic Services",
      "Commercial Services",
      "Industrial Services",
      "Process Of Gas Connection (Domestic/ Commercial/ Industrial)",
      "LPG Air-Mix",
      "RLNG Provisional Price",
      "View Bill",
      "Consumer Service Manual",
      "Domestic Bill Calculator",
      "Calculation Of SSGC Domestic Gas Bill",
      "Frequently Asked Questions (FAQs)",
    ],
  },
  {
    label: "New",
    sublabel: "Connection",
    dropdown: [
      "Apply For Commercial Gas Connection",
      "Apply For Industrial Connection",
      "New Domestic & Commercial Gas Connection Application Processing",
    ],
  },
  {
    label: "Investor",
    sublabel: "Information",
    dropdown: [
      "Election Of Directors, 2025",
      "Compliance With SOE Act",
      "71st Annual General Meeting",
      "Corporate Briefing Session (CBS)",
      "Consent For Electronic Transmission Of Annual Audited Financial Statements",
      "Contact For Investment Assistance / Grievances",
      "Credit Rating",
      "Dividend Mandate Form",
      "Financial Reports",
      "Important Circulars / Notifications",
      "Investors Relation",
      "Conversion Of Physical Shares Of SSGCL Into Book-Entry Form",
    ],
  },
  {
    label: "Tenders",
    dropdown: [
      "Active Tenders",
      "Three-Quotation Tenders",
      "Most Procured Material",
      "Tender Evaluations",
      "Blacklisted Firms",
      "Blacklisting Mechanism",
      "Annual Procurement Plan 2020-21",
      "Annual Procurement Plan 2021-22",
      "Annual Procurement Plan 2022-23",
      "Annual Procurement Plan 2023-24",
      "Annual Procurement Plan 2025-26",
    ],
  },
  {
    label: "Media",
    sublabel: "Center",
    dropdown: [
      "Flame Magazine",
      "Advertisements",
      "Social Media",
      "Press Releases",
      "Events",
      "News",
      "Operation Grift Updates",
    ],
  },
  {
    label: "Helpline",
    sublabel: "& Complaints",
    dropdown: [
      "How Customers Can Complain",
      "Complaint Types And Estimated Resolution Timelines",
      "Federal Ombudsman Numbers",
      "Public Complaints Resolution Mechanism",
      "Complaints/Feedback",
      "Important Numbers",
      "Customer Facilitation Centers",
      "Check Gas Line For Leakages",
      "Safety Education",
    ],
  },
  {
    label: "R&D Department",
    dropdown: ["Let's Work Together"],
  },
];

// Hero slider images (Unsplash — free to use)
const heroImages: string[] = [
  "https://images.unsplash.com/photo-1539186607619-df476afe6ff1?auto=format&fit=crop&w=1600&q=80", // industrial tower
  "https://images.unsplash.com/photo-1633956843342-a4dea80517b0?auto=format&fit=crop&w=1600&q=80", // metal plant in green field
  "https://images.unsplash.com/photo-1509390288171-ce2088f7d08e?auto=format&fit=crop&w=1600&q=80", // aerial concrete structure
  "https://images.unsplash.com/photo-1509390032417-bd802f3fc669?auto=format&fit=crop&w=1600&q=80", // lighted plant at night
  "https://images.unsplash.com/photo-1648555394313-494797ad48fc?auto=format&fit=crop&w=1600&q=80", // rigs / offshore energy
];

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [activeSlide, setActiveSlide] = useState(1);
  const [isTopMenuOpen, setIsTopMenuOpen] = useState(false);
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  const slideCount = heroImages.length;

  const handleMobileItemClick = (item: NavItem) => {
    if (item.dropdown) {
      setOpenMobileDropdown((prev) => (prev === item.label ? null : item.label));
    } else {
      setActiveTab(item.label);
      setIsNavMenuOpen(false);
    }
  };

  const handleMobileSubItemClick = (parentLabel: string, sub: string) => {
    setActiveTab(parentLabel);
    setIsNavMenuOpen(false);
    setOpenMobileDropdown(null);
  };

  return (
    <header className="w-full font-poppins">
      <nav className="border-b border-slate-100 bg-white px-4 py-3 lg:px-10">
        <div className="flex items-center justify-between">
          <div className="flex flex-1 items-center justify-center lg:flex-none lg:justify-start">
            <img
              src="/logo.png"
              alt="SSGC - Sui Southern Gas Company Limited"
              className="h-14 w-auto object-contain max-[360px]:h-11 sm:h-16 lg:h-14"
            />
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-blue-700">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 0 1 2-2h2.28a1 1 0 0 1 .95.68l1.2 3.6a1 1 0 0 1-.27 1.05L7.6 9.9a12.05 12.05 0 0 0 6.5 6.5l1.57-1.56a1 1 0 0 1 1.05-.27l3.6 1.2a1 1 0 0 1 .68.95V19a2 2 0 0 1-2 2h-1C9.82 21 3 14.18 3 6V5Z"
                  />
                </svg>
              </span>
              <div className="text-sm leading-tight">
                <p className="font-semibold text-slate-800">1199, 99021000</p>
                <p className="text-slate-500">24/7 Helpline</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-blue-700">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 6.75A1.75 1.75 0 0 1 4.75 5h14.5A1.75 1.75 0 0 1 21 6.75v10.5A1.75 1.75 0 0 1 19.25 19H4.75A1.75 1.75 0 0 1 3 17.25V6.75Z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4 7 8 6 8-6" />
                </svg>
              </span>
              <div className="text-sm leading-tight">
                <p className="font-semibold text-slate-800">info@ssgc.com.pk</p>
                <p className="text-slate-500">Write to us</p>
              </div>
            </div>

            <button className="flex shrink-0 items-center gap-2 rounded-md bg-amber-400 px-4 py-2.5 text-sm font-bold text-slate-900 transition-all duration-300 ease-out hover:bg-amber-300 hover:scale-105 active:scale-95">
              <Flame className="h-4 w-4" fill="currentColor" />
              LPG Order Now
            </button>

            <div className="flex items-center gap-3 border-l border-slate-200 pl-6">
              <div className="text-sm font-medium">
                <button className="text-blue-700">English</button>
                <span className="mx-1 text-slate-300">|</span>
                <button className="text-slate-600">اردو</button>
              </div>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded bg-blue-800 text-white"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V9c0-.9.25-1.5 1.55-1.5H16.7V4.7c-.28-.04-1.24-.12-2.36-.12-2.34 0-3.94 1.43-3.94 4.05v2.26H7.7V14h2.7v8h3.1Z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="flex h-8 w-8 items-center justify-center rounded bg-sky-500 text-white"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M22 5.9c-.7.3-1.4.5-2.2.6.8-.5 1.4-1.2 1.7-2.1-.7.4-1.6.8-2.4 1a3.8 3.8 0 0 0-6.5 3.5A10.8 10.8 0 0 1 4.7 4.7a3.8 3.8 0 0 0 1.2 5.1c-.6 0-1.2-.2-1.7-.5v.1c0 1.9 1.3 3.4 3.1 3.8-.6.1-1.1.2-1.7.1a3.8 3.8 0 0 0 3.6 2.6A7.6 7.6 0 0 1 2 17.4a10.8 10.8 0 0 0 5.8 1.7c7 0 10.8-5.8 10.8-10.8v-.5c.8-.5 1.4-1.2 1.9-2Z" />
                </svg>
              </a>
            </div>
          </div>

          <button
            onClick={() => setIsTopMenuOpen(!isTopMenuOpen)}
            className="rounded-md p-2 text-slate-600 hover:bg-slate-100 focus:outline-none lg:hidden"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isTopMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isTopMenuOpen && (
          <div className="mt-4 space-y-4 border-t border-slate-100 pt-4 lg:hidden">
            <button className="flex w-full items-center justify-center gap-2 rounded-md bg-amber-400 px-4 py-3 text-sm font-bold text-slate-900 transition-all duration-300 ease-out hover:bg-amber-300 hover:scale-[1.02] active:scale-95">
              <Flame className="h-4 w-4" fill="currentColor" />
              LPG Order Now
            </button>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <div className="flex items-center gap-2 rounded-md bg-slate-50 px-3 py-2">
                <Phone className="h-4 w-4 text-blue-700" />
                <div className="text-sm leading-tight">
                  <p className="font-semibold text-slate-800">1199, 99021000</p>
                  <p className="text-slate-500">24/7 Helpline</p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-md bg-slate-50 px-3 py-2">
                <Mail className="h-4 w-4 text-blue-700" />
                <div className="text-sm leading-tight">
                  <p className="font-semibold text-slate-800">info@ssgc.com.pk</p>
                  <p className="text-slate-500">Write to us</p>
                </div>
              </div>
            </div>

            <div className="flex w-full items-center justify-between">
              <div className="text-sm font-medium">
                <button className="text-blue-700">English</button>
                <span className="mx-1 text-slate-300">|</span>
                <button className="text-slate-600">اردو</button>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-8 w-8 items-center justify-center rounded bg-blue-800 text-white"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V9c0-.9.25-1.5 1.55-1.5H16.7V4.7c-.28-.04-1.24-.12-2.36-.12-2.34 0-3.94 1.43-3.94 4.05v2.26H7.7V14h2.7v8h3.1Z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="flex h-8 w-8 items-center justify-center rounded bg-sky-500 text-white"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M22 5.9c-.7.3-1.4.5-2.2.6.8-.5 1.4-1.2 1.7-2.1-.7.4-1.6.8-2.4 1a3.8 3.8 0 0 0-6.5 3.5A10.8 10.8 0 0 1 4.7 4.7a3.8 3.8 0 0 0 1.2 5.1c-.6 0-1.2-.2-1.7-.5v.1c0 1.9 1.3 3.4 3.1 3.8-.6.1-1.1.2-1.7.1a3.8 3.8 0 0 0 3.6 2.6A7.6 7.6 0 0 1 2 17.4a10.8 10.8 0 0 0 5.8 1.7c7 0 10.8-5.8 10.8-10.8v-.5c.8-.5 1.4-1.2 1.9-2Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      <nav className="mx-3 rounded-t-2xl bg-[#0e2a5e] px-3 py-2 sm:mx-4 lg:mx-6 lg:px-4 lg:py-0">
        {/* DESKTOP NAV WITH DROPDOWNS */}
        <div className="hidden lg:block">
          <ul
            role="tablist"
            className="flex flex-1 items-stretch justify-between gap-x-1 overflow-visible scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {navItems.map((item, index) => {
              const isActive = activeTab === item.label;
              const isOpen = openDesktopDropdown === item.label;
              const isWideDropdown = (item.dropdown?.length ?? 0) > 8;

              // Anchor edge items so their dropdown panel never spills off-screen
              const isNearLeftEdge = index <= 1;
              const isNearRightEdge = index >= navItems.length - 2;
              const positionClass = isNearLeftEdge
                ? "left-0"
                : isNearRightEdge
                ? "right-0"
                : "left-1/2 -translate-x-1/2";

              return (
                <li
                  key={item.label}
                  className="relative flex-1"
                  onMouseEnter={() => item.dropdown && setOpenDesktopDropdown(item.label)}
                  onMouseLeave={() => item.dropdown && setOpenDesktopDropdown(null)}
                >
                  <button
                    role="tab"
                    aria-selected={isActive}
                    aria-expanded={item.dropdown ? isOpen : undefined}
                    onClick={() => {
                      setActiveTab(item.label);
                      if (item.dropdown) {
                        setOpenDesktopDropdown((prev) => (prev === item.label ? null : item.label));
                      }
                    }}
                    className={`relative flex h-full w-full flex-col items-center justify-center gap-0.5 rounded-t-md px-2 py-3 text-center text-[15px] font-medium transition-all duration-300 ease-out whitespace-nowrap ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-white/80 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span className="flex items-center gap-1">
                      {item.label}
                      {item.dropdown && (
                        <ChevronDown
                          className={`h-3.5 w-3.5 transition-transform duration-200 ease-out ${
                            isOpen ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      )}
                    </span>
                    {item.sublabel && (
                      <span
                        className={`text-xs font-normal transition-colors duration-300 ease-out ${
                          isActive ? "text-white/70" : "text-white/50"
                        }`}
                      >
                        {item.sublabel}
                      </span>
                    )}
                    <span
                      className={`absolute bottom-0 left-0 h-[3px] w-full origin-left rounded-full bg-amber-400 transition-all duration-300 ease-out ${
                        isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                      }`}
                    />
                  </button>

                  {item.dropdown && (
                    <div
                      className={`absolute top-full z-50 pt-2 transition-all duration-200 ease-out ${positionClass} ${
                        isOpen
                          ? "pointer-events-auto translate-y-0 opacity-100"
                          : "pointer-events-none -translate-y-1 opacity-0"
                      }`}
                    >
                      <div
                        className={`overflow-hidden rounded-lg bg-white shadow-[0_16px_40px_-8px_rgba(15,23,42,0.35)] ring-1 ring-slate-100 ${
                          isWideDropdown ? "w-[520px]" : "w-72"
                        }`}
                      >
                        <ul
                          className={`max-h-96 overflow-y-auto py-2 ${
                            isWideDropdown ? "grid grid-cols-2 gap-x-2" : ""
                          }`}
                        >
                          {item.dropdown.map((sub) => (
                            <li key={sub}>
                              <button
                                onClick={() => {
                                  setActiveTab(item.label);
                                  setOpenDesktopDropdown(null);
                                }}
                                className="block w-full px-4 py-2 text-left text-sm leading-snug text-slate-700 transition-colors duration-150 ease-out hover:bg-slate-50 hover:text-blue-700"
                              >
                                {sub}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile trigger only — the sidebar itself is rendered outside this nav so it can overlay the whole page */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsNavMenuOpen(true)}
              className="flex items-center gap-2 rounded-md px-3 py-2 text-white transition-all duration-300 ease-out hover:bg-white/10"
              aria-expanded={isNavMenuOpen}
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" />
              <span className="text-sm font-medium">Menu</span>
            </button>
            <span className="text-xs text-white/50">SSGC Navigation</span>
          </div>
        </div>
      </nav>

      {/* Sidebar overlay backdrop (second navbar only) */}
      <div
        onClick={() => {
          setIsNavMenuOpen(false);
          setOpenMobileDropdown(null);
        }}
        className={`fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-[1px] transition-opacity duration-300 ease-out lg:hidden ${
          isNavMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isNavMenuOpen}
      />

      {/* Sidebar panel (second navbar only) — with accordion-style dropdowns */}
      <aside
        className={`fixed inset-y-0 right-0 z-50 w-[85%] max-w-sm transform bg-[#0e2a5e] shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          isNavMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
      >
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
          <span className="text-sm font-semibold text-white">Navigation</span>
          <button
            onClick={() => {
              setIsNavMenuOpen(false);
              setOpenMobileDropdown(null);
            }}
            className="flex h-9 w-9 items-center justify-center rounded-md text-white transition-colors duration-200 ease-out hover:bg-white/10"
            aria-label="Close navigation menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <ul className="flex flex-col gap-1 overflow-y-auto px-3 py-3 h-[calc(100%-64px)]">
          {navItems.map((item) => {
            const isActive = activeTab === item.label;
            const isOpen = openMobileDropdown === item.label;

            return (
              <li key={item.label}>
                <button
                  onClick={() => handleMobileItemClick(item)}
                  aria-expanded={item.dropdown ? isOpen : undefined}
                  className={`flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-sm transition-all duration-200 ease-out ${
                    isActive
                      ? "bg-amber-400/20 text-amber-400"
                      : "text-white/80 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span>
                    <span className="font-medium">{item.label}</span>
                    {item.sublabel && (
                      <span className="ml-1.5 text-[10px] font-normal text-white/40">
                        {item.sublabel}
                      </span>
                    )}
                  </span>
                  {item.dropdown && (
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 transition-transform duration-200 ease-out ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  )}
                </button>

                {item.dropdown && (
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-out ${
                      isOpen ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <ul className="ml-3 mt-1 space-y-0.5 border-l border-white/10 py-1 pl-3">
                      {item.dropdown.map((sub) => (
                        <li key={sub}>
                          <button
                            onClick={() => handleMobileSubItemClick(item.label, sub)}
                            className="block w-full rounded-md px-2 py-2 text-left text-[13px] leading-snug text-white/70 transition-colors duration-150 ease-out hover:bg-white/5 hover:text-white"
                          >
                            {sub}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </aside>

      <div className="relative h-[420px] w-full overflow-hidden bg-sky-50 sm:h-[480px] lg:h-[560px]">
        {heroImages.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-out ${
              activeSlide === i ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}

        <div className="absolute inset-y-0 left-0 z-10 flex w-full items-center sm:w-3/5 lg:w-1/2">
          <div className="max-w-xl px-6 sm:px-10 lg:px-16">
            <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Delivering
              <br />
              Natural Energy for a
              <br />
              <span className="text-blue-700">Better Tomorrow</span>
            </h2>
            <span className="mt-4 block h-1 w-14 bg-amber-400" />
            <p className="mt-4 max-w-md text-slate-600">
              SSGC is committed to providing safe, reliable and efficient natural gas
              services to millions across Pakistan.
            </p>
            <button className="mt-6 flex items-center gap-2 rounded-md bg-blue-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800">
              Learn More
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="absolute inset-y-0 left-0 z-[5] w-full bg-gradient-to-r from-sky-50 via-sky-50/70 to-transparent sm:w-3/5 lg:w-1/2" />

        <button
          aria-label="Previous slide"
          onClick={() => setActiveSlide((s) => (s === 0 ? slideCount - 1 : s - 1))}
          className="absolute bottom-6 right-20 z-20 flex h-9 w-9 items-center justify-center rounded bg-slate-800/70 text-white transition-colors hover:bg-slate-800"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          aria-label="Next slide"
          onClick={() => setActiveSlide((s) => (s === slideCount - 1 ? 0 : s + 1))}
          className="absolute bottom-6 right-6 z-20 flex h-9 w-9 items-center justify-center rounded bg-slate-800/70 text-white transition-colors hover:bg-slate-800"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
          </svg>
        </button>

        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2 sm:left-[55%]">
          {heroImages.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setActiveSlide(i)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                activeSlide === i ? "bg-blue-600" : "bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative z-30 mx-3 mt-6 mb-6 rounded-2xl bg-white px-4 py-6 shadow-[0_10px_40px_-12px_rgba(15,23,42,0.15)] sm:mx-4 sm:mt-8 sm:px-8 lg:mx-6 lg:mt-10">
        <ul className="grid grid-cols-2 gap-y-6 sm:grid-cols-4 lg:flex lg:items-start lg:justify-between lg:gap-x-4">
          {quickLinks.map(({ label, icon: Icon, bg, underline }) => (
            <li key={label} className="flex justify-center">
              <button className="group flex w-full max-w-[140px] flex-col items-center gap-3 rounded-lg px-2 py-1 text-center transition-transform duration-300 ease-out hover:-translate-y-1">
                <span
                  className={`flex h-16 w-16 items-center justify-center rounded-full text-white shadow-sm transition-transform duration-300 ease-out group-hover:scale-105 ${bg}`}
                >
                  <Icon className="h-7 w-7" strokeWidth={2} />
                </span>
                <span className="text-sm font-medium leading-snug text-slate-800">
                  {label}
                </span>
                <span
                  className={`h-[3px] w-8 rounded-full opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 ${underline}`}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default HeroSection;