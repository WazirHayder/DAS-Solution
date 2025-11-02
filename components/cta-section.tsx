"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#246598] to-[#1a4a70] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Network?</h2>
        <p className="text-lg text-blue-100 mb-8">
          Get a free coverage assessment and discover how DASsolution can optimize your infrastructure.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-white text-[#246598] hover:bg-gray-100 font-semibold">
            <Link href="/contact">Get Free Assessment</Link>
          </Button>
          <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
            <Link href="/contact">Schedule Demo</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
