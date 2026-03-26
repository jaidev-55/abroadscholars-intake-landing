"use client";
import { useState } from "react";
import { HiOutlineArrowRight, HiOutlineCheck } from "react-icons/hi2";
import { RiWhatsappFill } from "react-icons/ri";
import {
  PiStudentBold,
  PiClockCountdownBold,
  PiSpinnerGapBold,
  PiUserBold,
  PiPhoneBold,
  PiGlobeHemisphereWestBold,
  PiMapPinBold,
  PiGraduationCapBold,
  PiShieldCheckBold,
} from "react-icons/pi";
import { FiArrowUpRight } from "react-icons/fi";
import { MdVerified } from "react-icons/md";

const countries = [
  "United Kingdom",
  "Ireland",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "United States",
  "New Zealand",
  "Finland",
  "Belgium",
  "South Korea",
  "Singapore",
  "Dubai / UAE",
  "Other",
];

const HeroSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = "Name is required";
    if (!phone || phone.length < 10)
      errs.phone = "Enter a valid 10-digit number";
    if (!city.trim()) errs.city = "City is required";
    if (!country) errs.country = "Select your preferred country";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const clearError = (field: string) => {
    if (errors[field]) setErrors((p) => ({ ...p, [field]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      setLoading(true);
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          city,
          country,
          source: "hero-inline-form",
          page: window.location.pathname,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error("Failed to submit lead");
      window.location.href = "/thank-you";
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputBase = (hasError: boolean) =>
    `w-full py-3 rounded-xl bg-gray-50 border outline-none text-sm text-gray-900 placeholder:text-gray-400 transition-all duration-150 ${
      hasError
        ? "border-red-300 bg-red-50/40 ring-2 ring-red-100"
        : "border-gray-200 hover:border-gray-300 focus:bg-white focus:border-[#175ea4] focus:ring-2 focus:ring-[#175ea4]/10"
    }`;

  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-20 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* ── LEFT: Copy — shows second on mobile, first on desktop ── */}
          <div className="order-2 lg:order-1 lg:pt-4">
            {/* Intake badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-5">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#175ea4] tracking-wide">
                2026 Intakes Open — Limited Seats Available
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-gray-900 text-3xl sm:text-4xl lg:text-[3rem] xl:text-[3.25rem] font-extrabold leading-[1.13] tracking-tight">
              Study Abroad in 2026{" "}
              <span className="block sm:inline">Even with </span>
              <span className="text-[#175ea4]">Low Marks</span> or{" "}
              <span className="text-[#175ea4]">Backlogs</span>
            </h1>

            <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-500 leading-relaxed max-w-lg">
              Get admission in UK, Ireland, Canada, Europe and Dubai with
              complete support from application to visa.
            </p>

            {/* Destination flags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                { flag: "🇬🇧", name: "UK" },
                { flag: "🇮🇪", name: "Ireland" },
                { flag: "🇨🇦", name: "Canada" },
                { flag: "🇩🇪", name: "Europe" },
                { flag: "🇦🇪", name: "Dubai" },
                { flag: "🇺🇸", name: "USA" },
                { flag: "🇦🇺", name: "Australia" },
              ].map((d, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-50 border border-gray-100 text-[11px] sm:text-xs font-medium text-gray-600"
                >
                  <span className="text-sm leading-none">{d.flag}</span>
                  {d.name}
                </span>
              ))}
            </div>

            {/* Pain points */}
            <div className="mt-6">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                Not sure where to start?
              </p>
              <ul className="space-y-2.5">
                {[
                  "Don\u2019t know which country to choose",
                  "Worried about low marks or backlogs",
                  "Confused about the visa process",
                  "Unsure about budget & scholarships",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm sm:text-base text-gray-700"
                  >
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 shrink-0">
                      <HiOutlineCheck className="w-3 h-3 text-emerald-600" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Social proof bar */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex flex-wrap items-center gap-5 sm:gap-7">
                {[
                  {
                    icon: PiStudentBold,
                    value: "1000+",
                    label: "Students Placed",
                  },
                  {
                    icon: PiShieldCheckBold,
                    value: "98%",
                    label: "Visa Success",
                  },
                  {
                    icon: PiClockCountdownBold,
                    value: "24hr",
                    label: "Offer Letter",
                  },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <stat.icon className="w-5 h-5 text-[#175ea4] shrink-0" />
                    <span className="text-sm text-gray-500">
                      <span className="font-bold text-gray-900">
                        {stat.value}
                      </span>{" "}
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: Form Card — shows first on mobile ── */}
          <div className="order-1 lg:order-2">
            <div className="relative mt-4 lg:mt-0 pt-6 pb-14">
              <div className="relative rounded-2xl bg-white border border-gray-100 shadow-xl shadow-gray-200/60">
                {/* Top gradient bar */}
                <div
                  className="h-1.5 rounded-t-2xl"
                  style={{
                    background:
                      "linear-gradient(90deg, #175ea4 0%, #10b981 55%, #f59e0b 100%)",
                  }}
                />

                <div className="px-5 sm:px-7 pt-5 sm:pt-6 pb-6 sm:pb-7">
                  {/* Card header */}
                  <div className="flex items-center gap-3 mb-5">
                    <span className="shrink-0 flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#eef4fb] border border-[#c7dcf5]">
                      <PiGraduationCapBold className="w-5 h-5 text-[#175ea4]" />
                    </span>
                    <div>
                      <h2 className="text-[15px] sm:text-[17px] font-bold text-gray-900 leading-tight">
                        Get Your Free Eligibility Check
                      </h2>
                      <p className="mt-0.5 text-xs text-gray-400">
                        Our counsellor will call you within 24 hours
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    {/* Name */}
                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">
                        Full Name
                      </label>
                      <div className="relative">
                        <PiUserBold className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        <input
                          type="text"
                          placeholder="Enter your full name"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                            clearError("name");
                          }}
                          className={`${inputBase(!!errors.name)} pl-10 pr-4`}
                        />
                      </div>
                      {errors.name && (
                        <p className="mt-1 text-[11px] text-red-500 flex items-center gap-1">
                          <FiArrowUpRight className="w-3 h-3 rotate-45 shrink-0" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">
                        Phone Number
                      </label>
                      <div className="relative">
                        {/* +91 prefix with divider */}
                        <div className="absolute left-0 inset-y-0 flex items-center pl-3 pr-2.5 gap-1.5 border-r border-gray-200 pointer-events-none select-none">
                          <PiPhoneBold className="w-3.5 h-3.5 text-gray-400" />
                          <span className="text-sm font-semibold text-gray-500">
                            +91
                          </span>
                        </div>
                        <input
                          type="tel"
                          inputMode="numeric"
                          maxLength={10}
                          placeholder="10-digit mobile number"
                          value={phone}
                          onChange={(e) => {
                            setPhone(
                              e.target.value.replace(/\D/g, "").slice(0, 10),
                            );
                            clearError("phone");
                          }}
                          className={`${inputBase(!!errors.phone)} pl-17.5 pr-12`}
                        />
                        {phone.length > 0 && (
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-gray-400 tabular-nums pointer-events-none">
                            {phone.length}/10
                          </span>
                        )}
                      </div>
                      {errors.phone && (
                        <p className="mt-1 text-[11px] text-red-500 flex items-center gap-1">
                          <FiArrowUpRight className="w-3 h-3 rotate-45 shrink-0" />
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* City + Country — stacked on very small, side-by-side on sm+ */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">
                          Your City
                        </label>
                        <div className="relative">
                          <PiMapPinBold className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
                          <input
                            type="text"
                            placeholder="e.g. Chennai"
                            value={city}
                            onChange={(e) => {
                              setCity(e.target.value);
                              clearError("city");
                            }}
                            className={`${inputBase(!!errors.city)} pl-9 pr-3`}
                          />
                        </div>
                        {errors.city && (
                          <p className="mt-1 text-[10px] text-red-500">
                            {errors.city}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">
                          Destination
                        </label>
                        <div className="relative">
                          <PiGlobeHemisphereWestBold className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
                          <select
                            value={country}
                            onChange={(e) => {
                              setCountry(e.target.value);
                              clearError("country");
                            }}
                            className={`${inputBase(!!errors.country)} pl-9 pr-8 appearance-none cursor-pointer ${!country ? "text-gray-400" : "text-gray-900"}`}
                          >
                            <option value="" disabled>
                              Country
                            </option>
                            {countries.map((c) => (
                              <option key={c} value={c}>
                                {c}
                              </option>
                            ))}
                          </select>
                          {/* Chevron using react-icons */}
                          <PiGlobeHemisphereWestBold
                            className="hidden"
                            aria-hidden
                          />
                          <svg
                            className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                        {errors.country && (
                          <p className="mt-1 text-[10px] text-red-500">
                            {errors.country}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Submit CTA */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-[#175ea4] hover:bg-[#1568b8] disabled:opacity-70 text-white text-sm sm:text-[15px] font-bold tracking-wide transition-all duration-200 hover:shadow-xl hover:shadow-[#175ea4]/30 active:scale-[0.98] group mt-0.5"
                    >
                      {loading ? (
                        <>
                          <PiSpinnerGapBold className="w-5 h-5 animate-spin" />
                          Submitting…
                        </>
                      ) : (
                        <>
                          Check My Eligibility — Free
                          <HiOutlineArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </form>

                  {/* Divider */}
                  <div className="flex items-center gap-3 my-4">
                    <div className="flex-1 h-px bg-gray-100" />
                    <span className="text-[10px] text-gray-400 font-medium whitespace-nowrap uppercase tracking-wider">
                      or reach us directly
                    </span>
                    <div className="flex-1 h-px bg-gray-100" />
                  </div>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/919500117792?text=Hi%2C%20I%20want%20to%20study%20abroad.%20Can%20you%20help%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2.5 py-3 rounded-xl bg-[#f0faf5] hover:bg-[#d9f2e6] border border-emerald-200 text-emerald-700 text-sm font-semibold transition-all duration-150 active:scale-[0.98]"
                  >
                    <RiWhatsappFill className="w-5 h-5 text-emerald-500" />
                    Chat on WhatsApp
                  </a>

                  {/* Trust line */}
                  <p className="mt-3 text-center text-[10px] text-gray-400 leading-relaxed">
                    🔒 100% secure &nbsp;·&nbsp; No spam calls &nbsp;·&nbsp;
                    Free consultation
                  </p>
                </div>

                <div className="absolute -top-3.25 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#175ea4] shadow-lg shadow-[#175ea4]/25">
                  <PiClockCountdownBold className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-[11px] font-bold text-white tracking-wide">
                    24hr Offer
                  </span>
                  <FiArrowUpRight className="w-3 h-3 text-amber-400" />
                </div>
              </div>

              <div className="absolute bottom-1 left-4 z-10 flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white shadow-lg shadow-gray-200/80 border border-gray-100">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-50 border border-emerald-100 shrink-0">
                  <MdVerified className="w-4 h-4 text-emerald-600" />
                </span>
                <div className="flex flex-col leading-tight">
                  <span className="text-xs font-bold text-gray-900">
                    Trusted by 1000+ Students
                  </span>
                  <span className="text-[10px] text-gray-500">
                    Chennai&apos;s #1 Study Abroad Partner
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div
        className="w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #e5e7eb 50%, transparent 100%)",
        }}
      />
    </section>
  );
};

export default HeroSection;
