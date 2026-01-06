"use client";

import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Users, 
  BookOpen, 
  FileText, 
  BarChart3 
} from "lucide-react";
import { ServiceCard } from "@/components/ui/Card";

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
    <section className="section bg-bg-section">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            What We Do
          </h2>
          <p className="text-text-light">
            We deliver solutions that are Clear, Practical, Sustainable, and Transformative.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
                linkText="Explore Service"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

