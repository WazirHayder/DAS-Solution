"use client";

import type React from "react";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    siteType: [] as string[],
    message: "",
    privacy: false,
    timeline: "",
    budget: "",
    website: "", // honeypot (should stay empty)
    siteTypeOther: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic client-side validation for premium UX
    const nextErrors: Record<string, string> = {};
    if (!formData.name || formData.name.trim().length < 2)
      nextErrors.name = "Please enter your full name.";
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    if (!emailOk) nextErrors.email = "Please enter a valid email address.";
    if (!formData.company)
      nextErrors.company = "Please enter a company or organization.";
    if (!formData.siteType || formData.siteType.length === 0)
      nextErrors.siteType = "Select at least one site type.";
    if (formData.siteType.includes("other") && !formData.siteTypeOther.trim()) {
      nextErrors.siteTypeOther = "Please specify the 'Other' site type.";
    }
    if (!formData.message || formData.message.trim().length < 20)
      nextErrors.message = "Message should be at least 20 characters.";
    if (!formData.privacy) nextErrors.privacy = "You must agree to continue.";
    // Honeypot check
    if (formData.website) nextErrors.website = "Spam detected.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate API call; replace with real endpoint when configured
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          siteType: [],
          message: "",
          privacy: false,
          timeline: "",
          budget: "",
          website: "",
          siteTypeOther: "",
        });
        setErrors({});
      }, 2800);
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main className="relative">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-blue-50 to-white" />
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#246598]/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#8fc447]/10 blur-3xl" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-3 py-1 text-sm text-[#246598] shadow-sm backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-[#8fc447]"></span>
                  Fast response within 2 business hours
                </span>
                <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
                  Let's build connectivity your users will love.
                </h1>
                <p className="mt-5 text-lg md:text-xl text-gray-600 max-w-xl">
                  Tell us about your site, challenges, or timelines. Our
                  specialists will respond quickly with next steps.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-[#246598] text-white grid place-items-center">
                      ✓
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Certified Experts
                      </p>
                      <p className="text-sm text-gray-500">
                        RF & Wireless Engineers
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-[#8fc447] text-white grid place-items-center">
                      ★
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Tailored Proposals
                      </p>
                      <p className="text-sm text-gray-500">
                        No copy‑paste quotes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white shadow-md border border-gray-100 p-6">
                  <p className="text-4xl font-extrabold text-gray-900">98%</p>
                  <p className="mt-1 text-sm text-gray-500">
                    Client Satisfaction
                  </p>
                </div>
                <div className="rounded-2xl bg-white shadow-md border border-gray-100 p-6">
                  <p className="text-4xl font-extrabold text-gray-900">200+</p>
                  <p className="mt-1 text-sm text-gray-500">Sites Optimized</p>
                </div>
                <div className="rounded-2xl bg-white shadow-md border border-gray-100 p-6">
                  <p className="text-4xl font-extrabold text-gray-900">5G</p>
                  <p className="mt-1 text-sm text-gray-500">
                    Future‑Ready Designs
                  </p>
                </div>
                <div className="rounded-2xl bg-white shadow-md border border-gray-100 p-6">
                  <p className="text-4xl font-extrabold text-gray-900">24/7</p>
                  <p className="mt-1 text-sm text-gray-500">Priority Support</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Contact Info */}
              <div className="space-y-6">
                <h2 className="text-2xl font-extrabold text-gray-900">
                  Contact Information
                </h2>
                <div className="grid gap-4">
                  <div className="flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Phone size={22} className="text-[#246598]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <a
                        href="tel:+1234567890"
                        className="text-gray-600 hover:text-[#246598] transition-colors"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Mail size={22} className="text-[#246598]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <a
                        href="mailto:info@dassolution.com"
                        className="text-gray-600 hover:text-[#246598] transition-colors"
                      >
                        info@dassolution.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <MapPin size={22} className="text-[#246598]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-600">
                        123 Tech Street
                        <br />
                        San Francisco, CA 94105
                        <br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
                <Card className="p-6 bg-gradient-to-br from-blue-50 to-green-50 border-blue-100">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    What to expect next
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-2 list-disc pl-5">
                    <li>We’ll review your details and follow up quickly.</li>
                    <li>We may request drawings, floor plans or timelines.</li>
                    <li>You’ll receive clear next steps and an action plan.</li>
                  </ul>
                </Card>
              </div>

              {/* Form */}
              <div className="lg:col-span-2">
                <div className="rounded-2xl border border-gray-100 bg-white/80 backdrop-blur shadow-xl p-6 md:p-8">
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-8 h-8 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Thanks! We’ve got your message.
                      </h3>
                      <p className="text-gray-600">
                        Our team will get back to you shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative">
                          <div className="pointer-events-none absolute left-3 top-3 text-gray-400">
                            👤
                          </div>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className={`peer w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#246598] ${
                              errors.name ? "border-red-400" : "border-gray-300"
                            }`}
                            placeholder=" "
                          />
                          <label
                            htmlFor="name"
                            className="absolute left-10 top-2.5 px-1 bg-white text-gray-500 text-xs transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2.5 peer-focus:text-xs"
                          >
                            Full Name *
                          </label>
                          {errors.name && (
                            <p className="mt-1 text-xs text-red-600">
                              {errors.name}
                            </p>
                          )}
                        </div>
                        <div className="relative">
                          <div className="pointer-events-none absolute left-3 top-3 text-gray-400">
                            ✉️
                          </div>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className={`peer w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#246598] ${
                              errors.email
                                ? "border-red-400"
                                : "border-gray-300"
                            }`}
                            placeholder=" "
                          />
                          <label
                            htmlFor="email"
                            className="absolute left-10 top-2.5 px-1 bg-white text-gray-500 text-xs transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2.5 peer-focus:text-xs"
                          >
                            Email *
                          </label>
                          {errors.email && (
                            <p className="mt-1 text-xs text-red-600">
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative">
                          <div className="pointer-events-none absolute left-3 top-3 text-gray-400">
                            🏢
                          </div>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            required
                            className={`peer w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#246598] ${
                              errors.company
                                ? "border-red-400"
                                : "border-gray-300"
                            }`}
                            placeholder=" "
                          />
                          <label
                            htmlFor="company"
                            className="absolute left-10 top-2.5 px-1 bg-white text-gray-500 text-xs transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2.5 peer-focus:text-xs"
                          >
                            Company *
                          </label>
                          {errors.company && (
                            <p className="mt-1 text-xs text-red-600">
                              {errors.company}
                            </p>
                          )}
                        </div>
                        <div className="relative">
                          <div className="pointer-events-none absolute left-3 top-3 text-gray-400">
                            📞
                          </div>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="peer w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#246598]"
                            placeholder=" "
                          />
                          <label
                            htmlFor="phone"
                            className="absolute left-10 top-2.5 px-1 bg-white text-gray-500 text-xs transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2.5 peer-focus:text-xs"
                          >
                            Phone (optional)
                          </label>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <p className="block text-sm font-semibold text-gray-900 mb-2">
                            Site Type *
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {[
                              "hotel",
                              "hospital",
                              "airport",
                              "campus",
                              "retail",
                              "warehouse",
                              "other",
                            ].map((opt) => {
                              const selected = formData.siteType.includes(opt);
                              return (
                                <button
                                  key={opt}
                                  type="button"
                                  onClick={() =>
                                    setFormData((p) => {
                                      const isSelected =
                                        p.siteType.includes(opt);
                                      const next = isSelected
                                        ? p.siteType.filter((s) => s !== opt)
                                        : [...p.siteType, opt];
                                      // Clear other text if "other" is unselected
                                      return {
                                        ...p,
                                        siteType: next,
                                        siteTypeOther:
                                          opt === "other" && isSelected
                                            ? ""
                                            : p.siteTypeOther,
                                      };
                                    })
                                  }
                                  className={`px-3 py-2 rounded-lg border text-sm ${
                                    selected
                                      ? "bg-[#246598] border-[#246598] text-white"
                                      : "border-gray-300 text-gray-700 hover:bg-gray-50"
                                  }`}
                                >
                                  {opt.charAt(0).toUpperCase() + opt.slice(1)}
                                </button>
                              );
                            })}
                          </div>
                          {formData.siteType.includes("other") && (
                            <div className="mt-3">
                              <label
                                htmlFor="siteTypeOther"
                                className="block text-sm text-gray-700 mb-1"
                              >
                                Please specify
                              </label>
                              <input
                                id="siteTypeOther"
                                name="siteTypeOther"
                                type="text"
                                value={formData.siteTypeOther}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#246598] ${
                                  errors.siteTypeOther
                                    ? "border-red-400"
                                    : "border-gray-300"
                                }`}
                                placeholder="e.g., Stadium, Convention Center, Mines, etc."
                              />
                              {errors.siteTypeOther && (
                                <p className="mt-1 text-xs text-red-600">
                                  {errors.siteTypeOther}
                                </p>
                              )}
                            </div>
                          )}
                          {errors.siteType && (
                            <p className="mt-1 text-xs text-red-600">
                              {errors.siteType}
                            </p>
                          )}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label
                              htmlFor="timeline"
                              className="block text-sm font-semibold text-gray-900 mb-2"
                            >
                              Project Timeline
                            </label>
                            <select
                              id="timeline"
                              name="timeline"
                              value={formData.timeline}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#246598]"
                            >
                              <option value="">Select timeline</option>
                              <option value="asap">ASAP</option>
                              <option value="1-3-months">1–3 months</option>
                              <option value="3-6-months">3–6 months</option>
                              <option value="6plus">6+ months</option>
                            </select>
                          </div>
                          <div>
                            <label
                              htmlFor="budget"
                              className="block text-sm font-semibold text-gray-900 mb-2"
                            >
                              Estimated Budget
                            </label>
                            <select
                              id="budget"
                              name="budget"
                              value={formData.budget}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#246598]"
                            >
                              <option value="">Select budget</option>
                              <option value="under-25k">Under $25k</option>
                              <option value="25k-100k">$25k–$100k</option>
                              <option value="100k-500k">$100k–$500k</option>
                              <option value="500k-plus">$500k+</option>
                              <option value="undecided">
                                Need consultation to decide
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-semibold text-gray-900 mb-2"
                        >
                          Message *
                        </label>
                        <div className="relative">
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={6}
                            maxLength={1000}
                            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#246598] ${
                              errors.message
                                ? "border-red-400"
                                : "border-gray-300"
                            }`}
                            placeholder="Tell us about your project, goals, site size, or any constraints..."
                          />
                          <div className="absolute bottom-2 right-3 text-xs text-gray-400">
                            {formData.message.length}/1000
                          </div>
                        </div>
                        {errors.message && (
                          <p className="mt-1 text-xs text-red-600">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      {/* Honeypot */}
                      <div className="hidden">
                        <label htmlFor="website">Website</label>
                        <input
                          id="website"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                        />
                        {errors.website && (
                          <p className="text-xs text-red-600">
                            {errors.website}
                          </p>
                        )}
                      </div>

                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          id="privacy"
                          name="privacy"
                          checked={formData.privacy}
                          onChange={handleChange}
                          required
                          className="mt-1"
                        />
                        <label
                          htmlFor="privacy"
                          className="text-sm text-gray-600"
                        >
                          I agree to the privacy policy and terms of service *
                        </label>
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-[#246598] hover:bg-[#1a4a70] text-white disabled:opacity-70 disabled:cursor-not-allowed"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="pb-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-gradient-to-r from-[#246598] to-[#1a4a70] text-white p-10 md:p-14 text-center shadow-2xl">
              <h3 className="text-3xl md:text-4xl font-extrabold">
                Prefer to talk to a human first?
              </h3>
              <p className="mt-3 text-blue-100 max-w-2xl mx-auto">
                Call us and we’ll help you understand the best next step for
                your site.
              </p>
              <a
                href="tel:+1234567890"
                className="inline-block mt-6 text-lg font-bold underline underline-offset-4"
              >
                +1 (234) 567-890
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
