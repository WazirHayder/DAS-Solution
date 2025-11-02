"use client"

export function MetricsSection() {
  const metrics = [
    { value: "99.99%", label: "SLA Uptime", description: "Downtime Reduction" },
    { value: "100%", label: "In-Building", description: "Coverage Improvement" },
    { value: "40%", label: "Cost Savings", description: "TCO Reduction" },
    { value: "50%", label: "Time Reduction", description: "Faster Deployment" },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <p className="text-xs font-semibold text-gray-500 uppercase mb-2">{metric.description}</p>
              <p className="text-4xl font-bold text-[#246598] mb-2">{metric.value}</p>
              <p className="text-sm text-gray-600">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
