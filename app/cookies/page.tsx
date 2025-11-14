import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, Cookie } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CookiesPage() {
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
              <Cookie className="text-[#246598]" size={32} />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Cookie Policy</h1>
            </div>

            <p className="text-lg text-gray-600 mb-4">
              Last Updated: January 15, 2025
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              This Cookie Policy explains how DAS Solution uses cookies and similar tracking technologies on our website. It describes what cookies are, how we use them, and your choices regarding their use.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What Are Cookies?</h2>
              
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Cookies are small text files that are placed on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
              <div className="bg-blue-50 border-l-4 border-[#246598] p-6 my-6 rounded-r-lg">
                <p className="text-gray-700">
                  Cookies allow websites to recognize your device and store some information about your preferences or past actions. This enables websites to provide you with a more personalized and convenient experience.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">How We Use Cookies</h2>
              
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                We use cookies for various purposes to enhance your experience on our website:
              </p>
              <div className="bg-gradient-to-r from-[#246598]/10 to-[#8fc447]/10 p-8 rounded-xl my-6">
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#246598] mr-3 font-bold">•</span>
                    <span><strong>Essential Cookies:</strong> Required for the website to function properly and cannot be disabled</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#246598] mr-3 font-bold">•</span>
                    <span><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#246598] mr-3 font-bold">•</span>
                    <span><strong>Functional Cookies:</strong> Remember your preferences and settings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#246598] mr-3 font-bold">•</span>
                    <span><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and track campaign effectiveness</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Types of Cookies We Use</h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Essential Cookies</h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                These cookies are necessary for the website to function and cannot be switched off. They are usually set in response to actions made by you, such as:
              </p>
              <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 mb-6">
                <li>Setting your privacy preferences</li>
                <li>Logging in or filling in forms</li>
                <li>Maintaining security and preventing fraud</li>
              </ul>
              <div className="bg-green-50 border-l-4 border-green-500 p-6 my-6 rounded-r-lg">
                <p className="text-gray-700">
                  <strong>Note:</strong> These cookies do not store personally identifiable information and are required for the website to operate.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Performance and Analytics Cookies</h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously:
              </p>
              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                  <thead className="bg-[#246598] text-white">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Cookie Name</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Purpose</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 font-semibold text-gray-900">_ga</td>
                      <td className="px-6 py-4 text-gray-700">Google Analytics - Distinguishes users</td>
                      <td className="px-6 py-4 text-gray-700">2 years</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">_gid</td>
                      <td className="px-6 py-4 text-gray-700">Google Analytics - Distinguishes users</td>
                      <td className="px-6 py-4 text-gray-700">24 hours</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-gray-900">_gat</td>
                      <td className="px-6 py-4 text-gray-700">Google Analytics - Throttles request rate</td>
                      <td className="px-6 py-4 text-gray-700">1 minute</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Functional Cookies</h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                These cookies enable enhanced functionality and personalization:
              </p>
              <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 mb-6">
                <li>Remembering your language preferences</li>
                <li>Storing your form input data</li>
                <li>Maintaining your session state</li>
                <li>Providing personalized content based on your interests</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Marketing and Advertising Cookies</h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                These cookies are used to deliver advertisements and track their effectiveness:
              </p>
              <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 mb-6">
                <li>Tracking your visits to our website and other websites</li>
                <li>Building a profile of your interests</li>
                <li>Delivering relevant advertisements</li>
                <li>Measuring campaign performance</li>
              </ul>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-6 rounded-r-lg">
                <p className="text-gray-700">
                  <strong>Note:</strong> These cookies may be set by third-party advertising networks. We work with partners who comply with privacy regulations.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Third-Party Cookies</h2>
              
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics and deliver content:
              </p>
              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
                  <h4 className="font-bold text-gray-900 mb-3">Google Analytics</h4>
                  <p className="text-gray-700 text-sm mb-2">Helps us understand website traffic and user behavior</p>
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#246598] hover:underline text-sm">
                    View Google Privacy Policy →
                  </a>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-100">
                  <h4 className="font-bold text-gray-900 mb-3">Social Media Platforms</h4>
                  <p className="text-gray-700 text-sm mb-2">Enable social sharing and social media integration</p>
                  <p className="text-gray-700 text-sm">LinkedIn, Twitter, Facebook</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Your Cookie Choices</h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Browser Settings</h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-xl my-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#246598] mr-2 font-bold">•</span>
                    <span>View what cookies are stored on your device</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#246598] mr-2 font-bold">•</span>
                    <span>Delete cookies from your device</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#246598] mr-2 font-bold">•</span>
                    <span>Block cookies from specific websites</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#246598] mr-2 font-bold">•</span>
                    <span>Block all cookies or set preferences for cookie types</span>
                  </li>
                </ul>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Please note that blocking or deleting cookies may impact your experience on our website. Some features may not function properly if cookies are disabled.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cookie Consent Management</h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                When you first visit our website, you may see a cookie consent banner. You can:
              </p>
              <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 mb-6">
                <li>Accept all cookies</li>
                <li>Reject non-essential cookies</li>
                <li>Customize your cookie preferences</li>
                <li>Change your preferences at any time through our cookie settings</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Cookie Settings by Browser</h2>
              
              <div className="space-y-4 my-6">
                <div className="bg-white border-l-4 border-blue-500 p-6 rounded-r-lg shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">Google Chrome</h4>
                  <p className="text-gray-700 text-sm mb-2">Settings → Privacy and Security → Cookies and other site data</p>
                  <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#246598] hover:underline text-sm">
                    Learn more →
                  </a>
                </div>
                <div className="bg-white border-l-4 border-green-500 p-6 rounded-r-lg shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">Mozilla Firefox</h4>
                  <p className="text-gray-700 text-sm mb-2">Options → Privacy & Security → Cookies and Site Data</p>
                  <a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" className="text-[#246598] hover:underline text-sm">
                    Learn more →
                  </a>
                </div>
                <div className="bg-white border-l-4 border-purple-500 p-6 rounded-r-lg shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">Safari</h4>
                  <p className="text-gray-700 text-sm mb-2">Preferences → Privacy → Cookies and website data</p>
                  <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471" target="_blank" rel="noopener noreferrer" className="text-[#246598] hover:underline text-sm">
                    Learn more →
                  </a>
                </div>
                <div className="bg-white border-l-4 border-orange-500 p-6 rounded-r-lg shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">Microsoft Edge</h4>
                  <p className="text-gray-700 text-sm mb-2">Settings → Cookies and site permissions → Cookies and site data</p>
                  <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-[#246598] hover:underline text-sm">
                    Learn more →
                  </a>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Do Not Track Signals</h2>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Some browsers incorporate a "Do Not Track" (DNT) feature that signals to websites you visit that you do not want to have your online activity tracked. Currently, there is no standard for how DNT signals should be interpreted. We do not currently respond to DNT browser signals.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Updates to This Cookie Policy</h2>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated Cookie Policy on this page and updating the "Last Updated" date. We encourage you to review this Cookie Policy periodically.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Contact Us</h2>
              
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-xl my-6">
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  If you have questions about our use of cookies or this Cookie Policy, please contact us:
                </p>
                <div className="space-y-3 text-gray-700">
                  <p><strong>DAS Solution</strong></p>
                  <p>Email: <a href="mailto:privacy@dassolution.com" className="text-[#246598] hover:underline">privacy@dassolution.com</a></p>
                  <p>Phone: <a href="tel:+923331234567" className="text-[#246598] hover:underline">+92 333 1234567</a></p>
                  <p>General Inquiries: <a href="mailto:info@dassolution.com" className="text-[#246598] hover:underline">info@dassolution.com</a></p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-[#246598] p-6 my-8 rounded-r-lg">
                <p className="text-gray-700">
                  <strong>Your Privacy Matters:</strong> We respect your privacy choices. You can manage your cookie preferences at any time through your browser settings or our cookie consent tool. For more information about how we handle your personal information, please see our <Link href="/privacy" className="text-[#246598] hover:underline font-semibold">Privacy Policy</Link>.
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap gap-4">
              <Button asChild variant="outline" className="border-[#246598] text-[#246598]">
                <Link href="/privacy">View Privacy Policy</Link>
              </Button>
              <Button asChild variant="outline" className="border-[#246598] text-[#246598]">
                <Link href="/terms">View Terms of Service</Link>
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







