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
      {/* Decorative dots */}
      <div
        className="absolute top-0 left-0 w-24 h-24 opacity-20"
        style={{
          backgroundImage: `radial-gradient(#D4A43C 2px, transparent 2px)`,
          backgroundSize: "10px 10px",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Contact */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image
                src="/images/logo.png"
                alt="Kemmal Onuoha Company Logo"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <div>
                <span className="text-xs font-medium tracking-wide text-gray-400">THE</span>
                <p className="text-base font-bold leading-tight">
                  <span className="text-primary-gold">KEMMAL</span>
                  <br />
                  <span className="text-white">ONUOHA</span>
                </p>
              </div>
            </Link>

            <div className="space-y-3">
              <a
                href="mailto:info@kemmal.placeholder"
                className="flex items-center gap-3 text-gray-300 hover:text-primary-gold transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">info@kemmal.placeholder</span>
              </a>
              <a
                href="tel:+2348129423447"
                className="flex items-center gap-3 text-gray-300 hover:text-primary-gold transition-colors"
              >
                <Phone className="w-5 h-5" />
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
            <nav className="space-y-3">
              {footerLinks.main.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-300 hover:text-primary-gold transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">More</h4>
            <nav className="space-y-3">
              {footerLinks.secondary.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-300 hover:text-primary-gold transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Scroll to Top */}
          <div className="flex lg:justify-end">
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-gray-300 hover:text-primary-gold transition-colors"
            >
              <span className="text-sm">Scroll to Top</span>
              <div className="w-10 h-10 bg-primary-gold rounded-full flex items-center justify-center group-hover:bg-primary-gold-hover transition-colors">
                <ArrowUp className="w-5 h-5 text-primary-dark" />
              </div>
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} The Kemmal Onuoha Company. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

