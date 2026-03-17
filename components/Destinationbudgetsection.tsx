"use client";
import { HiOutlineArrowRight } from "react-icons/hi2";
import {
  PiCurrencyInrBold,
  PiTrendUpBold,
  PiAirplaneTiltBold,
} from "react-icons/pi";
import { useApplyModal } from "./ApplyModal";

const destinations = [
  {
    flag: "\ud83c\uddec\ud83c\udde7",
    country: "United Kingdom",
    highlight: "1-Year Master\u2019s",
    budget: "\u20b912\u201325 Lakhs",
    tagline: "Top-ranked universities, fast ROI",
    points: [
      "Complete your Master\u2019s in just 12 months",
      "Post-study work visa up to 2 years",
      "Budget varies by university & city",
    ],
    color: "bg-blue-50 border-blue-100 text-blue-700",
    iconColor: "text-blue-600",
    accent: "from-blue-500/10 to-transparent",
  },
  {
    flag: "\ud83c\uddea\ud83c\uddfa",
    country: "Europe",
    highlight: "Most Affordable",
    budget: "\u20b98\u201318 Lakhs",
    tagline: "Germany, France, Ireland & more",
    points: [
      "Low or zero tuition in many countries",
      "Schengen visa \u2014 travel 26+ countries",
      "Great for engineering & business students",
    ],
    color: "bg-emerald-50 border-emerald-100 text-emerald-700",
    iconColor: "text-emerald-600",
    accent: "from-emerald-500/10 to-transparent",
  },
  {
    flag: "\ud83c\udde8\ud83c\udde6",
    country: "Canada",
    highlight: "PR Opportunities",
    budget: "\u20b920\u201335 Lakhs",
    tagline: "Study, work, and settle",
    points: [
      "3-year post-graduation work permit (PGWP)",
      "Clear pathway to Permanent Residency",
      "High earning potential after graduation",
    ],
    color: "bg-red-50 border-red-100 text-red-700",
    iconColor: "text-red-600",
    accent: "from-red-500/10 to-transparent",
  },
  {
    flag: "\ud83c\udde6\ud83c\uddea",
    country: "Dubai (UAE)",
    highlight: "No IELTS Options",
    budget: "Fast Processing",
    tagline: "Quick admits, global exposure",
    points: [
      "Many universities waive IELTS requirement",
      "Fastest visa processing \u2014 2\u20133 weeks",
      "Tax-free part-time work while studying",
    ],
    color: "bg-amber-50 border-amber-100 text-amber-700",
    iconColor: "text-amber-600",
    accent: "from-amber-500/10 to-transparent",
  },
];

const DestinationBudgetSection = () => {
  const { openModal } = useApplyModal();

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 ">
        {/* Header */}
        <div className=" mx-auto text-center mb-8 sm:mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-[#175ea4] mb-4">
            <PiAirplaneTiltBold className="w-3.5 h-3.5" />
            Countries &amp; Budget
          </span>
          <h2 className="text-2xl sm:text-6xl  font-extrabold text-gray-900 tracking-tight leading-[1.15]">
            Choose the Right Destination <br className="hidden sm:block" />
            for <span className="text-[#175ea4]">Your Budget</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-500 leading-relaxed max-w-lg mx-auto">
            Every student has a different budget. We match you with the best
            country and university that fits yours.
          </p>
        </div>

        {/* Destination cards */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
          {destinations.map((dest, i) => (
            <div
              key={i}
              className="relative group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-200 hover:shadow-lg hover:shadow-gray-900/3 transition-all duration-300"
            >
              {/* Top gradient accent */}
              <div
                className={`absolute top-0 left-0 right-0 h-24 bg-linear-to-b ${dest.accent} pointer-events-none`}
              />

              <div className="relative p-5 sm:p-6">
                {/* Header row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl sm:text-4xl leading-none">
                      {dest.flag}
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-tight">
                        {dest.country}
                      </h3>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {dest.tagline}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`shrink-0 px-2.5 py-1 rounded-lg border text-[10px] sm:text-[11px] font-bold uppercase tracking-wide ${dest.color}`}
                  >
                    {dest.highlight}
                  </span>
                </div>

                {/* Budget */}
                <div className="flex items-center gap-2 mb-4 px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-100">
                  <PiCurrencyInrBold className="w-4 h-4 text-gray-400 shrink-0" />
                  <span className="text-sm sm:text-base font-extrabold text-gray-900">
                    {dest.budget}
                  </span>
                  <span className="text-[11px] text-gray-400 ml-auto">
                    approx. total cost
                  </span>
                </div>

                {/* Points */}
                <ul className="space-y-2">
                  {dest.points.map((point, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-[13px] sm:text-sm text-gray-600"
                    >
                      <span
                        className={`mt-0.5 w-4 h-4 flex items-center justify-center shrink-0`}
                      >
                        <PiTrendUpBold
                          className={`w-3.5 h-3.5 ${dest.iconColor}`}
                        />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-10 flex flex-col items-center text-center">
          <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">
            Not sure which country fits your budget? We&apos;ll help you figure
            it out in 30 minutes.
          </p>
          <button
            onClick={openModal}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#175ea4] hover:bg-[#1a6bbb] text-white text-sm sm:text-base font-bold transition-all duration-200 hover:shadow-xl hover:shadow-[#175ea4]/20 active:scale-[0.97] group cursor-pointer"
          >
            Check Your Eligibility — Free
            <HiOutlineArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>

      <div className="w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  );
};

export default DestinationBudgetSection;
