"use client";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { IoCheckmarkCircle } from "react-icons/io5";
import {
  PiStudentBold,
  PiGraduationCapBold,
  PiChartLineDownBold,
  PiExamBold,
} from "react-icons/pi";
import { useApplyModal } from "./ApplyModal";

const profiles = [
  {
    icon: PiStudentBold,
    title: "Final Year Students",
    description:
      "Currently in your last semester? You can apply now and secure your offer before graduation.",
    tag: "Most Popular",
  },
  {
    icon: PiGraduationCapBold,
    title: "Graduates — Backlogs OK",
    description:
      "Cleared or current backlogs? No problem. 50+ universities accept students with backlog history.",
    tag: null,
  },
  {
    icon: PiChartLineDownBold,
    title: "Low Percentage (50–60%)",
    description:
      "Scored between 50–60%? We have partner universities that accept your profile — seriously.",
    tag: "Don\u2019t Worry",
  },
  {
    icon: PiExamBold,
    title: "No IELTS Yet",
    description:
      "Haven\u2019t taken IELTS or planning to? Many universities offer conditional admits or IELTS waivers.",
    tag: null,
  },
];

const WhoCanApplySection = () => {
  const { openModal } = useApplyModal();

  return (
    <section className="relative bg-gray-50 overflow-hidden">
      {/* Top fade line */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-xs font-semibold text-emerald-700 mb-4">
            <IoCheckmarkCircle className="w-3.5 h-3.5" />
            You&apos;re Probably Eligible
          </span>
          <h2 className="text-2xl sm:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Think You Can&apos;t Study Abroad?{" "}
           
            <span className="text-[#175ea4]">Think Again.</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-500 leading-relaxed max-w-lg mx-auto">
            Most students assume they don&apos;t qualify. The truth? If you fit
            any of these profiles, you&apos;re already eligible for 50+
            universities worldwide.
          </p>
        </div>

        {/* Profile cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {profiles.map((profile, i) => (
            <div
              key={i}
              className="relative group bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 hover:border-[#175ea4]/20 hover:shadow-lg hover:shadow-[#175ea4]/4 transition-all duration-300"
            >
              {/* Tag */}
              {profile.tag && (
                <span className="absolute -top-2.5 right-4 px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-[10px] sm:text-[11px] font-bold text-amber-700 uppercase tracking-wide">
                  {profile.tag}
                </span>
              )}

              {/* Icon */}
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 mb-4 group-hover:bg-[#175ea4] group-hover:border-[#175ea4] transition-colors duration-300">
                <profile.icon className="w-5 h-5 text-[#175ea4] group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                {profile.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                {profile.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <p className="text-sm text-gray-400 mb-4">
            Not sure if you qualify? It takes just 30 minutes to find out.
          </p>
          <button
            onClick={openModal}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#175ea4] hover:bg-[#1a6bbb] text-white text-sm sm:text-base font-bold transition-all duration-200 hover:shadow-xl hover:shadow-[#175ea4]/20 active:scale-[0.97] group cursor-pointer"
          >
            Check Your Eligibility — Free
            <HiOutlineArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>

      {/* Bottom fade line */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  );
};

export default WhoCanApplySection;
