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
        {/* ── Google Tag Manager (noscript) — must be first in body ── */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PWG8C59C"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* ── Google Tag Manager ── */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PWG8C59C');`,
          }}
        />

        {/* ── Google Ads ── */}
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

        {/* ── Microsoft Clarity ── */}
        <Script id="clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "w0pykg3y3b");
          `}
        </Script>

        <ApplyModalProvider>{children}</ApplyModalProvider>
        <WhatsAppButton />
      </body>
    </html>
  );
}
