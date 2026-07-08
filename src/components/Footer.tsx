import {
  MapPin,
  Phone,
  Mail,
  Link2,
  ChevronRight,
  FileText,
  ArrowRight,
  Calendar,
  Newspaper,
  ShieldCheck,
} from "lucide-react";

interface ContactRow {
  icon: React.ReactNode;
  label: string;
  value: string;
}

interface NewsItem {
  image: string;
  title: string;
  date: string;
}

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V9c0-.9.25-1.5 1.55-1.5H16.7V4.7c-.28-.04-1.24-.12-2.36-.12-2.34 0-3.94 1.43-3.94 4.05v2.26H7.7V14h2.7v8h3.1Z" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M22 5.9c-.7.3-1.4.5-2.2.6.8-.5 1.4-1.2 1.7-2.1-.7.4-1.6.8-2.4 1a3.8 3.8 0 0 0-6.5 3.5A10.8 10.8 0 0 1 4.7 4.7a3.8 3.8 0 0 0 1.2 5.1c-.6 0-1.2-.2-1.7-.5v.1c0 1.9 1.3 3.4 3.1 3.8-.6.1-1.1.2-1.7.1a3.8 3.8 0 0 0 3.6 2.6A7.6 7.6 0 0 1 2 17.4a10.8 10.8 0 0 0 5.8 1.7c7 0 10.8-5.8 10.8-10.8v-.5c.8-.5 1.4-1.2 1.9-2Z" />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 4.8 12 4.8 12 4.8s-6 0-7.7.5a2.7 2.7 0 0 0-1.9 1.9A28 28 0 0 0 2 12a28 28 0 0 0 .4 4.8 2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9A28 28 0 0 0 22 12a28 28 0 0 0-.4-4.8ZM10 15V9l5.2 3-5.2 3Z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3.25a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.4 20h-3.37v-5.9c0-1.4-.5-2.36-1.76-2.36-.96 0-1.53.65-1.78 1.27-.09.22-.11.53-.11.84V20H9.98s.05-10.32 0-11.5h3.38v1.63c.45-.7 1.25-1.68 3.04-1.68 2.22 0 3.9 1.45 3.9 4.56V20Z" />
  </svg>
);

const contactRows: ContactRow[] = [
  {
    icon: <MapPin className="h-5 w-5" />,
    label: "Our Address",
    value: "ST-4/B, Block 14, Sir Shah Suleman Road, Gulshan-e-Iqbal, Karachi.",
  },
  {
    icon: <Phone className="h-5 w-5" />,
    label: "Phone",
    value: "(+92 21) 9902 1000",
  },
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: "info@ssgc.com.pk",
  },
  {
    icon: <Link2 className="h-5 w-5" />,
    label: "Website",
    value: "www.ssgc.com.pk",
  },
];

const quickLinks: string[] = [
  "About Us",
  "Financial Highlights",
  "Infrastructure",
  "Customer Management",
  "Bill Payment Options",
  "Complaints / Feedback",
];

const newsItems: NewsItem[] = [
  {
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80",
    title: "SSGC MEDIA RELEASE",
    date: "September 8, 2024",
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=400&q=80",
    title: "SSGC Disconnects 3,276 illegal Gas Connections in Sindh and Balochistan",
    date: "September 4, 2024",
  },
  {
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80",
    title: "24-hours Gas Holiday for all Industries Including their Power Generation Units and all CNG Stations in Sindh",
    date: "August 22, 2024",
  },
  {
    image: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=400&q=80",
    title: "1 Arrested for Gas Theft, 809 Disconnections Made",
    date: "August 12, 2024",
  },
];

const Footer = () => {
  return (
    <footer className="mx-3 mb-3 font-poppins sm:mx-4 lg:mx-6">
      {/* Upper section */}
      <div className="rounded-t-3xl bg-slate-50 px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr_1fr]">
          {/* Column 1 — Company info */}
          <div>
            <div className="flex items-center gap-3">
              <img src="./logo.svg" alt="SSGC Logo" className="h-12 w-12 object-contain" />
              <div>
                <p className="text-xs font-semibold tracking-wide text-blue-700">
                  SERVICE WITH A SMILE
                </p>
                <h2 className="text-xl font-extrabold leading-tight tracking-tight text-slate-900">
                  SUI SOUTHERN GAS
                </h2>
                <p className="text-sm font-medium text-slate-600">COMPANY LIMITED</p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-slate-500">
              Sui Southern Gas Company Limited is committed to providing safe, reliable
              and efficient natural gas services to millions across Pakistan.
            </p>
            <span className="mt-4 block h-1 w-10 bg-amber-400" />

            <ul className="mt-5 divide-y divide-slate-200">
              {contactRows.map((row) => (
                <li key={row.label} className="flex items-start gap-3 py-3.5 first:pt-0">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-blue-700 shadow-sm">
                    {row.icon}
                  </span>
                  <div className="text-sm">
                    <p className="font-semibold text-slate-900">{row.label}</p>
                    <p className="mt-0.5 leading-snug text-slate-500">{row.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 — Quick links */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-800 text-white">
                <Link2 className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-extrabold tracking-wide text-slate-900">
                  QUICK LINKS
                </h3>
                <span className="mt-1 block h-1 w-8 bg-amber-400" />
              </div>
            </div>

            <ul className="mt-6 divide-y divide-slate-200">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="group flex items-center gap-2 py-3.5 text-sm font-medium text-slate-700 transition-colors hover:text-blue-700"
                  >
                    <ChevronRight className="h-4 w-4 text-blue-700 transition-transform group-hover:translate-x-1" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            <button className="mt-6 flex items-center gap-2 rounded-md bg-blue-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800">
              <FileText className="h-4 w-4" />
              View All Links
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Column 3 — Recent news */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-800 text-white">
                <Newspaper className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-extrabold tracking-wide text-slate-900">
                  RECENT NEWS
                </h3>
                <span className="mt-1 block h-1 w-8 bg-amber-400" />
              </div>
            </div>

            <ul className="mt-6 space-y-4">
              {newsItems.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <img
                    src={item.image}
                    alt=""
                    className="h-16 w-20 shrink-0 rounded-md object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold leading-snug text-slate-900">
                      {item.title}
                    </p>
                    <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
                      <Calendar className="h-3.5 w-3.5" />
                      {item.date}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <button className="mt-6 flex items-center gap-2 rounded-md border border-blue-800 px-5 py-3 text-sm font-semibold text-blue-800 transition-colors hover:bg-blue-800 hover:text-white">
              View All News
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Middle bar */}
      <div className="grid grid-cols-1 gap-8 bg-[#0e2a5e] px-6 py-8 sm:px-10 md:grid-cols-4 lg:px-14">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-sky-400/60 text-sky-300">
            <ShieldCheck className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-semibold text-white">Your Safety, Our Priority</p>
            <p className="text-xs text-white/60">
              In case of gas emergency, call our 24/7 helpline.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 md:border-l md:border-white/10 md:pl-8">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-amber-400 text-amber-400">
            <Phone className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm text-white/80">Gas Emergency Helpline</p>
            <p className="text-lg font-bold text-amber-400">1199</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 md:border-l md:border-white/10 md:pl-8">
          <p className="text-sm font-semibold text-white">Follow Us</p>
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-blue-800 transition-transform hover:scale-105"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sky-500 transition-transform hover:scale-105"
            >
              <TwitterIcon className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-red-600 transition-transform hover:scale-105"
            >
              <YoutubeIcon className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-blue-700 transition-transform hover:scale-105"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 md:border-l md:border-white/10 md:pl-8">
          <div>
            <p className="text-sm font-semibold text-white">Get in Touch</p>
            <p className="text-xs text-white/60">We are here to help you.</p>
          </div>
          <button className="flex shrink-0 items-center gap-2 rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-blue-900 transition-colors hover:bg-slate-100">
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col items-center justify-between gap-2 rounded-b-3xl bg-[#0a2150] px-6 py-4 text-xs text-white/70 sm:flex-row sm:px-10 lg:px-14">
        <p>© 2025 Sui Southern Gas Company Limited. All Rights Reserved.</p>
        <p>| Updated: May, 2025 |</p>
        <p>Powered by Sui Southern Gas Company Limited</p>
      </div>
    </footer>
  );
};

export default Footer;