"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check } from "lucide-react"
import { FAQSection } from "@/components/faq-section";

const pricingTiers = [
  {
    name: "Basic Plan",
    description: "Best for small-scale DAS deployments",
    price: "$350 – $1,000",
    features: [
      "3D DAS Design",
      "iBwave Design & Documentation", 
      "RF Propagation Analysis Report",
      "Coverage Planning & Signal Analysis",
      "Up to 2 Design Revisions"
    ],
    cta: "Get Quote",
    highlighted: false,
  },
  {
    name: "Professional Plan",
    description: "Best for medium to large deployments",
    price: "$1,000 – $10,000",
    features: [
      "All Basic Plan features",
      "Detailed DAS Design Layouts",
      "EMF (Electromagnetic Field) Compliance Reports",
      "Bill of Materials (BOM)",
      "Additional Technical & Performance Reports",
      "Up to 4 Design Revisions"
    ],
    cta: "Get Quote",
    highlighted: true,
  },
  {
    name: "Enterprise Plan",
    description: "Best for large-scale and mission-critical deployments",
    price: "$10,000+",
    features: [
      "All Professional Plan features",
      "Advanced RF Optimization & Performance Tuning",
      "24/7 Dedicated Technical Support",
      "Continuous Network Monitoring & Optimization",
      "Custom Design & Reporting (as per project needs)",
      "Unlimited Scalability & Custom Revisions"
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
  { feature: "SLA", starter: "99.5%", professional: "99.7%", enterprise: "99.9%" },
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
      "Our SLA guarantees uptime based on your plan: Starter (99.5%), Professional (99.7%), and Enterprise (99.9%). We are committed to providing a reliable service.",
    icon: "✅",
    visual: { type: "stat", value: "99.9%", label: "Enterprise Uptime" },
  },
]

export default function PricingPage() {

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-white to-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">DAS Design Services</h1>
            <p className="text-xl text-gray-600 max-w-2xl">Professional DAS design services tailored to your deployment needs</p>
          </div>
        </section>

        {/* Pricing */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto relative z-10">
            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingTiers.map((plan, index) => (
                <div
                  key={index}
                  className={`relative rounded-xl transition-all duration-300 border ${
                    plan.highlighted
                      ? "md:scale-105 bg-gradient-to-br from-[#8fc447] to-[#79a93b] text-white border-[#8fc447] shadow-lg"
                      : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-md"
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-white text-[#8fc447] px-4 py-1 rounded-full text-xs font-bold shadow-md">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="p-8">
                    <h3 className={`text-lg font-bold mb-1 ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-xs mb-6 ${plan.highlighted ? "text-green-100" : "text-gray-600"}`}>
                      {plan.description}
                    </p>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-1">
                        <span className={`text-3xl font-bold ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                          {plan.price}
                        </span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button
                      className={`w-full py-2 rounded-lg font-semibold transition-all duration-300 text-sm mb-6 ${
                        plan.highlighted
                          ? "bg-white text-[#79a93b] hover:bg-gray-100"
                          : "bg-[#8fc447] text-white hover:bg-[#79a93b]"
                      }`}
                    >
                      {plan.cta}
                    </button>

                    {/* Features */}
                    <div className="space-y-3">
                      <h4 className={`text-sm font-semibold mb-3 ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                        Included Services:
                      </h4>
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex gap-2 items-start">
                          <span
                            className={`font-bold flex-shrink-0 text-sm ${plan.highlighted ? "text-white" : "text-[#8fc447]"}`}
                          >
                            ✓
                          </span>
                          <span className={`text-xs ${plan.highlighted ? "text-green-50" : "text-gray-700"}`}>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Note */}
            <div className="text-center mt-10">
              <p className="text-sm text-gray-600">
                Need a custom solution?{" "}
                <a href="/contact" className="text-[#8fc447] font-semibold hover:underline">
                  Contact our design team
                </a>
              </p>
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
            <p className="text-lg mb-8 opacity-90">Choose your plan and get a custom quote for your DAS design project.</p>
            <Button asChild size="lg" className="bg-white text-[#246598] hover:bg-gray-100">
              <Link href="/contact">Get Quote</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
