"use client"

import Image from "next/image"
import Link from "next/link"

export function AboutUsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 lg:h-full min-h-96 rounded-2xl overflow-hidden shadow-lg">
            <Image src="/professional-team-working-on-telecom-solutions.jpg" alt="DAS Solution team" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#246598]/20 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                About <span className="text-[#8fc447]">DAS Solution</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are a leading provider of telecom and IT solutions, specializing in private wireless networks,
                in-building coverage, and enterprise connectivity. With over a decade of experience, we've helped
                hundreds of organizations transform their communication infrastructure.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-100">
                    <span className="text-[#8fc447] font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Industry Expertise</h3>
                  <p className="text-gray-600">
                    Trusted by enterprises across hospitality, healthcare, airports, and more.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-100">
                    <span className="text-[#8fc447] font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">24/7 Support</h3>
                  <p className="text-gray-600">
                    Our dedicated team is always available to ensure your network runs smoothly.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-100">
                    <span className="text-[#8fc447] font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Proven Results</h3>
                  <p className="text-gray-600">99.99% SLA uptime and measurable ROI for every deployment.</p>
                </div>
              </div>
            </div>

            <Link href="/about">
              <button className="mt-8 px-8 py-3 bg-[#8fc447] text-white rounded-lg font-semibold hover:bg-[#79a93b] transition-colors duration-300">
                Learn More About Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
