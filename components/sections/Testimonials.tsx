"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Thank you for an impactful training Mr Kemmal, we are better for it",
    author: "Fikri Ozkan",
    role: "Co-Founder, Phoenix Business School Turkey Edition",
    rating: 5,
  },
  {
    quote:
      "Thank you for the insightful session. I got so much value, and the most important takeaway for me was that 'IT ALL BEGINS IN THE MIND'",
    author: "Walison Zambia",
    role: "Sen. Strategy Analyst",
    rating: 5,
  },
  {
    quote:
      "Keep it up!",
    author: "Corporate",
    role: "Enterprise Client",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary-gold text-sm tracking-widest uppercase mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark">
            What Our Clients have to say
          </h2>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-border-light hover:border-primary-gold transition-colors"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? "text-primary-gold fill-primary-gold"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-text-dark italic mb-4 text-sm md:text-base leading-relaxed font-serif">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div>
                  <p className="font-semibold text-primary-dark text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-text-light">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {[0, 1, 2].map((idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx === currentIndex ? "bg-primary-gold" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial set ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

