"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, User, ArrowRight, Search, Filter } from "lucide-react"
import { useState } from "react"

const resources = [
  {
    id: "das-guide",
    title: "Complete Guide to DAS Systems",
    type: "Whitepaper",
    category: "Technical",
    date: "2025-01-15",
    author: "DASsolution Team",
    excerpt:
      "Learn everything you need to know about distributed antenna systems, from design principles to deployment best practices.",
    readTime: "15 min read",
  },
  {
    id: "private-5g-trends",
    title: "2025 Private 5G Trends & Predictions",
    type: "Blog Post",
    category: "Trends",
    date: "2025-01-10",
    author: "Sarah Johnson",
    excerpt: "Explore the latest trends in private 5G networks and what enterprises should expect in 2025.",
    readTime: "8 min read",
  },
  {
    id: "wifi6-deployment",
    title: "Wi-Fi 6E Deployment Best Practices",
    type: "Guide",
    category: "Best Practices",
    date: "2025-01-05",
    author: "Michael Chen",
    excerpt:
      "A comprehensive guide to deploying Wi-Fi 6E networks in enterprise environments with maximum performance.",
    readTime: "12 min read",
  },
  {
    id: "network-security",
    title: "Wireless Network Security Essentials",
    type: "Whitepaper",
    category: "Security",
    date: "2024-12-28",
    author: "DASsolution Team",
    excerpt:
      "Understand the critical security considerations for modern wireless networks and how to protect your infrastructure.",
    readTime: "18 min read",
  },
  {
    id: "rf-optimization",
    title: "RF Optimization Techniques for Maximum Coverage",
    type: "Technical Guide",
    category: "Technical",
    date: "2024-12-20",
    author: "Emma Rodriguez",
    excerpt:
      "Deep dive into RF optimization techniques that can improve your network coverage and performance by up to 40%.",
    readTime: "20 min read",
  },
  {
    id: "case-study-hotel",
    title: "Case Study: Hotel Chain Coverage Transformation",
    type: "Case Study",
    category: "Case Study",
    date: "2024-12-15",
    author: "DASsolution Team",
    excerpt: "See how a global hotel chain improved guest satisfaction by 95% with our DAS solution.",
    readTime: "10 min read",
  },
  {
    id: "future-wireless-tech",
    title: "The Future of Wireless Technology: What's Next?",
    type: "Guest Post",
    category: "Trends",
    date: "2025-01-08",
    author: "Dr. James Wilson",
    excerpt: "An expert analysis of emerging wireless technologies and their potential impact on enterprise connectivity.",
    readTime: "12 min read",
  },
  {
    id: "iot-implementation",
    title: "IoT Implementation Strategies for Smart Buildings",
    type: "Blog Post",
    category: "Best Practices",
    date: "2025-01-03",
    author: "DASsolution Team",
    excerpt: "Discover how to successfully implement IoT solutions in smart building environments with reliable connectivity.",
    readTime: "14 min read",
  },
  {
    id: "cost-optimization",
    title: "Cost Optimization Strategies for Enterprise Networks",
    type: "Whitepaper",
    category: "Business",
    date: "2024-12-22",
    author: "DASsolution Team",
    excerpt: "Learn proven strategies to reduce network costs while maintaining or improving performance and reliability.",
    readTime: "16 min read",
  },
  {
    id: "case-study-healthcare",
    title: "Case Study: Healthcare Network Reliability Achievement",
    type: "Case Study",
    category: "Case Study",
    date: "2024-12-10",
    author: "DASsolution Team",
    excerpt: "How a major hospital achieved 99.99% network uptime with our comprehensive wireless solution.",
    readTime: "11 min read",
  },
  {
    id: "5g-vs-wifi6",
    title: "5G vs Wi-Fi 6: Choosing the Right Technology",
    type: "Blog Post",
    category: "Technical",
    date: "2024-12-05",
    author: "Michael Chen",
    excerpt: "A detailed comparison of 5G and Wi-Fi 6 technologies to help you make informed decisions for your network.",
    readTime: "10 min read",
  },
  {
    id: "guest-post-enterprise",
    title: "Enterprise Wireless: A Strategic Approach",
    type: "Guest Post",
    category: "Business",
    date: "2024-11-28",
    author: "Patricia Martinez",
    excerpt: "Industry expert shares insights on developing a strategic approach to enterprise wireless connectivity.",
    readTime: "13 min read",
  },
]

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState<string>("All")
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const types = ["All", ...Array.from(new Set(resources.map((r) => r.type)))]
  const categories = ["All", ...Array.from(new Set(resources.map((r) => r.category)))]

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.author.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = selectedType === "All" || resource.type === selectedType
    const matchesCategory = selectedCategory === "All" || resource.category === selectedCategory

    return matchesSearch && matchesType && matchesCategory
  })

  const getTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      Whitepaper: "bg-blue-100 text-blue-700",
      "Blog Post": "bg-green-100 text-green-700",
      Guide: "bg-purple-100 text-purple-700",
      "Technical Guide": "bg-orange-100 text-orange-700",
      "Case Study": "bg-pink-100 text-pink-700",
      "Guest Post": "bg-indigo-100 text-indigo-700",
    }
    return colors[type] || "bg-gray-100 text-gray-700"
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-white via-blue-50 to-[#246598]/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Resources & Blog
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Expert insights, comprehensive guides, case studies, and industry analysis on
                wireless and IT solutions
              </p>
            </div>

            {/* Search and Filters */}
            <div className="max-w-4xl mx-auto">
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search articles, guides, and case studies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#246598] focus:border-transparent"
                />
              </div>

              <div className="flex flex-wrap gap-3 justify-center">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                  <Filter size={18} className="text-gray-500" />
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="border-none outline-none text-sm font-medium text-gray-700 bg-transparent cursor-pointer"
                  >
                    {types.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                  <Filter size={18} className="text-gray-500" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="border-none outline-none text-sm font-medium text-gray-700 bg-transparent cursor-pointer"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredResources.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl text-gray-500 mb-4">No resources found matching your criteria.</p>
                <Button
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedType("All")
                    setSelectedCategory("All")
                  }}
                  variant="outline"
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <>
                <div className="mb-8 flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {filteredResources.length} {filteredResources.length === 1 ? "Resource" : "Resources"} Found
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredResources.map((resource) => (
                    <Card
                      key={resource.id}
                      className="p-6 hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-200 hover:border-[#246598]/30 group"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(resource.type)}`}>
                          {resource.type}
                        </span>
                        <span className="text-xs text-gray-500">{resource.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#246598] transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-gray-600 mb-4 flex-1 line-clamp-3">{resource.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 border-t border-gray-200 pt-4">
                        <div className="flex items-center gap-1">
                          <User size={16} />
                          {resource.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          {new Date(resource.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </div>
                      </div>
                      <Link
                        href={`/resources/${resource.id}`}
                        className="inline-flex items-center gap-2 text-[#246598] hover:text-[#1a4a70] font-semibold transition-colors group-hover:gap-3"
                      >
                        Read More
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Card>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-[#246598]/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter for the latest insights on wireless technology and
              enterprise solutions. Get expert analysis delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#246598]"
              />
              <Button className="bg-[#246598] hover:bg-[#1a4a70] text-white">Subscribe</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
