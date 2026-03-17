"use client";
import { HiOutlineArrowRight } from "react-icons/hi2";
import {
  PiWarningCircleBold,
  PiBookOpenBold,
  PiFileXBold,
  PiFileDashedBold,
  PiUserCircleMinusBold,
  PiArrowRightBold,
} from "react-icons/pi";
import { useApplyModal } from "./ApplyModal";

const mistakes = [
  {
    icon: PiBookOpenBold,
    mistake: "Choosing the wrong course",
    fix: "We match courses to your profile, goals & job market",
  },
  {
    icon: PiFileXBold,
    mistake: "Applying without proper documents",
    fix: "We prepare & verify every document before submission",
  },
  {
    icon: PiFileDashedBold,
    mistake: "Weak SOP leading to rejection",
    fix: "Our team writes & reviews every SOP for max acceptance",
  },
  {
    icon: PiUserCircleMinusBold,
    mistake: "Trusting unreliable agents",
    fix: "Google-rated 4.9\u2605 with 1000+ successful placements",
  },
];

const CommonMistakesSection = () => {
  const { openModal } = useApplyModal();

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 ">
        {/* Two-column layout: Left content + Right cards */}
        <div className="grid lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-14 items-center">
          {/* Left — Header + CTA (2 cols) */}
          <div className="lg:col-span-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-xs font-semibold text-red-600 mb-4 sm:mb-5">
              <PiWarningCircleBold className="w-3.5 h-3.5" />
              Common Mistakes
            </span>

            <h2 className="text-2xl sm:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
              Avoid These <span className="text-red-500">Costly Mistakes</span>{" "}
              Students Make Every Year
            </h2>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-500 leading-relaxed">
              The right guidance at the right time can save you{" "}
              <span className="font-semibold text-gray-700">
                lakhs of rupees
              </span>{" "}
              and{" "}
              <span className="font-semibold text-gray-700">
                months of delay
              </span>
              . Don&apos;t leave your future to chance.
            </p>

            {/* CTA */}
            <button
              onClick={openModal}
              className="mt-6 sm:mt-7 w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#175ea4] hover:bg-[#1a6bbb] text-white text-sm sm:text-base font-bold transition-all duration-200 hover:shadow-xl hover:shadow-[#175ea4]/20 active:scale-[0.97] group cursor-pointer"
            >
              Get Expert Guidance — Free
              <HiOutlineArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Right — Mistake cards (3 cols) */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-3 sm:gap-3.5">
            {mistakes.map((item, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-gray-200 hover:shadow-md hover:shadow-gray-900/4 p-4 sm:p-5 transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-red-50 border border-red-100 mb-3.5 group-hover:bg-red-100 transition-colors duration-300">
                  <item.icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-red-500" />
                </div>

                {/* Mistake */}
                <div className="flex items-start gap-2 mb-2.5">
                  <span className="mt-1 w-3.5 h-3.5 flex items-center justify-center rounded-full bg-red-100 shrink-0">
                    <svg
                      className="w-2 h-2 text-red-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                  <p className="text-[13px] sm:text-sm text-gray-500 leading-snug">
                    {item.mistake}
                  </p>
                </div>

                {/* Arrow divider */}
                <div className="flex items-center gap-2 mb-2.5 pl-1">
                  <PiArrowRightBold className="w-3 h-3 text-[#175ea4]/40" />
                  <div className="flex-1 h-px bg-linear-to-r from-[#175ea4]/10 to-transparent" />
                </div>

                {/* Fix */}
                <div className="flex items-start gap-2">
                  <span className="mt-1 w-3.5 h-3.5 flex items-center justify-center rounded-full bg-emerald-100 shrink-0">
                    <svg
                      className="w-2 h-2 text-emerald-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <p className="text-[13px] sm:text-sm text-gray-900 font-semibold leading-snug">
                    {item.fix}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  );
};

export default CommonMistakesSection;
