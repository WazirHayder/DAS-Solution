export function PricingSection() {

  const plans = [
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
    },
    {
      name: "Professional Plan",
      description: "Best for medium to large deployments",
      price: "$1,000 – $10,000",
      featured: true,
      features: [
        "All Basic Plan features",
        "Detailed DAS Design Layouts",
        "EMF (Electromagnetic Field) Compliance Reports",
        "Bill of Materials (BOM)",
        "Additional Technical & Performance Reports",
        "Up to 4 Design Revisions"
      ],
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
    },
  ]

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            DAS Design <span className="text-[#246598]">Services</span>
          </h2>
          <p className="text-base text-gray-600 mb-8 max-w-2xl mx-auto">
            Professional DAS design services tailored to your deployment needs. Choose the plan that fits your project requirements.
          </p>
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
                    <span className={`text-3xl font-bold ${plan.featured ? "text-white" : "text-gray-900"}`}>
                      {plan.price}
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-2 rounded-lg font-semibold transition-all duration-300 text-sm mb-6 ${
                    plan.featured
                      ? "bg-white text-[#79a93b] hover:bg-gray-100"
                      : "bg-[#8fc447] text-white hover:bg-[#79a93b]"
                  }`}
                >
                  Get Quote
                </button>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className={`text-sm font-semibold mb-3 ${plan.featured ? "text-white" : "text-gray-900"}`}>
                    Included Services:
                  </h4>
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
            Need a custom solution?{" "}
            <a href="/contact" className="text-[#8fc447] font-semibold hover:underline">
              Contact our design team
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
