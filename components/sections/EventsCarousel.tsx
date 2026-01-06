"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const events = [
  {
    id: "blueprint-conference",
    title: "The Blueprint Conference",
    date: "January 17th 2026, 10:00AM WAT",
    description: "Are you building something that outlives you? A moment of honesty can change the way you build forever.",
    image: "/images/events/blueprint.jpg",
    featured: true,
  },
  {
    id: "sales-surge",
    title: "Sales Surge Workshop",
    date: "Every Saturdays, 08:00PM WAT",
    description: "Master the art of sales and revenue generation with practical strategies.",
    image: "/images/events/sales-surge.jpg",
  },
  {
    id: "leadership-summit",
    title: "Leadership Summit 2026",
    date: "January 26th 2026, 10:00AM WAT",
    description: "Elevate your leadership skills and learn from industry experts.",
    image: "/images/events/leadership.jpg",
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
    <section className="section bg-primary-dark text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <p className="text-primary-gold text-sm tracking-widest uppercase mb-2">
              Explore our Events
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
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
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-primary-dark to-[#2a3548] mb-8">
          <div className="grid md:grid-cols-2 gap-8 p-6 md:p-10">
            {/* Event Image */}
            <div className="aspect-video md:aspect-auto rounded-xl overflow-hidden bg-black/30 relative">
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
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col justify-center"
              >
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary-gold/20 text-primary-gold rounded-full text-xs font-medium">
                    SPARQ
                  </span>
                  <span className="px-3 py-1 bg-white/10 text-white rounded-full text-xs font-medium">
                    BLUEPRINT
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {currentEvent.title}
                </h3>
                <p className="text-gray-300 mb-4">{currentEvent.description}</p>
                <p className="text-sm text-gray-400 mb-6">{currentEvent.date}</p>
                <Link href={`/register/${currentEvent.id}`}>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary-dark w-fit">
                    Register Now
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4">
            <button
              onClick={prev}
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Previous event"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {events.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setAutoplay(false);
                    setCurrentIndex(idx);
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    idx === currentIndex ? "bg-primary-gold" : "bg-white/30"
                  }`}
                  aria-label={`Go to event ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Next event"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile View Events Link */}
        <div className="md:hidden text-center">
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

