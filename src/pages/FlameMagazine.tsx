import React, { useState } from "react";

import bannerImg from "../assets/flame-magazine/banner.jpg";
import img2026Q2 from "../assets/flame-magazine/2026-q2.jpg";
import img2026Q1 from "../assets/flame-magazine/2026-q1.jpg";
import img2025Q4 from "../assets/flame-magazine/2025-q4.jpg";
import img2025Q3 from "../assets/flame-magazine/2025-q3.jpg";
import img2025Q2 from "../assets/flame-magazine/2025-q2.jpg";
import img2025Q1 from "../assets/flame-magazine/2025-q1.jpg";
import img2024Q2 from "../assets/flame-magazine/2024-q2.jpg";
import img2024Q1 from "../assets/flame-magazine/2024-q1.jpg";
import img2023Q4 from "../assets/flame-magazine/2023-q4.jpg";

/* ----------------------------- Inline icons ----------------------------- */
/* Kept as tiny inline SVGs so this file has zero extra dependencies.
   Swap for `lucide-react` icons 1:1 if you already use that library. */

const CalendarIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M3 9.5H21" stroke="currentColor" strokeWidth="1.8" />
    <path d="M8 3V6.5M16 3V6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const BookOpenIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 6.5C10.6 5.2 8.4 4.5 6 4.5C5.4 4.5 4.8 4.55 4.3 4.65V17.65C4.8 17.55 5.4 17.5 6 17.5C8.4 17.5 10.6 18.2 12 19.5M12 6.5C13.4 5.2 15.6 4.5 18 4.5C18.6 4.5 19.2 4.55 19.7 4.65V17.65C19.2 17.55 18.6 17.5 18 17.5C15.6 17.5 13.4 18.2 12 19.5M12 6.5V19.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DownloadIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 4V14.5M12 14.5L16.5 10M12 14.5L7.5 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4.5 16.5V18C4.5 19.1 5.4 20 6.5 20H17.5C18.6 20 19.5 19.1 19.5 18V16.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const ChevronDownIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* --------------------------------- Data ---------------------------------- */

interface Issue {
  id: string;
  period: string;
  date: string;
  description: string;
  image: string;
  isLatest?: boolean;
}

type TimelineEntry =
  | { kind: "year"; year: string }
  | { kind: "issue"; side: "left" | "right"; issue: Issue };

const timeline: TimelineEntry[] = [
  { kind: "year", year: "2026" },
  {
    kind: "issue",
    side: "right",
    issue: {
      id: "2026-q2",
      period: "April – June 2026",
      date: "July 14, 2026",
      description: "Leveraging our strengths to power a sustainable tomorrow.",
      image: img2026Q2,
      isLatest: true,
    },
  },
  {
    kind: "issue",
    side: "left",
    issue: {
      id: "2026-q1",
      period: "January – March 2026",
      date: "June 16, 2026",
      description: "Transforming the energy landscape through innovation and resilience.",
      image: img2026Q1,
    },
  },
  { kind: "year", year: "2025" },
  {
    kind: "issue",
    side: "right",
    issue: {
      id: "2025-q4",
      period: "October – December 2025",
      date: "May 14, 2026",
      description: "Innovation for a sustainable future.",
      image: img2025Q4,
    },
  },
  {
    kind: "issue",
    side: "left",
    issue: {
      id: "2025-q3",
      period: "July – September 2025",
      date: "December 23, 2025",
      description: "Powering a better tomorrow with clean energy solutions.",
      image: img2025Q3,
    },
  },
  {
    kind: "issue",
    side: "right",
    issue: {
      id: "2025-q2",
      period: "April – June 2025",
      date: "July 31, 2025",
      description: "Accelerating to new heights for a brighter future.",
      image: img2025Q2,
    },
  },
  {
    kind: "issue",
    side: "left",
    issue: {
      id: "2025-q1",
      period: "January – March 2025",
      date: "June 3, 2025",
      description: "Accelerating to new heights with smart initiatives.",
      image: img2025Q1,
    },
  },
  { kind: "year", year: "2024" },
  {
    kind: "issue",
    side: "right",
    issue: {
      id: "2024-q2",
      period: "April – June 2024",
      date: "January 10, 2024",
      description: "Mitigating risk through effective ERM practices.",
      image: img2024Q2,
    },
  },
];

/* Extra issues revealed by "View More Issues" */
const moreIssues: Issue[] = [
  {
    id: "2024-q1",
    period: "January – March 2024",
    date: "December 2023",
    description: "Reflecting on a year of resilience and readiness.",
    image: img2024Q1,
  },
  {
    id: "2023-q4",
    period: "October – December 2023",
    date: "September 2023",
    description: "Closing the year with a renewed commitment to progress.",
    image: img2023Q4,
  },
];

/* --------------------------------- Card ---------------------------------- */

function IssueCard({ issue, side }: { issue: Issue; side: "left" | "right" }) {
  return (
    <div className="relative flex gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_10px_30px_-12px_rgba(15,23,42,0.15)] sm:p-5">
      {/* pointer notch toward the center line (desktop only) */}
      <span
        className={`absolute top-9 hidden h-3.5 w-3.5 rotate-45 border border-slate-100 bg-white sm:block ${
          side === "left" ? "-right-[7px] border-b-0 border-l-0" : "-left-[7px] border-r-0 border-t-0"
        }`}
      />

      <img
        src={issue.image}
        alt={issue.period}
        className="h-36 w-24 shrink-0 rounded-xl object-cover sm:h-40 sm:w-28"
        loading="lazy"
      />

      <div className="flex min-w-0 flex-1 flex-col">
        {issue.isLatest && (
          <span className="mb-1.5 w-fit rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold tracking-wide text-blue-600">
            LATEST ISSUE
          </span>
        )}

        <h3 className="text-[17px] font-bold leading-snug text-[#0f1b3d]">{issue.period}</h3>

        <div className="mt-1.5 flex items-center gap-1.5 text-xs text-slate-400">
          <CalendarIcon className="h-3.5 w-3.5" />
          <span>{issue.date}</span>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-slate-500">{issue.description}</p>

        <hr className="my-3 border-slate-100" />

        <div className="flex items-center gap-2 text-sm font-medium">
          <a href="#" className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700">
            <BookOpenIcon className="h-4 w-4" />
            Read Online
          </a>
          <span className="text-slate-300">|</span>
          <a href="#" className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700">
            <DownloadIcon className="h-4 w-4" />
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------- Main page -------------------------------- */

export default function FlameMagazine() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      {/* Banner */}
      <div className="mx-3 sm:mx-4 lg:mx-6">
        <img src={bannerImg} alt="Flame Magazine banner" className="w-full object-cover" loading="lazy" />
      </div>

      <div className="px-4 py-16 sm:px-6">

      {/* Timeline */}
      <div className="relative mx-auto mt-14 max-w-5xl">
        {/* center line */}
        <span className="absolute left-4 top-0 bottom-0 w-px bg-blue-100 sm:left-1/2 sm:-translate-x-1/2" />

        <div className="flex flex-col gap-10 sm:gap-14">
          {timeline.map((entry, i) => {
            if (entry.kind === "year") {
              return (
                <div key={entry.year} className="relative z-10 flex justify-start sm:justify-center">
                  <span className="ml-0 rounded-full border border-blue-200 bg-white px-5 py-1.5 text-sm font-semibold text-blue-600 sm:ml-0">
                    {entry.year}
                  </span>
                </div>
              );
            }

            const { side, issue } = entry;
            return (
              <div
                key={issue.id}
                className={`relative flex ${side === "left" ? "sm:justify-start" : "sm:justify-end"}`}
              >
                {/* dot on the center line */}
                <span className="absolute left-4 top-9 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-[3px] border-blue-500 bg-white sm:left-1/2 sm:top-1/2 sm:-translate-y-1/2" />

                <div className="w-full pl-10 sm:w-[46%] sm:pl-0">
                  <IssueCard issue={issue} side={side} />
                </div>
              </div>
            );
          })}

          {showMore &&
            moreIssues.map((issue, i) => {
              const side: "left" | "right" = i % 2 === 0 ? "left" : "right";
              return (
                <div
                  key={issue.id}
                  className={`relative flex ${side === "left" ? "sm:justify-start" : "sm:justify-end"}`}
                >
                  <span className="absolute left-4 top-9 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-[3px] border-blue-500 bg-white sm:left-1/2 sm:top-1/2 sm:-translate-y-1/2" />
                  <div className="w-full pl-10 sm:w-[46%] sm:pl-0">
                    <IssueCard issue={issue} side={side} />
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* View more issues */}
      <div className="mt-12 flex justify-center">
        <button
          type="button"
          onClick={() => setShowMore((v) => !v)}
          className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-6 py-2.5 text-sm font-semibold text-blue-600 shadow-sm transition hover:bg-blue-50"
        >
          {showMore ? "Show Less" : "View More Issues"}
          <ChevronDownIcon className={`h-4 w-4 transition-transform ${showMore ? "rotate-180" : ""}`} />
        </button>
      </div>
      </div>
    </div>
  );
}