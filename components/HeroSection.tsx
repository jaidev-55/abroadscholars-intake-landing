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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-8 sm:pt-12 lg:pt-16 pb-12 ">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            {/* Intake badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-5 sm:mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#175ea4] tracking-wide">
                2026 Intakes Open — Limited Seats Available
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-gray-900 text-3xl sm:text-4xl md:text-5xl lg:text-[3.8rem] font-extrabold leading-[1.15] tracking-tight">
              Study in <span className="text-[#175ea4]">UK, USA, Canada</span>{" "}
              or <span className="text-[#175ea4]">Europe</span>
              <br />
              <span className="text-[#175ea4]">2026 Intakes Open</span>
            </h1>

            {/* Sub-copy */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-gray-500 leading-relaxed max-w-md lg:max-w-xl">
              Get your offer letter in just 24 hours. We guide you from
              shortlisting the right university to landing your visa — no
              confusion, no delays. 1,000+ students already made it. You&apos;re
              next.
            </p>

            {/* Destination flags row */}
            <div className="mt-4 sm:mt-5 flex items-center gap-3 flex-wrap">
              {[
                { flag: "🇬🇧", name: "UK" },
                { flag: "🇺🇸", name: "USA" },
                { flag: "🇨🇦", name: "Canada" },
                { flag: "🇦🇺", name: "Australia" },
                { flag: "🇩🇪", name: "Germany" },
                { flag: "🇮🇪", name: "Ireland" },
              ].map((d, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-50 border border-gray-100 text-[11px] sm:text-xs font-medium text-gray-600"
                >
                  <span className="text-base">{d.flag}</span>
                  {d.name}
                </span>
              ))}
            </div>

            {/* Trust checklist */}
            <ul className="mt-5 sm:mt-6 space-y-2 sm:space-y-2.5">
              {[
                "Direct admission to 230+ partner universities worldwide",
                "98% visa approval rate — highest in Chennai",
                "Scholarships up to ₹10L+ — we help you find & apply",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start sm:items-center gap-2.5 text-sm sm:text-base text-gray-700"
                >
                  <span className="flex items-center justify-center w-5 h-5 mt-0.5 sm:mt-0 rounded-full bg-emerald-50 border border-emerald-100 shrink-0">
                    <HiOutlineCheck className="w-3 h-3 text-emerald-600" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={openModal}
                className="relative cursor-pointer flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-[#175ea4] hover:bg-[#1a6bbb] text-white text-sm sm:text-base font-bold transition-all duration-200 hover:shadow-xl hover:shadow-[#175ea4]/20 active:scale-[0.97] group"
              >
                Book Free Counselling Session
                <HiOutlineArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>

              <a
                href="https://wa.me/919500117792?text=Hi%2C%20I%20want%20to%20study%20abroad.%20Can%20you%20help%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 text-sm sm:text-base font-semibold transition-all duration-200 active:scale-[0.97]"
              >
                <RiWhatsappFill className="w-5 h-5 text-emerald-600" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Social proof */}
            <div className="mt-7 sm:mt-8 pt-5 sm:pt-6 border-t border-gray-100">
              <div className="grid grid-cols-3 gap-3 sm:flex sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-3">
                {[
                  {
                    icon: PiStudentBold,
                    value: "1000+",
                    label: "Students Placed",
                  },
                  {
                    icon: PiGlobeHemisphereWestBold,
                    value: "15+",
                    label: "Countries",
                  },
                  {
                    icon: PiClockCountdownBold,
                    value: "24hr",
                    label: "Offer Letter",
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row items-center sm:items-center gap-1 sm:gap-2 text-center sm:text-left"
                  >
                    <stat.icon className="w-5 h-5 text-[#175ea4]" />
                    <span className="text-xs sm:text-sm text-gray-500">
                      <span className="font-bold text-gray-900 block sm:inline">
                        {stat.value}
                      </span>{" "}
                      <span className="hidden sm:inline">{stat.label}</span>
                      <span className="sm:hidden text-[10px]">
                        {stat.label}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-md sm:max-w-lg lg:max-w-none">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl shadow-gray-200/60 w-full h-150">
                <Image
                  src="/images/Hero_img.jpeg"
                  alt="Indian student holding university admission offer letter"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating badge — bottom-left */}
              <div className="absolute -bottom-3 sm:-bottom-4 left-2 sm:left-4 z-20 flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl bg-white shadow-lg shadow-gray-900/8 border border-gray-100">
                <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-50">
                  <IoShieldCheckmark className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" />
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="text-[11px] sm:text-xs font-bold text-gray-900">
                    Trusted by 1000+ Students
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-gray-500">
                    Chennai&apos;s #1 Study Abroad Partner
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

              {/* Offset bg accent */}
              <div className="absolute -z-10 top-4 sm:top-6 -right-3 sm:-right-4 w-full h-full rounded-2xl sm:rounded-3xl bg-blue-50 border border-blue-100/50" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  );
};

export default HeroSection;
