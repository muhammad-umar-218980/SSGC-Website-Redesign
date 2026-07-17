import { useMemo, type ReactNode } from "react";
import { Gem, CalendarDays } from "lucide-react";

import coreValuesBanner from "../assets/Core Values/CoreValues banner.png";

/**
 * CoreValues
 * ----------
 * Recreation of the "Core Values" infographic: a center hexagon
 * ("CORE VALUES") surrounded by six differently-colored value hexagons,
 * each a true regular hexagon, connected with a solid-then-dashed
 * connector line and dots at both ends.
 *
 * - lg and up (≥1024px): absolute "hex-flower" layout
 * - below lg (down to ~256px): plain rounded boxes in a responsive auto-fit
 *   grid — no hexagon clipping, so it degrades gracefully at any width
 */

type ValueItem = {
  key: string;
  title: string;
  description: string;
  image: string;
  bg: string;
  pos: { top: number; left: number };
};

const VALUES: ValueItem[] = [
  {
    key: "integrity",
    title: "Integrity",
    description:
      "Keeping Company's interest above oneself. Practicing and promoting ethical business environment.",
    image:
      "https://images.unsplash.com/photo-1641891848165-24d3e124d82c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZWdyaXR5fGVufDB8fDB8fHww",
    bg: "bg-gradient-to-br from-blue-600 to-blue-400",
    pos: { top: 23, left: 50 },
  },
  {
    key: "excellence",
    title: "Excellence",
    description:
      "Making positive contribution towards the achievement of SSGC's vision. Striving for continuous improvement.",
    image:
      "https://plus.unsplash.com/premium_photo-1714332694955-456500c17394?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGV4Y2VsbGVuY2V8ZW58MHx8MHx8fDA%3D",
    bg: "bg-gradient-to-br from-emerald-600 to-emerald-400",
    pos: { top: 37, left: 75 },
  },
  {
    key: "teamwork",
    title: "Teamwork",
    description:
      "Building strong relationships across functional areas. Working well with all types of people and co-operating with others.",
    image:
      "https://plus.unsplash.com/premium_photo-1679429320552-ec9038ccd550?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fHRlYW13b3JrfGVufDB8fDB8fHww",
    bg: "bg-gradient-to-br from-orange-500 to-amber-400",
    pos: { top: 66, left: 75 },
  },
  {
    key: "creativity",
    title: "Creativity",
    description:
      "Coming up with new ideas. Encouraging innovation. Promoting modified approaches.",
    image:
      "https://images.unsplash.com/photo-1567177662154-dfeb4c93b6ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3JlYXRpdml0eXxlbnwwfHwwfHx8MA%3D%3D",
    bg: "bg-gradient-to-br from-purple-600 to-purple-400",
    pos: { top: 80, left: 50 },
  },
  {
    key: "transparency",
    title: "Transparency",
    description:
      "Displaying openness and consistency in applying policies and procedures. Following regulations in all aspects of operations.",
    image:
      "https://images.unsplash.com/photo-1512099053734-e6767b535838?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhbnNwYXJlbmN5fGVufDB8fDB8fHww",
    bg: "bg-gradient-to-br from-teal-600 to-teal-400",
    pos: { top: 66, left: 25 },
  },
  {
    key: "responsibility",
    title: "Responsibility to Stakeholders",
    description:
      "Staying abreast of changing environment that impacts our business and creating solutions to help all stakeholders.",
    image:
      "https://plus.unsplash.com/premium_photo-1723291331030-d6874d63e5bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UmVzcG9uc2liaWxpdHklMjB0byUyMFN0YWtlaG9sZGVyc3xlbnwwfHwwfHx8MA%3D%3D",
    bg: "bg-gradient-to-br from-rose-600 to-rose-400",
    pos: { top: 37, left: 25 },
  },
];

/** Standard flat-top hexagon clip path */
const HEX_CLIP =
  "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";

/** Widths (as % of the square hex-flower container) — used both for
 *  the hexagons' own CSS width and for computing exact connector geometry. */
const CENTER_WIDTH_PCT = 22;
const OUTER_WIDTH_PCT = 31;

function Hexagon({
  className = "",
  style,
  children,
}: {
  className?: string;
  style?: React.CSSProperties;
  children: ReactNode;
}) {
  return (
    <div
      className={`shadow-[0_10px_35px_-10px_rgba(30,64,175,0.35)] ${className}`}
      style={{ clipPath: HEX_CLIP, ...style }}
    >
      {children}
    </div>
  );
}

function ValueCard({ item }: { item: ValueItem }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-6 py-6 text-center sm:px-9 sm:py-8">
      <img
        src={item.image}
        alt={item.title}
        className="mb-3 h-14 w-14 rounded-full object-cover ring-4 ring-white/80 shadow-sm sm:h-16 sm:w-16"
        loading="lazy"
      />
      <h3 className="mb-1.5 text-sm font-extrabold uppercase tracking-wide text-white sm:text-base">
        {item.title}
      </h3>
      <p className="text-[11px] leading-relaxed text-white/90 sm:text-xs">
        {item.description}
      </p>
    </div>
  );
}

/** Precomputed connector lines from center (50,50) to each hexagon */
function Connectors({ items }: { items: ValueItem[] }) {
  const center = { x: 500, y: 500 };
  const points = useMemo(
    () => items.map((v) => ({ x: v.pos.left * 10, y: v.pos.top * 10 })),
    [items]
  );

  return (
    <svg
      viewBox="0 0 1000 1000"
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      {points.map((p, i) => {
        const midX = center.x + (p.x - center.x) * 0.42;
        const midY = center.y + (p.y - center.y) * 0.42;
        const nearOuterX = center.x + (p.x - center.x) * 0.78;
        const nearOuterY = center.y + (p.y - center.y) * 0.78;
        return (
          <g key={i}>
            {/* solid segment leaving the center hexagon */}
            <line
              x1={center.x}
              y1={center.y}
              x2={midX}
              y2={midY}
              stroke="#2563eb"
              strokeWidth={2}
            />
            {/* dashed segment approaching the outer hexagon */}
            <line
              x1={midX}
              y1={midY}
              x2={nearOuterX}
              y2={nearOuterY}
              stroke="#93c5fd"
              strokeWidth={2}
              strokeDasharray="3 5"   // ← changed from "6 8" to make dashes consistent
            />
            <circle cx={midX} cy={midY} r={6} fill="#2563eb" />
            <circle cx={nearOuterX} cy={nearOuterY} r={6} fill="#2563eb" />
          </g>
        );
      })}
    </svg>
  );
}

export default function CoreValues({
  updatedOn = "June 30, 2020",
}: {
  updatedOn?: string;
}) {
  return (
    <section className="font-poppins bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <div className="mx-3 sm:mx-4 lg:mx-6">
        <img
          src={coreValuesBanner}
          alt="Core Values Banner"
          className="w-full object-cover"
        />
      </div>
      <div className="mx-3 mb-3 overflow-hidden rounded-3xl sm:mx-4 lg:mx-6">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-8 sm:py-20">

        {/* Desktop: hex flower */}
        <div className="relative hidden aspect-square w-full lg:block">
          <Connectors items={VALUES} />

          {/* Center hexagon */}
          <Hexagon
            className="absolute z-10 flex items-center justify-center bg-gradient-to-br from-blue-950 via-blue-700 to-blue-500"
            style={{
              top: "50%",
              left: "50%",
              width: `${CENTER_WIDTH_PCT}%`,
              aspectRatio: "2 / 1.7320508",
              transform: "translate(-50%, -50%)",
            }}
          >
            <span className="px-2 text-center text-xl font-extrabold leading-tight text-white sm:text-2xl">
              CORE
              <br />
              VALUES
            </span>
          </Hexagon>

          {/* Surrounding hexagons */}
          {VALUES.map((item) => (
            <Hexagon
              key={item.key}
              className={`absolute z-10 ${item.bg}`}
              style={{
                top: `${item.pos.top}%`,
                left: `${item.pos.left}%`,
                width: `${OUTER_WIDTH_PCT}%`,
                aspectRatio: "2 / 1.7320508",
                transform: "translate(-50%, -50%)",
              }}
            >
              <ValueCard item={item} />
            </Hexagon>
          ))}
        </div>

        {/* Below 1024px: plain boxes (no hexagon clipping), responsive
            from small screens (~256px) up through tablet widths */}
        <div className="lg:hidden">
          <div className="mx-auto mb-6 max-w-xs rounded-2xl bg-gradient-to-br from-blue-950 via-blue-700 to-blue-500 px-6 py-6 text-center shadow-lg shadow-blue-900/20 sm:max-w-sm">
            <p className="text-xl font-extrabold tracking-wide text-white sm:text-2xl">
              CORE VALUES
            </p>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
            {VALUES.map((item) => (
              <div
                key={item.key}
                className={`flex items-start gap-4 rounded-2xl p-4 shadow-sm ${item.bg}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-14 w-14 flex-shrink-0 rounded-xl object-cover ring-2 ring-white/70"
                  loading="lazy"
                />
                <div className="min-w-0 text-left">
                  <h3 className="mb-1 text-sm font-extrabold uppercase tracking-wide text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-white/90">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer strip */}
        <div className="mt-14 flex flex-col items-center gap-4 sm:mt-20">
          <div className="flex w-full max-w-2xl items-center gap-4 rounded-2xl border border-blue-100 bg-white px-5 py-4 shadow-sm">
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-blue-100">
              <Gem className="h-5 w-5 text-blue-600" />
            </span>
            <p className="text-sm text-slate-600 sm:text-base">
              These values are the foundation of our culture and the driving
              force behind our success.
            </p>
          </div>

          <div className="flex items-center gap-3 text-slate-500">
            <span className="h-px w-16 bg-slate-300" />
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
              <CalendarDays className="h-4 w-4 text-blue-600" />
            </span>
            <span className="text-sm">Updated: {updatedOn}</span>
            <span className="h-px w-16 bg-slate-300" />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}