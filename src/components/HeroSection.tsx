import { useState } from "react";
import {
  Flame,
  FileCheck2,
  FilePenLine,
  IdCard,
  FileClock,
  FileSignature,
  UserX,
} from "lucide-react";


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

const heroImages: string[] = [
  "https://images.unsplash.com/photo-1539186607619-df476afe6ff1?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1633956843342-a4dea80517b0?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1509390288171-ce2088f7d08e?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1509390032417-bd802f3fc669?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1648555394313-494797ad48fc?auto=format&fit=crop&w=1600&q=80",
];

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  const slideCount = heroImages.length;

  return (
    <div className="min-h-screen bg-white">
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
            <h2 className="font-poppins text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
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
    </div>
  );
};

export default HeroSection;
