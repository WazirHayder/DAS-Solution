"use client"

import { useState } from "react"

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small deployments",
      monthlyPrice: 2999,
      features: ["Up to 5 sites", "Basic RF design", "Email support", "Monthly reporting", "Standard SLA (99.5%)"],
    },
    {
      name: "Professional",
      description: "For growing enterprises",
      monthlyPrice: 7999,
      featured: true,
      features: [
        "Up to 25 sites",
        "Advanced RF design",
        "Priority support",
        "Real-time monitoring",
        "Premium SLA (99.7%)",
        "Quarterly optimization",
      ],
    },
    {
      name: "Enterprise",
      description: "Custom solutions at scale",
      monthlyPrice: 15999,
      features: [
        "Unlimited sites",
        "Custom architecture",
        "24/7 dedicated support",
        "Advanced analytics",
        "Enterprise SLA (99.9%)",
        "Continuous optimization",
      ],
    },
  ]

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Transparent <span className="text-[#246598]">Pricing</span>
          </h2>
          <p className="text-base text-gray-600 mb-8 max-w-2xl mx-auto">
            Choose the perfect plan for your organization. All plans include a 14-day free trial.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span
              className={`text-sm font-semibold transition-colors ${!isYearly ? "text-gray-900" : "text-gray-500"}`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex h-8 w-14 items-center rounded-full transition-all duration-300"
              style={{
                backgroundColor: isYearly ? "#8fc447" : "#e5e7eb",
              }}
            >
              <span
                className="inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-300 shadow-md"
                style={{
                  transform: isYearly ? "translateX(1.5rem)" : "translateX(0.2rem)",
                }}
              />
            </button>
            <span className={`text-sm font-semibold transition-colors ${isYearly ? "text-gray-900" : "text-gray-500"}`}>
              Yearly
              {isYearly && <span className="ml-2 text-[#8fc447] font-bold text-xs">Save 20%</span>}
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-xl transition-all duration-300 border ${
                plan.featured
                  ? "md:scale-105 bg-gradient-to-br from-[#8fc447] to-[#79a93b] text-white border-[#8fc447] shadow-lg"
                  : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-md"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-white text-[#8fc447] px-4 py-1 rounded-full text-xs font-bold shadow-md">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                <h3 className={`text-lg font-bold mb-1 ${plan.featured ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <p className={`text-xs mb-6 ${plan.featured ? "text-green-100" : "text-gray-600"}`}>
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl font-bold ${plan.featured ? "text-white" : "text-gray-900"}`}>
                      ${isYearly ? Math.round(plan.monthlyPrice * 12 * 0.8) : plan.monthlyPrice}
                    </span>
                    <span className={`text-sm ${plan.featured ? "text-green-100" : "text-gray-600"}`}>
                      {isYearly ? "/year" : "/month"}
                    </span>
                  </div>
                  {isYearly && (
                    <p className={`text-xs mt-2 ${plan.featured ? "text-green-100" : "text-[#8fc447]"}`}>
                      ${Math.round((plan.monthlyPrice * 12 * 0.8) / 12)}/month billed annually
                    </p>
                  )}
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-2 rounded-lg font-semibold transition-all duration-300 text-sm mb-6 ${
                    plan.featured
                      ? "bg-white text-[#79a93b] hover:bg-gray-100"
                      : "bg-[#8fc447] text-white hover:bg-[#79a93b]"
                  }`}
                >
                  Get Started
                </button>

                {/* Features */}
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex gap-2 items-start">
                      <span
                        className={`font-bold flex-shrink-0 text-sm ${plan.featured ? "text-white" : "text-[#8fc447]"}`}
                      >
                        ✓
                      </span>
                      <span className={`text-xs ${plan.featured ? "text-green-50" : "text-gray-700"}`}>{feature}</span>
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
            Need a custom plan?{" "}
            <a href="/contact" className="text-[#8fc447] font-semibold hover:underline">
              Contact our sales team
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
