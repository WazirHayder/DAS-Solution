"use client"

import { useState, useEffect } from "react"

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const testimonials = [
    {
      quote: "DASsolution transformed our network infrastructure. The 99.99% uptime guarantee gave us peace of mind.",
      author: "John Smith",
      role: "CTO, Global Hotels Inc.",
      avatar: "JS",
    },
    {
      quote: "Their RF design expertise and professional deployment saved us months of planning. Highly recommended.",
      author: "Sarah Johnson",
      role: "VP Operations, Healthcare Network",
      avatar: "SJ",
    },
    {
      quote: "Best investment we made for our campus connectivity. Support team is exceptional.",
      author: "Michael Chen",
      role: "IT Director, University",
      avatar: "MC",
    },
  ]

  useEffect(() => {
    if (!isAutoPlay) return

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlay, testimonials.length])

  return (
    <section className="py-16 bg-gradient-to-br from-[#246598] to-[#1a4a70]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">What Our Clients Say</h2>

        <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg">
          {/* Quote */}
          <p className="text-xl text-gray-700 mb-8 italic">"{testimonials[current].quote}"</p>

          {/* Author */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-[#246598] rounded-full flex items-center justify-center text-white font-bold">
              {testimonials[current].avatar}
            </div>
            <div>
              <p className="font-semibold text-gray-900">{testimonials[current].author}</p>
              <p className="text-sm text-gray-600">{testimonials[current].role}</p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrent(index)
                    setIsAutoPlay(false)
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current ? "bg-[#246598] w-8" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => {
                  setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
                  setIsAutoPlay(false)
                }}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Previous testimonial"
              >
                ←
              </button>
              <button
                onClick={() => {
                  setCurrent((prev) => (prev + 1) % testimonials.length)
                  setIsAutoPlay(false)
                }}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
