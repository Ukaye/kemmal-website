import type { Metadata } from "next";
import { Merriweather, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "The Kemmal Onuoha Company | Business Consulting & Strategy",
  description: "Transforming Businesses. Elevating Leaders. Accelerating Growth. We help organizations make smarter decisions, build resilient systems, and achieve sustainable growth through strategy, training, and business consulting excellence.",
  keywords: ["business consulting", "strategy", "leadership development", "training", "growth", "Nigeria", "Africa"],
  authors: [{ name: "Kemmal Onuoha" }],
  openGraph: {
    title: "The Kemmal Onuoha Company",
    description: "Transforming Businesses. Elevating Leaders. Accelerating Growth.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${merriweather.variable} ${ibmPlexSans.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
