"use client"

import { useState } from "react"

interface FAQItem {
  question: string
  answer: string
  icon: string
  visual?: any
}

interface FAQSectionProps {
  faqs?: FAQItem[]
}

const faqs = [
  {
    question: "What is DAS (Distributed Antenna System)?",
    answer:
      "DAS is a network of small antennas distributed throughout a building or area to provide better cellular coverage and capacity. It's ideal for large buildings, stadiums, and areas with poor signal.",
    icon: "📡",
    visual: {
      type: "chart",
      data: [
        { name: "Before DAS", coverage: 40, color: "#ef4444" },
        { name: "After DAS", coverage: 95, color: "#8fc447" },
      ],
    },
  },
  {
    question: "How long does a typical DAS installation take?",
    answer:
      "Installation timelines vary based on building size and complexity. Most projects take 4-12 weeks from survey to deployment. We provide a detailed timeline during the discovery phase.",
    icon: "⏱️",
    visual: {
      type: "steps",
      data: [
        { name: "Survey", duration: "1-2 Weeks" },
        { name: "Design", duration: "2-4 Weeks" },
        { name: "Deploy", duration: "1-6 Weeks" },
      ],
    },
  },
  {
    question: "Do you provide maintenance and support after deployment?",
    answer:
      "Yes, we offer comprehensive AMC (Annual Maintenance Contracts) and 24/7 support. Our team monitors your system continuously and provides proactive maintenance.",
    icon: "🛠️",
    visual: {
      type: "list",
      title: "Support Features",
      data: ["24/7 Monitoring", "Proactive Maintenance", "Rapid Response", "Dedicated Team"],
    },
  },
  {
    question: "What's the difference between Private 5G and Enterprise Wi-Fi?",
    answer:
      "Private 5G offers dedicated, secure networks with lower latency and higher reliability, ideal for critical operations. Enterprise Wi-Fi is more cost-effective for general connectivity needs.",
    icon: "🔄",
    visual: {
      type: "comparison",
      data: {
        "Private 5G": { Reliability: "Very High", Latency: "Ultra-Low", Security: "High" },
        "Wi-Fi 6/6E": { Reliability: "High", Latency: "Low", Security: "Medium" },
      },
    },
  },
  {
    question: "Can you integrate with our existing network infrastructure?",
    answer:
      "Absolutely. Our solutions are designed to integrate seamlessly with existing infrastructure. We conduct a thorough assessment and provide custom integration plans.",
    icon: "🔗",
    visual: {
      type: "list",
      title: "Integration Process",
      data: ["Assessment", "Custom Planning", "Seamless Integration", "Validation"],
    },
  },
  {
    question: "What SLA do you guarantee?",
    answer:
      "We guarantee 99.99% uptime SLA for all our solutions. This includes 24/7 monitoring, rapid response times, and proactive maintenance to ensure maximum availability.",
    icon: "✅",
    visual: {
      type: "stat",
      value: "99.99%",
      label: "Guaranteed Uptime",
    },
  },
]

const VisualComponent = ({ visual }: { visual: any }) => {
  if (!visual) return null

  switch (visual.type) {
    case "chart":
      return (
        <div className="space-y-2">
          {visual.data.map((item: any) => (
            <div key={item.name} className="flex items-center gap-3">
              <span className="w-24 text-sm text-gray-400">{item.name}</span>
              <div className="w-full bg-gray-700 rounded-full h-4">
                <div
                  className="h-4 rounded-full transition-all duration-1000"
                  style={{ width: `${item.coverage}%`, backgroundColor: item.color }}
                />
              </div>
            </div>
          ))}
        </div>
      )
    case "steps":
      return (
        <div className="flex justify-between gap-2">
          {visual.data.map((step: any) => (
            <div key={step.name} className="text-center">
              <p className="font-bold text-white">{step.name}</p>
              <p className="text-xs text-gray-400">{step.duration}</p>
            </div>
          ))}
        </div>
      )
    case "list":
      return (
        <div>
          <h4 className="text-sm font-semibold text-gray-400 mb-3">{visual.title}</h4>
          <ul className="space-y-2">
            {visual.data.map((item: string) => (
              <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                <span className="text-[#8fc447] font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )
    case "comparison":
      return (
        <div className="w-full">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="pb-2 font-semibold text-gray-400">Feature</th>
                {Object.keys(visual.data).map((key) => (
                  <th key={key} className="pb-2 font-bold text-white text-center">
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.keys(Object.values(visual.data)[0] as object).map((feature) => (
                <tr key={feature} className="border-b border-gray-700/50">
                  <td className="py-2 font-semibold text-gray-400">{feature}</td>
                  {Object.values(visual.data).map((tech: any, index: number) => (
                    <td key={index} className="py-2 text-center text-gray-300">
                      {tech[feature]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    case "stat":
      return (
        <div className="text-center">
          <p className="text-6xl font-bold bg-gradient-to-r from-[#8fc447] to-green-400 bg-clip-text text-transparent">
            {visual.value}
          </p>
          <p className="text-sm font-semibold text-gray-400 mt-1">{visual.label}</p>
        </div>
      )
    default:
      return null
  }
}

export function FAQSection({ faqs: faqsProp }: FAQSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const currentFaqs = faqsProp || faqs
  const activeFaq = currentFaqs[activeIndex]

  return (
    <section className="relative py-20 bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to know about our enterprise wireless solutions and services
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Questions */}
          <div className="space-y-3">
            {currentFaqs.map((faq, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left p-4 rounded-lg transition-all duration-300 border ${
                  activeIndex === index
                    ? "bg-gray-800/80 border-[#8fc447]/50"
                    : "bg-gray-800/30 border-gray-700/50 hover:bg-gray-800/60 hover:border-gray-600"
                }`}
              >
                <p className={`font-semibold ${activeIndex === index ? "text-[#8fc447]" : "text-gray-300"}`}>
                  {faq.question}
                </p>
              </button>
            ))}
          </div>

          {/* Right: Answer */}
          <div className="relative lg:col-span-2 bg-gray-800/50 border border-gray-700/50 rounded-xl p-8 min-h-[320px] flex flex-col justify-start">
            {activeFaq && (
              <>
                <div className="animate-in fade-in duration-500">
                  <p className="text-2xl font-bold text-white mb-4">{activeFaq.question}</p>
                  <p className="text-gray-400 leading-relaxed">{activeFaq.answer}</p>
                </div>
                <div className="mt-auto pt-6 border-t border-gray-700/50 animate-in fade-in duration-500" key={activeIndex}>
                  <VisualComponent visual={activeFaq.visual} />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
