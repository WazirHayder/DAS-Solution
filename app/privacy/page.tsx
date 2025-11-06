import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-white via-blue-50 to-[#246598]/5 py-16 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#246598] hover:text-[#1a4a70] mb-8 transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Home</span>
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <Shield className="text-[#246598]" size={32} />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Privacy Policy</h1>
            </div>

            <p className="text-lg text-gray-600 mb-4">
              Last Updated: January 15, 2025
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              At DASsolution, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">1. Information We Collect</h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1.1 Personal Information</h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 mb-6">
                <li>Register for an account on our website</li>
                <li>Request a consultation or quote</li>
                <li>Subscribe to our newsletter or communications</li>
                <li>Contact us through our contact forms or email</li>
                <li>Participate in surveys, promotions, or events</li>
                <li>Use our services or interact with our website</li>
              </ul>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                This information may include:
              </p>
              <div className="bg-blue-50 border-l-4 border-[#246598] p-6 my-6 rounded-r-lg">
                <ul className="space-y-2 text-gray-700">
                  <li>• Name and contact information (email address, phone number, mailing address)</li>
                  <li>• Company name and job title</li>
                  <li>• Business information and project requirements</li>
                  <li>• Payment information (processed securely through third-party payment processors)</li>
                  <li>• Any other information you choose to provide</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1.2 Automatically Collected Information</h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                When you visit our website, we automatically collect certain information about your device and browsing behavior:
              </p>
              <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 mb-6">
                <li><strong>Log Data:</strong> IP address, browser type, operating system, pages visited, time spent on pages</li>
                <li><strong>Cookies and Tracking Technologies:</strong> See our Cookie Policy for detailed information</li>
                <li><strong>Device Information:</strong> Device type, screen resolution, mobile network information</li>
                <li><strong>Usage Data:</strong> How you interact with our website, features used, click patterns</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">2. How We Use Your Information</h2>
              
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                We use the information we collect for the following purposes:
              </p>
              <div className="bg-gradient-to-r from-[#246598]/10 to-[#8fc447]/10 p-8 rounded-xl my-6">
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#246598] mr-3 font-bold">•</span>
                    <span><strong>Service Delivery:</strong> To provide, maintain, and improve our services, respond to your inquiries, and process your requests</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#246598] mr-3 font-bold">•</span>
                    <span><strong>Communication:</strong> To send you updates, newsletters, marketing communications (with your consent), and important service-related information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#246598] mr-3 font-bold">•</span>
                    <span><strong>Business Operations:</strong> To manage our business operations, analyze usage patterns, and improve our website and services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#246598] mr-3 font-bold">•</span>
                    <span><strong>Legal Compliance:</strong> To comply with legal obligations, enforce our terms of service, and protect our rights and interests</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#246598] mr-3 font-bold">•</span>
                    <span><strong>Security:</strong> To detect, prevent, and address fraud, security issues, and technical problems</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">3. Information Sharing and Disclosure</h2>
              
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              <div className="space-y-4 my-6">
                <div className="bg-white border-l-4 border-blue-500 p-6 rounded-r-lg shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">Service Providers</h4>
                  <p className="text-gray-700">We may share information with trusted third-party service providers who assist us in operating our website, conducting business, or serving our users, provided they agree to keep this information confidential.</p>
                </div>
                <div className="bg-white border-l-4 border-green-500 p-6 rounded-r-lg shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">Business Transfers</h4>
                  <p className="text-gray-700">In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</p>
                </div>
                <div className="bg-white border-l-4 border-purple-500 p-6 rounded-r-lg shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">Legal Requirements</h4>
                  <p className="text-gray-700">We may disclose information when required by law, court order, or government regulation, or to protect our rights, property, or safety.</p>
                </div>
                <div className="bg-white border-l-4 border-orange-500 p-6 rounded-r-lg shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">With Your Consent</h4>
                  <p className="text-gray-700">We may share information with your explicit consent or at your direction.</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">4. Data Security</h2>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 mb-6">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Secure data storage and backup procedures</li>
                <li>Employee training on data protection</li>
              </ul>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-6 rounded-r-lg">
                <p className="text-gray-700">
                  <strong>Note:</strong> While we strive to protect your information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security, but we are committed to maintaining the highest standards of data protection.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">5. Your Rights and Choices</h2>
              
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
                  <h4 className="font-bold text-gray-900 mb-3">Access and Portability</h4>
                  <p className="text-gray-700 text-sm">Request access to or a copy of your personal information</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-100">
                  <h4 className="font-bold text-gray-900 mb-3">Correction</h4>
                  <p className="text-gray-700 text-sm">Request correction of inaccurate or incomplete information</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border border-purple-100">
                  <h4 className="font-bold text-gray-900 mb-3">Deletion</h4>
                  <p className="text-gray-700 text-sm">Request deletion of your personal information</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border border-orange-100">
                  <h4 className="font-bold text-gray-900 mb-3">Opt-Out</h4>
                  <p className="text-gray-700 text-sm">Opt-out of marketing communications and data processing</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                To exercise these rights, please contact us using the information provided in the Contact section below.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">6. Cookies and Tracking Technologies</h2>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We use cookies and similar tracking technologies to collect and use information about your browsing activities. For detailed information about our use of cookies, please see our <Link href="/cookies" className="text-[#246598] hover:underline font-semibold">Cookie Policy</Link>.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">7. Third-Party Links</h2>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">8. Children's Privacy</h2>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately, and we will take steps to delete such information.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">9. International Data Transfers</h2>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your country. We take appropriate measures to ensure that your information receives an adequate level of protection.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">10. Data Retention</h2>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">11. Changes to This Privacy Policy</h2>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">12. Contact Us</h2>
              
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-xl my-6">
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-3 text-gray-700">
                  <p><strong>DASsolution</strong></p>
                  <p>Email: <a href="mailto:privacy@dassolution.com" className="text-[#246598] hover:underline">privacy@dassolution.com</a></p>
                  <p>Phone: <a href="tel:+923331234567" className="text-[#246598] hover:underline">+92 333 1234567</a></p>
                  <p>General Inquiries: <a href="mailto:info@dassolution.com" className="text-[#246598] hover:underline">info@dassolution.com</a></p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-[#246598] p-6 my-8 rounded-r-lg">
                <p className="text-gray-700">
                  <strong>Your Privacy Matters:</strong> We are committed to protecting your privacy and will respond to your inquiries promptly. If you are not satisfied with our response, you have the right to lodge a complaint with your local data protection authority.
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap gap-4">
              <Button asChild variant="outline" className="border-[#246598] text-[#246598]">
                <Link href="/terms">View Terms of Service</Link>
              </Button>
              <Button asChild variant="outline" className="border-[#246598] text-[#246598]">
                <Link href="/cookies">View Cookie Policy</Link>
              </Button>
              <Button asChild variant="outline" className="border-[#246598] text-[#246598]">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

