import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "@/components/icons"

export function HeroSection() {
  return (
    <section className="relative flex items-start justify-center overflow-hidden pt-24 lg:pt-32 pb-20 lg:pb-24">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero bg.jpg')",
          opacity: 1,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Enterprise Wireless Solutions
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Private wireless, Wi-Fi, and in-building coverage designed, deployed, and guaranteed for your
                enterprise.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#8fc447] hover:bg-[#79a93b] text-white">
                <Link href="/contact" className="flex items-center gap-2">
                  Book Consultation
                  <ArrowRightIcon />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#246598] text-[#246598] hover:bg-blue-50 bg-transparent"
              >
                <Link href="/solutions">Explore Solutions</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-[#8fc447]">99.5%</div>
                <p className="text-sm text-gray-600">SLA Uptime</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#246598]">15+</div>
                <p className="text-sm text-gray-600">Sites Deployed</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#246598]">On-call</div>
                <p className="text-sm text-gray-600">Support Coverage</p>
              </div>
            </div>
          </div>

          {/* The animated SVG was here and has been removed. The text will now stay on the left. */}
        </div>
      </div>
    </section>
  )
}
