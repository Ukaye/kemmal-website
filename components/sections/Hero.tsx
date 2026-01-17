"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  title: React.ReactNode;
  subtitle?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  overlay?: boolean;
  centered?: boolean;
  minHeight?: string;
}

export default function Hero({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  overlay = true,
  centered = false,
  minHeight = "min-h-[90vh]",
}: HeroProps) {
  return (
    <section
      className={`relative ${minHeight} flex items-center overflow-hidden`}
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Background (when no image) */}
      {!backgroundImage && (
        <div 
          className="absolute inset-0" 
          style={{
            background: "linear-gradient(180deg, rgba(5, 25, 50, 0.9) 0%, rgba(12, 61, 123, 0.9) 100%)",
          }}
        />
      )}

      {/* Overlay */}
      {overlay && backgroundImage && (
        <div className="absolute inset-0 bg-primary-dark/70" />
      )}

      {/* Decorative Gold Arc */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <circle cx="400" cy="0" r="350" fill="#D4A43C" fillOpacity="0.15" />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`max-w-4xl ${centered ? "mx-auto text-center" : ""}`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
            {title}
          </h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl mb-10 max-w-2xl"
              style={{ color: "#F6F8FA" }}
            >
              {subtitle}
            </motion.p>
          )}

          {(primaryCTA || secondaryCTA) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`flex flex-wrap gap-4 ${centered ? "justify-center" : ""}`}
            >
              {primaryCTA && (
                <Link href={primaryCTA.href}>
                  <button
                    className="font-semibold text-white transition-all duration-300 hover:opacity-90"
                    style={{
                      padding: "12px 24px",
                      borderRadius: "8px",
                      border: "1px solid #395D8B",
                      backgroundColor: "transparent",
                    }}
                  >
                    {primaryCTA.text}
                  </button>
                </Link>
              )}
              {secondaryCTA && (
                <Link href={secondaryCTA.href}>
                  <button
                    className="font-semibold text-white transition-all duration-300 hover:opacity-90"
                    style={{
                      padding: "12px 24px",
                      borderRadius: "8px",
                      backgroundColor: "#395D8B",
                    }}
                  >
                    {secondaryCTA.text}
                  </button>
                </Link>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

// Home page hero with full design matching
export function HomeHero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/homepage-hero-image.jpg"
          alt="Business professionals"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay matching design */}
        <div 
          className="absolute inset-0" 
          style={{
            background: "linear-gradient(180deg, rgba(5, 25, 50, 0.9) 0%, rgba(12, 61, 123, 0.9) 100%)",
          }}
        />
      </div>

      {/* Decorative Gold Arc - Large curved shape on right */}
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <circle cx="400" cy="0" r="350" fill="#D4A43C" fillOpacity="0.2" />
        </svg>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex items-center relative z-10">
        <div className="container mx-auto px-4 md:px-6 lg:px-8" style={{ paddingTop: "150px" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1]"
              style={{ color: "#FFFFFF", paddingBottom: "20px" }}
            >
              Transforming Businesses.
              <br />
              Elevating Leaders.
              <br />
              Accelerating{" "}
              <span className="text-primary-gold">Growth.</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-lg max-w-2xl"
              style={{ color: "#F6F8FA", paddingTop: "24px", paddingBottom: "20px" }}
            >
              At The Kemmal Onuoha Company, we help organizations make smarter decisions, build
              resilient systems, and achieve sustainable growth through strategy,
              training, and business consulting excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4"
              style={{ paddingBottom: "100px" }}
            >
              {/* Book a Consultation - Reduced outline thickness */}
              <Link href="/book-consultation">
                <button
                  className="font-semibold text-white transition-all duration-300 hover:opacity-90"
                  style={{
                    padding: "12px 24px",
                    borderRadius: "8px",
                    border: "1px solid #395D8B",
                    backgroundColor: "transparent",
                  }}
                >
                  Book a Consultation
                </button>
              </Link>
              
              {/* Request a Proposal - Background #395D8B */}
              <Link href="/what-we-do">
                <button
                  className="font-semibold text-white transition-all duration-300 hover:opacity-90"
                  style={{
                    padding: "12px 24px",
                    borderRadius: "8px",
                    backgroundColor: "#395D8B",
                  }}
                >
                  Request a Proposal
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Tagline Bar - Full width at bottom with blur effect, centered, sentence case */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative z-10 w-full"
        style={{
          height: "64px",
          background: "#1115184D",
          backdropFilter: "blur(16px)",
        }}
      >
        <div 
          className="h-full flex items-center justify-center"
          style={{
            paddingTop: "12px",
            paddingBottom: "12px",
            paddingLeft: "120px",
            paddingRight: "120px",
          }}
        >
          <p 
            style={{ 
              color: "#FFFFFF",
              fontFamily: "var(--font-ibm-plex-sans), 'IBM Plex Sans', sans-serif",
              fontWeight: 500,
              fontSize: "20px",
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            Where clarity meets execution.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
