"use client"

import { CheckIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const partners = [
  {
    name: "iBwave",
    slug: "ibwave",
    description: "Leading DAS and small cell design and deployment software platform",
    features: ["Network planning", "Coverage optimization", "Real-time monitoring"],
    icon: "📡",
    gradient: "from-red-500/50 to-red-600/50",
    image: "/IbWAVE.jpg",
  },
  {
    name: "Eino",
    slug: "eino",
    description: "Advanced RF optimization and network performance analytics",
    features: ["RF analysis", "Performance metrics", "Predictive analytics"],
    icon: "📊",
    gradient: "from-[#8fc447]/50 to-green-500/50",
    image: "/Eino.jpg",
  },
  {
    name: "Ekahow",
    slug: "ekahow",
    description: "Enterprise wireless network management and orchestration platform",
    features: ["Network management", "Automation", "Integration"],
    icon: "⚙️",
    gradient: "from-[#246598]/50 to-cyan-400/50",
    image: "/Ekahow.png",
  },
]

export function PartnersSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden">
      {/* Background pattern/glow effect */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#246598]/10 to-transparent pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            Powered by Industry Leaders
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We partner with the best technology providers to deliver excellence in network solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <div key={partner.name} className="relative group bg-gray-800/50 rounded-xl border border-gray-700/50 p-8 transition-all duration-300 hover:border-gray-700/80 hover:shadow-2xl hover:bg-gray-800/80 hover:-translate-y-2">
              <div
                className={`absolute -inset-px bg-gradient-to-r ${partner.gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md`}
              />
              <div className="relative flex flex-col justify-between h-full">
                <div>
                  <div className="text-4xl mb-6 bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">{partner.icon}</div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">{partner.name}</h3>
                  <p className="text-gray-400 mb-6">{partner.description}</p>
                </div>
                <div>
                  <div className="space-y-2 mb-6">
                    {partner.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors">
                        <CheckIcon className="w-4 h-4 text-[#8fc447] flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full mt-6 bg-transparent border-[#8fc447]/30 text-[#8fc447]/80 hover:bg-[#8fc447]/10 hover:text-[#8fc447] hover:border-[#8fc447]/50 transition-all duration-300"
                  >
                    <Link href={`/partners/${partner.slug}`}>Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
