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
import { GetInTouchSection } from "@/components/get-in-touch-section"
import { PartnersSection } from "@/components/partners-section"

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
          <GetInTouchSection />
        </div>
        <div className="bg-gradient-to-r from-[#246598] to-[#1a4a70]">
          <CTASection />
        </div>
      </main>
      <Footer />
    </>
  )
}
