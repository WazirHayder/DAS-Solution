"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote:
      "DASsolution transformed our in-building coverage. The deployment was seamless and the support team is exceptional.",
    author: "Sarah Johnson",
    role: "VP of Operations, Tech Corp",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Their private 5G solution gave us the competitive edge we needed. Highly recommended for enterprise deployments.",
    author: "Michael Chen",
    role: "CTO, Innovation Labs",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Best-in-class RF design and optimization. Our network performance improved by 40% after their intervention.",
    author: "Emma Rodriguez",
    role: "Network Manager, Global Enterprises",
    rating: 5,
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [autoPlay])

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
    setAutoPlay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoPlay(false)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">Trusted by leading enterprises worldwide</p>
        </div>

        <div className="relative">
          <Card className="p-8 md:p-12 bg-white">
            <div className="flex gap-1 mb-4">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-2xl font-semibold text-gray-900 mb-6">
              "{testimonials[current].quote}"
            </blockquote>
            <div>
              <p className="font-semibold text-gray-900">{testimonials[current].author}</p>
              <p className="text-gray-600">{testimonials[current].role}</p>
            </div>
          </Card>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 hover:bg-gray-200 rounded-full transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} className="text-[#246598]" />
            </button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrent(i)
                    setAutoPlay(false)
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-[#246598]" : "bg-gray-300"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 hover:bg-gray-200 rounded-full transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} className="text-[#246598]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
