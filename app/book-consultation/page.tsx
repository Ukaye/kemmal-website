"use client";

import { motion } from "framer-motion";
import ConsultationForm from "@/components/forms/ConsultationForm";
import DotPattern, { GoldCurve } from "@/components/ui/DotPattern";

export default function BookConsultationPage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <GoldCurve position="top-left" className="opacity-80" />
      <DotPattern position="top-right" size="lg" />
      <DotPattern position="bottom-right" size="lg" />

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-32 pb-24 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Start Your Transformation: Request a Strategic Consultation.
            </h1>
            <p className="text-text-light">
              Use the form below to initiate your strategic consultation and
              begin your journey towards measurable transformation.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-border-light"
          >
            <ConsultationForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

