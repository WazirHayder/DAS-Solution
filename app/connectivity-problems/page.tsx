import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle, AlertTriangle, Shield, DollarSign, FileText, Users, Phone, Wifi, Signal, Zap } from "lucide-react"

const mainProblems = [
  {
    title: "No Signal Inside Buildings",
    description: "Complete cellular blackout in offices, malls, hospitals, and other indoor spaces",
    impact: "Business operations halt, emergency calls fail, customer dissatisfaction",
    icon: <Signal className="w-12 h-12 text-red-500" />,
    severity: "Critical",
    commonAreas: ["Basements", "Elevators", "Interior Rooms", "Underground Parking"]
  },
  {
    title: "Weak WiFi Coverage",
    description: "Slow internet speeds, frequent disconnections, and dead zones throughout the facility",
    impact: "Reduced productivity, frustrated employees, poor customer experience",
    icon: <Wifi className="w-12 h-12 text-orange-500" />,
    severity: "High",
    commonAreas: ["Conference Rooms", "Cafeterias", "Outdoor Areas", "Large Halls"]
  },
  {
    title: "Dropped Calls & Poor Voice Quality",
    description: "Calls getting disconnected, unclear voice, and inability to make/receive calls",
    impact: "Missed business opportunities, communication breakdown, safety concerns",
    icon: <Phone className="w-12 h-12 text-red-600" />,
    severity: "Critical",
    commonAreas: ["Office Buildings", "Hospitals", "Hotels", "Shopping Centers"]
  },
  {
    title: "Network Congestion",
    description: "Slow data speeds during peak hours when many users are connected",
    impact: "System crashes, delayed operations, user frustration, business losses",
    icon: <Zap className="w-12 h-12 text-yellow-500" />,
    severity: "Medium",
    commonAreas: ["Airports", "Stadiums", "Universities", "Corporate Offices"]
  }
]

const solutions = [
  {
    title: "Distributed Antenna System (DAS)",
    description: "Professional cellular coverage solution that eliminates dead zones completely",
    benefits: ["99.9% indoor coverage", "All carrier support", "Emergency call reliability"],
    icon: "🏗️",
    bestFor: "Large buildings, hospitals, airports, malls"
  },
  {
    title: "Enterprise WiFi Design",
    description: "High-performance WiFi 6/6E networks designed for maximum coverage and speed",
    benefits: ["Gigabit speeds", "Seamless roaming", "High device capacity"],
    icon: "📶",
    bestFor: "Offices, hotels, universities, retail spaces"
  },
  {
    title: "Small Cell Networks",
    description: "Targeted cellular boosters for specific high-traffic areas",
    benefits: ["Increased capacity", "Better call quality", "Faster data speeds"],
    icon: "📡",
    bestFor: "Dense urban areas, office complexes, shopping centers"
  },
  {
    title: "Signal Boosters & Repeaters",
    description: "Cost-effective solution to amplify existing cellular signals",
    benefits: ["Quick installation", "Budget-friendly", "Immediate improvement"],
    icon: "🔄",
    bestFor: "Small offices, retail stores, warehouses"
  }
]

const whyUsDifferent = [
  {
    title: "We Explain Everything",
    description: "Unlike others who just install equipment, we explain WHY each component is needed and HOW it solves your specific problem.",
    icon: <FileText className="w-8 h-8 text-[#246598]" />,
    details: [
      "Technical justification for every component",
      "3D design with iBwave software",
      "Detailed coverage analysis reports",
      "Alternative solutions comparison"
    ]
  },
  {
    title: "Complete Cost Transparency",
    description: "We provide detailed budgeting with no hidden costs. Every expense is explained with multiple budget options.",
    icon: <DollarSign className="w-8 h-8 text-[#246598]" />,
    details: [
      "Line-by-line cost breakdown",
      "Multiple pricing tiers available",
      "ROI calculations included",
      "Flexible payment plans"
    ]
  },
  {
    title: "Safety First Approach",
    description: "We take all precautionary measures and provide EMF compliance reports for complete peace of mind.",
    icon: <Shield className="w-8 h-8 text-[#246598]" />,
    details: [
      "EMF safety compliance reports",
      "Minimal business disruption methods",
      "Backup systems planning",
      "Post-installation monitoring"
    ]
  },
  {
    title: "Ongoing Support & Optimization",
    description: "24/7 technical support with regular performance monitoring and optimization to ensure peak performance.",
    icon: <Users className="w-8 h-8 text-[#246598]" />,
    details: [
      "24/7 dedicated technical support",
      "Regular performance reports",
      "Proactive optimization",
      "Emergency response team"
    ]
  }
]

const processSteps = [
  {
    step: "01",
    title: "Problem Assessment",
    description: "Free site survey to identify exact connectivity issues",
    details: "Our engineers visit your facility with professional RF testing equipment to map signal strength, identify dead zones, and document all connectivity problems."
  },
  {
    step: "02", 
    title: "Solution Design",
    description: "Custom solution designed specifically for your problems",
    details: "We create detailed 3D designs using iBwave software, showing exactly how our solution will solve each identified problem with coverage maps and technical specifications."
  },
  {
    step: "03",
    title: "Transparent Budgeting",
    description: "Complete cost breakdown with multiple options",
    details: "Detailed pricing for every component with explanation of why it's needed. We provide multiple budget tiers and financing options to fit your requirements."
  },
  {
    step: "04",
    title: "Professional Installation",
    description: "Expert installation with minimal business disruption",
    details: "Our certified technicians install the system following strict safety protocols with minimal disruption to your daily operations and comprehensive testing."
  },
  {
    step: "05",
    title: "Testing & Verification",
    description: "Comprehensive testing to ensure problems are solved",
    details: "We conduct thorough drive testing and signal verification in all previously problematic areas to ensure 100% problem resolution."
  },
  {
    step: "06",
    title: "Ongoing Monitoring",
    description: "Continuous monitoring to prevent future problems",
    details: "24/7 network monitoring with regular performance reports and proactive optimization to ensure your connectivity problems never return."
  }
]

export default function ConnectivityProblemsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section - Problem Focused */}
        <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/30 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
                <AlertTriangle className="w-4 h-4" />
                Connectivity Problems Solved
              </div>
              <h1 className="text-5xl font-bold mb-6">Are You Facing These Connectivity Problems?</h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                No signal inside buildings? Dropped calls? Slow WiFi? We solve these problems with professional solutions and complete transparency.
              </p>
              <Button asChild size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                <Link href="/contact">Get Free Problem Assessment</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Main Problems Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Common Connectivity Problems We Solve</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These problems can severely impact your business. We provide professional solutions with complete transparency.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mainProblems.map((problem, index) => (
                <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-l-red-500">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">{problem.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-bold text-gray-900">{problem.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          problem.severity === 'Critical' ? 'bg-red-100 text-red-800' :
                          problem.severity === 'High' ? 'bg-orange-100 text-orange-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {problem.severity}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{problem.description}</p>
                      <div className="bg-red-50 p-4 rounded-lg mb-4">
                        <p className="text-sm text-red-800 font-semibold">Business Impact: {problem.impact}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-2">Common Problem Areas:</p>
                        <div className="flex flex-wrap gap-2">
                          {problem.commonAreas.map((area, i) => (
                            <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Solutions for Every Problem</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We don't just install equipment - we solve your specific connectivity problems with the right solution
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <Card key={index} className="p-8 hover:shadow-lg transition-shadow bg-white border-l-4 border-l-[#246598]">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{solution.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                      <p className="text-gray-600 mb-4">{solution.description}</p>
                      <div className="space-y-2 mb-4">
                        {solution.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-sm text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm text-[#246598] font-semibold">Best For: {solution.bestFor}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why We're Different from Others</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Most companies just install equipment. We solve problems with complete transparency and detailed explanations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyUsDifferent.map((diff, index) => (
                <Card key={index} className="p-8 bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">{diff.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{diff.title}</h3>
                      <p className="text-gray-300 mb-4">{diff.description}</p>
                      <ul className="space-y-2">
                        {diff.details.map((detail, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#8fc447]" />
                            <span className="text-sm text-gray-300">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Solve Your Problems</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our systematic approach ensures every connectivity problem is identified and solved permanently
              </p>
            </div>
            
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#246598] text-white rounded-full flex items-center justify-center text-xl font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-lg text-gray-600 mb-3">{step.description}</p>
                    <p className="text-gray-700">{step.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problem Resolution Guarantee */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Problem Resolution Guarantee</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We guarantee to solve your connectivity problems or your money back
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">100% Problem Resolution</h3>
                <p className="text-gray-600">We guarantee to solve all identified connectivity problems or provide full refund</p>
              </Card>
              
              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#246598] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Complete Documentation</h3>
                <p className="text-gray-600">Detailed reports showing before/after coverage with technical explanations</p>
              </Card>
              
              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#8fc447] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ongoing Support</h3>
                <p className="text-gray-600">24/7 support to ensure your problems stay solved permanently</p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#246598] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Solve Your Connectivity Problems?</h2>
            <p className="text-lg mb-8 opacity-90">
              Get a free problem assessment with detailed solution proposal and transparent pricing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-[#246598] hover:bg-gray-100">
                <Link href="/contact">Get Free Problem Assessment</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#246598]">
                <Link href="/pricing">View Solution Pricing</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}