"use client";
import { HiOutlineArrowRight } from "react-icons/hi2";
import {
  PiChatsCircleBold,
  PiGraduationCapBold,
  PiBankBold,
  PiStampBold,
  PiPenNibBold,
  PiExamBold,
  PiHouseBold,
  PiHandshakeBold,
} from "react-icons/pi";
import { useApplyModal } from "./ApplyModal";

const services = [
  {
    step: "01",
    icon: PiChatsCircleBold,
    title: "Student Counselling",
    description:
      "Personalized 1-on-1 guidance based on your academics, CGPA, and career goals — so you pick the right country, course, and university from day one.",
    gradient: "from-[#175ea4] to-blue-500",
    bg: "bg-blue-50",
    border: "border-blue-100",
    color: "text-[#175ea4]",
  },
  {
    step: "02",
    icon: PiExamBold,
    title: "IELTS & Test Prep",
    description:
      "High-scoring strategies, practice tests, and 1-on-1 mentoring to help you hit your target band in IELTS, TOEFL, PTE, or GRE.",
    gradient: "from-sky-500 to-sky-400",
    bg: "bg-sky-50",
    border: "border-sky-100",
    color: "text-sky-600",
  },
  {
    step: "03",
    icon: PiPenNibBold,
    title: "SOP Drafting",
    description:
      "Compelling, university-specific Statements of Purpose and Letters of Recommendation that highlight your strengths and career vision.",
    gradient: "from-rose-500 to-rose-400",
    bg: "bg-rose-50",
    border: "border-rose-100",
    color: "text-rose-600",
  },
  {
    step: "04",
    icon: PiGraduationCapBold,
    title: "University & Course Selection",
    description:
      "We shortlist universities that match your profile, budget, and aspirations — maximizing your chances of admission to top-ranked institutions.",
    gradient: "from-emerald-600 to-emerald-400",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    color: "text-emerald-600",
  },

  {
    step: "05",
    icon: PiBankBold,
    title: "Student Loan Assistance",
    description:
      "From finding the right education loan provider to preparing your documents — we make financing your global education simple and transparent.",
    gradient: "from-amber-500 to-orange-400",
    bg: "bg-amber-50",
    border: "border-amber-100",
    color: "text-amber-600",
  },
  {
    step: "06",
    icon: PiStampBold,
    title: "Visa Application Support",
    description:
      "End-to-end visa assistance — from document preparation to filing and interview coaching — with a 98% approval rate across all destinations.",
    gradient: "from-violet-600 to-violet-400",
    bg: "bg-violet-50",
    border: "border-violet-100",
    color: "text-violet-600",
  },

  {
    step: "07",
    icon: PiHandshakeBold,
    title: "Post-Landing Support",
    description:
      "We don\u2019t stop at admission. Bank account setup, SIM card, local orientation, and ongoing support \u2014 we\u2019re with you after you land.",
    gradient: "from-orange-500 to-orange-400",
    bg: "bg-orange-50",
    border: "border-orange-100",
    color: "text-orange-600",
  },
  {
    step: "08",
    icon: PiHouseBold,
    title: "Accommodation Assistance",
    description:
      "Secure safe, affordable housing near your university before you even land — so you arrive with peace of mind, not stress.",
    gradient: "from-teal-600 to-teal-400",
    bg: "bg-teal-50",
    border: "border-teal-100",
    color: "text-teal-600",
  },
];

const ServicesSection = () => {
  const { openModal } = useApplyModal();

  return (
    <section className="relative bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 py-10 sm:py-16 ">
        {/* ── Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm mb-4 sm:mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#175ea4]" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.12em] text-[#175ea4]">
              Our Services
            </span>
          </div>

          <h2 className="text-2xl sm:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Everything You Need to{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#175ea4]">Study Abroad</span>
              <span className="absolute bottom-0.5 left-0 w-full h-2 sm:h-2.5 bg-[#175ea4]/10 rounded-sm -skew-x-2" />
            </span>
          </h2>

          <p className="mt-3 sm:mt-4 text-[13px] sm:text-base text-gray-500 leading-relaxed">
            From your first counselling call to your first day on campus — 8
            steps, all handled by us.
          </p>
        </div>

        {/* ── Stepwise service cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50 hover:border-gray-200 hover:-translate-y-1"
            >
              {/* Top gradient strip */}
              <div
                className={`h-1 bg-linear-to-r ${service.gradient} opacity-40 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div className="p-4 sm:p-5">
                {/* Step number + Icon row */}
                <div className="flex items-center justify-between mb-4">
                  {/* Step number */}
                  <span
                    className={`inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-linear-to-br ${service.gradient} text-white text-xs sm:text-sm font-extrabold shadow-sm`}
                  >
                    {service.step}
                  </span>

                  {/* Icon */}
                  <span
                    className={`flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${service.bg} border ${service.border} transition-transform duration-200 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <service.icon
                      className={`w-4.5 h-4.5 sm:w-5 sm:h-5 ${service.color}`}
                    />
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-[15px] font-bold text-gray-900 leading-snug">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-1.5 sm:mt-2 text-[11px] sm:text-[13px] text-gray-500 leading-relaxed">
                  {service.description}
                </p>

                {/* Step connector — mobile only, between cards */}
                {i < services.length - 1 && (
                  <div className="sm:hidden flex justify-center mt-4 -mb-6">
                    <div className="flex flex-col items-center gap-0.5">
                      <div className="w-0.5 h-1.5 rounded-full bg-gray-200" />
                      <div className="w-0.5 h-1.5 rounded-full bg-gray-200/60" />
                      <div className="w-0.5 h-1 rounded-full bg-gray-200/30" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-8 sm:mt-12 text-center">
          <button
            onClick={openModal}
            className="inline-flex cursor-pointer items-center gap-2.5 px-7 sm:px-9 py-3.5 sm:py-4 rounded-2xl bg-linear-to-r from-[#175ea4] to-blue-500 hover:from-[#1a6bbb] hover:to-blue-400 text-white text-sm sm:text-base font-bold transition-all duration-300 hover:shadow-xl hover:shadow-[#175ea4]/25 active:scale-[0.97] group"
          >
            Get Offer in 24Hrs
            <HiOutlineArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
          <p className="mt-3 text-[11px] sm:text-xs text-gray-400">
            Free counselling · No hidden charges · 100% transparent process
          </p>
        </div>
      </div>

      {/* Bottom separator */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  );
};

export default ServicesSection;
