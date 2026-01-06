"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

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
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-dark to-[#2a3548]" />
      )}

      {/* Overlay */}
      {overlay && backgroundImage && (
        <div className="absolute inset-0 bg-primary-dark/70" />
      )}

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 opacity-10">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <circle cx="350" cy="50" r="300" fill="#D4A43C" />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`max-w-4xl ${centered ? "mx-auto text-center" : ""}`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {title}
          </h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl"
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
                  <Button variant="primary" size="lg">
                    {primaryCTA.text}
                  </Button>
                </Link>
              )}
              {secondaryCTA && (
                <Link href={secondaryCTA.href}>
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-dark">
                    {secondaryCTA.text}
                  </Button>
                </Link>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 L0,50 Q360,0 720,50 T1440,50 L1440,100 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

// Alternate hero with tagline styling
export function HomeHero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/homepage-hero-image.jpg"
          alt="Business professionals"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary-dark/70" />
      </div>

      {/* Decorative Gold Circle */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px]">
        <svg viewBox="0 0 400 400" className="w-full h-full opacity-20">
          <circle cx="300" cy="100" r="250" fill="#D4A43C" />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 pt-32 md:pt-40 pb-32 md:pb-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
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
            className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl"
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
          >
            <Link href="/book-consultation">
              <Button variant="primary" size="lg">
                Book a Consultation
              </Button>
            </Link>
            <Link href="/what-we-do">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-dark"
              >
                Request a Proposal
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 md:mt-24"
        >
          <p className="text-gray-400 text-sm tracking-widest uppercase">
            Where clarity meets execution.
          </p>
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 L0,60 Q360,0 720,60 T1440,60 L1440,100 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

