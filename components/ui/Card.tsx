"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

export default function Card({
  children,
  className = "",
  hover = false,
  padding = "md",
}: CardProps) {
  const paddingStyles = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={`bg-white rounded-2xl shadow-md ${paddingStyles[padding]} ${
        hover ? "card-hover" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  link?: string;
  linkText?: string;
}

export function ServiceCard({
  icon,
  title,
  description,
  link,
  linkText = "Learn more",
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-xl border border-border-light hover:border-primary-gold transition-all duration-300 group"
    >
      <div className="w-12 h-12 bg-bg-section rounded-lg flex items-center justify-center mb-4 text-primary-dark group-hover:bg-primary-gold group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-text-dark mb-2">{title}</h3>
      <p className="text-text-light text-sm mb-4">{description}</p>
      {link && (
        <a
          href={link}
          className="inline-flex items-center text-primary-gold text-sm font-medium hover:underline"
        >
          {linkText}
          <svg
            className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      )}
    </motion.div>
  );
}

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  rating?: number;
}

export function TestimonialCard({
  quote,
  author,
  role,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-primary-gold" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-text-dark italic mb-4 font-serif text-lg leading-relaxed">
        &ldquo;{quote}&rdquo;
      </p>
      <div>
        <p className="font-semibold text-text-dark">{author}</p>
        {role && <p className="text-sm text-text-light">{role}</p>}
      </div>
    </div>
  );
}

interface EventCardProps {
  image: string;
  title: string;
  date: string;
  link: string;
}

export function EventCard({ image, title, date, link }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="aspect-[4/3] bg-bg-section overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-text-dark mb-1">{title}</h3>
        <p className="text-sm text-text-light mb-3">{date}</p>
        <a
          href={link}
          className="inline-flex items-center text-sm font-medium text-text-dark border border-text-dark rounded-full px-4 py-2 hover:bg-text-dark hover:text-white transition-colors duration-300"
        >
          Register Now
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}

interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="text-center">
      <p className="text-4xl md:text-5xl font-bold text-primary-dark mb-2">
        {value}
      </p>
      <p className="text-text-light">{label}</p>
    </div>
  );
}

