"use client";
import { useState } from "react";
import Image from "next/image";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { IoStarSharp, IoPlayCircle } from "react-icons/io5";
import { PiQuotesBold } from "react-icons/pi";
import { RiDoubleQuotesL } from "react-icons/ri";
import { useApplyModal } from "./ApplyModal";

const textReviews = [
  {
    name: "Rakshitha",
    achievement: "IELTS Band 8.0",
    quote:
      "Grateful to Abroad Scholars for guiding me to an overall 8.0 in IELTS! Their expert trainers and tailored mentoring truly set them apart. If you're aiming for top scores, they're the best choice!",
  },
  {
    name: "Dyana Pariskha",
    achievement: "₹7L Scholarship",
    quote:
      "Dhyana from Abroad Scholars guided me throughout the process and helped me secure admission to the University of Dundee along with a ₹7L scholarship.",
  },
  {
    name: "Monish Kumar",
    achievement: "GRE Success",
    quote:
      "Monish from Abroad Scholars provided excellent training and guidance for my GRE preparation, which helped me achieve a strong score.",
  },
  {
    name: "Jagadev",
    achievement: "GRE Top Score",
    quote:
      "Jagadev from Abroad Scholars supported me with focused GRE preparation and valuable strategies that led to great results.",
  },
];

const YOUTUBE_VIDEO_ID = "R7ThSdxJmao";
const THUMBNAIL_URL = `https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/hqdefault.jpg`;

const Stars = () => (
  <div className="flex items-center gap-0.5">
    {[...Array(5)].map((_, i) => (
      <IoStarSharp
        key={i}
        className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400"
      />
    ))}
  </div>
);

const TestimonialsSection = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const { openModal } = useApplyModal();

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 py-10 sm:py-16 lg:py-20">
        {/* ── Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-4 sm:mb-5">
            <PiQuotesBold className="w-3.5 h-3.5 text-[#175ea4]" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.12em] text-[#175ea4]">
              Student Stories
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Real Students.{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#175ea4]">
                Real Results.
              </span>
              <span className="absolute bottom-0.5 left-0 w-full h-2 sm:h-2.5 bg-[#175ea4]/10 rounded-sm -skew-x-2" />
            </span>
          </h2>

          <p className="mt-3 sm:mt-4 text-[13px] sm:text-base text-gray-500 leading-relaxed">
            Don&apos;t just take our word for it — hear from students who
            trusted us with their study abroad journey.
          </p>
        </div>

        {/* ── Bento grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          <ReviewCard review={textReviews[0]} />

          {/* ══ Center — Video Card ══ */}
          <div className="sm:col-span-2 lg:col-span-1 lg:row-span-2 relative rounded-xl sm:rounded-2xl overflow-hidden bg-gray-900 min-h-80 sm:min-h-95 lg:min-h-0">
            {!videoPlaying ? (
              <>
                {/* Thumbnail — Next.js Image with fill */}
                <Image
                  src={THUMBNAIL_URL}
                  alt="Nega — IELTS Band 8 Student Testimonial"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  priority
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-black/10 z-1" />

                {/* Play button */}
                <button
                  onClick={() => setVideoPlaying(true)}
                  className="absolute inset-0 z-2 flex flex-col items-center justify-center gap-3 cursor-pointer group"
                  aria-label="Play Nega's testimonial video"
                >
                  <span className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-white/30 animate-ping-slow" />

                  <span className="relative flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
                    <IoPlayCircle className="w-10 h-10 sm:w-12 sm:h-12 text-white drop-shadow-lg" />
                  </span>

                  <span className="text-white/80 text-xs sm:text-sm font-medium bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    Watch Nega&apos;s Story
                  </span>
                </button>

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-400 text-[10px] sm:text-xs font-bold text-gray-900 mb-2 shadow-sm">
                    🎓 Band 8 Achieved
                  </span>
                  <p className="text-white font-bold text-sm sm:text-base">
                    Nega
                  </p>
                  <p className="text-white/60 text-[11px] sm:text-xs">
                    IELTS Student · Trained with Abroad Scholars
                  </p>
                </div>

                <div className="absolute inset-0 rounded-xl sm:rounded-2xl ring-1 ring-white/10 pointer-events-none z-1" />
              </>
            ) : (
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                title="Nega — IELTS Band 8 Student Testimonial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            )}
          </div>

          <ReviewCard review={textReviews[1]} />
          <ReviewCard review={textReviews[2]} />
          <ReviewCard review={textReviews[3]} />
        </div>

        {/* ── Google rating bar ── */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 py-4 px-5 rounded-xl bg-gray-50 border border-gray-100 max-w-md sm:max-w-none mx-auto">
          <div className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl font-extrabold text-gray-900">
              4.9
            </span>
            <Stars />
          </div>
          <span className="hidden sm:block w-px h-5 bg-gray-200" />
          <span className="text-[11px] sm:text-sm text-gray-500">
            Based on <span className="font-semibold text-gray-700">1,200+</span>{" "}
            Google reviews
          </span>
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-6 sm:mt-10 text-center">
          <button
            onClick={openModal}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-[#175ea4] hover:bg-[#1a6bbb] text-white text-sm sm:text-base font-bold transition-all duration-200 hover:shadow-lg hover:shadow-[#175ea4]/20 active:scale-[0.97] group"
          >
            Get Offer in 24Hrs
            <HiOutlineArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.5; }
          75%, 100% { transform: scale(1.6); opacity: 0; }
        }
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>

      <div className="w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  );
};

const ReviewCard = ({
  review,
}: {
  review: { name: string; achievement: string; quote: string };
}) => (
  <div className="relative bg-gray-50 hover:bg-blue-50/50 border border-gray-100 hover:border-blue-100 rounded-xl sm:rounded-2xl p-4 sm:p-5 transition-all duration-200 group">
    <RiDoubleQuotesL className="w-6 h-6 sm:w-7 sm:h-7 text-[#175ea4]/10 mb-2 sm:mb-3" />
    <Stars />
    <p className="mt-2.5 sm:mt-3 text-[12px] sm:text-[13px] text-gray-600 leading-relaxed">
      &ldquo;{review.quote}&rdquo;
    </p>
    <div className="mt-3 sm:mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
      <div>
        <p className="text-sm font-bold text-gray-900">{review.name}</p>
        <p className="text-[10px] sm:text-[11px] text-gray-400">Student</p>
      </div>
      <span className="px-2 py-0.5 rounded-md bg-emerald-50 border border-emerald-100 text-[10px] sm:text-[11px] font-semibold text-emerald-700">
        {review.achievement}
      </span>
    </div>
  </div>
);

export default TestimonialsSection;
