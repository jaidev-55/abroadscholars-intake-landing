"use client";
import { HiOutlineArrowRight } from "react-icons/hi2";
import {
  PiChatsCircleBold,
  PiFileTextBold,
  PiAirplaneTiltBold,
  PiCheckCircleBold,
} from "react-icons/pi";
import { useApplyModal } from "./ApplyModal";

const steps = [
  {
    number: "01",
    keyword: "Consult",
    icon: PiChatsCircleBold,
    title: "Your Dream, Our Roadmap",
    description:
      "Book a free 1-on-1 session with our expert counsellors. We'll assess your profile, understand your goals, and build a personalized study abroad plan — country, course, and budget all mapped out.",
    highlights: ["Free assessment", "Profile analysis", "Custom plan"],
    gradient: "from-[#175ea4] to-blue-500",
    lightBg: "bg-blue-50",
    lightBorder: "border-blue-100",
    color: "text-[#175ea4]",
  },
  {
    number: "02",
    keyword: "Apply",
    icon: PiFileTextBold,
    title: "We Handle Everything",
    description:
      "From university shortlisting to SOP drafting, document prep, and submission — we manage your entire application. Offer letter in as little as 24 hours.",
    highlights: ["SOP & docs", "University match", "24hr offer"],
    gradient: "from-emerald-600 to-emerald-400",
    lightBg: "bg-emerald-50",
    lightBorder: "border-emerald-100",
    color: "text-emerald-600",
  },
  {
    number: "03",
    keyword: "Fly",
    icon: PiAirplaneTiltBold,
    title: "Ready for Takeoff",
    description:
      "Visa filing, pre-departure briefing, accommodation, forex — we handle every last detail so you board your flight with confidence, not checklists.",
    highlights: ["Visa support", "Accommodation", "Pre-departure"],
    gradient: "from-amber-500 to-orange-400",
    lightBg: "bg-amber-50",
    lightBorder: "border-amber-100",
    color: "text-amber-600",
  },
];

const lineColors = [
  "from-[#175ea4]/25 to-emerald-500/25",
  "from-emerald-500/25 to-amber-500/25",
];

const ProcessSection = () => {
  const { openModal } = useApplyModal();
  return (
    <section className="relative bg-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 py-10 sm:py-16 ">
        {/* ── Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm mb-4 sm:mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#175ea4]" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.12em] text-[#175ea4]">
              How It Works
            </span>
          </div>

          <h2 className="text-2xl sm:text-6xl  font-extrabold text-gray-900 leading-tight tracking-tight">
            Three Simple Steps to Your{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#175ea4]">
                Dream University
              </span>
              <span className="absolute bottom-0.5 left-0 w-full h-2 sm:h-2.5 bg-[#175ea4]/10 rounded-sm -skew-x-2" />
            </span>
          </h2>

          <p className="mt-3 sm:mt-4 text-[13px] sm:text-base text-gray-500 leading-relaxed">
            Most students spend months figuring this out alone. With us, you go
            from first call to boarding pass — guided every step of the way.
          </p>
        </div>

        {/* ── Timeline number strip (desktop) ── */}
        <div className="hidden lg:flex items-center justify-between max-w-3xl mx-auto mb-6 px-4">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center flex-1 last:flex-none">
              {/* Number badge */}
              <span
                className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-2xl bg-linear-to-br ${step.gradient} text-white text-base font-extrabold shadow-lg shadow-gray-900/10 ring-4 ring-white shrink-0`}
              >
                {step.number}
              </span>

              {/* Connector line (not after last step) */}
              {i < steps.length - 1 && (
                <div className="flex-1 h-0.5 mx-1">
                  <div
                    className={`w-full h-full bg-linear-to-r ${lineColors[i]} rounded-full`}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ── Step cards ── */}
        <div className="grid lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {/* Mobile number badge */}
              <div className="flex justify-center lg:hidden mb-3">
                <span
                  className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br ${step.gradient} text-white text-sm font-extrabold shadow-md shadow-gray-900/10 ring-[3px] ring-white`}
                >
                  {step.number}
                </span>
              </div>

              {/* Card */}
              <div className="group relative bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50 hover:border-gray-200 hover:-translate-y-1">
                {/* Top colored line */}
                <div
                  className={`absolute top-0 inset-x-0 h-0.75 rounded-t-2xl bg-linear-to-r ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Keyword + Icon row */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-3 py-1 rounded-full ${step.lightBg} border ${step.lightBorder} text-[11px] sm:text-xs font-bold ${step.color} uppercase tracking-wide`}
                  >
                    {step.keyword}
                  </span>
                  <span
                    className={`flex items-center justify-center w-10 h-10 rounded-xl ${step.lightBg} border ${step.lightBorder} transition-transform duration-200 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <step.icon className={`w-5 h-5 ${step.color}`} />
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-[12px] sm:text-[13px] text-gray-500 leading-relaxed">
                  {step.description}
                </p>

                {/* Highlight chips */}
                <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5">
                  {step.highlights.map((h, j) => (
                    <span
                      key={j}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-gray-50 border border-gray-100 text-[10px] sm:text-[11px] font-medium text-gray-500"
                    >
                      <PiCheckCircleBold
                        className={`w-3 h-3 ${step.color} shrink-0`}
                      />
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mobile connector */}
              {i < steps.length - 1 && (
                <div className="lg:hidden flex flex-col items-center mt-2 mb-1 gap-0.5">
                  <div className="w-0.5 h-2 rounded-full bg-gray-200" />
                  <div className="w-0.5 h-2 rounded-full bg-gray-200/60" />
                  <div className="w-0.5 h-1.5 rounded-full bg-gray-200/30" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-10 sm:mt-14 text-center">
          <button
            onClick={openModal}
            className="inline-flex cursor-pointer items-center gap-2.5 px-7 sm:px-9 py-3.5 sm:py-4 rounded-2xl bg-linear-to-r from-[#175ea4] to-blue-500 hover:from-[#1a6bbb] hover:to-blue-400 text-white text-sm sm:text-base font-bold transition-all duration-300 hover:shadow-xl hover:shadow-[#175ea4]/25 active:scale-[0.97] group"
          >
            Get Offer in 24Hrs
            <HiOutlineArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
          <p className="mt-3 text-[11px] sm:text-xs text-gray-400">
            Most students get their offer letter within 24 hours of applying
          </p>
        </div>
      </div>

      {/* Bottom separator */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  );
};

export default ProcessSection;
