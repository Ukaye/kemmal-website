"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, Instagram, Linkedin, ArrowUp } from "lucide-react";

const footerLinks = {
  main: [
    { href: "/", label: "Home" },
    { href: "/who-we-are", label: "Who we are" },
    { href: "/what-we-do", label: "What we do" },
  ],
  secondary: [
    { href: "/programs-events", label: "Programs & Event" },
    { href: "/book-consultation", label: "Contact Us" },
  ],
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary-dark text-white relative">
      {/* Decorative dots - bottom left */}
      <div
        className="absolute bottom-0 left-0 w-32 h-32 opacity-30"
        style={{
          backgroundImage: `radial-gradient(#D4A43C 2px, transparent 2px)`,
          backgroundSize: "12px 12px",
        }}
      />
      {/* Decorative dots - top right */}
      <div
        className="absolute top-8 right-0 w-24 h-24 opacity-30"
        style={{
          backgroundImage: `radial-gradient(#D4A43C 2px, transparent 2px)`,
          backgroundSize: "12px 12px",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10" style={{ paddingTop: "70px" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: "80px" }}>
          {/* Logo & Contact */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo.png"
                alt="Kemmal Onuoha Company Logo"
                width={154}
                height={64}
                className="w-auto"
                style={{ height: "80px" }}
              />
            </Link>

            <div className="space-y-4">
              <a
                href="mailto:info@kemmal.placeholder"
                className="flex items-center gap-3 text-gray-300 hover:text-primary-gold transition-colors group"
              >
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-primary-gold transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm">info@kemmal.placeholder</span>
              </a>
              <a
                href="tel:+2348129423447"
                className="flex items-center gap-3 text-gray-300 hover:text-primary-gold transition-colors group"
              >
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-primary-gold transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm">+234 812 942 3447</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-gold transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <nav style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {footerLinks.main.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-400 hover:text-primary-gold transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">More</h4>
            <nav style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {footerLinks.secondary.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-400 hover:text-primary-gold transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Scroll to Top */}
          <div className="flex lg:justify-end items-start">
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-3 text-gray-400 hover:text-primary-gold transition-colors"
            >
              <span className="text-sm hidden md:inline">Scroll to Top</span>
              <div className="w-12 h-12 bg-primary-gold rounded-full flex items-center justify-center group-hover:bg-primary-gold-hover transition-colors shadow-lg">
                <ArrowUp className="w-5 h-5 text-primary-dark" />
              </div>
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10" style={{ paddingTop: "10px", paddingBottom: "10px" }}>
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} The Kemmal Onuoha Company. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
