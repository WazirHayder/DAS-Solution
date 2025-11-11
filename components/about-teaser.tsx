import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AboutTeaser() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About DAS Solution</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We are a leading provider of enterprise wireless and IT solutions, specializing in private 5G networks,
              in-building coverage systems, and enterprise Wi-Fi deployments.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With over 500 successful deployments and a 99.99% SLA uptime guarantee, we help enterprises achieve
              seamless connectivity across their operations.
            </p>
            <Button asChild className="bg-[#246598] hover:bg-[#1a4a70] text-white">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg h-80 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl font-bold text-[#246598] opacity-20 mb-4">DAS Solution</div>
              <p className="text-gray-600 font-semibold">Enterprise Wireless Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
