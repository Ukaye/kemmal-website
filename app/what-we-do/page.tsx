"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Hero, Testimonials, CTA } from "@/components/sections";
import Button from "@/components/ui/Button";
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
      <section className="relative min-h-[50vh] flex items-center bg-primary-dark">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <p className="text-primary-gold text-sm tracking-widest uppercase mb-4">
              We deliver solutions that are
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Clear. Practical. Sustainable.{" "}
              <span className="text-primary-gold">Transformative.</span>
            </h1>
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

      {/* Services */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`section ${index % 2 === 0 ? "bg-white" : "bg-bg-section"}`}
        >
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div
              className={`grid lg:grid-cols-2 gap-12 items-center ${
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
                <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">
                  {service.title}
                </h2>
                <p className="text-text-light mb-6">{service.description}</p>
                <p className="text-sm text-text-light mb-4">Our capabilities include:</p>
                <ul className="space-y-2 mb-8">
                  {service.capabilities.map((capability) => (
                    <li
                      key={capability}
                      className="flex items-start gap-2 text-text-light"
                    >
                      <CheckCircle className="w-5 h-5 text-primary-gold mt-0.5 flex-shrink-0" />
                      {capability}
                    </li>
                  ))}
                </ul>
                <Link href="/book-consultation">
                  <Button variant="primary">{service.cta}</Button>
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
                <div className="aspect-square rounded-2xl overflow-hidden bg-bg-section relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-gold/20 rounded-2xl -z-10" />
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <Testimonials />
      <CTA />
    </>
  );
}

