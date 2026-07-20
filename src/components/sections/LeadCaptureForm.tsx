"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// 1. Define the validation schema (Mirrors the backend Zod schema)
const leadSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().optional(),
  contactInfo: z.string().min(5, "Email or phone number is required"),
  serviceInterest: z.enum([
    "B_AI_BUSINESS_CONSULTING",
    "F_BUSINESS_PROCESS_AUTOMATION",
    "H_DIGITAL_MARKETING_AI",
    "OTHER",
  ]),
  notes: z.string().optional(),
});

type LeadFormData = z.infer<typeof leadSchema>;

export default function LeadCaptureForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
  });

  // 2. Handle API Submission
  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to submit");

      setSubmitStatus("success");
      reset(); // Clear the form on success
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-soft border border-slate-100 max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold text-brand-navy mb-2">Let's discuss your project</h3>
      <p className="text-brand-muted text-sm mb-6">Tell us a bit about your business and what you're looking to achieve.</p>
      
      {submitStatus === "success" && (
        <div className="mb-6 p-4 bg-green-50 text-green-800 rounded-lg text-sm font-medium border border-green-100">
          Thank you! Your request has been received. Our team will contact you shortly.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-6 p-4 bg-red-50 text-red-800 rounded-lg text-sm font-medium border border-red-100">
          Something went wrong. Please try again later.
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-brand-navy mb-1">Full Name *</label>
            <input
              {...register("name")}
              className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all text-brand-dark"
              placeholder="John Doe"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>

          {/* Company Field */}
          <div>
            <label className="block text-sm font-medium text-brand-navy mb-1">Company</label>
            <input
              {...register("company")}
              className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all text-brand-dark"
              placeholder="Your Company Ltd."
            />
          </div>
        </div>

        {/* Contact Info Field */}
        <div>
          <label className="block text-sm font-medium text-brand-navy mb-1">Email or Phone *</label>
          <input
            {...register("contactInfo")}
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all text-brand-dark"
            placeholder="john@example.com"
          />
          {errors.contactInfo && <p className="text-red-500 text-xs mt-1">{errors.contactInfo.message}</p>}
        </div>

        {/* Service Interest Field */}
        <div>
          <label className="block text-sm font-medium text-brand-navy mb-1">Service of Interest *</label>
          <select
            {...register("serviceInterest")}
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all bg-white text-brand-dark"
          >
            <option value="B_AI_BUSINESS_CONSULTING">AI Business Consulting</option>
            <option value="F_BUSINESS_PROCESS_AUTOMATION">Business Process Automation</option>
            <option value="H_DIGITAL_MARKETING_AI">Digital Marketing + AI Agency</option>
            <option value="OTHER">Other / General Inquiry</option>
          </select>
        </div>

        {/* Notes Field */}
        <div>
          <label className="block text-sm font-medium text-brand-navy mb-1">Additional Notes</label>
          <textarea
            {...register("notes")}
            rows={4}
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all resize-none text-brand-dark"
            placeholder="Tell us about your requirements..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-brand-gold text-white py-3.5 rounded-xl font-bold hover:bg-brand-goldHov transition-all shadow-md disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2 text-base tracking-wide"
        >
          {isSubmitting ? (
            <>
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Submitting...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
}
