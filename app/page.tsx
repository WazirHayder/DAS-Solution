import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { BrandLogos } from "@/components/brand-logos"
import { SolutionsGrid } from "@/components/solutions-grid"
import { MetricsSection } from "@/components/metrics-section"
import { IndustriesSection } from "@/components/industries-section"
import { ProcessSection } from "@/components/process-section"
import { CaseStudyFeatured } from "@/components/case-study-featured"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ResourcesSection } from "@/components/resources-section"
import { CTASection } from "@/components/cta-section"
import { FAQSection } from "@/components/faq-section"
import { AboutUsSection } from "@/components/about-us-section"
import { PricingSection } from "@/components/pricing-section"
import { ContactForm } from "@/components/contact-form"
import { PartnersSection } from "@/components/partners-section"
import { Phone, Mail, Clock } from "lucide-react"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="bg-white">
          <HeroSection />
        </div>
        <div className="bg-white">
          <PartnersSection />
        </div>
        <div className="bg-white">
          <BrandLogos />
        </div>
        <div className="bg-gray-50">
          <AboutUsSection />
        </div>
        <div className="bg-white">
          <SolutionsGrid />
        </div>
        <div className="bg-gradient-to-b from-gray-50 to-white">
          <PricingSection />
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50">
          <MetricsSection />
        </div>
        <div className="bg-gray-50">
          <IndustriesSection />
        </div>
        <div className="bg-white">
          <ProcessSection />
        </div>
        <div className="bg-gradient-to-r from-gray-50 to-blue-50">
          <CaseStudyFeatured />
        </div>
        <div className="bg-white">
          <TestimonialsSection />
        </div>
        <div className="bg-gray-50">
          <ResourcesSection />
        </div>
        <div className="bg-white">
          <FAQSection />
        </div>
        <div className="bg-white">
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-10 items-start">
                <div className="lg:col-span-1">
                  <h2 className="text-4xl font-bold text-gray-900">Get in Touch</h2>
                  <p className="mt-4 text-gray-600">
                    Tell us about your site or project. Our specialists will get back within 2 business hours.
                  </p>
                  <div className="mt-8 space-y-4">
                    <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                      <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <Phone size={22} className="text-[#246598]" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Talk to an expert</p>
                        <a href="tel:+1234567890" className="text-gray-600 hover:text-[#246598] transition-colors">
                          +1 (234) 567-890
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                      <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <Mail size={22} className="text-[#246598]" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Email us anytime</p>
                        <a href="mailto:info@dassolution.com" className="text-gray-600 hover:text-[#246598] transition-colors">
                          info@dassolution.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                      <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <Clock size={22} className="text-[#246598]" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Fast response</p>
                        <p className="text-gray-600">Typically within 2 business hours</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <ContactForm />
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="bg-gradient-to-r from-[#246598] to-[#1a4a70]">
          <CTASection />
        </div>
      </main>
      <Footer />
    </>
  )
}
