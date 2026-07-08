import { useState } from "react";
import { Flame, Phone, Mail, Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  sublabel?: string;
}

const navItems: NavItem[] = [
  { label: "Home" },
  { label: "About Us" },
  { label: "Financial", sublabel: "Highlights" },
  { label: "Customer", sublabel: "Management" },
  { label: "New", sublabel: "Connection" },
  { label: "Investor", sublabel: "Information" },
  { label: "Tenders" },
  { label: "Media", sublabel: "Center" },
  { label: "Helpline", sublabel: "& Complaints" },
  { label: "R&D Department" },
];

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [activeSlide, setActiveSlide] = useState(1);
  const [isTopMenuOpen, setIsTopMenuOpen] = useState(false);
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const slideCount = 5;

  return (
    <header className="w-full font-poppins">
      <nav className="border-b border-slate-100 bg-white px-4 py-3 lg:px-10">
        <div className="flex items-center justify-between">
          <div className="flex flex-1 items-center justify-center gap-3 lg:flex-none lg:justify-start max-[360px]:justify-start max-[360px]:gap-2">
            <img
              src="./logo.svg"
              alt="SSGC Logo"
              className="h-14 w-14 object-contain max-[360px]:h-12 max-[360px]:w-12"
            />
            <div>
              <p className="text-xs font-semibold tracking-wide text-blue-700 max-[360px]:text-[10px]">
                SERVICE WITH A SMILE
              </p>
              <h1 className="text-xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-2xl max-[360px]:text-lg">
                SUI SOUTHERN GAS
              </h1>
              <p className="text-sm font-medium text-slate-600 max-[360px]:text-[10px]">
                COMPANY LIMITED
              </p>
            </div>
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
        <div className="hidden lg:block">
          <ul
            role="tablist"
            className="flex flex-1 items-stretch justify-between gap-x-1 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {navItems.map((item) => {
              const isActive = activeTab === item.label;
              return (
                <li key={item.label} className="flex-1">
                  <button
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveTab(item.label)}
                    className={`relative flex h-full w-full flex-col items-center justify-center gap-0.5 rounded-t-md px-2 py-3 text-center text-[15px] font-medium transition-all duration-300 ease-out whitespace-nowrap ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-white/80 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span>{item.label}</span>
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
                </li>
              );
            })}
          </ul>
        </div>

        <div className="lg:hidden">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}
              className="flex items-center gap-2 rounded-md px-3 py-2 text-white transition-all duration-300 ease-out hover:bg-white/10"
              aria-expanded={isNavMenuOpen}
            >
              {isNavMenuOpen ? (
                <X className="h-5 w-5 transition-transform duration-300" />
              ) : (
                <Menu className="h-5 w-5 transition-transform duration-300" />
              )}
              <span className="text-sm font-medium">
                {isNavMenuOpen ? "Close" : "Menu"}
              </span>
            </button>
            <span className="text-xs text-white/50">SSGC Navigation</span>
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ease-out ${
              isNavMenuOpen ? "max-h-[600px] opacity-100 mt-3" : "max-h-0 opacity-0"
            }`}
          >
            <div className="border-t border-white/10 pt-3">
              <ul className="grid grid-cols-2 gap-1 sm:grid-cols-3">
                {navItems.map((item) => {
                  const isActive = activeTab === item.label;
                  return (
                    <li key={item.label}>
                      <button
                        onClick={() => {
                          setActiveTab(item.label);
                          setIsNavMenuOpen(false);
                        }}
                        className={`w-full rounded-md px-3 py-2.5 text-left text-sm transition-all duration-200 ease-out ${
                          isActive
                            ? "bg-amber-400/20 text-amber-400"
                            : "text-white/80 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <span className="font-medium">{item.label}</span>
                        {item.sublabel && (
                          <span className="ml-1.5 text-[10px] font-normal text-white/40">
                            {item.sublabel}
                          </span>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative h-[420px] w-full overflow-hidden bg-sky-50 sm:h-[480px] lg:h-[560px]">
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
          {Array.from({ length: slideCount }).map((_, i) => (
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
    </header>
  );
};

export default HeroSection;