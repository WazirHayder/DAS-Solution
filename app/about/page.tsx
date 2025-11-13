"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Zap, Target, Users, Award } from "lucide-react"
import { TrustBadges } from "@/components/trust-badges"
import { ProcessSection } from "@/components/process-section"
import { CTASection } from "@/components/cta-section"

const values = [
  {
    icon: <Zap className="size-8 text-[#8fc447]" />,
    title: "Innovation",
    description: "We constantly push the boundaries of technology to deliver cutting-edge wireless solutions.",
  },
  {
    icon: <Target className="size-8 text-[#8fc447]" />,
    title: "Reliability",
    description: "Our commitment to a 99.5% uptime SLA ensures your network is always on when you need it most.",
  },
  {
    icon: <Users className="size-8 text-[#8fc447]" />,
    title: "Customer-Centricity",
    description: "Your success is our success. We work closely with you to tailor solutions that meet your unique needs.",
  },
  {
    icon: <Award className="size-8 text-[#8fc447]" />,
    title: "Excellence",
    description: "From design to deployment and support, we strive for excellence in every aspect of our work.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-32 bg-gray-900 text-white">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('/professional-team-working-on-telecom-solutions.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
              Pioneering Wireless Connectivity
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We are a team of passionate engineers and strategists dedicated to designing and deploying world-class
              enterprise wireless solutions.
            </p>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Our <span className="text-[#246598]">Mission</span>
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To empower enterprises with seamless, reliable, and secure wireless infrastructure that drives
                    productivity and innovation. We bridge the connectivity gap, ensuring your operations are always
                    connected, always on.
                  </p>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Our <span className="text-[#8fc447]">Vision</span>
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To be the most trusted partner for enterprise wireless solutions globally, recognized for our
                    technical excellence, innovative approach, and unwavering commitment to our clients' success.
                  </p>
                </div>
              </div>
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/solutions-private-5g.jpg"
                  alt="Team collaborating on a network design"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide our work and define our character.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-200/50"
                >
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <TrustBadges />

        {/* Our Process */}
        <ProcessSection />

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Our Journey</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's build the future of wireless together. Whether you're looking to enhance your network or partner
              with us, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#8fc447] hover:bg-[#79a93b] text-white">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#246598] text-[#246598] hover:bg-blue-50 bg-transparent"
              >
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}