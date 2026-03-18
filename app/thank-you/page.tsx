"use client";

import Link from "next/link";
import {
  RiInstagramFill,
  RiWhatsappFill,
  RiYoutubeFill,
  RiPhoneFill,
  RiCheckboxCircleFill,
  RiTimerFlashLine,
  RiUserSearchLine,
  RiPhoneLine,
  RiFileList3Line,
  RiArrowLeftLine,
  RiStarFill,
  RiShieldCheckFill,
  RiGroupFill,
  RiArrowRightSLine,
  RiSparklingFill,
} from "react-icons/ri";

/* ─── step data ─── */
const nextSteps = [
  {
    icon: RiUserSearchLine,
    step: "1",
    title: "Profile Review",
    description: "Our expert is reviewing your profile right now.",
    badge: "Happening now",
    badgeStyle: "bg-emerald-500 text-white",
    accent: "#10b981",
    active: true,
  },
  {
    icon: RiPhoneLine,
    step: "2",
    title: "Counsellor Calls You",
    description:
      "Personalised university options matching your marks, budget & goals.",
    badge: "Within 30 min",
    badgeStyle: "bg-sky-500 text-white",
    accent: "#0ea5e9",
    active: false,
  },
  {
    icon: RiFileList3Line,
    step: "3",
    title: "Document Collection",
    description:
      "We\u2019ll need your academic transcripts, test scores & ID documents for a complete assessment.",
    badge: "Same day",
    badgeStyle: "bg-amber-500 text-white",
    accent: "#f59e0b",
    active: false,
  },
];

const trustBadges = [
  { icon: RiGroupFill, label: "1000+ Placed" },
  { icon: RiShieldCheckFill, label: "98% Visa" },
  { icon: RiStarFill, label: "4.9\u2605 Google" },
];

const ThankYouPage = () => {
  return (
    <div className="thankyou-root min-h-screen bg-[#f7f8fb] selection:bg-sky-200 selection:text-sky-900">
      {/* ── gradient top bar ── */}
      <div className="h-1 bg-linear-to-r from-[#175ea4] via-emerald-400 to-amber-400" />

      <div className="max-w-135 mx-auto px-4 sm:px-5 pt-6 pb-14">
        <div
          className="ty-fade"
          style={{ "--d": "0ms" } as React.CSSProperties}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[13px] text-gray-400 hover:text-[#175ea4] transition-colors group"
          >
            <RiArrowLeftLine className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            Home
          </Link>
        </div>

        {/* ══════════════ HERO CARD ══════════════ */}
        <div
          className="ty-fade mt-5 bg-white rounded-[20px] border border-gray-100 shadow-[0_4px_40px_rgba(0,0,0,.06)] overflow-hidden"
          style={{ "--d": "80ms" } as React.CSSProperties}
        >
          {/* ── success header ── */}
          <div className="relative overflow-hidden bg-linear-to-br from-emerald-500 to-emerald-600 px-5 sm:px-6 py-7 sm:py-10 text-center">
            <span className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5" />
            <span className="absolute -bottom-14 -left-14 w-52 h-52 rounded-full bg-white/5" />

            <div className="relative inline-flex items-center justify-center mb-3">
              <span className="absolute w-16 h-16 rounded-full bg-white/20 animate-[ty-ping_2s_ease-in-out_infinite]" />
              <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-lg shadow-emerald-800/20">
                <RiCheckboxCircleFill className="w-7 h-7 text-emerald-500" />
              </span>
            </div>

            <h1 className="text-xl sm:text-[26px] font-bold text-white leading-snug tracking-tight">
              You&apos;re All Set!
            </h1>
            <p className="mt-1 text-[13px] sm:text-[14px] text-emerald-100/90 font-medium">
              Your study-abroad journey starts now.
            </p>
          </div>

          {/* ── card body ── */}
          <div className="px-4 sm:px-7 py-5 sm:py-7">
            {/* callback CTA banner */}
            <div
              className="ty-fade flex items-center gap-3 p-3 sm:p-4 rounded-2xl bg-sky-50/80 border border-sky-100 mb-6"
              style={{ "--d": "200ms" } as React.CSSProperties}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#175ea4] shrink-0 shadow-md shadow-sky-900/15">
                <RiTimerFlashLine className="w-5 h-5 text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-[13px] sm:text-[14px] font-bold text-gray-900 leading-tight">
                  Expect a call within 30 min
                </p>
                <p className="text-[11px] sm:text-[12px] text-gray-500 mt-0.5 leading-snug">
                  Keep your phone handy — our counsellor will walk you through
                  the best options.
                </p>
              </div>
            </div>

            {/* ── timeline steps ── */}
            <p
              className="ty-fade text-[11px] font-bold text-gray-400 uppercase tracking-[.08em] mb-3"
              style={{ "--d": "300ms" } as React.CSSProperties}
            >
              What happens next
            </p>

            <div
              className="ty-fade relative mb-6"
              style={{ "--d": "350ms" } as React.CSSProperties}
            >
              <div className="space-y-2">
                {nextSteps.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className={`relative flex items-start gap-2.5 sm:gap-3.5 p-3 sm:p-4 rounded-2xl border transition-all ${
                        item.active
                          ? "bg-emerald-50/60 border-emerald-200/60"
                          : "bg-gray-50/60 border-gray-100"
                      }`}
                    >
                      {/* step icon */}
                      <div
                        className="relative z-10 flex items-center justify-center w-8.5 h-8.5 sm:w-9.5 sm:h-9.5 rounded-xl shrink-0"
                        style={{
                          backgroundColor: item.accent + "14",
                          border: `1.5px solid ${item.accent}30`,
                        }}
                      >
                        <Icon
                          className="w-4 h-4 sm:w-4.5 sm:h-4.5"
                          style={{ color: item.accent }}
                        />
                      </div>

                      {/* text */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <h3 className="text-[13px] sm:text-[14px] font-bold text-gray-900 leading-tight">
                            {item.title}
                          </h3>
                          <span
                            className={`inline-flex items-center px-1.5 py-px rounded-md text-[9px] sm:text-[10px] font-bold tracking-wide whitespace-nowrap ${item.badgeStyle}`}
                          >
                            {item.badge}
                          </span>
                        </div>
                        <p className="text-[11px] sm:text-[12.5px] text-gray-500 leading-relaxed mt-0.5">
                          {item.description}
                        </p>
                      </div>

                      {item.active && (
                        <span className="absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5">
                          <RiSparklingFill className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ── divider ── */}
            <div
              className="ty-fade flex items-center gap-3 mb-4"
              style={{ "--d": "420ms" } as React.CSSProperties}
            >
              <div className="flex-1 h-px bg-gray-100" />
              <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider whitespace-nowrap">
                Can&apos;t wait?
              </span>
              <div className="flex-1 h-px bg-gray-100" />
            </div>

            {/* ── action buttons ── */}
            <div
              className="ty-fade grid grid-cols-2 gap-2"
              style={{ "--d": "480ms" } as React.CSSProperties}
            >
              <a
                href="https://wa.me/919500117792?text=Hi%2C%20I%20just%20submitted%20my%20details%20on%20your%20website.%20Looking%20forward%20to%20the%20call!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-[13px] font-bold transition-all active:scale-[0.97] shadow-md shadow-emerald-500/20"
              >
                <RiWhatsappFill className="w-4.5 h-4.5 shrink-0" />
                <span>WhatsApp</span>
              </a>
              <a
                href="tel:+919500117792"
                className="flex items-center justify-center gap-1.5 py-3 rounded-xl bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 text-[13px] font-bold transition-all active:scale-[0.97]"
              >
                <RiPhoneFill className="w-4 h-4 text-[#175ea4] shrink-0" />
                <span>Call Us</span>
              </a>
            </div>

            {/* ── trust row ── */}
            <div
              className="ty-fade mt-5 pt-4 border-t border-gray-100"
              style={{ "--d": "550ms" } as React.CSSProperties}
            >
              <div className="flex items-center justify-center gap-3 sm:gap-5">
                {trustBadges.map((item, i) => {
                  const Badge = item.icon;
                  return (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 text-[10px] sm:text-[12px] text-gray-400 font-semibold whitespace-nowrap"
                    >
                      <Badge className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400 shrink-0" />
                      {item.label}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════ SOCIAL FOLLOW ══════════════ */}
        <div
          className="ty-fade text-center mt-8"
          style={{ "--d": "650ms" } as React.CSSProperties}
        >
          <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider mb-3">
            Follow for tips & updates
          </p>
          <div className="flex items-center justify-center gap-2">
            <a
              href="https://www.instagram.com/abroad_scholar_/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 sm:px-4 py-2.5 rounded-xl bg-white border border-gray-100 text-[12px] font-semibold text-gray-500 hover:border-pink-200 hover:text-pink-600 hover:shadow-sm transition-all group"
            >
              <RiInstagramFill className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Instagram
              <RiArrowRightSLine className="w-3.5 h-3.5 opacity-40 -ml-0.5" />
            </a>
            <a
              href="https://www.youtube.com/@AbroadScholarsOfficial/shorts"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 sm:px-4 py-2.5 rounded-xl bg-white border border-gray-100 text-[12px] font-semibold text-gray-500 hover:border-red-200 hover:text-red-600 hover:shadow-sm transition-all group"
            >
              <RiYoutubeFill className="w-4 h-4 group-hover:scale-110 transition-transform" />
              YouTube
              <RiArrowRightSLine className="w-3.5 h-3.5 opacity-40 -ml-0.5" />
            </a>
          </div>
        </div>
      </div>

      {/* ── CSS-only animations ── */}
      <style>{`
        .thankyou-root {
          font-family: 'DM Sans', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        @keyframes ty-ping {
          0% { transform: scale(1); opacity: 0.3; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @keyframes ty-fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .ty-fade {
          animation: ty-fadeUp 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-delay: var(--d, 0ms);
        }
      `}</style>
    </div>
  );
};

export default ThankYouPage;
