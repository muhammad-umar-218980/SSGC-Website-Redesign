import { User, Mail, Phone, MapPin } from "lucide-react";

interface FocalPerson {
  name: string;
  role: string;
  email: string;
  phone: string;
}

const focalPersons: FocalPerson[] = [
  {
    name: "Mr. Altaf Jatoi",
    role: "Manager Board Secretariat",
    email: "altaf.jatoi@ssgc.com.pk",
    phone: "021-99021743",
  },
  {
    name: "Syed Atif Sarwat",
    role: "Manager, Company Secretariat",
    email: "atif.sarwat@ssgc.com.pk",
    phone: "021-99021021",
  },
];

const DotPattern = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="120"
    height="120"
    viewBox="0 0 120 120"
    fill="none"
    aria-hidden="true"
  >
    {Array.from({ length: 8 }).map((_, row) =>
      Array.from({ length: 8 }).map((_, col) => (
        <circle
          key={`${row}-${col}`}
          cx={col * 16 + 4}
          cy={row * 16 + 4}
          r="1.6"
          className="fill-slate-300/70"
        />
      ))
    )}
  </svg>
);

const FocalPersons = () => {
  return (
    <section className="mx-3 mb-3 rounded-3xl bg-slate-50 px-4 py-8 font-poppins sm:mx-4 sm:px-8 sm:py-10 lg:mx-6 lg:px-14 lg:py-12">
      {/* Heading */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-xl font-extrabold tracking-tight text-blue-950 sm:text-2xl lg:text-3xl">
          FOCAL PERSONS FOR INVESTOR QUERIES / GRIEVANCES
        </h2>
        <span className="mx-auto mt-3 block h-1 w-14 rounded-full bg-amber-400" />
        <p className="mt-4 text-sm text-slate-500 sm:text-base">
          For any investor related queries or grievances, you may contact our
          designated focal persons.
        </p>
      </div>

      {/* Two focal person cards */}
      <div className="relative mt-6 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6">
        {focalPersons.map((person) => (
          <div
            key={person.name}
            className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 sm:p-8"
          >
            <DotPattern className="pointer-events-none absolute -left-4 top-1/2 hidden -translate-y-1/2 opacity-70 sm:block" />
            <DotPattern className="pointer-events-none absolute -right-4 top-1/2 hidden -translate-y-1/2 opacity-70 sm:block" />

            <div className="relative flex items-start gap-4 sm:gap-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-800 text-white sm:h-16 sm:w-16">
                <User className="h-6 w-6 sm:h-8 sm:w-8" strokeWidth={1.75} />
              </span>

              <div className="min-w-0 flex-1">
                <h3 className="text-base font-bold text-blue-950 sm:text-lg">{person.name}</h3>
                <span className="mt-1 block h-0.5 w-10 bg-amber-400" />
                <p className="mt-2 text-sm text-slate-500">{person.role}</p>

                <div className="mt-4 flex items-center gap-2.5 text-sm">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-blue-700">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span className="min-w-0 break-words text-slate-500">
                    Email:{" "}
                    <a href={`mailto:${person.email}`} className="text-blue-600 hover:underline">
                      {person.email}
                    </a>
                  </span>
                </div>

                <div className="mt-3 flex items-center gap-2.5 text-sm">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-blue-700">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span className="text-slate-500">
                    Phone: <span className="text-slate-700">{person.phone}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* RTI / PM Delivery Unit section */}
      <div className="relative mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 sm:mt-10 sm:p-8 lg:p-10">

        <div className="grid grid-cols-1 gap-8 md:grid-cols-[220px_1fr] md:gap-10">
          {/* Envelope illustration */}
          <div className="relative mx-auto flex h-40 w-48 items-center justify-center sm:h-48 sm:w-56">
            <div className="absolute h-32 w-32 rounded-full bg-blue-100/70 blur-md sm:h-40 sm:w-40" />

            <svg viewBox="0 0 200 160" className="relative h-full w-full drop-shadow-sm">
              {/* envelope back panel */}
              <rect x="14" y="46" width="172" height="96" rx="10" fill="#FBBF24" />

              {/* back top flap (open "V", darker for depth) */}
              <path d="M14 52 C14 48 16 46 20 46 L180 46 C184 46 186 48 186 52 L100 108 Z" fill="#F5A623" />

              {/* letter peeking out from the flap */}
              <rect
                x="46"
                y="10"
                width="108"
                height="82"
                rx="6"
                fill="#FFFFFF"
                stroke="#E2E8F0"
                strokeWidth="2"
              />
              <line x1="62" y1="34" x2="138" y2="34" stroke="#64748B" strokeWidth="4" strokeLinecap="round" />
              <line x1="62" y1="48" x2="128" y2="48" stroke="#CBD5E1" strokeWidth="4" strokeLinecap="round" />
              <line x1="62" y1="62" x2="118" y2="62" stroke="#CBD5E1" strokeWidth="4" strokeLinecap="round" />
              <line x1="62" y1="76" x2="104" y2="76" stroke="#CBD5E1" strokeWidth="4" strokeLinecap="round" />

              {/* front flaps (closed envelope "V", two-tone for a soft fold shadow) */}
              <path d="M14 142 L100 108 L100 122 L34 142 Z" fill="#FDBA3F" />
              <path d="M186 142 L100 108 L100 122 L166 142 Z" fill="#F0980C" />
              <rect x="14" y="132" width="172" height="10" rx="4" fill="#F5A623" />
            </svg>

            {/* avatar badge, sitting over the flap seam */}
            <span className="absolute bottom-3 left-1/2 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full bg-blue-800 text-white ring-4 ring-white sm:bottom-4 sm:h-14 sm:w-14">
              <User className="h-5 w-5 sm:h-7 sm:w-7" strokeWidth={1.75} />
            </span>
          </div>

          {/* Content */}
          <div className="min-w-0">
            <h3 className="text-base font-extrabold leading-snug tracking-tight text-blue-950 sm:text-lg lg:text-xl">
              FOCAL PERSON AS PER RIGHT OF ACCESS TO INFORMATION ACT 2017 &amp; PRIME
              MINISTER DELIVERY UNIT, SSGC
            </h3>
            <span className="mt-3 block h-1 w-14 rounded-full bg-amber-400" />

            <div className="mt-5 grid grid-cols-1 gap-x-8 gap-y-5 sm:mt-6 sm:grid-cols-2 sm:gap-y-6">
              {/* Left column */}
              <div className="space-y-5 sm:space-y-6 sm:border-r sm:border-dashed sm:border-slate-300 sm:pr-8">
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 sm:h-10 sm:w-10">
                    <User className="h-4 w-4 sm:h-5 sm:w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-blue-950 sm:text-base">
                      Mr. Amir Mumtaz Khan
                    </p>
                    <p className="text-xs font-medium text-blue-600 sm:text-sm">
                      General Manager (Coordination)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 sm:h-10 sm:w-10">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                  </span>
                  <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
                    Sui Southern Gas Co. Ltd.
                    <br />
                    Sir Shah Suleman Road,
                    <br />
                    Gulshan e Iqbal,
                    <br />
                    Karachi.
                  </p>
                </div>
              </div>

              {/* Right column */}
              <div className="space-y-5 sm:space-y-6">
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 sm:h-10 sm:w-10">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                  </span>
                  <p className="text-xs text-slate-600 sm:text-sm">
                    Tel:
                    <br />
                    <span className="font-medium text-slate-800">+9221-99224713</span>
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 sm:h-10 sm:w-10">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                  </span>
                  <p className="min-w-0 break-words text-xs text-slate-600 sm:text-sm">
                    Email:
                    <br />
                    <a
                      href="mailto:amir.mumtaz@ssgc.com.pk"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      amir.mumtaz@ssgc.com.pk
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FocalPersons;