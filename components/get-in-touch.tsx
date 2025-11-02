import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function GetInTouch() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Have questions about our solutions? Our team is ready to help you find the perfect wireless infrastructure
              solution for your enterprise.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-[#246598]" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-semibold text-gray-900">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-[#246598]" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-semibold text-gray-900">info@dassolution.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-[#246598]" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Address</p>
                  <p className="font-semibold text-gray-900">123 Tech Street, San Francisco, CA</p>
                </div>
              </div>
            </div>

            <Button asChild size="lg" className="bg-[#246598] hover:bg-[#1a4a70] text-white">
              <Link href="/contact">Contact Us Now</Link>
            </Button>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg h-80 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl font-bold text-[#246598] opacity-20 mb-4">✓</div>
              <p className="text-gray-600 font-semibold">Ready to Transform Your Wireless Infrastructure?</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
