import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, MapPin, Phone, ArrowUpRight, Globe } from "lucide-react";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);
interface AdSlide {
  image: string;
  alt: string;
}

const adSlides: AdSlide[] = [
  {
    image:
      "https://images.unsplash.com/photo-1507823690283-48b0929e727b?auto=format&fit=crop&w=1200&q=80",
    alt: "Industrial gas pipe",
  },
  {
    image:
      "https://images.unsplash.com/photo-1559510981-10719ce4266a?auto=format&fit=crop&w=1200&q=80",
    alt: "Gas pipe infrastructure",
  },
  {
    image:
      "https://images.unsplash.com/photo-1694674818352-f6061a0561a1?auto=format&fit=crop&w=1200&q=80",
    alt: "Connected industrial pipes",
  },
  {
    image:
      "https://images.unsplash.com/photo-1542274368-443d694d79aa?auto=format&fit=crop&w=1200&q=80",
    alt: "Industrial pipeline",
  },
];

interface Partner {
  name: string;
  logo: string;
  url?: string;
}

const partners: Partner[] = [
  { name: "Allied Bank", logo: "/Bank%20Logos/logo_abl.png", url: "http://www.abl.com/" },
  { name: "Askari Bank", logo: "/Bank%20Logos/logo_askaribank.png", url: "http://www.askaribank.com.pk/" },
  { name: "Bank Alfalah", logo: "/Bank%20Logos/logo_bankalfalah.png", url: "http://www.bankalfalah.com/" },
  { name: "Bank AL Habib", logo: "/Bank%20Logos/logo_bankalhabib.png", url: "http://www.bankalhabib.com/" },
  { name: "Al Baraka", logo: "/Bank%20Logos/logo_albaraka_slider.png", url: "http://www.albaraka.com.pk/" },
  { name: "BankIslami", logo: "/Bank%20Logos/logo_bankislami.png" },
  { name: "Easypaisa", logo: "/Bank%20Logos/logo_easypaisa.png", url: "http://www.easypaisa.com.pk/" },
  { name: "Faysal Bank", logo: "/Bank%20Logos/logo_faysalbank.png", url: "http://www.faysalbank.com/" },
  { name: "Habib Metro", logo: "/Bank%20Logos/logo_hmb.png", url: "http://habibmetro.com/" },
  { name: "HBL", logo: "/Bank%20Logos/logo_hbl.png", url: "http://www.hbl.com/" },
  { name: "HBL Express", logo: "/Bank%20Logos/logo_hblexpress.png", url: "http://www.hbl.com/hbl-express.php" },
  { name: "MCB", logo: "/Bank%20Logos/logo_mcb.png", url: "http://www.mcb.com.pk/" },
  { name: "JazzCash", logo: "/Bank%20Logos/Jazz-cash-logo24.png", url: "https://www.jazzcash.com.pk/" },
  { name: "Standard Chartered", logo: "/Bank%20Logos/logo_standardchartered.png", url: "http://www.standardchartered.com.pk/" },
  { name: "Timepey", logo: "/Bank%20Logos/logo_timepey.png", url: "http://www.timepey.com/" },
  { name: "U Bank", logo: "/Bank%20Logos/logo_ubank.png", url: "http://www.ubank.com.pk/" },
  { name: "UBL", logo: "/Bank%20Logos/logo_ubl.png", url: "https://www.ubldirect.com/" },
  {
    name: "UBL Omni",
    logo: "/Bank%20Logos/logo_ublomni.png",
    url: "https://www.ubldirect.com/corporate/bankingservices/omni/home.aspx",
  },
];

const ADDRESS = "ST-4/B, Block 14, Sir Shah Muhammad Suleman Road, Gulshan-e-Iqbal, Karachi, Pakistan.";
const MAP_QUERY = encodeURIComponent("Sui Southern Gas Company Limited, Karachi, Pakistan");

const AdMapPartners = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // Auto-advance the ad carousel every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((s) => (s + 1) % adSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goPrev = () => setActiveSlide((s) => (s === 0 ? adSlides.length - 1 : s - 1));
  const goNext = () => setActiveSlide((s) => (s === adSlides.length - 1 ? 0 : s + 1));

  return (
    <section className="mx-3 mb-3 font-poppins sm:mx-4 lg:mx-6">
      {/* Row 1: Our Latest Ad + Locate Us */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Our Latest Ad */}
        <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-7">
          <div className="text-center">
            <h3 className="text-lg font-extrabold tracking-wide text-blue-950">
              OUR LATEST AD
            </h3>
            <span className="mx-auto mt-2 block h-1 w-10 bg-amber-400" />
          </div>

          <div className="relative mt-5 overflow-hidden rounded-xl">
            <div className="relative aspect-[16/10] w-full bg-slate-900">
              {adSlides.map((slide, i) => (
                <img
                  key={slide.image}
                  src={slide.image}
                  alt={slide.alt}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                    i === activeSlide ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              {/* Contact overlay bar */}
              <div className="absolute inset-x-0 bottom-0 z-10 flex items-stretch overflow-hidden text-xs font-semibold text-white sm:text-sm">
                <div className="flex items-center gap-1.5 bg-sky-600 px-4 py-2.5">
                  <Phone className="h-3.5 w-3.5" />
                  1199
                </div>
                <div className="flex flex-1 items-center gap-1.5 bg-amber-400 px-4 py-2.5 text-slate-900">
                  <Globe className="h-3.5 w-3.5" />
                  www.ssgc.com.pk
                </div>
                <div className="flex items-center gap-1.5 bg-orange-500 px-4 py-2.5">
                  <InstagramIcon className="h-3.5 w-3.5" />
                  ssgc.official
                </div>
              </div>
            </div>
          </div>

          {/* Arrows + dots */}
          <div className="mt-4 flex items-center justify-between">
            <button
              aria-label="Previous ad"
              onClick={goPrev}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:bg-slate-100"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2">
              {adSlides.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to ad ${i + 1}`}
                  onClick={() => setActiveSlide(i)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    i === activeSlide ? "bg-blue-700" : "bg-slate-200"
                  }`}
                />
              ))}
            </div>

            <button
              aria-label="Next ad"
              onClick={goNext}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:bg-slate-100"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Locate Us */}
        <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-7">
          <div className="text-center">
            <h3 className="text-lg font-extrabold tracking-wide text-blue-950">
              LOCATE US
            </h3>
            <span className="mx-auto mt-2 block h-1 w-10 bg-amber-400" />
          </div>

          <div className="relative mt-5 overflow-hidden rounded-xl">
            <div className="aspect-[16/10] w-full">
              <iframe
                title="SSGC location map"
                src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Floating address card */}
            <div className="absolute left-4 top-4 w-64 rounded-lg bg-white p-4 shadow-lg sm:w-72">
              <p className="text-sm font-bold text-blue-950">
                Sui Southern Gas Company Limited
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{ADDRESS}</p>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-blue-800 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-900"
              >
                Get Directions
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Bottom info row */}
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
              <p className="text-xs leading-relaxed text-slate-600">{ADDRESS}</p>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-blue-700" />
              <div className="text-xs">
                <p className="font-bold text-slate-800">1199</p>
                <p className="text-slate-500">24/7 Helpline</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Business Partners — auto-scrolling marquee */}
      <div className="mt-4 rounded-2xl bg-white px-6 py-7 shadow-sm sm:px-7">
        <div className="text-center">
          <h3 className="text-lg font-extrabold tracking-wide text-blue-950">
            OUR BUSINESS PARTNERS
          </h3>
          <span className="mx-auto mt-2 block h-1 w-10 bg-amber-400" />
        </div>

        <div
          className="mt-6 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={trackRef}
            className="flex w-max items-center gap-16"
            style={{
              animation: "partners-marquee 26s linear infinite",
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            {/* Render the list twice back-to-back for a seamless loop */}
            {[...partners, ...partners].map((partner, i) => {
              const logoImg = (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-24 w-auto max-w-[240px] object-contain"
                />
              );

              return (
                <div
                  key={`${partner.name}-${i}`}
                  className="flex h-24 shrink-0 items-center justify-center"
                  style={{ minWidth: "240px" }}
                >
                  {partner.url ? (
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={partner.name}
                      className="flex h-full w-full items-center justify-center transition-transform hover:scale-105"
                    >
                      {logoImg}
                    </a>
                  ) : (
                    logoImg
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes partners-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default AdMapPartners;