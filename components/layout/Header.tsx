"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/who-we-are", label: "Who we are" },
  { href: "/what-we-do", label: "What we do" },
  { href: "/programs-events", label: "Programs & Event" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3"
      style={{
        backgroundColor: "#051932CC",
        backdropFilter: "blur(4px)",
      }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - Only image, increased size */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Kemmal Onuoha Company Logo"
              width={200}
              height={80}
              className="h-16 md:h-20 w-auto"
              style={{ width: "auto", height: "80px" }}
            />
          </Link>

          {/* Desktop Navigation + CTA - Aligned Right */}
          <div className="hidden lg:flex items-center gap-6">
            <nav className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium transition-colors duration-200 hover:text-primary-gold"
                  style={{
                    color: pathname === link.href ? "#D4A43C" : "#FFFFFF",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button with gradient - white text */}
            <Link href="/book-consultation">
              <button
                className="font-semibold text-white transition-all duration-300 hover:opacity-90 whitespace-nowrap text-sm"
                style={{
                  minWidth: "179px",
                  height: "45px",
                  padding: "12px 16px",
                  borderRadius: "8px",
                  background: "linear-gradient(90deg, #C18F1C 0%, #EBA609 100%)",
                }}
              >
                Book a Consultation
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-border-light"
          >
            <nav className="container mx-auto px-4 py-4">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`py-3 px-4 rounded-lg text-base font-medium transition-colors ${
                      pathname === link.href
                        ? "text-primary-gold bg-primary-gold/10"
                        : "text-primary-dark hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-border-light mt-2">
                  <Link href="/book-consultation" className="block">
                    <button
                      className="w-full font-semibold text-white"
                      style={{
                        height: "45px",
                        padding: "12px 16px",
                        borderRadius: "8px",
                        background: "linear-gradient(90deg, #C18F1C 0%, #EBA609 100%)",
                      }}
                    >
                      Book a Consultation
                    </button>
                  </Link>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
