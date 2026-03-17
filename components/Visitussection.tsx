"use client";
import { HiOutlineArrowRight } from "react-icons/hi2";
import {
  PiMapPinBold,
  PiClockBold,
  PiCalendarCheckBold,
  PiPhoneBold,
} from "react-icons/pi";
import { IoStorefrontOutline } from "react-icons/io5";
import { useApplyModal } from "./ApplyModal";

const details = [
  {
    icon: PiMapPinBold,
    label: "Our Office",
    value: "2nd Floor, 2nd Ave, W Block, Anna Nagar",
    subtext: "Opposite City Tower Hospital, Chennai – 600040",
  },
  {
    icon: PiClockBold,
    label: "Walk-in Hours",
    value: "11:00 AM – 5:00 PM",
    subtext: "Monday to Saturday",
  },
  {
    icon: PiCalendarCheckBold,
    label: "Appointment",
    value: "Pre-book to skip the wait",
    subtext: "Same-day slots usually available",
  },
  {
    icon: PiPhoneBold,
    label: "Call Us",
    value: "+91 95001 17792",
    subtext: "For directions or quick queries",
  },
];

const VisitUsSection = () => {
  const { openModal } = useApplyModal();

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-18 lg:py-22">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            {/* Badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-[#175ea4] mb-5">
              <IoStorefrontOutline className="w-3.5 h-3.5" />
              Visit Us in Chennai
            </span>

            <h2 className="text-2xl sm:text-5xl  font-extrabold text-gray-900 tracking-tight leading-[1.15]">
              Prefer a <span className="text-[#175ea4]">Face-to-Face</span>{" "}
              Counselling Session?
            </h2>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-500 leading-relaxed max-w-md">
              Walk into our Chennai office and speak directly with our study
              abroad experts. Bring your documents, get your eligibility
              checked, and leave with a clear admission plan — all in one
              sitting.
            </p>

            {/* Details grid */}
            <div className="mt-7 sm:mt-8 grid sm:grid-cols-2 gap-4">
              {details.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100"
                >
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 shrink-0">
                    <item.icon className="w-4.5 h-4.5 text-[#175ea4]" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                      {item.label}
                    </span>
                    <span className="block text-sm font-bold text-gray-900 mt-0.5">
                      {item.value}
                    </span>
                    <span className="block text-xs text-gray-500 mt-0.5">
                      {item.subtext}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-7 flex justify-center sm:mt-8">
              <button
                onClick={openModal}
                className="flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-[#175ea4] hover:bg-[#1a6bbb] text-white text-sm sm:text-base font-bold transition-all duration-200 hover:shadow-xl hover:shadow-[#175ea4]/20 active:scale-[0.97] group cursor-pointer"
              >
                Book In-Person Consultation
                <HiOutlineArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* Micro trust line */}
            <p className="mt-4 text-xs text-gray-400">
              No charges for walk-in counselling. Bring your marksheets if you
              have them — we&apos;ll do the rest.
            </p>
          </div>

          {/* Right: Embedded Map */}
          <div className="relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl shadow-gray-200/60 border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0!2d80.2095!3d13.085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5264d0d5555555%3A0x5555555555555555!2s2nd%20Ave%2C%20W%20Block%2C%20Anna%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu%20600040!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Abroad Scholar — Anna Nagar, Chennai"
                className="w-full"
              />
            </div>

            {/* Floating hours badge */}
            <div className="absolute -bottom-3 sm:-bottom-4 right-3 sm:right-5 z-20 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white shadow-lg shadow-gray-900/8 border border-gray-100">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-50">
                <PiClockBold className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xs font-bold text-gray-900">
                  Open Today
                </span>
                <span className="text-[10px] text-gray-500">
                  11 AM – 5 PM · Mon–Sat
                </span>
              </div>
            </div>

            {/* Offset bg accent */}
            <div className="absolute -z-10 top-4 sm:top-6 -left-3 sm:-left-4 w-full h-full rounded-2xl sm:rounded-3xl bg-blue-50 border border-blue-100/50" />
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  );
};

export default VisitUsSection;
