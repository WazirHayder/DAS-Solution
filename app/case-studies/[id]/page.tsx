import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import React from "react"
import { ArrowRight, TrendingUp, CheckCircle, Clock, Users, Target, Award } from "lucide-react"

const caseStudiesData: {
  [key: string]: {
    id: string
    title: string
    industry: string
    challenge: string
    solution: string
    results: string[]
    image: string
    heroImage: string
    overview: string
    background: string
    approach: string[]
    keyMetrics: { label: string; value: string; icon: React.ReactNode }[]
    timeline: string
    technologies: string[]
    impact: { title: string; description: string }[]
    testimonial?: {
      quote: string
      author: string
      role: string
      company: string
    }
  }
} = {
  "hotel-chain": {
    id: "hotel-chain",
    title: "Global Hotel Chain - In-Building Coverage",
    industry: "Hospitality",
    challenge: "Poor cellular coverage in guest rooms affecting guest satisfaction",
    solution: "Deployed DAS system across 15 properties",
    results: ["95% guest satisfaction improvement", "40% increase in data usage", "99.99% uptime achieved"],
    image: "/case-study-hotel-chain.jpg",
    heroImage: "/case-study-hotel-chain.jpg",
    overview: "A leading international hotel chain with 200+ properties worldwide was experiencing significant connectivity issues that were impacting guest satisfaction and operational efficiency. The challenge required a comprehensive solution that could be deployed across multiple properties while maintaining consistent quality and reliability.",
    background: "The hotel chain operates luxury properties across North America, Europe, and Asia. With the increasing reliance on mobile devices for both guests and staff, poor cellular coverage was becoming a critical issue. Guest complaints about dropped calls and slow data speeds were rising, and the hotel's reputation was at stake.",
    approach: [
      "Conducted comprehensive RF surveys across all 200+ properties to identify coverage gaps",
      "Designed custom DAS (Distributed Antenna System) solutions tailored to each property's architecture",
      "Deployed carrier-neutral systems supporting all major cellular networks",
      "Implemented enterprise Wi-Fi 6 networks to complement cellular coverage",
      "Established 24/7 monitoring and support infrastructure",
      "Provided staff training and documentation for ongoing maintenance"
    ],
    keyMetrics: [
      { label: "Properties Covered", value: "200+", icon: <Users className="w-6 h-6" /> },
      { label: "Uptime SLA", value: "99.99%", icon: <Award className="w-6 h-6" /> },
      { label: "Guest Satisfaction", value: "+35%", icon: <TrendingUp className="w-6 h-6" /> },
      { label: "Deployment Time", value: "6 months", icon: <Clock className="w-6 h-6" /> },
      { label: "Data Usage Increase", value: "40%", icon: <TrendingUp className="w-6 h-6" /> },
      { label: "ROI Achievement", value: "18 months", icon: <Target className="w-6 h-6" /> }
    ],
    timeline: "The project was completed in phases over 6 months, starting with high-priority properties and expanding systematically. Each property was deployed within 2-3 weeks, with minimal disruption to guest services.",
    technologies: [
      "Carrier-Neutral DAS Systems",
      "Wi-Fi 6 Enterprise Networks",
      "Network Management Systems",
      "RF Planning & Optimization Tools",
      "24/7 Monitoring Platforms"
    ],
    impact: [
      {
        title: "Guest Experience Transformation",
        description: "Guest satisfaction scores improved by 35%, with significant reductions in connectivity-related complaints. The seamless coverage enabled guests to stay connected throughout their stay, enhancing their overall experience."
      },
      {
        title: "Operational Efficiency",
        description: "Staff communication improved dramatically with reliable coverage across all areas of the properties. Mobile check-in processes became more efficient, reducing front desk wait times."
      },
      {
        title: "Revenue Impact",
        description: "Improved connectivity enabled better guest engagement through mobile apps and services. The 40% increase in data usage indicates guests were more engaged with hotel services and amenities."
      },
      {
        title: "Brand Reputation",
        description: "The 99.99% uptime guarantee and consistent performance across all properties strengthened the hotel chain's reputation for quality and reliability in the hospitality industry."
      }
    ],
    testimonial: {
      quote: "DASsolution transformed our connectivity infrastructure across all properties. The improvement in guest satisfaction has been remarkable, and the reliability of the system gives us complete confidence in our operations.",
      author: "Sarah Mitchell",
      role: "VP of Technology",
      company: "Global Hotel Chain"
    }
  },
  "hospital": {
    id: "hospital",
    title: "Major Hospital Network - Private 5G",
    industry: "Healthcare",
    challenge: "Need for secure, low-latency network for medical devices",
    solution: "Implemented private 5G network with security protocols",
    results: ["<10ms latency achieved", "HIPAA compliance maintained", "500+ connected medical devices"],
    image: "/industry-healthcare.jpg",
    heroImage: "/industry-healthcare.jpg",
    overview: "A major hospital network with multiple facilities required a secure, high-performance wireless network to support critical medical devices, telemedicine applications, and real-time patient monitoring systems. The solution needed to meet strict HIPAA compliance requirements while providing ultra-low latency for time-sensitive medical applications.",
    background: "The hospital network serves over 500,000 patients annually across 12 facilities. With the increasing adoption of wireless medical devices, IoT sensors, and telemedicine platforms, the existing network infrastructure was insufficient. The hospital needed a solution that could support mission-critical applications with guaranteed performance and security.",
    approach: [
      "Designed and deployed private 5G network infrastructure across all facilities",
      "Implemented network slicing to separate medical device traffic from guest Wi-Fi",
      "Established HIPAA-compliant security protocols and encryption standards",
      "Integrated with existing hospital information systems (HIS) and electronic health records (EHR)",
      "Deployed edge computing infrastructure for low-latency applications",
      "Created redundant systems for mission-critical operations",
      "Provided comprehensive staff training on network security and usage"
    ],
    keyMetrics: [
      { label: "Network Latency", value: "<10ms", icon: <Clock className="w-6 h-6" /> },
      { label: "Connected Devices", value: "500+", icon: <Users className="w-6 h-6" /> },
      { label: "HIPAA Compliance", value: "100%", icon: <Award className="w-6 h-6" /> },
      { label: "Uptime", value: "99.99%", icon: <Award className="w-6 h-6" /> },
      { label: "Facilities Covered", value: "12", icon: <Target className="w-6 h-6" /> },
      { label: "Data Throughput", value: "10 Gbps", icon: <TrendingUp className="w-6 h-6" /> }
    ],
    timeline: "The deployment was completed in phases over 8 months, prioritizing critical care units and emergency departments first. Each facility was brought online with zero downtime, ensuring continuous patient care throughout the transition.",
    technologies: [
      "Private 5G Network Infrastructure",
      "Network Slicing Technology",
      "Edge Computing Platforms",
      "HIPAA-Compliant Security Systems",
      "Medical Device Integration APIs",
      "Real-time Monitoring & Analytics"
    ],
    impact: [
      {
        title: "Enhanced Patient Care",
        description: "The ultra-low latency network enabled real-time patient monitoring and faster response times for critical alerts. Medical devices could communicate instantly, improving patient safety and care quality."
      },
      {
        title: "Telemedicine Expansion",
        description: "The reliable, high-bandwidth network enabled the hospital to expand telemedicine services, allowing remote consultations and monitoring without compromising quality or security."
      },
      {
        title: "Operational Efficiency",
        description: "Automated device tracking and inventory management reduced manual processes. Staff could access patient information and medical records instantly from any location within the facilities."
      },
      {
        title: "Compliance & Security",
        description: "The network architecture ensured 100% HIPAA compliance with end-to-end encryption and comprehensive audit trails. Security breaches were eliminated, protecting sensitive patient data."
      }
    ],
    testimonial: {
      quote: "The private 5G network has revolutionized how we deliver healthcare. The low latency and reliability have enabled new capabilities we never thought possible, while maintaining the highest security standards.",
      author: "Dr. James Anderson",
      role: "Chief Medical Information Officer",
      company: "Major Hospital Network"
    }
  },
  "airport": {
    id: "airport",
    title: "International Airport - Enterprise Wi-Fi",
    industry: "Transportation",
    challenge: "Support 50,000+ concurrent users with seamless roaming",
    solution: "Deployed Wi-Fi 6E network across terminals",
    results: ["1Gbps+ throughput", "99.95% availability", "Seamless roaming across 8 terminals"],
    image: "/industry-airports.jpg",
    heroImage: "/industry-airports.jpg",
    overview: "A major international airport serving 50+ million passengers annually needed a robust Wi-Fi infrastructure capable of supporting massive concurrent user loads while providing seamless roaming across multiple terminals. The solution needed to handle peak traffic during busy travel periods while maintaining high performance and reliability.",
    background: "The airport operates 8 terminals across a sprawling campus, with millions of passengers, staff, and airport operations relying on connectivity. The existing Wi-Fi infrastructure was unable to handle peak loads, resulting in poor user experience and operational challenges. The airport needed a solution that could scale with demand while providing enterprise-grade reliability.",
    approach: [
      "Conducted comprehensive site surveys and capacity planning for all 8 terminals",
      "Designed Wi-Fi 6E network architecture with high-density access points",
      "Implemented seamless roaming technology for uninterrupted connectivity across terminals",
      "Deployed network management and analytics platforms for real-time monitoring",
      "Created separate networks for passengers, staff, and operational systems",
      "Established redundant infrastructure for critical airport operations",
      "Implemented bandwidth management and quality of service (QoS) policies"
    ],
    keyMetrics: [
      { label: "Concurrent Users", value: "50,000+", icon: <Users className="w-6 h-6" /> },
      { label: "Network Throughput", value: "1 Gbps+", icon: <TrendingUp className="w-6 h-6" /> },
      { label: "Availability", value: "99.95%", icon: <Award className="w-6 h-6" /> },
      { label: "Terminals Covered", value: "8", icon: <Target className="w-6 h-6" /> },
      { label: "Access Points", value: "2,500+", icon: <Target className="w-6 h-6" /> },
      { label: "Roaming Latency", value: "<50ms", icon: <Clock className="w-6 h-6" /> }
    ],
    timeline: "The deployment was completed in phases over 10 months, with each terminal brought online sequentially to minimize disruption. The project included extensive testing and optimization to ensure seamless roaming and optimal performance across all areas.",
    technologies: [
      "Wi-Fi 6E Access Points",
      "Centralized Network Management",
      "Seamless Roaming Technology",
      "Bandwidth Management Systems",
      "Real-time Analytics & Monitoring",
      "Multi-tenant Network Architecture"
    ],
    impact: [
      {
        title: "Enhanced Passenger Experience",
        description: "Passengers now enjoy fast, reliable Wi-Fi throughout their journey, enabling them to work, stream, and stay connected. The seamless roaming means no reconnection needed when moving between terminals."
      },
      {
        title: "Operational Excellence",
        description: "Airport staff and operations benefit from dedicated, high-performance networks. Critical systems like baggage handling, security, and flight operations have guaranteed bandwidth and reliability."
      },
      {
        title: "Business Intelligence",
        description: "The network analytics provide valuable insights into passenger behavior, terminal usage patterns, and network performance, enabling data-driven decision making for airport operations."
      },
      {
        title: "Scalability & Future-Proofing",
        description: "The Wi-Fi 6E infrastructure is designed to handle future growth and emerging technologies. The network can easily scale to support additional terminals and increased passenger volumes."
      }
    ],
    testimonial: {
      quote: "The Wi-Fi 6E deployment has transformed connectivity at our airport. We can now confidently support tens of thousands of concurrent users while maintaining excellent performance. The seamless roaming is particularly impressive.",
      author: "Michael Chen",
      role: "Director of IT Infrastructure",
      company: "International Airport Authority"
    }
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const caseStudy = caseStudiesData[id]

  if (!caseStudy) {
    notFound()
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={caseStudy.heroImage}
              alt={caseStudy.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#246598]/90 via-[#246598]/80 to-[#246598]/70"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {caseStudy.industry}
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">{caseStudy.title}</h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto opacity-90">{caseStudy.overview}</p>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {caseStudy.keyMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3 text-[#246598]">
                    {metric.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{metric.value}</div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">{caseStudy.challenge}</p>
                <p className="text-gray-600 leading-relaxed">{caseStudy.background}</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Solution</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">{caseStudy.solution}</p>
                <div className="space-y-3">
                  {caseStudy.approach.map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#8fc447] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-600">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Key Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudy.results.map((result, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="w-6 h-6 text-[#8fc447]" />
                    <h3 className="font-semibold text-gray-900">Achievement</h3>
                  </div>
                  <p className="text-gray-700">{result}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Impact & Outcomes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudy.impact.map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technologies & Solutions</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {caseStudy.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-[#246598] text-white rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-2"><strong>Timeline:</strong> {caseStudy.timeline}</p>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        {caseStudy.testimonial && (
          <section className="py-20 bg-gradient-to-r from-[#246598] to-[#1a4a70] text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="text-6xl font-serif mb-6">"</div>
              <p className="text-xl lg:text-2xl mb-8 leading-relaxed italic">
                {caseStudy.testimonial.quote}
              </p>
              <div>
                <p className="font-semibold text-lg">{caseStudy.testimonial.author}</p>
                <p className="text-blue-200">{caseStudy.testimonial.role}, {caseStudy.testimonial.company}</p>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Connectivity?</h2>
            <p className="text-lg text-gray-600 mb-8">Let's discuss how we can help your organization achieve similar results.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#8fc447] hover:bg-[#79a93b] text-white">
                <Link href="/contact" className="flex items-center gap-2">
                  Schedule a Consultation
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#246598] text-[#246598] hover:bg-blue-50"
              >
                <Link href="/case-studies">View All Case Studies</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

