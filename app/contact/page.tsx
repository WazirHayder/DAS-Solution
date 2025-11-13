"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
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
                  <p className="text-4xl font-extrabold text-gray-900">95%</p>
                  <p className="mt-1 text-sm text-gray-500">
                    Client Satisfaction
                  </p>
                </div>
                <div className="rounded-2xl bg-white shadow-md border border-gray-100 p-6">
                  <p className="text-4xl font-extrabold text-gray-900">15+</p>
                  <p className="mt-1 text-sm text-gray-500">Sites Optimized</p>
                </div>
                <div className="rounded-2xl bg-white shadow-md border border-gray-100 p-6">
                  <p className="text-4xl font-extrabold text-gray-900">5G</p>
                  <p className="mt-1 text-sm text-gray-500">
                    Future‑Ready Designs
                  </p>
                </div>
                <div className="rounded-2xl bg-white shadow-md border border-gray-100 p-6">
                  <p className="text-4xl font-extrabold text-gray-900">
                    On-call
                  </p>
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
                <ContactForm />
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
