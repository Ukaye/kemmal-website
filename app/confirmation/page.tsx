"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import DotPattern, { GoldCurve } from "@/components/ui/DotPattern";
import { Check } from "lucide-react";

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  const isEventRegistration = type === "registration";

  const content = {
    consultation: {
      title: "Submission Confirmed: Your Strategic Engagement Has Begun.",
      message:
        "Your request is now being handled by our team and we will contact you shortly with the defined next steps.",
    },
    registration: {
      title: "Registration Confirmed",
      message:
        "Thank you for registering. A confirmation email has been sent to your inbox with further instructions.",
    },
  };

  const currentContent = isEventRegistration
    ? content.registration
    : content.consultation;

  return (
    <div className="min-h-screen bg-white relative overflow-hidden flex items-center justify-center">
      {/* Decorative Elements */}
      <GoldCurve position="top-left" className="opacity-80" />
      <DotPattern position="top-right" size="lg" className="opacity-60" />
      <DotPattern position="bottom-left" size="md" className="opacity-60" />
      <DotPattern position="bottom-right" size="lg" className="opacity-60" />

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto text-center"
        >
          {/* Check Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
            className="w-24 h-24 mx-auto mb-8"
          >
            <div className="w-full h-full rounded-full border-4 border-primary-gold flex items-center justify-center bg-white">
              <Check className="w-12 h-12 text-primary-gold stroke-[3]" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-bold text-primary-dark mb-4 leading-tight"
            style={{
              fontFamily: "var(--font-merriweather), Merriweather, serif",
              fontSize: "28px",
              lineHeight: "120%",
            }}
          >
            {currentContent.title}
          </motion.h1>

          {/* Message */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-text-light mb-8"
          >
            {currentContent.message}
          </motion.p>

          {/* Button - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link href="/" className="block">
              <button
                className="w-full font-semibold text-white transition-all duration-300 hover:opacity-90"
                style={{
                  padding: "16px 24px",
                  borderRadius: "8px",
                  background: "linear-gradient(180deg, rgba(5, 25, 50, 0.9) 0%, rgba(12, 61, 123, 0.9) 100%)",
                }}
              >
                Return to Homepage
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default function ConfirmationPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="animate-pulse text-primary-gold">Loading...</div>
        </div>
      }
    >
      <ConfirmationContent />
    </Suspense>
  );
}
