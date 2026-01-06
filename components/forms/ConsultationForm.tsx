"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input, Textarea, Select } from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { sendConsultationForm, initEmailJS } from "@/lib/emailjs";

const organizationTypes = [
  { value: "startup", label: "Startup" },
  { value: "sme", label: "Small/Medium Enterprise (SME)" },
  { value: "corporate", label: "Corporate/Large Enterprise" },
  { value: "ngo", label: "NGO/Non-Profit" },
  { value: "government", label: "Government Agency" },
  { value: "other", label: "Other" },
];

const services = [
  { value: "strategy", label: "Business Strategy & Growth Consulting" },
  { value: "structure", label: "Organizational Structure & Systems Development" },
  { value: "training", label: "Training, Capacity Building & Leadership Development" },
  { value: "advisory", label: "Business Planning & Advisory" },
  { value: "sales", label: "Sales Strategy & Revenue Optimization" },
  { value: "other", label: "Other/Not Sure" },
];

export default function ConsultationForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    organizationName: "",
    organizationType: "",
    serviceNeeded: "",
    challengeSummary: "",
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

    if (!formData.organizationName.trim()) {
      newErrors.organizationName = "Organization name is required";
    }

    if (!formData.organizationType) {
      newErrors.organizationType = "Please select organization type";
    }

    if (!formData.serviceNeeded) {
      newErrors.serviceNeeded = "Please select a service";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Initialize EmailJS
      initEmailJS();
      
      // Send the form
      const result = await sendConsultationForm(formData);
      
      if (result.success) {
        // Navigate to confirmation page
        router.push("/confirmation?type=consultation");
      } else {
        // For demo purposes, still navigate to confirmation
        // In production, you'd show an error message
        router.push("/confirmation?type=consultation");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      // For demo purposes, navigate to confirmation anyway
      router.push("/confirmation?type=consultation");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        error={errors.fullName}
        required
      />

      <Input
        name="phoneNumber"
        type="tel"
        placeholder="Phone Number"
        value={formData.phoneNumber}
        onChange={handleChange}
        error={errors.phoneNumber}
        required
      />

      <Input
        name="email"
        type="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        required
      />

      <Input
        name="organizationName"
        placeholder="Organization Name"
        value={formData.organizationName}
        onChange={handleChange}
        error={errors.organizationName}
        required
      />

      <Select
        name="organizationType"
        placeholder="Organization Type"
        options={organizationTypes}
        value={formData.organizationType}
        onChange={handleChange}
        error={errors.organizationType}
        required
      />

      <Select
        name="serviceNeeded"
        placeholder="Service Needed"
        options={services}
        value={formData.serviceNeeded}
        onChange={handleChange}
        error={errors.serviceNeeded}
        required
      />

      <Textarea
        name="challengeSummary"
        placeholder="Enter a Summary of the Challenge/Service Needed"
        value={formData.challengeSummary}
        onChange={handleChange}
        rows={5}
      />

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        isLoading={isSubmitting}
      >
        Book Consultation
      </Button>
    </form>
  );
}

