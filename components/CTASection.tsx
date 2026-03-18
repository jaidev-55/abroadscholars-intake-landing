"use client";
import { useState } from "react";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { IoCallOutline } from "react-icons/io5";
import {
  PiGraduationCapBold,
  PiPhoneCallBold,
  PiSpinnerGapBold,
} from "react-icons/pi";
import { RiWhatsappFill } from "react-icons/ri";
import { useApplyModal } from "./ApplyModal";

const universityPartners = [
  "University of Bristol",
  "University College London (UCL)",
  "University of Manchester",
  "Massachusetts Institute of Technology (MIT)",
  "Stanford University",
  "Harvard University",
  "Trinity College Dublin",
  "University College Dublin",
  "University of Melbourne",
  "Heriot-Watt University Dubai",
  "University of Essex",
  "University of Hertfordshire",
  "Coventry University",
  "University of Illinois Chicago",
  "San Francisco State University",
  "Dublin City University",
  "University of Limerick",
  "Deakin University",
  "Griffith University",
  "University of Wollongong Dubai",
];

const CTASection = () => {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const { openModal } = useApplyModal();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 10) return;

    setLoading(true);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Callback Request",
          phone,
          city: "Not provided",
          country: "Callback Lead",
        }),
      });

      const data = await res.json();

      if (data.success) {
        window.location.href = "/thank-you";
      }
    } catch (err) {
      console.error("Lead submission failed", err);
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section id="apply" className="relative bg-blue-50/70 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 py-16 ">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-blue-100 mb-4 sm:mb-5">
            <PiGraduationCapBold className="w-3.5 h-3.5 text-[#175ea4]" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.12em] text-[#175ea4]">
              Free Counselling
            </span>
          </div>

          <h2 className="text-2xl sm:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Get a <span className="text-[#175ea4]">Free Counselling</span>{" "}
            Session
          </h2>

          <p className="mt-3 sm:mt-4 text-[13px] sm:text-base text-gray-500 leading-relaxed max-w-lg mx-auto">
            Find your ideal study abroad destination, apply with confidence, and
            connect with our expert guidance counsellors — all at zero cost.
          </p>

          <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3">
            <button
              onClick={openModal}
              className="w-full cursor-pointer sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-[#175ea4] hover:bg-[#1a6bbb] text-white text-sm sm:text-base font-bold transition-all duration-200 hover:shadow-lg hover:shadow-[#175ea4]/20 active:scale-[0.97] group"
            >
              Apply Now
              <HiOutlineArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
            <a
              href="https://wa.me/919500117792?text=Hi%2C%20I%27d%20like%20a%20free%20counselling%20session"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-white hover:bg-emerald-50 border border-gray-200 hover:border-emerald-200 text-gray-700 text-sm sm:text-base font-semibold transition-all duration-200 active:scale-[0.97]"
            >
              <RiWhatsappFill className="w-5 h-5 text-emerald-600" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* ── University partners logo strip ── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 pb-8 sm:pb-10">
        <p className="text-center text-[11px] sm:text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4 sm:mb-5">
          Partnered with 230+ universities across 35 countries
        </p>

        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 bg-linear-to-r from-blue-50/70 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 bg-linear-to-l from-blue-50/70 to-transparent z-10 pointer-events-none" />

          {/* Scrolling logos */}
          <div className="flex items-center gap-8 sm:gap-12 animate-scroll">
            {[...universityPartners, ...universityPartners].map((uni, i) => (
              <div
                key={i}
                className="shrink-0 px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg bg-white border border-gray-100"
              >
                <span className="text-[11px] sm:text-xs font-semibold text-gray-500 whitespace-nowrap">
                  {uni}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Callback form ── */}
      <div
        id="callback"
        className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 pb-10 sm:pb-16 lg:pb-20"
      >
        <div className="relative max-w-xl mx-auto bg-white rounded-xl sm:rounded-2xl border border-gray-100 shadow-lg shadow-gray-200/40 p-5 sm:p-7 lg:p-8">
          {/* Header */}
          <div className="text-center mb-5 sm:mb-6">
            <span className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-50 border border-blue-100 mb-3">
              <PiPhoneCallBold className="w-5 h-5 sm:w-6 sm:h-6 text-[#175ea4]" />
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">
              Get a Call Back from Our Experts
            </h3>
            <p className="mt-1.5 text-[12px] sm:text-sm text-gray-400">
              Enter your number — we&apos;ll call you within 30 minutes
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-2.5 sm:gap-3"
          >
            {/* Phone input */}
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium select-none">
                +91
              </span>
              <input
                type="tel"
                inputMode="numeric"
                maxLength={10}
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
                }
                className="w-full pl-11 pr-4 py-3 sm:py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#175ea4] focus:ring-2 focus:ring-[#175ea4]/10 outline-none text-sm text-gray-900 placeholder:text-gray-400 transition-all"
                required
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading || phone.length < 10}
              className="flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 rounded-xl bg-[#175ea4] hover:bg-[#1a6bbb] disabled:bg-gray-300 disabled:cursor-not-allowed text-white text-sm font-bold transition-all duration-200 hover:shadow-lg hover:shadow-[#175ea4]/20 active:scale-[0.97] whitespace-nowrap"
            >
              {loading ? (
                <PiSpinnerGapBold className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  Request Callback
                  <IoCallOutline className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Trust text */}
          <p className="mt-3 sm:mt-4 text-center text-[10px] sm:text-[11px] text-gray-400">
            🔒 Your information is secure and will never be shared
          </p>
        </div>
      </div>

      {/* Bottom separator */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-gray-300/50 to-transparent" />
    </section>
  );
};

export default CTASection;
