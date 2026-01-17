"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  TrendingUp, 
  Users, 
  BookOpen, 
  FileText, 
  BarChart3,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Business Strategy & Growth Consulting",
    description:
      "We help organizations clarify goals, design winning strategies, and execute with precision.",
    link: "/what-we-do#strategy",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Organizational Structure & Systems Development",
    description:
      "We design operational frameworks that help businesses run smoothly and efficiently.",
    link: "/what-we-do#structure",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Training, Capacity Building & Leadership Development",
    description:
      "We equip teams with the skills to drive performance, collaboration, and innovation.",
    link: "/what-we-do#training",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Business Planning & Advisory",
    description:
      "For startups and SMEs seeking structure, clarity, or funding support.",
    link: "/what-we-do#advisory",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Sales Strategy & Revenue Optimization",
    description:
      "We design effective sales systems, enhance team capability, and build sustainable revenue engines.",
    link: "/what-we-do#sales",
  },
];

export default function WhatWeDoSection() {
  return (
    <section className="section bg-white">
      <div className="container mx-auto px-8 md:px-12 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 
            className="font-bold text-primary-dark mb-4"
            style={{
              fontFamily: "var(--font-merriweather), Merriweather, serif",
              fontSize: "32px",
              lineHeight: "120%",
            }}
          >
            What We Do
          </h2>
          <p className="text-text-light">
            We deliver solutions that are Clear, Practical, Sustainable, and Transformative.
          </p>
        </motion.div>

        {/* Services Grid - 2 column on desktop, 5th item centered */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 group ${
                index === services.length - 1 
                  ? "md:col-span-2 md:max-w-[calc(50%-16px)] md:mx-auto" 
                  : ""
              }`}
            >
              {/* Icon - minimal light gray background */}
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4 text-primary-dark">
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-semibold text-primary-dark mb-2">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-text-light text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              
              {/* Link */}
              <Link
                href={service.link}
                className="inline-flex items-center gap-2 text-primary-gold text-sm font-semibold tracking-wide uppercase hover:gap-3 transition-all duration-300"
              >
                Explore Solution
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
