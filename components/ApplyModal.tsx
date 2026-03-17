"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import type { ReactNode } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { HiOutlineArrowRight } from "react-icons/hi2";
import {
  PiGraduationCapBold,
  PiSpinnerGapBold,
  PiCheckCircleBold,
  PiUserBold,
  PiPhoneBold,
  PiGlobeHemisphereWestBold,
  PiMapPinBold,
} from "react-icons/pi";
import { RiWhatsappFill } from "react-icons/ri";

interface ModalContextType {
  openModal: () => void;
  closeModal: () => void;
  isOpen: boolean;
}

const ModalContext = createContext<ModalContextType>({
  openModal: () => {},
  closeModal: () => {},
  isOpen: false,
});

export const useApplyModal = () => useContext(ModalContext);

export const ApplyModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [closeModal]);

  return (
    <ModalContext.Provider value={{ openModal, closeModal, isOpen }}>
      {children}
      {isOpen && <ApplyModal onClose={closeModal} />}
    </ModalContext.Provider>
  );
};

const countries = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Ireland",
  "New Zealand",
  "Finland",
  "Belgium",
  "South Korea",
  "Singapore",
  "Other",
];

const ApplyModal = ({ onClose }: { onClose: () => void }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          city,
          country,
          source: "website-form",
          page: window.location.pathname,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        throw new Error("Failed to submit lead");
      }

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputBase = (hasError: boolean) =>
    `w-full py-2.5 sm:py-3 rounded-xl bg-gray-50 border outline-none text-sm text-gray-900 placeholder:text-gray-400 transition-all ${
      hasError
        ? "border-red-300 ring-2 ring-red-100"
        : "border-gray-200 focus:border-[#175ea4] focus:ring-2 focus:ring-[#175ea4]/10"
    }`;

  return (
    <div className="fixed inset-0 z-100 flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full sm:max-w-md max-h-[95vh] sm:max-h-[90vh] bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl shadow-black/20 overflow-y-auto animate-slideUp">
        {/* Close */}
        <button
          onClick={onClose}
          className="sticky top-3 float-right mr-3 sm:mr-4 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label="Close"
        >
          <IoCloseOutline className="w-5 h-5 text-gray-500" />
        </button>

        {/* Top accent */}
        <div className="absolute top-0 left-0 right-0 h-1 sm:h-1.5 bg-linear-to-r from-[#175ea4] via-emerald-500 to-amber-400" />

        <div className="px-4 pb-5 pt-4 sm:p-7 sm:pt-8">
          {!submitted ? (
            <>
              {/* Header — compact on mobile */}
              <div className="text-center mb-3 sm:mb-6">
                <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-50 border border-blue-100 mb-2 sm:mb-3">
                  <PiGraduationCapBold className="w-5 h-5 sm:w-6 sm:h-6 text-[#175ea4]" />
                </span>
                <h3 className="text-base sm:text-xl font-bold text-gray-900">
                  Get Your Offer in 24 Hours
                </h3>
                <p className="mt-1 text-[11px] sm:text-sm text-gray-400">
                  Fill in your details — our counsellor will reach out shortly
                </p>
              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="space-y-2.5 sm:space-y-3.5"
              >
                {/* Name */}
                <div>
                  <label className="block text-[10px] sm:text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <PiUserBold className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
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
                    <p className="mt-1 text-[11px] text-red-500">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-[10px] sm:text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-sm text-gray-400 font-medium select-none">
                      <PiPhoneBold className="w-4 h-4" />
                      +91
                    </span>
                    <input
                      type="tel"
                      inputMode="numeric"
                      maxLength={10}
                      placeholder="10-digit number"
                      value={phone}
                      onChange={(e) => {
                        setPhone(
                          e.target.value.replace(/\D/g, "").slice(0, 10),
                        );
                        clearError("phone");
                      }}
                      className={`${inputBase(!!errors.phone)} pl-18 pr-4`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-[11px] text-red-500">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* City */}
                <div>
                  <label className="block text-[10px] sm:text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    Your City
                  </label>
                  <div className="relative">
                    <PiMapPinBold className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="e.g. Chennai, Mumbai, Delhi"
                      value={city}
                      onChange={(e) => {
                        setCity(e.target.value);
                        clearError("city");
                      }}
                      className={`${inputBase(!!errors.city)} pl-10 pr-4`}
                    />
                  </div>
                  {errors.city && (
                    <p className="mt-1 text-[11px] text-red-500">
                      {errors.city}
                    </p>
                  )}
                </div>

                {/* Country */}
                <div>
                  <label className="block text-[10px] sm:text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    Preferred Country
                  </label>
                  <div className="relative">
                    <PiGlobeHemisphereWestBold className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    <select
                      value={country}
                      onChange={(e) => {
                        setCountry(e.target.value);
                        clearError("country");
                      }}
                      className={`${inputBase(!!errors.country)} pl-10 pr-10 appearance-none cursor-pointer ${
                        !country ? "text-gray-400" : "text-gray-900"
                      }`}
                    >
                      <option value="" disabled>
                        Select a country
                      </option>
                      {countries.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                    <svg
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  {errors.country && (
                    <p className="mt-1 text-[11px] text-red-500">
                      {errors.country}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3 sm:py-3.5 rounded-xl bg-[#175ea4] hover:bg-[#1a6bbb] disabled:bg-[#175ea4]/70 text-white text-sm font-bold transition-all duration-200 hover:shadow-lg hover:shadow-[#175ea4]/20 active:scale-[0.98] mt-0.5"
                >
                  {loading ? (
                    <PiSpinnerGapBold className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      Get Offer in 24Hrs
                      <HiOutlineArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Divider */}
              <div className="flex items-center gap-3 mt-3 sm:mt-5">
                <div className="flex-1 h-px bg-gray-100" />
                <span className="text-[10px] sm:text-[11px] text-gray-400 font-medium">
                  or reach us directly
                </span>
                <div className="flex-1 h-px bg-gray-100" />
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919500117792?text=Hi%2C%20I%27d%20like%20a%20free%20counselling%20session"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2.5 sm:mt-4 w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 text-sm font-semibold transition-all active:scale-[0.98]"
              >
                <RiWhatsappFill className="w-5 h-5 text-emerald-600" />
                Chat on WhatsApp
              </a>

              {/* Trust */}
              <p className="mt-2.5 sm:mt-4 text-center text-[10px] text-gray-400">
                🔒 Your data is secure · Free consultation · No spam calls
              </p>
            </>
          ) : (
            /* ── Success ── */
            <div className="text-center py-6 sm:py-8">
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 mb-4">
                <PiCheckCircleBold className="w-8 h-8 text-emerald-600" />
              </span>
              <h3 className="text-xl font-bold text-gray-900">
                You&apos;re All Set! 🎉
              </h3>
              <p className="mt-2 text-sm text-gray-500 max-w-xs mx-auto">
                Our counsellor will reach out within 30 minutes. Keep your phone
                handy!
              </p>
              <button
                onClick={onClose}
                className="mt-6 px-6 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-sm font-semibold text-gray-700 transition-colors"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(24px) scale(0.97); } to { opacity: 1; transform: translateY(0) scale(1); } }
        .animate-fadeIn { animation: fadeIn 0.2s ease-out; }
        .animate-slideUp { animation: slideUp 0.3s ease-out; }
      `}</style>
    </div>
  );
};

export default ApplyModal;
