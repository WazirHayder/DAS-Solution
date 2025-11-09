import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
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
              <FileText className="text-[#246598]" size={32} />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Terms of Service</h1>
            </div>

            <p className="text-lg text-gray-600 mb-4">
              Last Updated: January 15, 2025
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              These Terms of Service ("Terms") govern your access to and use of DASsolution's website, services, and products. By accessing or using our services, you agree to be bound by these Terms.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">1. Acceptance of Terms</h2>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                By accessing, browsing, or using the DASsolution website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these Terms, please do not use our services.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">2. Description of Services</h2>
              
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                DASsolution provides enterprise wireless solutions, including but not limited to:
              </p>
              <div className="bg-gradient-to-r from-[#246598]/10 to-[#8fc447]/10 p-8 rounded-xl my-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#246598] mr-2 font-bold">•</span>
                    <span>Distributed Antenna Systems (DAS) design and deployment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#246598] mr-2 font-bold">•</span>
                    <span>Private 4G/5G network solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#246598] mr-2 font-bold">•</span>
                    <span>Enterprise Wi-Fi design and implementation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#246598] mr-2 font-bold">•</span>
                    <span>CCTV, IoT, and security solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#246598] mr-2 font-bold">•</span>
                    <span>RF design and optimization services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#246598] mr-2 font-bold">•</span>
                    <span>Consulting and maintenance services</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">3. Use of Services</h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3.1 Permitted Use</h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                You may use our services only for lawful purposes and in accordance with these Terms. You agree to:
              </p>
              <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 mb-6">
                <li>Provide accurate and complete information when using our services</li>
                <li>Maintain the security of your account credentials</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Respect the intellectual property rights of DASsolution and third parties</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3.2 Prohibited Activities</h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                You agree not to:
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 my-6 rounded-r-lg">
                <ul className="space-y-2 text-gray-700">
                  <li>• Use our services for any illegal or unauthorized purpose</li>
                  <li>• Attempt to gain unauthorized access to our systems or networks</li>
                  <li>• Interfere with or disrupt the integrity or performance of our services</li>
                  <li>• Transmit any viruses, malware, or harmful code</li>
                  <li>• Reverse engineer, decompile, or disassemble any part of our services</li>
                  <li>• Use automated systems to access our services without permission</li>
                  <li>• Impersonate any person or entity or misrepresent your affiliation</li>
                  <li>• Collect or harvest information about other users without consent</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">4. Intellectual Property Rights</h2>
              
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                All content, features, and functionality of our website and services, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 mb-6">
                <li>Text, graphics, logos, images, and software</li>
                <li>Trademarks, service marks, and trade names</li>
                <li>Designs, layouts, and user interfaces</li>
                <li>Documentation, whitepapers, and technical materials</li>
              </ul>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                are owned by DASsolution or its licensors and are protected by copyright, trademark, and other intellectual property laws. You may not use, reproduce, modify, or distribute any content without our prior written permission.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">5. Service Agreements and Contracts</h2>
              
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                When you engage DASsolution for professional services, a separate service agreement or contract will be executed. That agreement will govern the specific terms of engagement, including:
              </p>
              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
                  <h4 className="font-bold text-gray-900 mb-3">Scope of Services</h4>
                  <p className="text-gray-700 text-sm">Detailed description of services to be provided</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-100">
                  <h4 className="font-bold text-gray-900 mb-3">Pricing and Payment</h4>
                  <p className="text-gray-700 text-sm">Fees, payment terms, and billing schedules</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border border-purple-100">
                  <h4 className="font-bold text-gray-900 mb-3">Timeline and Deliverables</h4>
                  <p className="text-gray-700 text-sm">Project timeline and expected deliverables</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border border-orange-100">
                  <h4 className="font-bold text-gray-900 mb-3">Warranties and Limitations</h4>
                  <p className="text-gray-700 text-sm">Service warranties and liability limitations</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">6. Payment Terms</h2>
              
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Payment terms for our services will be specified in your service agreement. General terms include:
              </p>
              <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 mb-6">
                <li>Payment due dates as specified in invoices</li>
                <li>Late payment fees may apply for overdue accounts</li>
                <li>All prices are subject to change without notice unless specified in a signed agreement</li>
                <li>Refund policies are as specified in individual service agreements</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">7. Limitation of Liability</h2>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-6 rounded-r-lg">
                <p className="text-gray-700 mb-4">
                  <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</strong>
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• DASsolution shall not be liable for any indirect, incidental, special, consequential, or punitive damages</li>
                  <li>• Our total liability for any claims arising from these Terms or our services shall not exceed the amount you paid us in the 12 months preceding the claim</li>
                  <li>• We do not guarantee that our services will be uninterrupted, error-free, or completely secure</li>
                  <li>• You use our services at your own risk</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">8. Warranties and Disclaimers</h2>
              
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Our services are provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 mb-6">
                <li>Warranties of merchantability</li>
                <li>Fitness for a particular purpose</li>
                <li>Non-infringement</li>
                <li>Accuracy or reliability of information</li>
              </ul>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We do not warrant that our services will meet your requirements or that any errors will be corrected.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">9. Indemnification</h2>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                You agree to indemnify, defend, and hold harmless DASsolution and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising out of or relating to:
              </p>
              <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 mb-6">
                <li>Your use or misuse of our services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of another party</li>
                <li>Any content or information you submit or transmit through our services</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">10. Termination</h2>
              
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                We reserve the right to suspend or terminate your access to our services at any time, with or without cause or notice, for any reason, including:
              </p>
              <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 mb-6">
                <li>Violation of these Terms</li>
                <li>Fraudulent, harmful, or illegal activity</li>
                <li>Non-payment of fees</li>
                <li>At our sole discretion</li>
              </ul>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Upon termination, your right to use our services will immediately cease. All provisions of these Terms that by their nature should survive termination shall survive.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">11. Governing Law and Dispute Resolution</h2>
              
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Any disputes arising from these Terms or our services shall be resolved through:
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6 rounded-r-lg">
                <ol className="space-y-3 text-gray-700">
                  <li><strong>1. Good Faith Negotiation:</strong> Parties will attempt to resolve disputes through good faith negotiation</li>
                  <li><strong>2. Mediation:</strong> If negotiation fails, disputes may be submitted to mediation</li>
                  <li><strong>3. Arbitration or Litigation:</strong> As specified in your service agreement or applicable law</li>
                </ol>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">12. Changes to Terms</h2>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on this page and updating the "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the modified Terms.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">13. Severability</h2>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">14. Entire Agreement</h2>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                These Terms, together with our Privacy Policy and any service agreements, constitute the entire agreement between you and DASsolution regarding your use of our services and supersede all prior agreements and understandings.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">15. Contact Information</h2>
              
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-xl my-6">
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  If you have questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-3 text-gray-700">
                  <p><strong>DASsolution</strong></p>
                  <p>Email: <a href="mailto:legal@dassolution.com" className="text-[#246598] hover:underline">legal@dassolution.com</a></p>
                  <p>Phone: <a href="tel:+923331234567" className="text-[#246598] hover:underline">+92 333 1234567</a></p>
                  <p>General Inquiries: <a href="mailto:info@dassolution.com" className="text-[#246598] hover:underline">info@dassolution.com</a></p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-[#246598] p-6 my-8 rounded-r-lg">
                <p className="text-gray-700">
                  <strong>Agreement:</strong> By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these Terms, please discontinue use of our services immediately.
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap gap-4">
              <Button asChild variant="outline" className="border-[#246598] text-[#246598]">
                <Link href="/privacy">View Privacy Policy</Link>
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


