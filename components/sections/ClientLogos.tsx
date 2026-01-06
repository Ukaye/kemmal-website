"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Placeholder client logos - in production, these would be actual images
const clients = [
  { name: "Stanbic IBTC", logo: "Stanbic IBTC" },
  { name: "3MTT", logo: "3MTT" },
  { name: "TeKnowledge", logo: "TeKnowledge" },
  { name: "FirstBank", logo: "FirstBank" },
  { name: "ALX", logo: "ALX" },
  { name: "MyHives", logo: "MyHives" },
  { name: "Elevation Church", logo: "Elevation" },
  { name: "KOC University", logo: "KOC" },
  { name: "Patika", logo: "Patika" },
  { name: "FEZ", logo: "FEZ" },
  { name: "Indigo", logo: "Indigo" },
  { name: "Midwestern", logo: "Midwestern" },
  { name: "Elvaridah", logo: "Elvaridah" },
  { name: "Avila", logo: "Avila" },
  { name: "Hydeas Consult", logo: "Hydeas" },
  { name: "Majeurs", logo: "Majeurs" },
  { name: "Datacrest", logo: "Datacrest" },
  { name: "PINCOOP", logo: "PINCOOP" },
];

interface ClientLogosProps {
  variant?: "light" | "dark";
}

export default function ClientLogos({ variant = "light" }: ClientLogosProps) {
  return (
    <section
      className={`section ${
        variant === "dark" ? "bg-primary-dark" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p
            className={`text-sm tracking-widest uppercase mb-2 ${
              variant === "dark" ? "text-primary-gold" : "text-primary-gold"
            }`}
          >
            Globally Recognized
          </p>
          <h2
            className={`text-2xl md:text-3xl font-bold ${
              variant === "dark" ? "text-white" : "text-primary-dark"
            }`}
          >
            We have supported national and multinational
            <br />
            organizations
          </h2>
        </motion.div>

        {/* Logos Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`rounded-2xl p-8 ${
            variant === "dark" ? "bg-white/5" : "bg-bg-section"
          }`}
        >
          <div className="flex items-center justify-center">
            <Image
              src="/images/partners/partners.png"
              alt="Client Partners"
              width={1200}
              height={600}
              className="w-full h-auto"
              unoptimized
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

