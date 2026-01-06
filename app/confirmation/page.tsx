"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";
import DotPattern, { GoldCurve } from "@/components/ui/DotPattern";
import { CheckCircle } from "lucide-react";

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
      <GoldCurve position="top-right" className="opacity-80" />
      <DotPattern position="bottom-left" size="lg" />
      <DotPattern position="bottom-right" size="lg" />

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto text-center"
        >
          {/* Check Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
            className="w-20 h-20 mx-auto mb-8"
          >
            <div className="w-full h-full rounded-full border-4 border-primary-gold flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-primary-gold" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-primary-dark mb-4"
          >
            {currentContent.title}
          </motion.h1>

          {/* Message */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-text-light mb-8 max-w-md mx-auto"
          >
            {currentContent.message}
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link href="/">
              <Button variant="primary" size="lg" className="px-12">
                Return to Homepage
              </Button>
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

