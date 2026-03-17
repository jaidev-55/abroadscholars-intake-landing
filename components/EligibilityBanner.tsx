"use client";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { PiClockCountdownBold, PiCheckCircleBold } from "react-icons/pi";
import { useApplyModal } from "./ApplyModal";

const EligibilityBanner = () => {
  const { openModal } = useApplyModal();

  return (
    <section className="relative bg-linear-to-r from-[#175ea4] to-[#1a3f6f] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-5 sm:py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Left: Message */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <PiClockCountdownBold className="w-5 h-5 text-amber-400 shrink-0" />
              <span className="text-white text-sm sm:text-base font-bold">
                Check Your Eligibility in 30 Minutes
              </span>
            </div>

            {/* Divider — desktop only */}
            <span className="hidden sm:block w-px h-5 bg-white/20" />

            {/* Quick trust points */}
            <div className="flex items-center gap-4">
              {[
                "Free Assessment",
                "No Documents Needed",
                "Instant Course Match",
              ].map((point, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1 text-white/80 text-[11px] sm:text-xs font-medium"
                >
                  <PiCheckCircleBold className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  {point}
                </span>
              ))}
            </div>
          </div>

          {/* Right: CTA */}
          <button
            onClick={openModal}
            className="shrink-0 flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-white hover:bg-gray-50 text-[#175ea4] text-sm font-bold transition-all duration-200 hover:shadow-lg hover:shadow-black/10 active:scale-[0.97] group cursor-pointer"
          >
            Check Now — It&apos;s Free
            <HiOutlineArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default EligibilityBanner;
