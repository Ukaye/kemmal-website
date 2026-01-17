"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function WhoWeAreSection() {
  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              className="text-primary-dark mb-6"
              style={{
                fontFamily: "var(--font-merriweather), Merriweather, serif",
                fontWeight: 700,
                fontSize: "32px",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              Who We Are
            </h2>
            <p 
              className="text-text-light leading-relaxed text-base md:text-lg"
              style={{ marginTop: "24px", marginBottom: "32px" }}
            >
              The Kemmal Onuoha Company is a full-suite business management
              and strategy consulting firm dedicated to helping organizations
              strengthen their performance, develop capable teams, and design
              systems that scale.
            </p>

            {/* Stats - White cards with gold numbers */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div 
                className="bg-white rounded-lg shadow-md"
                style={{ 
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                  padding: "24px 32px",
                }}
              >
                <p className="text-4xl md:text-5xl font-bold text-primary-gold">20+</p>
                <p className="text-text-light text-sm mt-3">
                  Years Combined
                  <br />
                  Industry Experience
                </p>
              </div>
              <div 
                className="bg-white rounded-lg shadow-md"
                style={{ 
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                  padding: "24px 32px",
                }}
              >
                <p className="text-4xl md:text-5xl font-bold text-primary-gold">100+</p>
                <p className="text-text-light text-sm mt-3">
                  Businesses
                  <br />
                  Supported
                </p>
              </div>
            </div>

            <Link href="/who-we-are" style={{ marginTop: "24px", display: "inline-block" }}>
              <button 
                className="inline-flex items-center justify-center font-semibold text-white transition-all duration-300 hover:opacity-90"
                style={{
                  width: "244px",
                  height: "48px",
                  paddingTop: "12px",
                  paddingRight: "64px",
                  paddingBottom: "12px",
                  paddingLeft: "64px",
                  gap: "10px",
                  borderRadius: "5px",
                  background: "linear-gradient(180deg, rgba(5, 25, 50, 0.9) 0%, rgba(12, 61, 123, 0.9) 100%)",
                }}
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-bg-section relative shadow-xl">
              <Image
                src="/images/who-we-are/who-we-are-page-image1.jpg"
                alt="Kemmal Onuoha Company Team"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-gold/10 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
