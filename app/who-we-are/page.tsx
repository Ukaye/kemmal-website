"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CTA } from "@/components/sections";
import DotPattern, { GoldCurve } from "@/components/ui/DotPattern";
import { 
  Target, 
  BarChart3, 
  Cog, 
  Heart,
  Clock,
  Users,
  Lightbulb,
  CheckCircle,
  Award
} from "lucide-react";

const pillars = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Professional excellence.",
    color: "bg-primary-gold",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Data-driven Insights.",
    color: "bg-blue-500",
  },
  {
    icon: <Cog className="w-6 h-6" />,
    title: "Practical execution.",
    color: "bg-green-500",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Human-centred thinking.",
    color: "bg-purple-500",
  },
];

const trustFactors = [
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Two Decades of Multi-sector Expertise",
    description:
      "Our team brings decades of experience and range across oil & gas, finance, health, tech, education, and government.",
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Execution Above Theory",
    description:
      "We bring proven solutions that work for today's Nigerian and global businesses—not just textbook ideas.",
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Human-Centered, Data-Driven",
    description:
      "We combine research, analytics with design thinking to create employee-centric solutions.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Deep Experience With Startups & SMEs",
    description:
      "Over 100+ businesses supported covering grants, structuring, fundraising, and growth strategies.",
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: "Proven Results",
    description:
      "Clients have won competitive grants from the Tony Elumelu Foundation and achieved strategic transformation.",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "A Team That Cares",
    description:
      "Professional. Insightful. Thorough. Our clients can attest to our passion and commitment to sustainable impact.",
  },
];

export default function WhoWeArePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-primary-dark overflow-hidden">
        {/* Gold curve decoration on right */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] pointer-events-none">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <circle cx="400" cy="0" r="350" fill="#D4A43C" fillOpacity="0.15" />
          </svg>
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-32 pb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 
              className="font-bold text-primary-gold leading-tight"
              style={{
                fontFamily: "var(--font-merriweather), Merriweather, serif",
                fontSize: "32px",
                lineHeight: "120%",
              }}
            >
              Where strategy becomes results.
            </h1>
          </motion.div>
        </div>

      </section>

      {/* About Section 1 - Image Left, Text Right */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-bg-section relative shadow-lg">
                <Image
                  src="/images/who-we-are/who-we-are-page-image1.jpg"
                  alt="Kemmal Onuoha Company Team"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 
                className="font-bold text-primary-dark mb-6 leading-tight"
                style={{
                  fontFamily: "var(--font-merriweather), Merriweather, serif",
                  fontSize: "32px",
                  lineHeight: "120%",
                }}
              >
                The <span className="text-primary-gold">Kemmal Onuoha Company</span> is a
                full-suite business management and strategy consulting firm
              </h2>
              <p className="text-text-light mb-6 leading-relaxed">
                Dedicated to helping organizations strengthen their performance,
                develop capable teams, and design systems that scale.
              </p>
              <p className="text-text-light leading-relaxed">
                With <strong className="text-primary-dark">over two decades</strong> of combined industry experience, our
                team of consultants, analysts, and facilitators bring
                operational depth and strategic clarity to every project.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section 2 - Text Left, Image Right */}
      <section className="section bg-bg-section">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-text-light mb-6 leading-relaxed">
                From high-growth startups to established enterprises, we enable
                businesses to:
              </p>
              <ul className="space-y-3 text-text-light">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-gold mt-0.5 flex-shrink-0" />
                  <span>Build Sustainable Structures</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-gold mt-0.5 flex-shrink-0" />
                  <span>Optimize Performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-gold mt-0.5 flex-shrink-0" />
                  <span>Strengthen Leadership</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-gold mt-0.5 flex-shrink-0" />
                  <span>Innovate Effectively</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-gold mt-0.5 flex-shrink-0" />
                  <span>Achieve Measurable Transformation</span>
                </li>
              </ul>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white relative shadow-lg">
                <Image
                  src="/images/who-we-are/who-we-are-page-image2.png"
                  alt="Kemmal Onuoha presenting"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="relative bg-primary-dark text-white overflow-hidden py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {/* Meet the Founder Label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-primary-gold text-sm tracking-widest uppercase text-center mb-8"
          >
            Meet the Founder
          </motion.p>

          {/* Large Name Typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8"
          >
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white">
              KEMMAL
            </h2>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white">
              ONUOHA
            </h2>
          </motion.div>

          {/* Founder Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <p className="text-primary-gold font-medium text-lg">Founder & Lead Consultant</p>
            <p className="text-gray-400 text-sm mt-1">
              Business Management Consultant | Conference Speaker | Sales Strategist
            </p>
          </motion.div>

          {/* Founder Info - Two Columns */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gray-300 mb-6 leading-relaxed">
                <strong className="text-white">Kemmal Onuoha</strong> is an accomplished business consultant
                known for transforming organizations through strategic
                clarity, structural design, and performance optimization.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                With a <strong className="text-primary-gold">diverse professional background</strong> across oil and
                gas, education, HR, business management, retail, and
                technology, Kemmal possesses a rare blend of tactical
                experience and strategic insight.
              </p>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">His core expertise includes:</strong> Business Strategy & Planning,
                Organizational Development, Sales Strategy & Business
                Development, Design Thinking, Problem Solving, Customer
                Relationship Management.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gray-300 mb-4">Over the years, Kemmal has:</p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-gold mt-0.5 flex-shrink-0" />
                  <span>Worked with over <strong className="text-white">100+ startups and SMEs</strong>, helping them gain clarity, develop strategy, and unlock funding.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-gold mt-0.5 flex-shrink-0" />
                  <span>Supported businesses in successfully applying for—and winning—highly competitive grants such as the <strong className="text-primary-gold">Tony Elumelu Foundation Grant</strong>.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-gold mt-0.5 flex-shrink-0" />
                  <span>Worked with top national and multinational brands across <strong className="text-white">multiple sectors</strong>.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-gold mt-0.5 flex-shrink-0" />
                  <span>Spoken at conferences, seminars, and business events, offering <strong className="text-white">deep insights</strong> on leadership, systems development, revenue growth, and strategic innovation.</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Founder Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-xl mx-auto"
          >
            <div className="aspect-[3/2] rounded-2xl overflow-hidden relative">
              <Image
                src="/images/founder/meet the founder.jpg"
                alt="Kemmal Onuoha"
                fill
                className="object-cover object-top"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section bg-bg-section">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-12"
          >
            <p className="text-text-light text-sm mb-2">Our approach is simple.</p>
            <h2 
              className="font-bold text-primary-dark leading-tight"
              style={{
                fontFamily: "var(--font-merriweather), Merriweather, serif",
                fontSize: "32px",
                lineHeight: "120%",
              }}
            >
              We don&apos;t just advise—we partner, empower,
              <br />
              and build.
            </h2>
          </motion.div>

          {/* Pillars */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-border-light hover:border-primary-gold transition-colors"
              >
                <div
                  className={`w-12 h-12 ${pillar.color} rounded-full flex items-center justify-center mb-4 text-white`}
                >
                  {pillar.icon}
                </div>
                <h3 className="font-semibold text-primary-dark">{pillar.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Organizations Trust Us */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-text-light text-sm mb-2">Our Differentiator</p>
            <h2 
              className="font-bold text-primary-dark"
              style={{
                fontFamily: "var(--font-merriweather), Merriweather, serif",
                fontSize: "32px",
                lineHeight: "120%",
              }}
            >
              Why Organizations Trust Us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustFactors.map((factor, index) => (
              <motion.div
                key={factor.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6"
              >
                <div className="text-primary-gold mb-4">{factor.icon}</div>
                <h3 className="text-lg font-semibold text-primary-dark mb-2">
                  {factor.title}
                </h3>
                <p className="text-text-light text-sm leading-relaxed">{factor.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* <CTA /> */}
    </>
  );
}
