import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"

const resources = [
  {
    id: "das-guide",
    title: "Complete Guide to DAS Systems",
    type: "Whitepaper",
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
    date: "2025-01-10",
    author: "Sarah Johnson",
    excerpt: "Explore the latest trends in private 5G networks and what enterprises should expect in 2025.",
    readTime: "8 min read",
  },
  {
    id: "wifi6-deployment",
    title: "Wi-Fi 6E Deployment Best Practices",
    type: "Guide",
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
    date: "2024-12-15",
    author: "DASsolution Team",
    excerpt: "See how a global hotel chain improved guest satisfaction by 95% with our DAS solution.",
    readTime: "10 min read",
  },
]

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-white to-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Resources & Blog</h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Expert insights, guides, and case studies on wireless and IT solutions
            </p>
          </div>
        </section>

        {/* Resources */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map((resource) => (
                <Card key={resource.id} className="p-6 hover:shadow-lg transition-shadow flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="inline-block bg-blue-100 text-[#246598] px-3 py-1 rounded-full text-xs font-semibold">
                      {resource.type}
                    </span>
                    <span className="text-xs text-gray-500">{resource.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                  <p className="text-gray-600 mb-4 flex-1">{resource.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 border-t border-gray-200 pt-4">
                    <div className="flex items-center gap-1">
                      <User size={16} />
                      {resource.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {new Date(resource.date).toLocaleDateString()}
                    </div>
                  </div>
                  <Link
                    href={`/resources/${resource.id}`}
                    className="inline-flex items-center gap-2 text-[#246598] hover:text-[#1a4a70] font-semibold transition-colors"
                  >
                    Read More
                    <ArrowRight size={16} />
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter for the latest insights on wireless technology and enterprise solutions.
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
