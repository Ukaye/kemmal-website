"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Thank you for an Impactful training Mr Kemmal, we are better for it",
    author: "Ajilet Essien",
    role: "Human Resources Manager, Saucepan & Foods Limited",
    rating: 5,
  },
  {
    quote:
      "Thank you for the insightful session. I got so much value, and the most important takeaway for me was that 'IT ALL BEGINS IN THE MIND'",
    author: "Webinar Attendee",
    role: "Sales Surge Workshop",
    rating: 5,
  },
  {
    quote:
      "Keep it up, Kemmal! It's always a pleasure to work with you",
    author: "Bisira Korosome",
    role: "Training Experience Manager, Good Education",
    rating: 6,
  },
  {
    quote:
      "The training was easy to follow and see how it applies to real-world partnership and growth.",
    author: "Gina",
    role: "Workshop Participant",
    rating: 6,
  },
  {
    quote:
      "I got some new walk-in clients through referral & I got my first order on Facebook this week... Total sales are N232k.",
    author: "Bunmi",
    role: "Hair by Bunmi",
    rating: 6,
  },
  {
    quote:
      "I achieved over N500k weekly revenue milestone for the first time",
    author: "Workshop Participant",
    role: "",
    rating: 6,
  },
  {
    quote:
      "Doubled the weekly revenue from year 1. Generated a single order of N2,113,000 from a relatively international client.",
    author: "M.A.F",
    role: "Analyst at LBS",
    rating: 6,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 6000);

    return () => clearInterval(interval);
  }, [totalPages]);

  const visibleTestimonials = testimonials.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <section className="section bg-white my-16 md:my-24">
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
          <h2 
            className="font-bold text-primary-dark"
            style={{
              fontFamily: "var(--font-merriweather), Merriweather, serif",
              fontSize: "32px",
              lineHeight: "120%",
              marginTop: "24px",
              marginBottom: "32px",
            }}
          >
            What Our Clients have to say
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-3 gap-6"
            >
              {visibleTestimonials.map((testimonial, index) => (
                <div
                  key={currentIndex * itemsPerPage + index}
                  className="bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300 text-center"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4 justify-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.min(testimonial.rating, 5)
                            ? "text-primary-gold fill-primary-gold"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p 
                    className="italic mb-6 text-base leading-relaxed" 
                    style={{ 
                      fontFamily: 'Georgia, serif',
                      color: '#8B6914',
                    }}
                  >
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="pt-4">
                    <p className="font-semibold text-primary-dark text-sm">
                      {testimonial.author}
                    </p>
                    {testimonial.role && (
                      <p className="text-xs text-text-light mt-1">{testimonial.role}</p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-12">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? "bg-primary-gold w-6" 
                    : "bg-gray-300 hover:bg-gray-400"
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
