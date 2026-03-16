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
    icon: PiChatsCircleBold,
    title: "Student Counselling",
    description:
      "Personalized 1-on-1 guidance based on your academics, CGPA, and career goals — so you pick the right country, course, and university from day one.",
    accent: "bg-blue-50 border-blue-100 text-[#175ea4]",
  },
  {
    icon: PiGraduationCapBold,
    title: "University & Course Selection",
    description:
      "We shortlist universities that match your profile, budget, and aspirations — maximizing your chances of admission to top-ranked institutions.",
    accent: "bg-emerald-50 border-emerald-100 text-emerald-600",
  },
  {
    icon: PiBankBold,
    title: "Student Loan Assistance",
    description:
      "From finding the right education loan provider to preparing your documents — we make financing your global education simple and transparent.",
    accent: "bg-amber-50 border-amber-100 text-amber-600",
  },
  {
    icon: PiStampBold,
    title: "Visa Application Support",
    description:
      "End-to-end visa assistance — from document preparation to filing and interview coaching — with a 98% approval rate across all destinations.",
    accent: "bg-violet-50 border-violet-100 text-violet-600",
  },
  {
    icon: PiPenNibBold,
    title: "SOP & LOR Drafting",
    description:
      "Compelling, university-specific Statements of Purpose and Letters of Recommendation that highlight your strengths and career vision.",
    accent: "bg-rose-50 border-rose-100 text-rose-600",
  },
  {
    icon: PiExamBold,
    title: "IELTS & Test Prep",
    description:
      "High-scoring strategies, practice tests, and 1-on-1 mentoring to help you hit your target band in IELTS, TOEFL, PTE, or GRE.",
    accent: "bg-sky-50 border-sky-100 text-sky-600",
  },
  {
    icon: PiHouseBold,
    title: "Accommodation Assistance",
    description:
      "Secure safe, affordable housing near your university before you even land — so you arrive with peace of mind, not stress.",
    accent: "bg-teal-50 border-teal-100 text-teal-600",
  },
  {
    icon: PiHandshakeBold,
    title: "Post-Landing Support",
    description:
      "We don't stop at admission. Bank account setup, SIM card, local orientation, and ongoing support — we're with you after you land.",
    accent: "bg-orange-50 border-orange-100 text-orange-600",
  },
];

const ServicesSection = () => {
  const { openModal } = useApplyModal();
  return (
    <section className="relative bg-gray-50/60">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 py-10 sm:py-16 lg:py-20">
        {/* ── Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-4 sm:mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#175ea4]" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.12em] text-[#175ea4]">
              Our Services
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Everything You Need to{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#175ea4]">Study Abroad</span>
              <span className="absolute bottom-0.5 left-0 w-full h-2 sm:h-2.5 bg-[#175ea4]/10 rounded-sm -skew-x-2" />
            </span>
          </h2>

          <p className="mt-3 sm:mt-4 text-[13px] sm:text-base text-gray-500 leading-relaxed">
            From your first counselling call to your first day on campus — we
            handle every step so you can focus on your future.
          </p>
        </div>

        {/* ── Service cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {services.map((service, i) => {
            const accentParts = service.accent.split(" ");
            const bgColor = accentParts[0];
            const borderColor = accentParts[1];
            const textColor = accentParts[2];

            return (
              <div
                key={i}
                className="group relative bg-white rounded-xl sm:rounded-2xl border border-gray-100 p-4 sm:p-5 lg:p-6 transition-all duration-200 hover:shadow-lg hover:shadow-gray-200/60 hover:border-gray-200 hover:-translate-y-0.5"
              >
                {/* Icon */}
                <span
                  className={`inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${bgColor} border ${borderColor} mb-3 sm:mb-4 transition-transform duration-200 group-hover:scale-105`}
                >
                  <service.icon
                    className={`w-5 h-5 sm:w-5.5 sm:h-5.5 ${textColor}`}
                  />
                </span>

                {/* Title */}
                <h3 className="text-sm sm:text-[15px] font-bold text-gray-900 leading-snug">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-1.5 sm:mt-2 text-[12px] sm:text-[13px] text-gray-500 leading-relaxed">
                  {service.description}
                </p>

                {/* Subtle top accent line */}
                <div
                  className={`absolute top-0 left-4 right-4 sm:left-5 sm:right-5 h-0.5 rounded-full ${bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
                />
              </div>
            );
          })}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-8 sm:mt-12 text-center">
          <button
            onClick={openModal}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-[#175ea4] hover:bg-[#1a6bbb] text-white text-sm sm:text-base font-bold transition-all duration-200 hover:shadow-lg hover:shadow-[#175ea4]/20 active:scale-[0.97] group"
          >
            Get Offer in 24Hrs
            <HiOutlineArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
          <p className="mt-2.5 text-[11px] sm:text-xs text-gray-400">
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
