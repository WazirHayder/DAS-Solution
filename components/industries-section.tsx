"use client"

import { useState } from "react"

export function IndustriesSection() {
  const [activeIndustry, setActiveIndustry] = useState("stadiums")

  const industries = {
    stadiums: {
      name: "Stadiums & Venues",
      description: "High-density connectivity for thousands of fans, ensuring a seamless event experience.",
      benefits: ["Public Wi-Fi", "Broadcast Feeds", "Cashless Payments", "Emergency Services"],
      icon: "🏟️",
      image: "/stadium Tab.jpg",
    },
    hotels: {
      name: "Hotels & Hospitality",
      description: "Deliver premium guest experiences with seamless connectivity throughout your property.",
      benefits: ["Guest Wi-Fi Coverage", "Staff Communication", "IoT Integration", "Reliable Backup 5G"],
      icon: "🏨",
      image: "/industry-hotels.jpg",
    },
    healthcare: {
      name: "Healthcare",
      description: "Mission-critical connectivity for patient care and operational excellence.",
      benefits: ["HIPAA Compliance", "Telemedicine Support", "Device Tracking", "Emergency Systems"],
      icon: "🏥",
      image: "/industry-healthcare.jpg",
    },
    airports: {
      name: "Airports & Transportation",
      description: "Seamless connectivity for passengers and operations across terminals.",
      benefits: ["Passenger Wi-Fi", "Operational Networks", "Real-time Tracking", "Security Systems"],
      icon: "✈️",
      image: "/industry-airports.jpg",
    },
    education: {
      name: "Education",
      description: "Connected campuses enabling modern learning experiences.",
      benefits: ["Campus Coverage", "Classroom Tech", "Research Networks", "Administrative Systems"],
      icon: "🎓",
      image: "/industry-education.jpg",
    },
    retail: {
      name: "Retail",
      description: "Connected stores driving customer engagement and operations.",
      benefits: ["Customer Wi-Fi", "POS Systems", "Inventory Tracking", "Analytics"],
      icon: "🛍️",
      image: "/industry-retail.jpg",
    },
    logistics: {
      name: "Warehouses & Logistics",
      description: "Connected facilities optimizing operations and safety.",
      benefits: ["Warehouse Coverage", "Fleet Tracking", "Inventory Systems", "Real-time Monitoring"],
      icon: "📦",
      image: "/industry-logistics.jpg",
    },
  }

  const industryKeys = Object.keys(industries) as Array<keyof typeof industries>

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Industries We Serve</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-base">
          Tailored solutions for every sector
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Industry Tabs */}
          <div className="space-y-3">
            {industryKeys.map((key) => (
              <button
                key={key}
                onClick={() => setActiveIndustry(key)}
                className={`w-full text-left px-5 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                  activeIndustry === key
                    ? "bg-[#246598] text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                <span className="mr-2 text-lg">{industries[key].icon}</span>
                {industries[key].name}
              </button>
            ))}
          </div>

          {/* Right: Image and Content */}
          <div className="lg:col-span-2 space-y-4">
            {/* Image */}
            <div className="relative h-48 rounded-xl overflow-hidden shadow-lg group">
              <img
                src={industries[activeIndustry as keyof typeof industries].image || "/placeholder.svg"}
                alt={industries[activeIndustry as keyof typeof industries].name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {industries[activeIndustry as keyof typeof industries].name}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {industries[activeIndustry as keyof typeof industries].description}
              </p>

              {/* Benefits */}
              <div className="grid grid-cols-2 gap-3">
                {industries[activeIndustry as keyof typeof industries].benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2 p-2 rounded-lg bg-blue-50">
                    <span className="text-[#246598] font-bold text-sm">✓</span>
                    <span className="text-gray-700 font-medium text-xs">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button className="w-full mt-4 bg-[#246598] hover:bg-[#1a4a70] text-white font-semibold py-2 rounded-lg transition-all duration-300 text-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
