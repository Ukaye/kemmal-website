"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Hero, ClientLogos, CTA } from "@/components/sections";
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
      "We bring proven solutions that work for today's Nigerian and global businesses is what we deliver—not just textbook ideas.",
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
      "Clients have won competitive grants from the Tony Elumelu Foundation and achieved strategic and measurable transformation in their growth.",
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
      <Hero
        title="Where strategy becomes results."
        centered
        minHeight="min-h-[50vh]"
      />

      {/* About Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Team Image */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-bg-section mb-8 relative">
                <Image
                  src="/images/who-we-are/who-we-are-page-image1.jpg"
                  alt="Kemmal Onuoha Company Team"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary-gold font-medium mb-2">About Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
                The <span className="text-primary-gold">Kemmal Onuoha Company</span> is a
                full-suite business management and strategy consulting firm
              </h2>
              <p className="text-text-light mb-6">
                Dedicated to helping organizations strengthen their performance,
                develop capable teams, and design systems that scale.
              </p>
              <p className="text-text-light mb-6">
                With <strong className="text-primary-dark">over two decades</strong> of combined industry experience, our
                team of consultants, analysts, and facilitators bring
                operational depth and strategic clarity to every project.
              </p>
              <p className="text-text-light mb-4">
                From high-growth startups to established enterprises, we enable
                businesses to:
              </p>
              <ul className="space-y-2 text-text-light">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary-gold mt-0.5 flex-shrink-0" />
                  Build Sustainable Structures
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary-gold mt-0.5 flex-shrink-0" />
                  Optimize Performance
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary-gold mt-0.5 flex-shrink-0" />
                  Strengthen Leadership
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary-gold mt-0.5 flex-shrink-0" />
                  Innovate Effectively
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary-gold mt-0.5 flex-shrink-0" />
                  Achieve Measurable Transformation
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="relative bg-primary-dark text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-primary-gold text-sm tracking-widest uppercase mb-4">
              Meet the Founder
            </p>
            {/* Founder Portrait */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary-gold">
              <Image
                src="/images/founder/meet the founder.jpg"
                alt="Kemmal Onuoha"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="text-primary-gold">KEMMAL</span>{" "}
              <span className="text-white">ONUOHA</span>
            </h2>
            <p className="text-gray-400 mt-4">
              Founder & Lead Consultant
              <br />
              Business Management Consultant | Conference Speaker | Sales Strategist
            </p>
          </motion.div>

          {/* Founder Info */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gray-300 mb-6">
                <strong className="text-white">Kemmal Onuoha</strong> is an accomplished business consultant
                known for transforming organizations through strategic
                clarity, structural design, and performance optimization.
              </p>
              <p className="text-gray-300 mb-6">
                With a <strong className="text-primary-gold">diverse professional background</strong> across oil and
                gas, education, HR, business management, retail, and
                technology, Kemmal possesses a rare blend of tactical
                experience and strategic insight.
              </p>
              <p className="text-gray-300">
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
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary-gold mt-0.5 flex-shrink-0" />
                  Worked with over <strong className="text-white">100+ startups and SMEs</strong>, helping them gain clarity, develop strategy, and unlock funding.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary-gold mt-0.5 flex-shrink-0" />
                  Supported businesses in successfully applying for—and winning—highly competitive grants such as the <strong className="text-primary-gold">Tony Elumelu Foundation Grant</strong>.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary-gold mt-0.5 flex-shrink-0" />
                  Worked with top national and multinational brands across <strong className="text-white">multiple sectors</strong>.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary-gold mt-0.5 flex-shrink-0" />
                  Spoken at conferences, seminars, and business events, offering <strong className="text-white">deep insights</strong> on leadership, systems development, revenue growth, and strategic innovation.
                </li>
              </ul>
            </motion.div>
          </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark">
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
            className="text-center mb-12"
          >
            <p className="text-text-light text-sm mb-2">Our Differentiator</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark">
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
                <p className="text-text-light text-sm">{factor.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

