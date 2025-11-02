import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, TrendingUp } from "lucide-react"

const caseStudies = [
  {
    id: "hotel-chain",
    title: "Global Hotel Chain - In-Building Coverage",
    industry: "Hospitality",
    challenge: "Poor cellular coverage in guest rooms affecting guest satisfaction",
    solution: "Deployed DAS system across 15 properties",
    results: ["95% guest satisfaction improvement", "40% increase in data usage", "99.99% uptime achieved"],
    image: "Hotel",
  },
  {
    id: "hospital",
    title: "Major Hospital Network - Private 5G",
    industry: "Healthcare",
    challenge: "Need for secure, low-latency network for medical devices",
    solution: "Implemented private 5G network with security protocols",
    results: ["<10ms latency achieved", "HIPAA compliance maintained", "500+ connected medical devices"],
    image: "Hospital",
  },
  {
    id: "airport",
    title: "International Airport - Enterprise Wi-Fi",
    industry: "Transportation",
    challenge: "Support 50,000+ concurrent users with seamless roaming",
    solution: "Deployed Wi-Fi 6E network across terminals",
    results: ["1Gbps+ throughput", "99.95% availability", "Seamless roaming across 8 terminals"],
    image: "Airport",
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-white to-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Case Studies</h1>
            <p className="text-xl text-gray-600 max-w-2xl">Real-world success stories from our enterprise clients</p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <Card key={study.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-[#246598] opacity-20 mb-2">{study.image}</div>
                      <p className="text-gray-600 font-semibold">{study.image}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="inline-block bg-blue-100 text-[#246598] px-3 py-1 rounded-full text-xs font-semibold mb-3">
                      {study.industry}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{study.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{study.challenge}</p>
                    <div className="space-y-2 mb-6">
                      {study.results.map((result, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <TrendingUp size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{result}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={`/case-studies/${study.id}`}
                      className="inline-flex items-center gap-2 text-[#246598] hover:text-[#1a4a70] font-semibold transition-colors"
                    >
                      Read Full Case Study
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#246598] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">See How We Can Help Your Enterprise</h2>
            <p className="text-lg mb-8 opacity-90">Contact our team to discuss your specific needs and challenges.</p>
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
