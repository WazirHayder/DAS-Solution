"use client"

import type React from "react"

import { useState } from "react"

export function GetInTouchSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    siteType: "",
    message: "",
    attachment: null as File | null,
  })
  const [attachmentPreview, setAttachmentPreview] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", company: "", phone: "", siteType: "", message: "", attachment: null })
    setAttachmentPreview(null)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null
    if (!file) return
    const allowed = ["application/pdf", "image/png", "image/jpeg", "image/jpg", "image/webp"]
    if (!allowed.includes(file.type)) return
    if (file.size > 10 * 1024 * 1024) return
    setFormData((p) => ({ ...p, attachment: file }))
    if (file.type.startsWith("image/")) setAttachmentPreview(URL.createObjectURL(file))
  }

  const removeAttachment = () => {
    setFormData((p) => ({ ...p, attachment: null }))
    setAttachmentPreview(null)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Get in <span className="text-[#8fc447]">Touch</span>
              </h2>
              <p className="text-lg text-gray-600">
                Have questions? Our team is ready to help you find the perfect solution.
              </p>
            </div>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-100">
                    <span className="text-[#8fc447] text-xl">📞</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-100">
                    <span className="text-[#8fc447] text-xl">✉️</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">hello@dassolution.com</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-100">
                    <span className="text-[#8fc447] text-xl">📍</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-600">123 Tech Street, San Francisco, CA 94105</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#8fc447] focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#8fc447] focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company"                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#8fc447] focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#8fc447] focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* Site Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Site Type</label>
                <select
                  name="siteType"
                  value={formData.siteType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#8fc447] focus:border-transparent transition-all"
                  required
                >
                  <option value="">Select a site type</option>
                  <option value="hotel">Hotel</option>
                  <option value="hospital">Hospital</option>
                  <option value="airport">Airport</option>
                  <option value="campus">Campus</option>
                  <option value="retail">Retail</option>
                  <option value="warehouse">Warehouse</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={4}                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#8fc447] focus:border-transparent transition-all resize-none"
                  required
                ></textarea>
              </div>

              {/* Attachment */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Attach file (optional)</label>
                <div className="flex items-center gap-3">
                  <label className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 text-sm">
                    <input type="file" accept="image/*,application/pdf" onChange={handleFileChange} className="hidden" />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V7.414A2 2 0 0016.586 6L13 2.414A2 2 0 0011.586 2H4z" />
                    </svg>
                    <span>{formData.attachment ? "Change file" : "Upload file"}</span>
                  </label>

                  {formData.attachment && (
                    <div className="text-sm text-gray-700">
                      <div className="flex items-center gap-2">
                        <span className="truncate max-w-[220px]">{(formData.attachment as File).name}</span>
                        <button type="button" onClick={removeAttachment} className="text-xs text-red-600 hover:underline">Remove</button>
                      </div>
                    </div>
                  )}
                </div>
                {attachmentPreview && <img src={attachmentPreview} alt="preview" className="mt-3 max-h-36 rounded-lg border" />}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-[#8fc447] text-white rounded-lg font-semibold hover:bg-[#79a93b] transition-colors duration-300"
              >
                Send Message
              </button>

              {/* Privacy Note */}
              <p className="text-xs text-gray-600 text-center">
                We respect your privacy. Your information is secure and will only be used to contact you about your
                inquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
