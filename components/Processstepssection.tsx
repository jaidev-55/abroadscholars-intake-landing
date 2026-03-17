"use client";
import { HiOutlineArrowRight } from "react-icons/hi2";
import {
  PiUserCircleCheckBold,
  PiBuildingsBold,
  PiFileTextBold,
  PiEnvelopeOpenBold,
  PiAirplaneTiltBold,
  PiPathBold,
} from "react-icons/pi";
import { useApplyModal } from "./ApplyModal";

const steps = [
  {
    icon: PiUserCircleCheckBold,
    step: "01",
    title: "Profile Evaluation",
    description:
      "We assess your marks, backlogs, budget, and goals to understand exactly where you stand.",
    time: "Day 1",
  },
  {
    icon: PiBuildingsBold,
    step: "02",
    title: "University Shortlisting",
    description:
      "Based on your profile, we shortlist 3\u20135 best-fit universities across your preferred countries.",
    time: "Day 1\u20132",
  },
  {
    icon: PiFileTextBold,
    step: "03",
    title: "Application & Documentation",
    description:
      "SOP, LORs, transcripts, and all paperwork \u2014 we prepare, review, and submit everything for you.",
    time: "Day 2\u20135",
  },
  {
    icon: PiEnvelopeOpenBold,
    step: "04",
    title: "Offer Letter",
    description:
      "Receive your university offer letter \u2014 most students get theirs within 24 hours of application.",
    time: "Within 24hrs",
  },
  {
    icon: PiAirplaneTiltBold,
    step: "05",
    title: "Visa Processing",
    description:
      "Mock interviews, document prep, and filing \u2014 we handle your visa end-to-end with a 98% success rate.",
    time: "2\u20138 weeks",
  },
];

const ProcessStepsSection = () => {
  const { openModal } = useApplyModal();

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 ">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-[#175ea4] mb-4">
            <PiPathBold className="w-3.5 h-3.5" />
            Our Process
          </span>
          <h2 className="text-2xl sm:text-6xl  font-extrabold text-gray-900 tracking-tight leading-[1.15]">
            How <span className="text-[#175ea4]">Abroad Scholar</span>{" "}
            <br className="hidden sm:block" />
            Gets You There
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-gray-500 leading-relaxed max-w-xl mx-auto">
            From your first call to your boarding pass — here&apos;s the exact
            5-step journey we take with every student.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          {/* Mobile layout — vertical timeline */}
          <div className="sm:hidden space-y-0">
            {steps.map((item, i) => (
              <div key={i} className="flex gap-4">
                {/* Left: line + dot */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#175ea4] shadow-md shadow-[#175ea4]/20 shrink-0 z-10">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-linear-to-b from-[#175ea4]/30 to-[#175ea4]/5 my-1" />
                  )}
                </div>

                {/* Right: content */}
                <div className={`pb-7 ${i === steps.length - 1 ? "pb-0" : ""}`}>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[11px] font-bold text-[#175ea4]/40 uppercase tracking-widest">
                      Step {item.step}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-50 border border-emerald-100 text-[10px] font-bold text-emerald-600">
                      {item.time}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop layout — cards with connecting line */}
          <div className="hidden sm:block">
            {/* Connecting line behind cards */}
            <div className="relative">
              <div className="absolute top-7 left-12 right-12 h-0.5 bg-linear-to-r from-[#175ea4]/20 via-[#175ea4]/10 to-[#175ea4]/20 z-0" />
            </div>

            <div className="grid grid-cols-5 gap-4 lg:gap-6 relative z-10">
              {steps.map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  {/* Step circle */}
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[#175ea4] shadow-lg shadow-[#175ea4]/20 mb-5">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Time badge */}
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-[11px] font-bold text-emerald-600 mb-3">
                    {item.time}
                  </span>

                  {/* Title */}
                  <h3 className="text-base lg:text-lg font-bold text-gray-900 leading-snug mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm lg:text-[15px] text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom trust line + CTA */}
        <div className="mt-10 sm:mt-14 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-blue-50 border border-blue-100 mb-5 sm:mb-6">
            <PiAirplaneTiltBold className="w-4 h-4 text-[#175ea4]" />
            <span className="text-xs sm:text-sm font-medium text-gray-600">
              Most students go from{" "}
              <span className="font-bold text-gray-900">
                Step 1 to Offer Letter
              </span>{" "}
              in under <span className="font-bold text-[#175ea4]">7 days</span>
            </span>
          </div>

          <button
            onClick={openModal}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#175ea4] hover:bg-[#1a6bbb] text-white text-sm sm:text-base font-bold transition-all duration-200 hover:shadow-xl hover:shadow-[#175ea4]/20 active:scale-[0.97] group cursor-pointer"
          >
            Start Your Journey — Free Consultation
            <HiOutlineArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>

      <div className="w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  );
};

export default ProcessStepsSection;
