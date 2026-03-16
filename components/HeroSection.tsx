"use client";
import { HiOutlineArrowRight, HiOutlineCheck } from "react-icons/hi2";
import { RiWhatsappFill } from "react-icons/ri";
import { IoShieldCheckmark } from "react-icons/io5";
import {
  PiStudentBold,
  PiClockCountdownBold,
  PiGlobeHemisphereWestBold,
} from "react-icons/pi";
import { FiArrowUpRight } from "react-icons/fi";
import { useApplyModal } from "./ApplyModal";
import Image from "next/image";

const HeroSection = () => {
  const { openModal } = useApplyModal();
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            {/* Intake badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-5 sm:mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#175ea4] tracking-wide">
                September 2026 Intake — Now Open
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-gray-900 text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.12] tracking-tight">
              Get Your Admission
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              in Just{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#175ea4]">24 Hours!</span>
                <span className="absolute bottom-0.5 sm:bottom-1 left-0 w-full h-2.5 sm:h-3 bg-[#175ea4]/10 rounded-sm -skew-x-2" />
              </span>
            </h1>

            {/* Sub-copy */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-gray-500 leading-relaxed max-w-md lg:max-w-lg">
              No interviews. No delays. Secure your spot at top universities
              abroad — we handle everything from application to offer letter.
            </p>

            {/* Check-list trust points */}
            <ul className="mt-5 sm:mt-6 space-y-2 sm:space-y-2.5">
              {[
                "Direct admission — no entrance exams",
                "230+ partner universities worldwide",
                "Visa guidance & pre-departure support",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start sm:items-center gap-2.5 text-sm sm:text-base text-gray-700"
                >
                  <span className="flex items-center justify-center w-5 h-5 mt-0.5 sm:mt-0 rounded-full bg-emerald-50 border border-emerald-100 flex-shrink-0">
                    <HiOutlineCheck className="w-3 h-3 text-emerald-600" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* Primary CTA */}
              <button
                onClick={openModal}
                className="relative cursor-pointer flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-[#175ea4] hover:bg-[#1a6bbb] text-white text-sm sm:text-base font-bold transition-all duration-200 hover:shadow-xl hover:shadow-[#175ea4]/20 active:scale-[0.97] group"
              >
                Get Offer in 24Hrs
                <HiOutlineArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                <span className="absolute inset-0 rounded-xl animate-pulse-ring pointer-events-none" />
              </button>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919500117792?text=Hi%2C%20I%27m%20interested%20in%20studying%20abroad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 text-sm sm:text-base font-semibold transition-all duration-200 active:scale-[0.97]"
              >
                <RiWhatsappFill className="w-5 h-5 text-emerald-600" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Social proof strip */}
            <div className="mt-7 sm:mt-8 pt-5 sm:pt-6 border-t border-gray-100">
              <div className="grid grid-cols-3 gap-3 sm:flex sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-3">
                <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1 sm:gap-2 text-center sm:text-left">
                  <PiStudentBold className="w-5 h-5 text-[#175ea4]" />
                  <span className="text-xs sm:text-sm text-gray-500">
                    <span className="font-bold text-gray-900 block sm:inline">
                      8,000+
                    </span>{" "}
                    <span className="hidden sm:inline">Students</span>
                    <span className="sm:hidden text-[10px]">Students</span>
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1 sm:gap-2 text-center sm:text-left">
                  <PiGlobeHemisphereWestBold className="w-5 h-5 text-[#175ea4]" />
                  <span className="text-xs sm:text-sm text-gray-500">
                    <span className="font-bold text-gray-900 block sm:inline">
                      35+
                    </span>{" "}
                    <span className="hidden sm:inline">Countries</span>
                    <span className="sm:hidden text-[10px]">Countries</span>
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1 sm:gap-2 text-center sm:text-left">
                  <PiClockCountdownBold className="w-5 h-5 text-[#175ea4]" />
                  <span className="text-xs sm:text-sm text-gray-500">
                    <span className="font-bold text-gray-900 block sm:inline">
                      24hr
                    </span>{" "}
                    <span className="hidden sm:inline">Offer Letter</span>
                    <span className="sm:hidden text-[10px]">Offer</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/*  Right: Hero Image  */}
          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-md sm:max-w-lg lg:max-w-none">
              {/* Main image */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl shadow-gray-200/60 w-full h-[600px]">
                <Image
                  src="/images/Hero_img.jpeg"
                  alt="Students celebrating their admission success with Abroad Scholars"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating badge — bottom-left */}
              <div className="absolute -bottom-3 sm:-bottom-4 left-2 sm:left-4 z-20 flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl bg-white shadow-lg shadow-gray-900/[0.08] border border-gray-100">
                <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-50">
                  <IoShieldCheckmark className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" />
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="text-[11px] sm:text-xs font-bold text-gray-900">
                    Trusted Partner
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-gray-500">
                    8,000+ students placed
                  </span>
                </span>
              </div>

              {/* Floating badge — top-right */}
              <div className="absolute -top-2.5 sm:-top-3 right-2 sm:right-4 z-20 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-lg bg-[#175ea4] shadow-lg shadow-[#175ea4]/20">
                <PiClockCountdownBold className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
                <span className="text-[11px] sm:text-xs font-bold text-white">
                  24hr Offer
                </span>
                <FiArrowUpRight className="w-3 h-3 text-amber-400" />
              </div>

              {/* Subtle bg accent behind image */}
              <div className="absolute -z-10 top-4 sm:top-6 -right-3 sm:-right-4 w-full h-full rounded-2xl sm:rounded-3xl bg-blue-50 border border-blue-100/50" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  );
};

export default HeroSection;
