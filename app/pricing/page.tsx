"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check } from "lucide-react"
import { FAQSection } from "@/components/faq-section";

const pricingTiers = [
  {
    name: "Starter",
    monthlyPrice: 2999,
    yearlyPrice: 29990,
    description: "Perfect for small deployments",
    features: [
      "Up to 5 access points",
      "Basic RF design",
      "Email support",
      "Monthly reporting",
      "Standard SLA (99.5%)",
    ],
    cta: "Start Free Assessment",
    highlighted: false,
  },
  {
    name: "Professional",
    monthlyPrice: 7999,
    yearlyPrice: 79990,
    description: "For growing enterprises",
    features: [
      "Up to 50 access points",
      "Advanced RF optimization",
      "Priority phone support",
      "Weekly reporting",
      "Enhanced SLA (99.9%)",
      "Drive testing included",
      "Quarterly optimization reviews",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: null,
    yearlyPrice: null,
    description: "Custom solutions for large deployments",
    features: [
      "Unlimited access points",
      "Custom RF design",
      "24/7 dedicated support",
      "Real-time monitoring",
      "Premium SLA (99.99%)",
      "On-site technical team",
      "Custom integrations",
      "Quarterly business reviews",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
]

const featureComparison = [
  {
    feature: "Access Points",
    starter: "Up to 5",
    professional: "Up to 50",
    enterprise: "Unlimited",
  },
  { feature: "RF Design", starter: "Basic", professional: "Advanced", enterprise: "Custom" },
  {
    feature: "Support",
    starter: "Email",
    professional: "Priority Phone",
    enterprise: "24/7 Dedicated",
  },
  { feature: "SLA", starter: "99.5%", professional: "99.9%", enterprise: "99.99%" },
  { feature: "Reporting", starter: "Monthly", professional: "Weekly", enterprise: "Real-time" },
  { feature: "Drive Testing", starter: false, professional: true, enterprise: true },
  {
    feature: "Quarterly Reviews",
    starter: false,
    professional: "Optimization",
    enterprise: "Business",
  },
  {
    feature: "On-site Team",
    starter: false,
    professional: false,
    enterprise: true,
  },
  { feature: "Custom Integrations", starter: false, professional: false, enterprise: true },
]

const pricingFaqs = [
  {
    question: "Can I change plans anytime?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.",
    icon: "🔄",
    visual: {
      type: "list",
      title: "Plan Flexibility",
      data: ["Upgrade Anytime", "Downgrade Anytime", "No Lock-in", "Prorated Billing"],
    },
  },
  {
    question: "What is included in support?",
    answer:
      "All plans include technical support. Starter includes email support, Professional includes priority phone support, and Enterprise includes 24/7 dedicated support.",
    icon: "🛠️",
  },
  {
    question: "Do you offer custom pricing for large deployments?",
    answer:
      "Yes, for large deployments or unique requirements, we offer custom pricing. The Enterprise plan is fully customizable. Contact our sales team for a quote.",
    icon: "💼",
  },
  {
    question: "What is your SLA guarantee?",
    answer:
      "Our SLA guarantees uptime based on your plan: Starter (99.5%), Professional (99.9%), and Enterprise (99.99%). We are committed to providing a reliable service.",
    icon: "✅",
    visual: { type: "stat", value: "99.99%", label: "Enterprise Uptime" },
  },
]

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-white to-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-600 max-w-2xl">Choose the plan that fits your enterprise needs</p>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Toggle */}
            <div className="flex justify-center items-center gap-4 mb-12">
              <span className={`text-lg font-semibold ${!isYearly ? "text-gray-900" : "text-gray-600"}`}>Monthly</span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                  isYearly ? "bg-[#246598]" : "bg-gray-300"
                }`}
                role="switch"
                aria-checked={isYearly}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    isYearly ? "translate-x-7" : "translate-x-1"
                  }`}
                />
              </button>
              <span className={`text-lg font-semibold ${isYearly ? "text-gray-900" : "text-gray-600"}`}>Yearly</span>
              {isYearly && (
                <span className="ml-2 inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Save 17%
                </span>
              )}
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier) => (
                <Card
                  key={tier.name}
                  className={`relative p-8 flex flex-col rounded-xl transition-all duration-300 ${
                    tier.highlighted
                      ? "md:scale-105 bg-gradient-to-br from-[#8fc447] to-[#79a93b] text-white border-[#8fc447] shadow-lg"
                      : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-md"
                  }`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-white text-[#8fc447] px-4 py-1 rounded-full text-xs font-bold shadow-md">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <h3 className={`text-2xl font-bold mb-2 ${tier.highlighted ? "text-white" : "text-gray-900"}`}>{tier.name}</h3>
                  <p className={`mb-6 ${tier.highlighted ? "text-green-100" : "text-gray-600"}`}>{tier.description}</p>

                  <div className="mb-6">
                    {tier.monthlyPrice ? (
                      <>
                        <div className={`text-4xl font-bold ${tier.highlighted ? "text-white" : "text-gray-900"}`}>
                          ${isYearly ? (tier.yearlyPrice / 12).toFixed(0) : tier.monthlyPrice}
                        </div>
                        <p className={`text-sm mt-2 ${tier.highlighted ? "text-green-100" : "text-gray-600"}`}>
                          {isYearly ? "per month, billed yearly" : "per month"}
                        </p>
                        {isYearly && (
                          <p className="text-green-600 text-sm font-semibold mt-2">${tier.yearlyPrice} per year</p>
                        )}
                      </>
                    ) : (
                      <div className={`text-2xl font-bold ${tier.highlighted ? "text-white" : "text-gray-900"}`}>Custom Pricing</div>
                    )}
                  </div>

                  <Button
                    asChild
                    className={`w-full mb-8 ${
                      tier.highlighted
                        ? "bg-white text-[#79a93b] hover:bg-gray-100"
                        : "bg-[#8fc447] text-white hover:bg-[#79a93b]"
                    }`}
                    variant={tier.highlighted ? "default" : "outline"}
                  >
                    <Link href="/contact">{tier.cta}</Link>
                  </Button>

                  <div className="space-y-4 flex-1">
                    {tier.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check size={20} className={`${tier.highlighted ? "text-white" : "text-[#8fc447]"} flex-shrink-0 mt-0.5`} />
                        <span className={`${tier.highlighted ? "text-green-50" : "text-gray-700"}`}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Matrix */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Feature Comparison</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-700/50 shadow-lg bg-gray-800/30">
              <table className="w-full min-w-[600px] text-sm">
                <thead>
                  <tr className="border-b border-gray-700/50">
                    <th className="text-left py-4 px-6 font-semibold text-gray-300 w-1/4">Feature</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-300 w-1/4">Starter</th>
                    <th className="text-center py-4 px-6 font-semibold text-white bg-[#8fc447]/10 w-1/4">
                      Professional
                    </th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-300 w-1/4">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {featureComparison.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-800/50">
                      <td className="py-4 px-6 text-gray-200 font-medium">{row.feature}</td>
                      {[row.starter, row.professional, row.enterprise].map((value, j) => (
                        <td
                          key={j}
                          className={`py-4 px-6 text-center text-gray-400 ${j === 1 ? "bg-[#8fc447]/5" : ""}`}
                        >
                          {typeof value === "boolean" ? (
                            value ? (
                              <Check size={20} className="mx-auto text-[#8fc447]" />
                            ) : (
                              <span className="text-gray-500">-</span>
                            )
                          ) : (
                            value
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* DAS Solutions Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">DAS Solutions Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">What is DAS?</h3>
                <p className="text-gray-600 mb-4">
                  Distributed Antenna Systems (DAS) are networks of spatially separated antenna nodes connected to a
                  common source, designed to provide wireless service over a specific area or building.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#246598] font-bold mt-1">✓</span>
                    <span className="text-gray-700">Complete indoor coverage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#246598] font-bold mt-1">✓</span>
                    <span className="text-gray-700">Improved signal strength</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#246598] font-bold mt-1">✓</span>
                    <span className="text-gray-700">Reduced interference</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#246598] font-bold mt-1">✓</span>
                    <span className="text-gray-700">Enterprise-grade reliability</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">DAS Implementation</h3>
                <p className="text-gray-600 mb-4">
                  Our DAS solutions are tailored to your facility's specific needs, whether it's a large office
                  building, hospital, airport, or shopping mall.
                </p>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">RF Site Survey</h4>
                    <p className="text-sm text-gray-600">Comprehensive analysis of your facility's coverage needs</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Custom Design</h4>
                    <p className="text-sm text-gray-600">Optimized DAS architecture for your specific requirements</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Professional Installation</h4>
                    <p className="text-sm text-gray-600">Expert deployment and testing by certified technicians</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection faqs={pricingFaqs} />

        {/* CTA */}
        <section className="py-16 bg-[#246598] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8 opacity-90">Choose your plan and start your free assessment today.</p>
            <Button asChild size="lg" className="bg-white text-[#246598] hover:bg-gray-100">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
