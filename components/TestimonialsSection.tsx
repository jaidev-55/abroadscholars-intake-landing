"use client";
import { useState } from "react";
import Image from "next/image";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { IoStarSharp, IoPlayCircle, IoCloseCircle } from "react-icons/io5";
import { PiQuotesBold, PiVideoFill } from "react-icons/pi";
import { RiDoubleQuotesL } from "react-icons/ri";
import { useApplyModal } from "./ApplyModal";

/* ── Data ── */
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

const videoTestimonials = [
  {
    id: "R7ThSdxJmao",
    name: "Nega",
    achievement: "Band 8 Achieved",
    subtitle: "IELTS Student",
  },
  {
    id: "R7ThSdxJmao", // Replace with actual video IDs
    name: "Priya",
    achievement: "UK Admission",
    subtitle: "Masters in Business",
  },
  {
    id: "R7ThSdxJmao", // Replace with actual video IDs
    name: "Arjun",
    achievement: "Canada PR Path",
    subtitle: "MS in Computer Science",
  },
  {
    id: "R7ThSdxJmao", // Replace with actual video IDs
    name: "Sneha",
    achievement: "Full Scholarship",
    subtitle: "Germany · MBA",
  },
];

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
  const { openModal } = useApplyModal();
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

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

        {/* ══ Section 1: Video testimonials — horizontal scroll ══ */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-2 mb-4 sm:mb-5">
            <PiVideoFill className="w-4 h-4 sm:w-5 sm:h-5 text-[#175ea4]" />
            <h3 className="text-sm sm:text-base font-bold text-gray-900">
              Video Stories
            </h3>
            <span className="text-[10px] sm:text-xs text-gray-400 ml-1">
              — tap to play
            </span>
          </div>

          <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 -mx-3 px-3 sm:-mx-0 sm:px-0 snap-x snap-mandatory scrollbar-hide">
            {videoTestimonials.map((video, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[200px] sm:w-[220px] lg:w-[240px] snap-start"
              >
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-gray-900 aspect-[9/14] group">
                  {activeVideo === `${video.id}-${i}` ? (
                    /* Playing state — inline iframe */
                    <>
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                        title={`${video.name} — Student Testimonial`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full border-0"
                      />
                      {/* Close button */}
                      <button
                        onClick={() => setActiveVideo(null)}
                        className="absolute top-2 right-2 z-10 flex items-center justify-center w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-colors"
                        aria-label="Stop video"
                      >
                        <IoCloseCircle className="w-5 h-5 text-white" />
                      </button>
                    </>
                  ) : (
                    /* Thumbnail state */
                    <>
                      <Image
                        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                        alt={`${video.name} — ${video.subtitle}`}
                        fill
                        sizes="240px"
                        className="object-cover"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/5 z-[1]" />

                      {/* Play button */}
                      <button
                        onClick={() => setActiveVideo(`${video.id}-${i}`)}
                        className="absolute inset-0 z-[2] flex items-center justify-center cursor-pointer group/play"
                        aria-label={`Play ${video.name}'s video`}
                      >
                        <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 transition-all duration-300 group-hover/play:bg-white/30 group-hover/play:scale-110">
                          <IoPlayCircle className="w-8 h-8 text-white drop-shadow-lg" />
                        </span>
                      </button>

                      {/* Bottom info */}
                      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-3.5 z-[2]">
                        <span className="inline-flex items-center px-2 py-0.5 rounded bg-amber-400 text-[9px] sm:text-[10px] font-bold text-gray-900 mb-1.5">
                          🎓 {video.achievement}
                        </span>
                        <p className="text-white font-bold text-sm">
                          {video.name}
                        </p>
                        <p className="text-white/50 text-[10px] sm:text-[11px]">
                          {video.subtitle}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ══ Section 2: Text reviews grid ══ */}
        <div>
          <div className="flex items-center gap-2 mb-4 sm:mb-5">
            <RiDoubleQuotesL className="w-4 h-4 sm:w-5 sm:h-5 text-[#175ea4]" />
            <h3 className="text-sm sm:text-base font-bold text-gray-900">
              Written Reviews
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {textReviews.map((review, i) => (
              <ReviewCard key={i} review={review} />
            ))}
          </div>
        </div>

        {/* ── Google rating bar ── */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 py-4 px-5 rounded-xl bg-gray-50 border border-gray-100 max-w-md sm:max-w-none mx-auto">
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
            className="inline-flex cursor-pointer items-center gap-2.5 px-7 sm:px-9 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-[#175ea4] to-blue-500 hover:from-[#1a6bbb] hover:to-blue-400 text-white text-sm sm:text-base font-bold transition-all duration-300 hover:shadow-xl hover:shadow-[#175ea4]/25 active:scale-[0.97] group"
          >
            Get Offer in 24Hrs
            <HiOutlineArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Animations + scrollbar hide */}
      <style>{`
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.5; }
          75%, 100% { transform: scale(1.6); opacity: 0; }
        }
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  );
};

/* ── Review card ── */
const ReviewCard = ({
  review,
}: {
  review: { name: string; achievement: string; quote: string };
}) => (
  <div className="relative bg-gray-50 hover:bg-blue-50/50 border border-gray-100 hover:border-blue-100 rounded-xl sm:rounded-2xl p-4 sm:p-5 transition-all duration-200">
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
