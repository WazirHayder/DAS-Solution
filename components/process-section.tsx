"use client"

import { CheckIcon } from "./icons"

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      description: "Understand your requirements and objectives.",
      icon: "🔍",
    },
    {
      number: "02",
      title: "Survey",
      description: "Comprehensive RF analysis and assessment.",
      icon: "📊",
    },
    {
      number: "03",
      title: "Design",
      description: "Create detailed network architecture.",
      icon: "🎨",
    },
    {
      number: "04",
      title: "Deploy",
      description: "Professional installation and setup.",
      icon: "🚀",
    },
    {
      number: "05",
      title: "Optimize",
      description: "Continuous monitoring and optimization.",
      icon: "⚡",
    },
  ]

  return (
    <section className="relative py-20 bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900 to-gray-950 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            Our Proven Process
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From initial discovery to final optimization, we follow five proven steps to guarantee network excellence.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-700/50" />

          {steps.map((step, index) => (
            <div key={step.number} className="relative mb-12 last:mb-0">
              <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-gray-800 border-2 border-[#8fc447] rounded-full flex items-center justify-center">
                <CheckIcon className="w-4 h-4 text-[#8fc447]" />
              </div>
              <div
                className={`w-[calc(50%-2rem)] p-6 bg-gray-800/50 border border-gray-700/50 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:border-[#8fc447]/50 hover:-translate-y-1 ${
                  index % 2 === 0 ? "float-left text-right" : "float-right text-left"
                }`}
              >
                <p className="text-sm font-semibold text-[#8fc447] mb-1">{`Step ${step.number}`}</p>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400">{step.description}</p>
              </div>
              <div className="clear-both" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
