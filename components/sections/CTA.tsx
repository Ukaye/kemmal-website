"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";
import DotPattern from "@/components/ui/DotPattern";

interface CTAProps {
  variant?: "dark" | "gradient";
  title?: string;
  subtitle?: string;
  primaryButton?: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
}

export default function CTA({
  variant = "dark",
  title = "Ready to build a smarter, stronger, more profitable business?",
  subtitle = "Let's partner with you.",
  primaryButton = {
    text: "Book a Consultation",
    href: "/book-consultation",
  },
  secondaryButton = {
    text: "Request a Proposal",
    href: "/what-we-do",
  },
}: CTAProps) {
  return (
    <section
      className={`relative overflow-hidden ${
        variant === "dark"
          ? "bg-primary-dark"
          : "bg-gradient-to-r from-primary-dark via-primary-dark to-[#2a3548]"
      }`}
    >
      {/* Decorative Elements */}
      <DotPattern position="bottom-left" size="lg" className="opacity-30" />
      <DotPattern position="top-right" size="md" className="opacity-30" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-gray-400 text-sm mb-4">{subtitle}</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
            {title}
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href={primaryButton.href}>
              <Button variant="primary" size="lg">
                {primaryButton.text}
              </Button>
            </Link>
            <Link href={secondaryButton.href}>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-dark"
              >
                {secondaryButton.text}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Alternate CTA for "future-ready" messaging
export function FutureReadyCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary-dark to-[#2a3548]">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[url('/images/city-bg.jpg')] bg-cover bg-center" />
      </div>

      <DotPattern position="bottom-left" size="lg" className="opacity-30" />
      <DotPattern position="top-right" size="md" className="opacity-30" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-gray-400 text-sm mb-4 tracking-widest uppercase">
            We don&apos;t just help businesses grow
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
            We help them become better, stronger, and
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-gold mb-8">
            future-ready.
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/book-consultation">
              <Button variant="secondary" size="lg" className="bg-white text-primary-dark hover:bg-gray-100">
                Book a Consultation
              </Button>
            </Link>
            <Link href="/what-we-do">
              <Button
                variant="outline"
                size="lg"
                className="border-primary-gold text-primary-gold hover:bg-primary-gold hover:text-primary-dark"
              >
                Request a Proposal
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

