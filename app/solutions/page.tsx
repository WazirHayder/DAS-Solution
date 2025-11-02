"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, ArrowRight } from "lucide-react"
import { Wifi, Radio, Zap, Shield, Smartphone, Wrench } from "lucide-react"

const solutionCategories = [
  {
    id: "in-building-coverage",
    title: "In-Building Coverage (DAS)",
    slug: "in-building-coverage",
    icon: Wifi,
    description: "Distributed antenna systems for seamless indoor wireless coverage",
    problem:
      "Large buildings often suffer from poor indoor cellular coverage, leading to dropped calls and slow data speeds.",
    approach:
      "We deploy distributed antenna systems (DAS) that amplify and distribute cellular signals throughout your building.",
    deliverables: [
      "Site survey and RF analysis",
      "Custom DAS design and architecture",
      "Professional installation and testing",
      "Performance optimization",
      "Ongoing maintenance and support",
    ],
    timeline: "4-8 weeks",
    outcomes: ["99.99% uptime SLA", "40% improvement in signal strength", "Zero dropped calls in coverage area"],
  },
  {
    id: "private-5g",
    title: "Private 4G/5G Networks",
    slug: "private-5g",
    icon: Radio,
    description: "Dedicated private cellular networks for enterprise operations",
    problem:
      "Public networks may not meet enterprise security, latency, or reliability requirements for critical operations.",
    approach: "We design and deploy dedicated private cellular networks using 4G/5G technology tailored to your needs.",
    deliverables: [
      "Network architecture design",
      "Spectrum licensing assistance",
      "Equipment procurement and installation",
      "Security configuration",
      "24/7 network monitoring",
    ],
    timeline: "8-12 weeks",
    outcomes: ["<10ms latency", "Enterprise-grade security", "Dedicated bandwidth allocation"],
  },
  {
    id: "enterprise-wifi",
    title: "Enterprise Wi-Fi Design & Management",
    slug: "enterprise-wifi",
    icon: Zap,
    description: "High-performance Wi-Fi 6/6E networks for demanding environments",
    problem: "Standard Wi-Fi deployments struggle with density, interference, and performance in large enterprises.",
    approach: "We design and deploy enterprise-grade Wi-Fi 6/6E networks with advanced management and security.",
    deliverables: [
      "Site survey and capacity planning",
      "Wi-Fi 6/6E network design",
      "Access point deployment",
      "Network management platform setup",
      "User support and training",
    ],
    timeline: "6-10 weeks",
    outcomes: ["1Gbps+ throughput", "Support for 1000+ concurrent users", "Seamless roaming"],
  },
  {
    id: "cctv-iot",
    title: "CCTV, IoT & Network Security",
    slug: "cctv-iot",
    icon: Shield,
    description: "Integrated security solutions for your wireless infrastructure",
    problem: "Wireless networks require specialized security measures to protect against evolving threats.",
    approach: "We integrate CCTV, IoT devices, and advanced security protocols into your wireless infrastructure.",
    deliverables: [
      "Security assessment",
      "CCTV system integration",
      "IoT device management",
      "Threat monitoring",
      "Incident response planning",
    ],
    timeline: "4-6 weeks",
    outcomes: ["24/7 threat monitoring", "Compliance with industry standards", "Reduced security incidents"],
  },
  {
    id: "rf-design",
    title: "RF Design & Optimization",
    slug: "rf-design",
    icon: Smartphone,
    description: "Drive testing and RF optimization for maximum coverage",
    problem: "Wireless networks often underperform due to poor RF design and lack of optimization.",
    approach: "We conduct comprehensive drive testing and RF optimization to maximize your network performance.",
    deliverables: [
      "Drive testing and analysis",
      "RF optimization recommendations",
      "Performance tuning",
      "Coverage mapping",
      "Ongoing monitoring",
    ],
    timeline: "2-4 weeks",
    outcomes: ["20-30% performance improvement", "Optimized coverage", "Reduced interference"],
  },
  {
    id: "consulting",
    title: "Consulting, Maintenance & AMCs",
    slug: "consulting",
    icon: Wrench,
    description: "Comprehensive AMCs and 24/7 technical support",
    problem: "Wireless infrastructure requires ongoing maintenance and support to ensure peak performance.",
    approach: "We provide comprehensive annual maintenance contracts and 24/7 technical support.",
    deliverables: [
      "24/7 helpdesk support",
      "Preventive maintenance",
      "Emergency response",
      "Performance reporting",
      "Quarterly reviews",
    ],
    timeline: "Ongoing",
    outcomes: ["99.99% uptime", "Rapid issue resolution", "Proactive maintenance"],
  },
]

export default function SolutionsPage() {
  const [selectedSolution, setSelectedSolution] = useState<string | null>(null)

  const solution = selectedSolution ? solutionCategories.find((s) => s.id === selectedSolution) : null

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-16 border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-3">Our Solutions</h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Comprehensive wireless solutions designed for enterprise success
            </p>
          </div>
        </section>

        {/* Solutions Selection */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {solutionCategories.map((sol) => {
                const Icon = sol.icon
                const isSelected = selectedSolution === sol.id
                return (
                  <div key={sol.id}>
                    <button
                      onClick={() => setSelectedSolution(sol.id)}
                      className={`w-full p-6 rounded-lg border-2 transition-all text-left h-full ${
                        isSelected
                          ? "border-[#246598] bg-blue-50 shadow-md"
                          : "border-gray-200 bg-white hover:border-[#246598] hover:shadow-sm"
                      }`}
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <Icon size={24} className={isSelected ? "text-[#246598]" : "text-gray-400"} />
                        <h3 className={`font-semibold ${isSelected ? "text-[#246598]" : "text-gray-900"}`}>
                          {sol.title}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600">{sol.description}</p>
                    </button>
                  </div>
                )
              })}
            </div>

            {/* Solution Details */}
            {solution && (
              <div className="bg-white rounded-lg border border-gray-200 p-8 md:p-12 animate-in fade-in shadow-sm">
                <div className="mb-8">
                  <h2 className="text-4xl font-bold text-gray-900 mb-3">{solution.title}</h2>
                  <p className="text-lg text-gray-600">{solution.description}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                  <div>
                    <div className="mb-8">
                      <h3 className="font-semibold text-gray-900 mb-2 text-lg">The Problem</h3>
                      <p className="text-gray-600 leading-relaxed">{solution.problem}</p>
                    </div>
                    <div className="mb-8">
                      <h3 className="font-semibold text-gray-900 mb-2 text-lg">Our Approach</h3>
                      <p className="text-gray-600 leading-relaxed">{solution.approach}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4 text-lg">What We Deliver</h3>
                    <ul className="space-y-3 mb-8">
                      {solution.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle size={20} className="text-[#246598] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                      <p className="text-sm text-gray-600 mb-1">Timeline</p>
                      <p className="text-lg font-semibold text-[#246598]">{solution.timeline}</p>
                    </div>
                  </div>
                </div>

                {/* Outcomes */}
                <div className="bg-gray-50 p-8 rounded-lg mb-8 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4 text-lg">Expected Outcomes</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {solution.outcomes.map((outcome, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#246598] rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">{outcome}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-[#246598] hover:bg-[#1a4a70] text-white">
                    <Link href={`/solutions/${solution.slug}`} className="flex items-center gap-2">
                      View Full Details
                      <ArrowRight size={18} />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-[#246598] text-[#246598] hover:bg-blue-50 bg-transparent"
                  >
                    <Link href="/contact">Request Brief</Link>
                  </Button>
                </div>
              </div>
            )}

            {!solution && (
              <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
                <p className="text-gray-600 text-lg">Select a solution above to view details</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-[#246598] to-[#1a4a70] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-3">Ready to Get Started?</h2>
            <p className="text-lg mb-8 opacity-90">
              Contact our team to discuss which solution is right for your enterprise.
            </p>
            <Button asChild size="lg" className="bg-white text-[#246598] hover:bg-gray-100">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
