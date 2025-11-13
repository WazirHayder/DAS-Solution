"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle, ArrowRight, TrendingUp, Award, Users, Clock, Shield, Zap } from "lucide-react"
import { Wifi, Radio, Shield as ShieldIcon, Smartphone, Wrench } from "lucide-react"

const solutionCategories = [
  {
    id: "in-building-coverage",
    title: "In-Building Coverage (DAS)",
    slug: "in-building-coverage",
    icon: Wifi,
    description: "Distributed antenna systems for seamless indoor wireless coverage",
    image: "/solutions-in-building.jpg",
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
    outcomes: ["99.5% uptime SLA", "40% improvement in signal strength", "Zero dropped calls in coverage area"],
  },
  {
    id: "private-5g",
    title: "Private 4G/5G Networks",
    slug: "private-5g",
    icon: Radio,
    description: "Dedicated private cellular networks for enterprise operations",
    image: "/solutions-private-5g.jpg",
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
    image: "/solutions-enterprise-wifi.jpg",
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
    icon: ShieldIcon,
    description: "Integrated security solutions for your wireless infrastructure",
    image: "/solutions-security.jpg",
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
    image: "/solutions-optimization.jpg",
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
    image: "/solutions-maintenance.jpg",
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
    outcomes: ["99.5% uptime", "Rapid issue resolution", "Proactive maintenance"],
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
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/telecom-network-solutions-infrastructure.jpg"
              alt="Enterprise Wireless Solutions"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#246598]/90 via-[#246598]/80 to-[#246598]/70"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Our Solutions</h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto opacity-90 mb-8">
              Comprehensive wireless solutions designed for enterprise success
            </p>
            <p className="text-lg max-w-2xl mx-auto opacity-80">
              From in-building coverage to private 5G networks, we deliver end-to-end connectivity solutions that drive your business forward
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Award className="w-8 h-8 text-[#246598]" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">15+</div>
                <div className="text-sm text-gray-600">Successful Deployments</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <TrendingUp className="w-8 h-8 text-[#8fc447]" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">99.5%</div>
                <div className="text-sm text-gray-600">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Users className="w-8 h-8 text-[#246598]" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">On-call</div>
                <div className="text-sm text-gray-600">Support Availability</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Clock className="w-8 h-8 text-[#8fc447]" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Selection */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Our Solutions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Select a solution below to learn more about how we can help transform your connectivity infrastructure
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {solutionCategories.map((sol) => {
                const Icon = sol.icon
                const isSelected = selectedSolution === sol.id
                return (
                  <div key={sol.id} className="group">
                    <button
                      onClick={() => setSelectedSolution(sol.id)}
                      className={`w-full rounded-xl border-2 transition-all text-left h-full overflow-hidden ${
                        isSelected
                          ? "border-[#246598] bg-white shadow-xl scale-105"
                          : "border-gray-200 bg-white hover:border-[#246598] hover:shadow-lg"
                      }`}
                    >
                      <div className="relative h-40 w-full overflow-hidden">
                        <Image
                          src={sol.image}
                          alt={sol.title}
                          fill
                          className={`object-cover transition-transform duration-300 ${
                            isSelected ? "scale-110" : "group-hover:scale-105"
                          }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Icon size={20} className="text-white" />
                            <h3 className="font-bold text-white text-lg">{sol.title}</h3>
                          </div>
                        </div>
                      </div>
                      <div className="p-5">
                        <p className="text-sm text-gray-600">{sol.description}</p>
                      </div>
                    </button>
                  </div>
                )
              })}
            </div>

            {/* Solution Details */}
            {solution && (
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-lg animate-in fade-in">
                {/* Hero Image */}
                <div className="relative h-64 w-full">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h2 className="text-4xl font-bold text-white mb-2">{solution.title}</h2>
                    <p className="text-lg text-white/90">{solution.description}</p>
                  </div>
                </div>

                <div className="p-8 md:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                    <div className="space-y-8">
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-1 h-8 bg-[#246598] rounded-full"></div>
                          <h3 className="text-2xl font-bold text-gray-900">The Problem</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-lg">{solution.problem}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-1 h-8 bg-[#8fc447] rounded-full"></div>
                          <h3 className="text-2xl font-bold text-gray-900">Our Approach</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-lg">{solution.approach}</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Deliver</h3>
                      <ul className="space-y-4 mb-8">
                        {solution.deliverables.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                            <CheckCircle size={24} className="text-[#8fc447] flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="bg-gradient-to-br from-[#246598] to-[#1a4a70] p-6 rounded-xl text-white">
                        <div className="flex items-center gap-3 mb-2">
                          <Clock className="w-6 h-6" />
                          <p className="text-sm opacity-90">Timeline</p>
                        </div>
                        <p className="text-2xl font-bold">{solution.timeline}</p>
                      </div>
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl mb-8 border border-blue-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Expected Outcomes</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {solution.outcomes.map((outcome, i) => (
                        <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                          <div className="flex items-start gap-3">
                            <TrendingUp className="w-5 h-5 text-[#8fc447] flex-shrink-0 mt-0.5" />
                            <p className="text-gray-700 font-medium">{outcome}</p>
                          </div>
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
              </div>
            )}

            {!solution && (
              <div className="bg-white rounded-xl border border-gray-200 p-16 text-center shadow-sm">
                <div className="max-w-md mx-auto">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-10 h-10 text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Explore Our Solutions</h3>
                  <p className="text-gray-600 text-lg mb-6">
                    Select a solution above to view detailed information, deliverables, and expected outcomes
                  </p>
                  <Button asChild size="lg" variant="outline" className="border-[#246598] text-[#246598]">
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose DASsolution?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We deliver enterprise-grade wireless solutions with proven results and unmatched support
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100">
                <div className="w-12 h-12 bg-[#246598] rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Track Record</h3>
                <p className="text-gray-600">
                  Over 15 successful deployments across diverse industries with a 99.5% uptime commitment
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-100">
                <div className="w-12 h-12 bg-[#8fc447] rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Enterprise Security</h3>
                <p className="text-gray-600">
                  Industry-leading security protocols and compliance standards to protect your critical infrastructure
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-100">
                <div className="w-12 h-12 bg-[#246598] rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Support</h3>
                <p className="text-gray-600">
                  Round-the-clock technical support and monitoring to ensure your network operates at peak performance
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-xl border border-orange-100">
                <div className="w-12 h-12 bg-[#8fc447] rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Rapid Deployment</h3>
                <p className="text-gray-600">
                  Streamlined processes and experienced teams ensure quick turnaround times without compromising quality
                </p>
              </div>
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-xl border border-cyan-100">
                <div className="w-12 h-12 bg-[#246598] rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Scalable Solutions</h3>
                <p className="text-gray-600">
                  Future-proof architectures that grow with your business and adapt to evolving technology needs
                </p>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl border border-indigo-100">
                <div className="w-12 h-12 bg-[#8fc447] rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Consultation</h3>
                <p className="text-gray-600">
                  Access to industry experts who understand your unique challenges and deliver tailored solutions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#246598] to-[#1a4a70] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/telecom-network-infrastructure-technology.jpg"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Connectivity?</h2>
            <p className="text-xl mb-8 opacity-90">
              Contact our team to discuss which solution is right for your enterprise and discover how we can help you achieve your connectivity goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-[#246598] hover:bg-gray-100">
                <Link href="/contact" className="flex items-center gap-2">
                  Schedule a Consultation
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent"
              >
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
