"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import EventRegistrationForm from "@/components/forms/EventRegistrationForm";
import DotPattern from "@/components/ui/DotPattern";

// Event data - in production, this would come from a database/API
const events: Record<string, { title: string; description: string }> = {
  "blueprint-conference": {
    title: "The Blueprint Conference",
    description:
      "This Section would hold brief details about the event and the attendees expectations",
  },
  "sales-surge": {
    title: "Sales Surge Workshop",
    description:
      "Master the art of sales and revenue generation with practical strategies that work.",
  },
  "leadership-mastery": {
    title: "Leadership Mastery Program",
    description:
      "Develop your leadership skills and learn to lead teams effectively in today's dynamic business environment.",
  },
  "strategy-bootcamp": {
    title: "Business Strategy Bootcamp",
    description:
      "An intensive program to help you develop winning business strategies and execution plans.",
  },
  "growth-summit": {
    title: "Business Growth Summit",
    description:
      "Join industry leaders and learn strategies for sustainable business growth.",
  },
};

export default function EventRegistrationPage() {
  const params = useParams();
  const eventId = params.eventId as string;
  
  const event = events[eventId] || {
    title: "Event Registration",
    description: "Register for this exciting event.",
  };

  return (
    <div className="min-h-screen bg-primary-dark relative overflow-hidden">
      {/* Decorative Elements */}
      <div
        className="absolute top-0 left-0 w-64 h-64 opacity-30"
        style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.3) 2px, transparent 2px)`,
          backgroundSize: "12px 12px",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-64 h-64 opacity-30"
        style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.3) 2px, transparent 2px)`,
          backgroundSize: "12px 12px",
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-32 pb-24 relative z-10">
        <div className="max-w-xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {event.title}
            </h1>
            <p className="text-gray-300">{event.description}</p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <EventRegistrationForm eventName={event.title} eventId={eventId} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

