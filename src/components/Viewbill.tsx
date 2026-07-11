import { FileText, ArrowRight, FileSearch, Wallet, FileCheck2 } from "lucide-react";

import viewBillBanner from "../assets/View Bill Section/viewBill Banner.png";
import viewYourBillGraphic from "../assets/View Bill Section/View your bill.png";
import billPaymentGraphic from "../assets/View Bill Section/Bill Payment Options.png";

const ViewBill = () => {
  return (
    <section className="mx-3 mb-3 font-poppins sm:mx-4 lg:mx-6">
      {/* Hero banner */}
      <div className="relative overflow-hidden rounded-3xl bg-sky-50">
        <img
          src={viewBillBanner}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Text content */}
        <div className="relative z-10 flex min-h-[320px] items-center px-6 py-12 sm:min-h-[380px] sm:px-10 lg:min-h-[460px] lg:px-16">
          <div className="max-w-lg">
            <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              Manage Your Gas Bill
              <br />
              <span className="text-blue-700">Anytime, Anywhere</span>
            </h2>
            <span className="mt-4 block h-1 w-14 bg-amber-400" />
            <p className="mt-4 max-w-sm text-slate-600">
              View, download and pay your SSGC gas bill easily with just a few
              clicks.
            </p>
            <button className="mt-6 flex items-center gap-2 rounded-md bg-blue-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800">
              <FileText className="h-4 w-4" />
              Go to e-Bill
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* SSGC Gas Bill card overlay */}
        <div className="absolute right-[3%] top-[58%] z-10 w-[280px] -translate-y-1/2 rounded-xl bg-white p-5 shadow-xl sm:w-[300px] lg:right-[10%] lg:w-[320px]">
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-blue-950">SSGC Gas Bill</p>
            <span className="text-lg">🔥</span>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs">
            <div>
              <p className="text-slate-400">Account Number</p>
              <p className="mt-0.5 font-semibold text-slate-700">1234567890123</p>
            </div>
            <div className="text-right">
              <p className="text-slate-400">Billing Month</p>
              <p className="mt-0.5 font-semibold text-slate-700">May 2024</p>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between rounded-md bg-blue-50 px-3 py-2">
            <p className="text-sm font-semibold text-blue-800">Amount Payable</p>
            <p className="text-sm font-bold text-blue-800">Rs. 2,345</p>
          </div>

          <div className="mt-3 flex items-center justify-between text-xs">
            <p className="text-slate-400">Due Date</p>
            <p className="font-semibold text-slate-700">15 Jun, 2024</p>
          </div>

          <p className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
            <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-500 text-[9px] text-white">
              ✓
            </span>
            Payable
          </p>

          {/* Small badge icon */}
          <span className="absolute -bottom-4 -right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-blue-700 shadow-lg ring-4 ring-white">
            <FileCheck2 className="h-6 w-6 text-blue-700" />
            <span className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-[9px] text-white">
              ✓
            </span>
          </span>
        </div>
      </div>

      {/* Two info cards */}
      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* View Your Bill (blue) */}
        <div className="relative overflow-hidden rounded-2xl bg-blue-50 p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-700 text-white">
              <FileSearch className="h-6 w-6" />
            </span>
          </div>

          <h3 className="mt-4 text-xl font-extrabold text-slate-900">
            View Your Bill
          </h3>
          <span className="mt-2 block h-0.5 w-10 bg-blue-700" />

          <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-600">
            View and download your monthly gas bill in PDF format. Requires
            Adobe Acrobat Reader.
          </p>

          <button className="mt-6 flex items-center gap-2 rounded-md border-2 border-blue-700 px-5 py-2.5 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-700 hover:text-white">
            View Bill
            <ArrowRight className="h-4 w-4" />
          </button>

          <img
            src={viewYourBillGraphic}
            alt="Monitor displaying an SSGC bill, next to a plant"
            className="pointer-events-none absolute bottom-0 right-0 w-72 object-contain sm:w-72 lg:w-80"
          />
        </div>

        {/* Bill Payment Options (yellow) */}
        <div className="relative overflow-hidden rounded-2xl bg-amber-50 p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-amber-400 text-white">
              <Wallet className="h-6 w-6" />
            </span>
          </div>

          <h3 className="mt-4 text-xl font-extrabold text-slate-900">
            Bill Payment Options
          </h3>
          <span className="mt-2 block h-0.5 w-10 bg-amber-400" />

          <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-600">
            A number of convenient payment options are available for bill
            payment. Click for more details.
          </p>

          <button className="mt-6 flex items-center gap-2 rounded-md border-2 border-amber-400 px-5 py-2.5 text-sm font-semibold text-amber-600 transition-colors hover:bg-amber-400 hover:text-white">
            Payment Options
            <ArrowRight className="h-4 w-4" />
          </button>

          <img
            src={billPaymentGraphic}
            alt="Phone showing payment options next to a card, shield, and coins"
            className="pointer-events-none absolute bottom-0 right-0 w-56 object-contain sm:w-64 lg:w-72"
          />
        </div>
      </div>
    </section>
  );
};

export default ViewBill;