import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../global.css";
import { ApplyModalProvider } from "@/components/ApplyModal";
import WhatsAppButton from "@/components/WhatsappButton";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Study Abroad Admission in 24 Hours | Abroad Scholars",
  description:
    "Get your university admission in just 24 hours with Abroad Scholars. Apply to top universities in the UK, USA, Canada, and Europe with expert guidance.",
  keywords: [
    "study abroad",
    "study abroad consultants",
    "UK university admission",
    "USA university admission",
    "student visa consultants",
    "abroad scholars",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Study Abroad Admission in 24 Hours | Abroad Scholars",
    description:
      "Apply to top universities worldwide with Abroad Scholars. Fast admission support and expert counseling.",
    url: "https://abroadscholars.in",
    siteName: "Abroad Scholars",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {/* Google Ads Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17264874781"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-17264874781');
    `}
        </Script>

        <ApplyModalProvider>{children}</ApplyModalProvider>
        <WhatsAppButton />
      </body>
    </html>
  );
}
