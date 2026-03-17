"use client";
import { useState, useEffect } from "react";
import { IoCallOutline } from "react-icons/io5";
import { RiWhatsappFill } from "react-icons/ri";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { useApplyModal } from "./ApplyModal";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { openModal } = useApplyModal();

  return (
    <>
      {/* Top micro-bar — guaranteed single line */}
      <div className="w-full bg-[#175ea4] text-white text-center py-1.5 px-2 overflow-hidden">
        <p className="flex items-center justify-center gap-1.5 text-[9px] sm:text-xs font-semibold tracking-wide whitespace-nowrap">
          <span className="relative flex h-1.5 w-1.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
          </span>
          <span className="sm:hidden">Sep 2026 Intake Open!</span>
          <span className="hidden sm:inline">
            Limited Seats — September 2026 Intake Now Open
          </span>
        </p>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${
          scrolled
            ? "shadow-md shadow-black/6 py-1.5 sm:py-2.5"
            : "shadow-sm shadow-black/4 py-2 sm:py-3 md:py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-2.5 sm:px-6 lg:px-10">
          {/* Logo */}
          <Link href="/" className="shrink-0" aria-label="Home">
            <Image
              src="/images/logo.webp"
              alt="Abroad Scholars"
              width={160}
              height={50}
              className="h-7 sm:h-9 md:h-11 w-auto"
              priority
            />
          </Link>
          {/* ── Desktop actions (md+) ── */}
          <div className="hidden md:flex items-center gap-5 lg:gap-6">
            <a
              href="tel:+919500117792"
              className="flex items-center gap-2.5 text-gray-600 hover:text-gray-900 transition-colors duration-200 group"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-50 group-hover:bg-blue-100 border border-blue-100 group-hover:border-blue-200 transition-all duration-200">
                <IoCallOutline className="w-4 h-4 text-[#175ea4]" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-[10px] uppercase tracking-[0.15em] text-gray-400 font-medium">
                  Call Us
                </span>
                <span className="text-sm font-semibold text-gray-800 tracking-wide">
                  +91 95001 17792
                </span>
              </span>
            </a>

            <div className="w-px h-8 bg-gray-200" />

            <a
              href="https://wa.me/919500117792?text=Hi%2C%20I%27m%20interested%20in%20studying%20abroad"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-emerald-600/20 active:scale-[0.97]"
            >
              <RiWhatsappFill className="w-4.5 h-4.5" />
              <span className="hidden lg:inline">WhatsApp Us</span>
              <span className="lg:hidden">Chat</span>
            </a>

            <button
              onClick={openModal}
              className="flex cursor-pointer items-center gap-2 px-6 py-2.5 rounded-xl bg-[#175ea4] text-white text-sm font-bold"
            >
              Get Offer in 24Hrs
            </button>
          </div>

          {/* ── Mobile actions (<md) ── */}
          <div className="flex md:hidden items-center gap-1">
            <a
              href="tel:+919500117792"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 active:bg-blue-100 border border-blue-100 transition-colors"
              aria-label="Call us"
            >
              <IoCallOutline className="w-3.5 h-3.5 text-[#175ea4]" />
            </a>

            <a
              href="https://wa.me/919500117792?text=Hi%2C%20I%27m%20interested%20in%20studying%20abroad"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-600 active:bg-emerald-500 transition-colors"
              aria-label="WhatsApp us"
            >
              <RiWhatsappFill className="w-3.5 h-3.5 text-white" />
            </a>

            <button
              onClick={openModal}
              className="flex items-center gap-1 ml-0.5 px-2.5 py-1.5 rounded-lg bg-[#175ea4] active:bg-[#1a6bbb] text-white text-[10px] font-bold whitespace-nowrap transition-all active:scale-[0.97]"
            >
              Apply
              <HiOutlineArrowRight className="w-2.5 h-2.5" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
