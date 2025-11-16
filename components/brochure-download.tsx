"use client"

import { useState, useEffect } from "react"
import { Download, FileText, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BrochureDownload() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    // Show button after scrolling down a bit
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsVisible(scrollPosition > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDownload = () => {
    // Path to the brochure in the public directory
    const brochurePath = "/DAS Solution Brochure.pdf"
    const link = document.createElement("a")
    link.href = brochurePath
    link.download = "DAS Solution Brochure.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (!isVisible) return null

  return (
    <div className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
      {isExpanded ? (
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 sm:p-6 max-w-[calc(100vw-2rem)] sm:max-w-sm transform transition-all duration-300 animate-fade-in-up">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#246598] to-[#1a4a70] flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Download Our Brochure</h3>
                <p className="text-sm text-gray-600 mt-1">Get complete information about our solutions</p>
              </div>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors p-1 flex-shrink-0"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <Button
            onClick={handleDownload}
            className="w-full bg-gradient-to-r from-[#246598] to-[#1a4a70] hover:from-[#1a4a70] hover:to-[#246598] text-white font-semibold py-6 text-base shadow-lg transition-all duration-300"
          >
            <Download className="w-5 h-5 mr-2" />
            Download PDF Brochure
          </Button>
          <p className="text-xs text-gray-500 text-center mt-3">
            Free download • No registration required
          </p>
        </div>
      ) : (
        <button
          onClick={() => setIsExpanded(true)}
          className="group relative bg-gradient-to-r from-[#246598] to-[#1a4a70] hover:from-[#1a4a70] hover:to-[#246598] text-white rounded-full p-4 shadow-2xl hover:shadow-[0_20px_50px_rgba(36,101,152,0.4)] transition-all duration-300 hover:scale-110 flex items-center gap-3"
          aria-label="Download Brochure"
        >
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#8fc447] rounded-full animate-pulse"></div>
          <FileText className="w-6 h-6 group-hover:scale-110 transition-transform" />
          <span className="font-semibold hidden sm:inline-block pr-2">Brochure</span>
          <Download className="w-5 h-5 sm:hidden" />
        </button>
      )}
    </div>
  )
}
