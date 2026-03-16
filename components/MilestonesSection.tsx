"use client";
import { HiOutlineArrowRight } from "react-icons/hi2";
import {
  PiGlobeHemisphereWestBold,
  PiStudentBold,
  PiTrophyBold,
  PiAirplaneTiltBold,
  PiMapPinBold,
} from "react-icons/pi";
import { useApplyModal } from "./ApplyModal";

const milestones = [
  {
    icon: PiStudentBold,
    value: "8,000+",
    label: "Students Placed",
    color: "text-[#175ea4]",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: PiGlobeHemisphereWestBold,
    value: "15+",
    label: "Countries",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    icon: PiTrophyBold,
    value: "98%",
    label: "Visa Success Rate",
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    icon: PiAirplaneTiltBold,
    value: "230+",
    label: "University Partners",
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
  },
];

const destinations = [
  { flag: "🇺🇸", country: "USA", tagline: "Top-ranked universities" },
  { flag: "🇬🇧", country: "United Kingdom", tagline: "World-class education" },
  { flag: "🇨🇦", country: "Canada", tagline: "PR pathway options" },
  { flag: "🇦🇺", country: "Australia", tagline: "Work & study programs" },
  { flag: "🇩🇪", country: "Germany", tagline: "Low-tuition programs" },
  { flag: "🇫🇷", country: "France", tagline: "Top business schools" },
  { flag: "🇮🇪", country: "Ireland", tagline: "Post-study work visa" },
  { flag: "🇳🇿", country: "New Zealand", tagline: "Safe & affordable" },
  { flag: "🇫🇮", country: "Finland", tagline: "Tuition-free options" },
  { flag: "🇧🇪", country: "Belgium", tagline: "Heart of Europe" },
  { flag: "🇰🇷", country: "South Korea", tagline: "Scholarship programs" },
  { flag: "🇸🇬", country: "Singapore", tagline: "Asia's education hub" },
];

const MilestonesSection = () => {
  const { openModal } = useApplyModal();
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 py-10 sm:py-16 lg:py-20">
        {/* ── Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-4 sm:mb-5">
            <PiMapPinBold className="w-3.5 h-3.5 text-[#175ea4]" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.12em] text-[#175ea4]">
              Global Reach
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Your Dream Destination is{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#175ea4]">Within Reach</span>
              <span className="absolute bottom-0.5 left-0 w-full h-2 sm:h-2.5 bg-[#175ea4]/10 rounded-sm -skew-x-2" />
            </span>
          </h2>

          <p className="mt-3 sm:mt-4 text-[13px] sm:text-base text-gray-500 leading-relaxed">
            We&apos;ve placed 8,000+ students across 15+ countries at 230+
            partner universities. Here&apos;s where your journey could take you.
          </p>
        </div>

        {/* ── Milestone stats ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 mb-8 sm:mb-12">
          {milestones.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-center p-4 sm:p-5 rounded-xl sm:rounded-2xl ${stat.bg} border ${stat.border}`}
            >
              <stat.icon
                className={`w-6 h-6 sm:w-7 sm:h-7 ${stat.color} mb-2`}
              />
              <p
                className={`text-2xl sm:text-3xl font-extrabold ${stat.color} tracking-tight leading-none`}
              >
                {stat.value}
              </p>
              <p className="mt-1 text-[11px] sm:text-xs font-semibold text-gray-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* ── Destination countries grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
          {destinations.map((dest, i) => (
            <div
              key={i}
              className="group flex items-center gap-2.5 sm:gap-3 p-3 sm:p-4 rounded-xl bg-gray-50 border border-gray-100 hover:bg-blue-50 hover:border-blue-100 transition-all duration-200"
            >
              <span className="text-2xl sm:text-3xl flex-shrink-0 transition-transform duration-200 group-hover:scale-110">
                {dest.flag}
              </span>
              <span className="flex flex-col leading-tight min-w-0">
                <span className="text-xs sm:text-sm font-bold text-gray-900 truncate">
                  {dest.country}
                </span>
                <span className="text-[10px] sm:text-[11px] text-gray-400 truncate">
                  {dest.tagline}
                </span>
              </span>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-8 sm:mt-12 text-center">
          <button
            onClick={openModal}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-[#175ea4] hover:bg-[#1a6bbb] text-white text-sm sm:text-base font-bold transition-all duration-200 hover:shadow-lg hover:shadow-[#175ea4]/20 active:scale-[0.97] group"
          >
            Start Your Application
            <HiOutlineArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
          <p className="mt-2.5 text-[11px] sm:text-xs text-gray-400">
            Free consultation · No obligation · Get matched in 24 hours
          </p>
        </div>
      </div>

      {/* Bottom separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  );
};

export default MilestonesSection;
