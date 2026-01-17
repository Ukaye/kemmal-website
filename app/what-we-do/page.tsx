"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Testimonials, CTA } from "@/components/sections";
import { CheckCircle } from "lucide-react";

const services = [
  {
    id: "strategy",
    title: "Business Strategy & Growth Consulting",
    description:
      "We help organizations clarify goals, design winning strategies, and execute with precision.",
    capabilities: [
      "Corporate & Business Strategy",
      "Market Positioning",
      "Competitive Analysis",
      "Systems & Process Design",
      "Operational Optimization",
      "Expansion & Scale Planning",
    ],
    cta: "Book a Strategy Call",
    image: "/images/what-we-do/what-we-do-page-image1.png",
    reverse: false,
  },
  {
    id: "structure",
    title: "Organizational Structure & Systems Development",
    description:
      "We design operational frameworks that help businesses run smoothly, grow sustainably, and achieve long-term stability.",
    capabilities: [
      "Organizational Design",
      "SOP Development",
      "Workflows & Efficiency Mapping",
      "Business Process Engineering",
      "Governance & Policy Development",
    ],
    cta: "Book a Consultation",
    image: "/images/what-we-do/what-we-do-page-image2.png",
    reverse: true,
  },
  {
    id: "training",
    title: "Training, Capacity Building & Leadership Development",
    description:
      "We equip teams with the skills to drive performance, collaboration, innovation, and resilience.",
    capabilities: [
      "Leadership & Management Training",
      "Sales & Business Development Mastery",
      "Emotional Intelligence & Team Dynamics",
      "Strategic Thinking & Problem Solving",
      "Customer Experience Excellence",
    ],
    cta: "Join a Training Program",
    image: "/images/what-we-do/what-we-do-page-image3.png",
    reverse: false,
  },
  {
    id: "advisory",
    title: "Business Planning & Advisory",
    description:
      "For startups and SMEs seeking structure, clarity, or funding.",
    capabilities: [
      "Business Plan Development",
      "Investor Readiness Advisory",
      "Business Model Development",
      "Grant Applications & Funding Preparation",
    ],
    cta: "Book a Call",
    image: "/images/what-we-do/what-we-do-page-image4.png",
    reverse: true,
  },
  {
    id: "sales",
    title: "Sales Strategy & Revenue Optimization",
    description:
      "We design effective sales systems, enhance team capability, and build sustainable revenue engines.",
    capabilities: [
      "Sales System Development",
      "Sales Team Training",
      "Customer Relationship Optimization",
      "Market Penetration Strategy",
    ],
    cta: "Book a Session",
    image: "/images/what-we-do/what-we-do-page-image5.png",
    reverse: false,
  },
];

export default function WhatWeDoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-primary-dark overflow-hidden">
        {/* Decorative Gold Arc */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] pointer-events-none">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <circle cx="400" cy="0" r="350" fill="#D4A43C" fillOpacity="0.1" />
          </svg>
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-32 pb-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <p className="text-gray-400 text-xs tracking-[0.3em] uppercase mb-4">
              We deliver solutions that are
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-primary-gold">Clear.</span>{" "}
              <span className="text-primary-gold">Practical.</span>{" "}
              <span className="text-primary-gold">Sustainable.</span>
              <br />
              <span className="text-primary-gold">Transformative.</span>
            </h1>
          </motion.div>
        </div>

      </section>

      {/* Services */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`section ${index % 2 === 0 ? "bg-white" : "bg-bg-section"}`}
        >
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                service.reverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: service.reverse ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={service.reverse ? "lg:order-2" : ""}
              >
                <h2 
                  className="font-bold text-primary-dark mb-4"
                  style={{
                    fontFamily: "var(--font-merriweather), Merriweather, serif",
                    fontSize: "28px",
                    lineHeight: "120%",
                  }}
                >
                  {service.title}
                </h2>
                <p className="text-text-light mb-6 leading-relaxed">{service.description}</p>
                <p className="text-sm text-text-light mb-4">Our capabilities include:</p>
                <ul className="space-y-3 mb-8">
                  {service.capabilities.map((capability) => (
                    <li
                      key={capability}
                      className="flex items-start gap-3 text-text-light"
                    >
                      <CheckCircle className="w-5 h-5 text-primary-gold mt-0.5 flex-shrink-0" />
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/book-consultation">
                  <button
                    className="font-semibold text-white transition-all duration-300 hover:opacity-90"
                    style={{
                      padding: "12px 24px",
                      borderRadius: "8px",
                      background: "linear-gradient(180deg, rgba(5, 25, 50, 0.9) 0%, rgba(12, 61, 123, 0.9) 100%)",
                    }}
                  >
                    {service.cta}
                  </button>
                </Link>
              </motion.div>

              {/* Service Image */}
              <motion.div
                initial={{ opacity: 0, x: service.reverse ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative ${service.reverse ? "lg:order-1" : ""}`}
              >
                <div className="aspect-square rounded-2xl overflow-hidden bg-bg-section relative shadow-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain p-4"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <Testimonials />
      {/* <CTA /> */}
    </>
  );
}
