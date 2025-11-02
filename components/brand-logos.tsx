"use client"

export function BrandLogos() {
  const logos = [
    { name: "Cisco", initials: "C" },
    { name: "Nokia", initials: "N" },
    { name: "Ericsson", initials: "E" },
    { name: "Samsung", initials: "S" },
    { name: "Huawei", initials: "H" },
    { name: "Qualcomm", initials: "Q" },
    { name: "Intel", initials: "I" },
    { name: "Broadcom", initials: "B" },
  ]

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-600 mb-8 uppercase tracking-wide">
          Trusted by leading enterprises worldwide
        </p>
        <div className="flex items-center justify-center gap-8 flex-wrap">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center w-24 h-24 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-[#246598]">{logo.initials}</div>
                <p className="text-xs text-gray-600 mt-1">{logo.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
