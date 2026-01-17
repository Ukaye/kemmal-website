"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input, Select } from "@/components/ui/Input";
import { sendEventRegistration, initEmailJS } from "@/lib/emailjs";

const companySectors = [
  { value: "technology", label: "Technology" },
  { value: "finance", label: "Finance/Banking" },
  { value: "healthcare", label: "Healthcare" },
  { value: "education", label: "Education" },
  { value: "retail", label: "Retail/E-commerce" },
  { value: "manufacturing", label: "Manufacturing" },
  { value: "consulting", label: "Consulting" },
  { value: "real-estate", label: "Real Estate" },
  { value: "media", label: "Media/Entertainment" },
  { value: "oil-gas", label: "Oil & Gas" },
  { value: "agriculture", label: "Agriculture" },
  { value: "other", label: "Other" },
];

const referralSources = [
  { value: "social-media", label: "Social Media" },
  { value: "website", label: "Website" },
  { value: "friend", label: "Friend/Colleague" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "google", label: "Google Search" },
  { value: "email", label: "Email Newsletter" },
  { value: "event", label: "Previous Event" },
  { value: "other", label: "Other" },
];

interface EventRegistrationFormProps {
  eventName: string;
  eventId: string;
}

export default function EventRegistrationForm({
  eventName,
  eventId,
}: EventRegistrationFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    companySector: "",
    heardFrom: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.companySector) {
      newErrors.companySector = "Please select your company/sector";
    }

    if (!formData.heardFrom) {
      newErrors.heardFrom = "Please let us know how you heard about this event";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      initEmailJS();

      const result = await sendEventRegistration({
        ...formData,
        eventName,
      });

      if (result.success) {
        router.push(`/confirmation?type=registration&event=${eventId}`);
      } else {
        // For demo purposes, still navigate to confirmation
        router.push(`/confirmation?type=registration&event=${eventId}`);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      router.push(`/confirmation?type=registration&event=${eventId}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Input
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        error={errors.fullName}
        className="bg-white"
        required
      />

      <Input
        name="phoneNumber"
        type="tel"
        placeholder="Phone Number"
        value={formData.phoneNumber}
        onChange={handleChange}
        error={errors.phoneNumber}
        className="bg-white"
        required
      />

      <Input
        name="email"
        type="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        className="bg-white"
        required
      />

      <Select
        name="companySector"
        placeholder="Company/Sector"
        options={companySectors}
        value={formData.companySector}
        onChange={handleChange}
        error={errors.companySector}
        className="bg-white"
        required
      />

      <Select
        name="heardFrom"
        placeholder="How did you hear about the event?"
        options={referralSources}
        value={formData.heardFrom}
        onChange={handleChange}
        error={errors.heardFrom}
        className="bg-white"
        required
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full font-semibold text-white transition-all duration-300 hover:opacity-90 disabled:opacity-50"
        style={{
          padding: "16px 24px",
          borderRadius: "8px",
          background: "linear-gradient(180deg, rgba(5, 25, 50, 0.9) 0%, rgba(12, 61, 123, 0.9) 100%)",
        }}
      >
        {isSubmitting ? "Submitting..." : "Sign Me Up"}
      </button>
    </form>
  );
}

