"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { ChevronLeft, ChevronRight, Calendar, Clock, ArrowRight } from "lucide-react";

const events = [
  {
    id: "blueprint-conference",
    title: "The Blueprint Conference",
    date: "January 17th 2026",
    time: "10:00AM WAT",
    description: "Are you building something that outlives you? A moment of honesty can change the way you build forever.",
    image: "/images/events/event.png",
    featured: true,
  },
  {
    id: "sales-surge",
    title: "Sales Surge Workshop",
    date: "Every Saturdays",
    time: "08:00PM WAT",
    description: "Master the art of sales and revenue generation with practical strategies.",
    image: "/images/events/event.png",
  },
  {
    id: "leadership-summit",
    title: "Leadership Summit 2026",
    date: "January 26th 2026",
    time: "10:00AM WAT",
    description: "Elevate your leadership skills and learn from industry experts.",
    image: "/images/events/event.png",
  },
];

export default function EventsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % events.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay]);

  const next = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  const prev = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  const currentEvent = events[currentIndex];

  return (
    <section className="section bg-primary-dark text-white relative overflow-hidden">
      {/* Gold wave/arc decoration in top-right */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <circle 
            cx="400" 
            cy="0" 
            r="300" 
            fill="none" 
            stroke="#D4A43C" 
            strokeWidth="2"
            strokeOpacity="0.3"
          />
          <circle 
            cx="400" 
            cy="0" 
            r="250" 
            fill="#D4A43C" 
            fillOpacity="0.1"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <p className="text-primary-gold text-sm tracking-widest uppercase mb-2">
              Explore our Events
            </p>
            <h2 
              className="font-bold"
              style={{
                fontFamily: "var(--font-merriweather), Merriweather, serif",
                fontSize: "32px",
                lineHeight: "120%",
              }}
            >
              Upcoming Training Programs & Events
            </h2>
          </div>
          <Link
            href="/programs-events"
            className="hidden md:flex items-center gap-2 text-sm text-gray-300 hover:text-primary-gold transition-colors"
          >
            View Events
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Featured Event */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#1e2a3d] to-[#2a3548]">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Event Image */}
            <div className="aspect-video md:aspect-auto md:h-full relative">
              <Image
                src={currentEvent.image}
                alt={currentEvent.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Event Info */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col justify-center p-6 md:p-10"
              >
                {/* Tags */}
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary-gold/20 text-primary-gold rounded text-xs font-medium">
                    SPARQ
                  </span>
                  <span className="px-3 py-1 bg-white/10 text-white rounded text-xs font-medium">
                    BLUEPRINT
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-4xl font-bold mb-4">
                  {currentEvent.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {currentEvent.description}
                </p>

                {/* Date & Time */}
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{currentEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{currentEvent.time}</span>
                  </div>
                </div>

                {/* Register Link */}
                <Link 
                  href={`/register/${currentEvent.id}`}
                  className="inline-flex items-center gap-2 text-white hover:text-primary-gold transition-colors group"
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
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Previous event"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {events.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setAutoplay(false);
                    setCurrentIndex(idx);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex 
                      ? "bg-primary-gold w-6" 
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to event ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Next event"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile View Events Link */}
        <div className="md:hidden text-center mt-6">
          <Link href="/programs-events">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary-dark">
              View All Events
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
