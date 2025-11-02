"use client"

import Image from "next/image"

export function ResourcesSection() {
  const resources = [
    {
      category: "Technology",
      title: "5G Private Networks: The Future of Enterprise Connectivity",
      description:
        "Explore how private 5G networks are transforming enterprise operations with dedicated bandwidth and ultra-low latency.",
      date: "Oct 15, 2024",
      readTime: "8 min read",
      image: "/resource-5g-networks.jpg",
    },
    {
      category: "Best Practices",
      title: "RF Design Fundamentals for Modern Buildings",
      description:
        "A comprehensive guide to radio frequency design principles and optimization techniques for complex indoor environments.",
      date: "Oct 10, 2024",
      readTime: "12 min read",
      image: "/resource-rf-design.jpg",
    },
    {
      category: "Case Study",
      title: "Achieving 99.99% Uptime in Healthcare Networks",
      description:
        "Learn how we designed and deployed a mission-critical network for a major healthcare provider with zero downtime.",
      date: "Oct 5, 2024",
      readTime: "10 min read",
      image: "/resource-healthcare.jpg",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Resources & Insights</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Stay updated with industry trends and best practices
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative h-40 w-full">
                <Image src={resource.image || "/placeholder.svg"} alt={resource.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold text-[#246598] uppercase mb-2">{resource.category}</p>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{resource.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{resource.description}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{resource.date}</span>
                  <span>{resource.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
