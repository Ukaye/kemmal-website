"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { ClientLogos, CTA } from "@/components/sections";
import { ChevronLeft, ChevronRight, Calendar, Clock, ArrowRight } from "lucide-react";

const featuredEvents = [
  {
    id: "blueprint-conference",
    title: "The Blueprint Conference",
    date: "January 17th 2026",
    time: "10:00AM WAT",
    description:
      "Are you building something that outlives you? A moment of honesty can change the way you build forever.",
    tags: ["SPARQ", "BLUEPRINT"],
    venue: "Lagos, Nigeria",
  },
  {
    id: "growth-summit",
    title: "Business Growth Summit",
    date: "February 15th 2026",
    time: "9:00AM WAT",
    description:
      "Join industry leaders and learn strategies for sustainable business growth in today's competitive market.",
    tags: ["SUMMIT", "GROWTH"],
    venue: "Abuja, Nigeria",
  },
];

const trainingPrograms = [
  {
    id: "sales-surge",
    title: "Sales Surge Workshop",
    date: "Every Saturdays, 08:00PM WAT",
    image: "/images/training/training1.png",
  },
  {
    id: "leadership-mastery",
    title: "Leadership Mastery Program",
    date: "January 26th 2026, 10:00AM WAT",
    image: "/images/training/training2.png",
  },
  {
    id: "strategy-bootcamp",
    title: "Business Strategy Bootcamp",
    date: "February 5th 2026, 10:00AM WAT",
    image: "/images/training/training3.png",
  },
];

export default function ProgramsEventsPage() {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setCurrentEventIndex((prev) => (prev + 1) % featuredEvents.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay]);

  const nextEvent = () => {
    setAutoplay(false);
    setCurrentEventIndex((prev) => (prev + 1) % featuredEvents.length);
  };

  const prevEvent = () => {
    setAutoplay(false);
    setCurrentEventIndex(
      (prev) => (prev - 1 + featuredEvents.length) % featuredEvents.length
    );
  };

  const currentEvent = featuredEvents[currentEventIndex];

  return (
    <>
      {/* Hero - Dark background */}
      <section className="relative bg-primary-dark pt-32 pb-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary-gold text-sm tracking-widest uppercase mb-4">
              Explore our Events
            </p>
            <h1 
              className="font-bold text-white leading-tight"
              style={{
                fontFamily: "var(--font-merriweather), Merriweather, serif",
                fontSize: "32px",
                lineHeight: "120%",
              }}
            >
              Upcoming Training Programs & Events
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Featured Event Carousel */}
      <section className="bg-primary-dark pb-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="relative bg-gradient-to-r from-[#1e2a3d] to-[#2a3548] rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Event Image */}
              <div className="aspect-video md:aspect-auto md:h-full relative">
                <Image
                  src="/images/events/event.png"
                  alt={currentEvent.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Event Info */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentEventIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col justify-center text-white p-6 md:p-10"
                >
                  {/* Tags */}
                  <div className="flex gap-2 mb-4">
                    {currentEvent.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary-gold/20 text-primary-gold rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {currentEvent.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {currentEvent.description}
                  </p>

                  {/* Date & Time */}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-6">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {currentEvent.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {currentEvent.time}
                    </span>
                  </div>

                  {/* Register Link */}
                  <Link 
                    href={`/register/${currentEvent.id}`}
                    className="inline-flex items-center gap-2 text-white hover:text-primary-gold transition-colors group w-fit"
                  >
                    <span className="font-medium">Register Now</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="absolute bottom-4 left-4 md:left-1/4 flex items-center gap-4">
              <button
                onClick={prevEvent}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white"
                aria-label="Previous event"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {featuredEvents.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setAutoplay(false);
                      setCurrentEventIndex(idx);
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      idx === currentEventIndex
                        ? "bg-primary-gold w-6"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Go to event ${idx + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextEvent}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white"
                aria-label="Next event"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <p className="text-primary-gold text-sm tracking-widest uppercase mb-2">
              Trainings
            </p>
            <h2 
              className="font-bold text-primary-dark"
              style={{
                fontFamily: "var(--font-merriweather), Merriweather, serif",
                fontSize: "32px",
                lineHeight: "120%",
              }}
            >
              Join a Training Program
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden border border-border-light hover:border-primary-gold hover:shadow-lg transition-all duration-300"
              >
                {/* Training Image */}
                <div className="aspect-[4/3] bg-bg-section relative">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-primary-dark mb-1">
                    {program.title}
                  </h3>
                  <p className="text-sm text-text-light mb-4">{program.date}</p>
                  <Link href={`/register/${program.id}`}>
                    <button
                      className="inline-flex items-center gap-2 font-semibold text-white transition-all duration-300 hover:opacity-90"
                      style={{
                        padding: "12px 24px",
                        borderRadius: "8px",
                        background: "linear-gradient(180deg, rgba(5, 25, 50, 0.9) 0%, rgba(12, 61, 123, 0.9) 100%)",
                      }}
                    >
                      Register Now
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ClientLogos variant="dark" />
      {/* <CTA /> */}
    </>
  );
}
