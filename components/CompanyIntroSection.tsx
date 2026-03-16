"use client";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { IoLocationSharp } from "react-icons/io5";
import {
  PiCalendarCheckBold,
  PiGraduationCapBold,
  PiTrophyBold,
  PiUsersFourBold,
} from "react-icons/pi";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { useApplyModal } from "./ApplyModal";
import Image from "next/image";

const stats = [
  {
    icon: PiCalendarCheckBold,
    value: "10+",
    label: "Years of Expertise",
    description: "In overseas education consulting",
    color: "text-[#175ea4]",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: PiGraduationCapBold,
    value: "230+",
    label: "University Partners",
    description: "Offering world-class programs globally",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    icon: PiUsersFourBold,
    value: "8,000+",
    label: "Students Placed",
    description: "Successful admissions across top destinations",
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
];

const CompanyIntroSection = () => {
  const { openModal } = useApplyModal();
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 py-10 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          <div>
            {/* Section label */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-4 sm:mb-5">
              <RiVerifiedBadgeFill className="w-3.5 h-3.5 text-[#175ea4]" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.12em] text-[#175ea4]">
                About Us
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Your Study Abroad Journey{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#175ea4]">
                  Starts Here.
                </span>
                <span className="absolute bottom-0.5 left-0 w-full h-2 sm:h-2.5 bg-[#175ea4]/10 rounded-sm -skew-x-2" />
              </span>
            </h2>

            {/* Location tag */}
            <div className="inline-flex items-center gap-1.5 mt-3 sm:mt-4 px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-100">
              <IoLocationSharp className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-gray-600">
                Abroad Scholar, Anna Nagar, Chennai
              </span>
            </div>

            {/* Description — high copy */}
            <p className="mt-4 sm:mt-5 text-[13px] sm:text-base text-gray-500 leading-relaxed max-w-lg">
              Since 2015, Abroad Scholars has helped thousands of ambitious
              students turn their overseas education dreams into reality. From
              course selection to visa approval to scholarship assistance — we
              provide complete end-to-end guidance so your admission journey is
              smooth, fast, and stress-free.
            </p>

            <p className="mt-2.5 sm:mt-3 text-[13px] sm:text-base text-gray-500 leading-relaxed max-w-lg">
              Our students don&apos;t just get admitted — they get placed at the{" "}
              <span className="font-semibold text-gray-700">
                right university, in the right country, for the right program.
              </span>
            </p>

            {/* Stat cards */}
            <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-2 sm:gap-3">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`relative rounded-xl sm:rounded-2xl ${stat.bg} border ${stat.border} p-3 sm:p-4 lg:p-5 transition-all duration-200 hover:shadow-md hover:shadow-gray-200/50`}
                >
                  <stat.icon
                    className={`w-5 h-5 sm:w-6 sm:h-6 ${stat.color} mb-2 sm:mb-3`}
                  />
                  <p
                    className={`text-xl sm:text-2xl lg:text-3xl font-extrabold ${stat.color} tracking-tight leading-none`}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] sm:text-xs font-semibold text-gray-800 leading-tight">
                    {stat.label}
                  </p>
                  <p className="mt-0.5 text-[9px] sm:text-[11px] text-gray-400 leading-snug hidden sm:block">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 mt-6 sm:mt-8 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-[#175ea4] hover:bg-[#1a6bbb] text-white text-sm font-bold transition-all duration-200 hover:shadow-lg hover:shadow-[#175ea4]/20 active:scale-[0.97] group"
            >
              Get Offer in 24Hrs
              <HiOutlineArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-gray-200/50">
                <Image
                  src="/images/about_us.png"
                  alt="Student with backpack ready for their study abroad journey"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                {/* Soft bottom gradient */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/40 to-transparent pointer-events-none" />
              </div>

              {/* Floating trust card */}
              <div className="absolute -bottom-4 -left-4 z-20 flex items-center gap-3 px-4 py-3 rounded-xl bg-white shadow-lg shadow-gray-900/[0.06] border border-gray-100">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-50 border border-amber-100">
                  <PiTrophyBold className="w-5 h-5 text-amber-600" />
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="text-sm font-bold text-gray-900">
                    98% Visa Success
                  </span>
                  <span className="text-[11px] text-gray-500">
                    Highest approval rate in Chennai
                  </span>
                </span>
              </div>

              {/* Offset accent */}
              <div className="absolute -z-10 top-5 -right-4 w-full h-full rounded-2xl bg-blue-50 border border-blue-100/50" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  );
};

export default CompanyIntroSection;
