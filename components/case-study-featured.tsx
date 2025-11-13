"use client"

import Image from "next/image"
import Link from "next/link"

export function CaseStudyFeatured() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Case Study</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden h-80">
            <Image
              src="/case-study-hotel-chain.jpg"
              alt="Global Hotel Chain Case Study"
              width={500}
              height={320}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right - Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Regional Hotel Group: 99.5% Uptime Delivered</h3>
            <p className="text-gray-600 mb-6">
              A growing hospitality brand needed seamless connectivity across 12 properties. We deployed a targeted DAS
              and Wi-Fi solution, delivering 99.5% uptime and improving guest satisfaction scores by 18%.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <p className="text-3xl font-bold text-[#246598]">12</p>
                <p className="text-sm text-gray-600">Properties Covered</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#246598]">99.5%</p>
                <p className="text-sm text-gray-600">Uptime SLA</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#246598]">18%</p>
                <p className="text-sm text-gray-600">Guest Satisfaction ↑</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#246598]">4 mo</p>
                <p className="text-sm text-gray-600">Deployment Time</p>
              </div>
            </div>

            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-[#246598] font-semibold hover:gap-3 transition-all"
            >
              View All Case Studies <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
