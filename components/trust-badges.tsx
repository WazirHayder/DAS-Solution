"use client"

export function TrustBadges() {
  const badges = [
    { label: "Fortune 500 Clients", value: "500+" },
    { label: "Global Coverage", value: "150+" },
    { label: "Enterprise Grade", value: "99.99%" },
    { label: "ISO Certified", value: "ISO 27001" },
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-[#246598]/5 to-[#246598]/10 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-600 mb-12">
          Trusted by leading enterprises worldwide
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="flex flex-col items-center gap-3 p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-4xl font-bold text-[#246598]">{badge.value}</span>
              <span className="text-sm font-medium text-gray-700 text-center">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
