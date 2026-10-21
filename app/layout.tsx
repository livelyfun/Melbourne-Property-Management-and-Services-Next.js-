import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mpmservices.com.au"),
  title: {
    default: "Melbourne Property Management and Services | MPM Services",
    template: "%s | MPM Services",
  },
  description:
    "Professional property services across Melbourne including steam cleaning, strip and polish, and property maintenance for residential and commercial properties.",
  keywords: [
    "property services Melbourne",
    "steam cleaning Melbourne",
    "strip and polish Melbourne",
    "property maintenance Melbourne",
    "end of lease cleaning",
  ],
  openGraph: {
    title: "Melbourne Property Management and Services",
    description:
      "Steam cleaning, strip & polish and property maintenance — done properly across Melbourne.",
    type: "website",
    locale: "en_AU",
  },
};

export const viewport: Viewport = {
  themeColor: "#0e0f0c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${geistSans.variable} ${instrumentSerif.variable} ${geistMono.variable}`}
    >
      <body>
        <a href="#main" className="sr-only">
          Skip to content
        </a>
        <Navbar />
        <div id="main">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
