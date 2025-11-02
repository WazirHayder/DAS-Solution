import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ArrowRightIcon,
  WifiIcon,
  RadioIcon,
  ZapIcon,
  ShieldIcon,
  SmartphoneIcon,
  WrenchIcon,
} from "@/components/icons"

const solutions = [
  {
    id: "in-building-coverage",
    title: "In-Building Coverage (DAS)",
    description: "Distributed antenna systems for seamless indoor coverage",
    icon: WifiIcon,
    bgImage: "/solutions-in-building.jpg",
  },
  {
    id: "private-5g",
    title: "Private 4G/5G",
    description: "Dedicated private cellular networks for enterprises",
    icon: RadioIcon,
    bgImage: "/solutions-private-5g.jpg",
  },
  {
    id: "enterprise-wifi",
    title: "Enterprise Wi-Fi Design",
    description: "High-performance Wi-Fi 6/6E networks",
    icon: ZapIcon,
    bgImage: "/solutions-enterprise-wifi.jpg",
  },
  {
    id: "cctv-iot",
    title: "CCTV, IoT & Security",
    description: "CCTV, IoT, and security solutions",
    icon: ShieldIcon,
    bgImage: "/solutions-security.jpg",
  },
  {
    id: "rf-design",
    title: "RF Design & Optimization",
    description: "Drive testing and performance tuning",
    icon: SmartphoneIcon,
    bgImage: "/solutions-optimization.jpg",
  },
  {
    id: "consulting",
    title: "Consulting & AMCs",
    description: "24/7 technical support and AMCs",
    icon: WrenchIcon,
    bgImage: "/solutions-maintenance.jpg",
  },
]

export function SolutionsGrid() {
  return (
    <section
      className="relative py-20 bg-gray-50 overflow-hidden"
      style={{
        backgroundImage: "url('/Our Solution BG.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-3">Our Solutions</h2>
          <p className="text-base text-gray-200 max-w-2xl">
            Comprehensive wireless solutions tailored to your enterprise needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {solutions.map((solution) => {
            const Icon = solution.icon
            return (
              <Card
                key={solution.id}
                className="p-6 hover:shadow-xl transition-all duration-500 bg-white border-gray-200 overflow-hidden relative group"
              >
                {/* Background Image on Hover */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundImage: `url(${solution.bgImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 group-hover:bg-white/20 flex items-center justify-center flex-shrink-0 transition-colors duration-500">
                      <Icon className="text-[#246598] group-hover:text-[#8fc447] transition-colors duration-500" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-white transition-colors duration-500 mb-1">
                      {solution.title}
                    </h3>
                    <p className="text-sm text-gray-600 group-hover:text-gray-200 transition-colors duration-500 mb-4 leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                  <div className="mt-auto">
                    <Link
                      href={`/solutions/${solution.id}`}
                      className="inline-flex items-center gap-2 text-[#246598] group-hover:text-white text-sm font-semibold transition-colors duration-500"
                    >
                      Learn more
                      <ArrowRightIcon className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
