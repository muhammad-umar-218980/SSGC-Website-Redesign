import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, FileText, Flame, Clock, ArrowRight } from "lucide-react";

type NewsIconType = "document" | "flame" | "clock";

interface NewsCard {
  id: string;
  badge: string;
  icon: NewsIconType;
  title: string;
  date: string;
  status: string;
  image: string;
}

const iconMap: Record<NewsIconType, typeof FileText> = {
  document: FileText,
  flame: Flame,
  clock: Clock,
};

// Swap these placeholder paths for your real images (import from src/assets
// the same way we did in ViewBill.tsx, or drop them in public/news/).
const newsCards: NewsCard[] = [
  {
    id: "01",
    badge: "01",
    icon: "document",
    title: "SSGC Media Release",
    date: "September 8, 2024",
    status: "Comments Off",
    image: "/news/media-release.jpg",
  },
  {
    id: "02",
    badge: "02",
    icon: "flame",
    title: "SSGC Disconnects 3,276 Illegal Gas Connections In Sindh And Balochistan",
    date: "September 4, 2024",
    status: "Comments Off",
    image: "/news/illegal-connections.jpg",
  },
  {
    id: "03",
    badge: "03",
    icon: "clock",
    title:
      "24-Hours Gas Holiday For All Industries Including Their Power Generation Units And All CNG Stations In Sindh",
    date: "August 22, 2024",
    status: "Comments Off",
    image: "/news/gas-holiday.jpg",
  },
  {
    id: "04",
    badge: "04",
    icon: "document",
    title: "1 Arrested For Gas Theft, 809 Disconnections Made",
    date: "August 12, 2024",
    status: "Comments Off",
    image: "/news/gas-theft-arrest.jpg",
  },
  {
    id: "05",
    badge: "05",
    icon: "flame",
    title: "SSGC Launches Awareness Campaign On Safe Gas Usage",
    date: "August 5, 2024",
    status: "Comments Off",
    image: "/news/awareness-campaign.jpg",
  },
  {
    id: "06",
    badge: "06",
    icon: "document",
    title: "SSGC Signs MoU For RLNG Infrastructure Expansion",
    date: "July 29, 2024",
    status: "Comments Off",
    image: "/news/rlng-mou.jpg",
  },
  {
    id: "07",
    badge: "07",
    icon: "clock",
    title: "Scheduled Gas Supply Suspension For Maintenance In Karachi",
    date: "July 18, 2024",
    status: "Comments Off",
    image: "/news/supply-suspension.jpg",
  },
  {
    id: "08",
    badge: "08",
    icon: "flame",
    title: "SSGC Recovers Rs. 50 Million In Gas Theft Crackdown",
    date: "July 10, 2024",
    status: "Comments Off",
    image: "/news/theft-crackdown.jpg",
  },
];

const CARDS_PER_VIEW = 3;

const CompanyNews = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activePage, setActivePage] = useState(0);
  const totalPages = newsCards.length - CARDS_PER_VIEW + 1;

  // Width of a single card + the gap between cards — this is the "step"
  // we move by so only 1 new card enters/exits per click, not a whole page.
  const getStep = () => {
    const track = trackRef.current;
    if (!track) return 0;
    const firstCard = track.querySelector("article");
    if (!firstCard) return track.clientWidth;
    const gap = 20; // matches Tailwind's gap-5 (1.25rem = 20px)
    return (firstCard as HTMLElement).offsetWidth + gap;
  };

  const scrollByCards = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * getStep(), behavior: "smooth" });
  };

  const scrollToPage = (page: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: page * getStep(), behavior: "smooth" });
  };

  // Keep the active dot in sync with manual scrolling/dragging
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      const step = getStep();
      if (!step) return;
      const page = Math.round(track.scrollLeft / step);
      setActivePage(page);
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    return () => track.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="mx-3 mb-3 rounded-3xl bg-[#0a1f45] px-6 py-12 font-poppins sm:mx-4 sm:px-10 lg:mx-6 lg:px-14">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr] lg:gap-12">
        {/* Left column */}
        <div className="flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-sky-400">
            Latest Updates
          </p>
          <h2 className="mt-2 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Company
            <br />
            News
          </h2>
          <span className="mt-3 block h-1 w-12 bg-sky-400" />

          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            Stay informed about our initiatives, operations and announcements.
          </p>

          <a
            href="#"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-400 transition-colors hover:text-sky-300"
          >
            View All News
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Right column: cards + controls */}
        <div className="relative min-w-0">
          {/* Arrows */}
          <button
            aria-label="Previous news"
            onClick={() => scrollByCards(-1)}
            className="absolute -left-4 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#0a1f45] text-white transition-colors hover:bg-white/10 sm:-left-5 lg:flex"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            aria-label="Next news"
            onClick={() => scrollByCards(1)}
            className="absolute -right-4 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#0a1f45] text-white transition-colors hover:bg-white/10 sm:-right-5 lg:flex"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          {/* Scrollable track */}
          <div
            ref={trackRef}
            className="flex min-w-0 snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {newsCards.map((card) => {
              const Icon = iconMap[card.icon];
              return (
                <article
                  key={card.id}
                  className="group relative w-[85%] shrink-0 snap-start overflow-hidden rounded-xl sm:w-[46%] lg:w-[calc((100%-2.5rem)/3)]"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Numbered badge */}
                    <span className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-md bg-sky-500 text-sm font-bold text-white">
                      {card.badge}
                    </span>

                    {/* Icon badge */}
                    <span className="absolute left-3 top-14 flex h-9 w-9 items-center justify-center rounded-full bg-white text-blue-800 shadow-md">
                      <Icon className="h-4 w-4" />
                    </span>

                    {/* Bottom fade for text legibility if title overlaps image */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  <div className="mt-3">
                    <h3 className="text-[15px] font-bold leading-snug text-white">
                      {card.title}
                    </h3>
                    <p className="mt-2 flex items-center gap-2 text-xs text-white/50">
                      {card.date}
                      <span className="text-white/30">|</span>
                      {card.status}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Pagination dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                aria-label={`Go to news page ${i + 1}`}
                onClick={() => scrollToPage(i)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  activePage === i ? "bg-sky-400" : "bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyNews;