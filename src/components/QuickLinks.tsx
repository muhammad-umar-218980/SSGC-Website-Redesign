import {
  FileCheck2,
  Flame,
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

const QuickLinks = () => {
  return (
    <div className="relative z-30 mx-3 -mt-10 rounded-2xl bg-white px-4 py-6 shadow-[0_10px_40px_-12px_rgba(15,23,42,0.15)] sm:mx-4 sm:-mt-12 sm:px-8 lg:mx-6 lg:-mt-14">
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
  );
};

export default QuickLinks;