import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"

const tiers = [
  {
    name: "Starter",
    price: "From $5K",
    description: "Perfect for small deployments",
    features: ["Site survey", "Basic design", "Installation support", "3-month support"],
  },
  {
    name: "Professional",
    price: "From $25K",
    description: "For growing enterprises",
    features: [
      "Full RF analysis",
      "Custom design",
      "Professional installation",
      "1-year support",
      "Performance optimization",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale deployments",
    features: [
      "Complete infrastructure",
      "24/7 monitoring",
      "Dedicated support team",
      "SLA guarantee",
      "Ongoing optimization",
    ],
  },
]

export function PricingTeaser() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 max-w-2xl">Choose the plan that fits your enterprise needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={`p-8 transition-all ${
                tier.highlighted ? "border-[#246598] border-2 shadow-lg scale-105" : "border-gray-200"
              }`}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
              <p className="text-3xl font-bold text-[#246598] mb-2">{tier.price}</p>
              <p className="text-sm text-gray-600 mb-6">{tier.description}</p>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <Check size={16} className="text-[#246598] flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className={`w-full ${
                  tier.highlighted
                    ? "bg-[#246598] hover:bg-[#1a4a70] text-white"
                    : "border-[#246598] text-[#246598] hover:bg-blue-50"
                }`}
                variant={tier.highlighted ? "default" : "outline"}
              >
                <Link href="/contact">Get Started</Link>
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" className="border-gray-300 text-gray-900 hover:bg-gray-50 bg-transparent">
            <Link href="/pricing">View Full Pricing</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
