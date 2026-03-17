"use client";
import { HiOutlineArrowRight, HiOutlineCheck } from "react-icons/hi2";
import {
  PiGiftBold,
  PiBuildingsBold,
  PiCurrencyInrBold,
  PiCertificateBold,
  PiFileTextBold,
  PiShieldCheckBold,
} from "react-icons/pi";
import { useApplyModal } from "./ApplyModal";

const benefits = [
  {
    icon: PiBuildingsBold,
    title: "3\u20135 University Options",
    description:
      "Handpicked universities matched to your marks, budget, and career goals.",
  },
  {
    icon: PiCurrencyInrBold,
    title: "Clear Budget Estimation",
    description:
      "Tuition, living costs, and scholarship options \u2014 all laid out upfront.",
  },
  {
    icon: PiCertificateBold,
    title: "Options Without IELTS",
    description:
      "Many universities accept MOI or offer IELTS waivers. We\u2019ll find the right fit.",
  },
  {
    icon: PiFileTextBold,
    title: "Strong SOP & Documentation",
    description:
      "We write and review your SOP, LORs, and application docs to maximise chances.",
  },
  {
    icon: PiShieldCheckBold,
    title: "Visa Success Guidance",
    description:
      "Mock interviews, document checklists, and expert prep \u2014 98% approval rate.",
  },
];

const WhatYouGetSection = () => {
  const { openModal } = useApplyModal();

  return (
    <section className="relative bg-gray-50 overflow-hidden">
      <div className="w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 ">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-xs font-semibold text-amber-700 mb-4">
            <PiGiftBold className="w-3.5 h-3.5" />
            What You Get
          </span>
          <h2 className="text-2xl sm:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
            Everything You Need to{" "}
            <span className="text-[#175ea4]">Study Abroad</span>  Sorted
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-500 leading-relaxed max-w-lg mx-auto">
            From your first consultation to your visa approval  here&apos;s
            exactly what we deliver.
          </p>
        </div>

        {/* Benefits grid — horizontal on mobile, grid on desktop */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4 lg:gap-5">
          {benefits.map((benefit, i) => {
            const isHighlight = i === 4;
            return (
              <div
                key={i}
                className={`relative group rounded-2xl border p-4 sm:p-5 lg:p-6 transition-all duration-300 ${
                  isHighlight
                    ? "bg-linear-to-br from-[#175ea4] to-[#1a3f6f] border-[#175ea4]/30 sm:col-span-2 lg:col-span-1"
                    : "bg-white border-gray-100 hover:border-[#175ea4]/20 hover:shadow-md hover:shadow-[#175ea4]/3"
                }`}
              >
                <div className="flex items-start gap-3.5 sm:gap-4">
                  {/* Icon */}
                  <div
                    className={`flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl shrink-0 transition-colors duration-300 ${
                      isHighlight
                        ? "bg-white/10 border border-white/15"
                        : "bg-blue-50 border border-blue-100 group-hover:bg-[#175ea4] group-hover:border-[#175ea4]"
                    }`}
                  >
                    <benefit.icon
                      className={`w-4.5 h-4.5 sm:w-5 sm:h-5 transition-colors duration-300 ${
                        isHighlight
                          ? "text-amber-300"
                          : "text-[#175ea4] group-hover:text-white"
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className={`text-[15px] sm:text-base lg:text-lg font-bold leading-snug ${
                        isHighlight ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {benefit.title}
                    </h3>
                    <p
                      className={`mt-1 text-[13px] sm:text-sm leading-relaxed ${
                        isHighlight ? "text-white/65" : "text-gray-500"
                      }`}
                    >
                      {benefit.description}
                    </p>
                  </div>

                  {/* Check */}
                  <HiOutlineCheck
                    className={`w-4 h-4 mt-0.5 shrink-0 ${
                      isHighlight ? "text-emerald-400" : "text-emerald-500/40"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-10 flex flex-col items-center text-center">
          <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">
            All of this is included — free of cost at your first session.
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

export default WhatYouGetSection;
