import Link from "next/link"
import Image from "next/image"
import { MailIcon, PhoneIcon, LinkedinIcon, TwitterIcon } from "@/components/icons"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/DAS LOGO.png"
                alt="DASsolution Logo"
                width={98}
                height={98}
              />
            </div>
            <p className="text-sm text-gray-400">Enterprise wireless solutions for modern businesses.</p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-white mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/solutions/in-building-coverage" className="hover:text-[#246598] transition-colors">
                  In-Building Coverage
                </Link>
              </li>
              <li>
                <Link href="/solutions/private-5g" className="hover:text-[#246598] transition-colors">
                  Private 5G
                </Link>
              </li>
              <li>
                <Link href="/solutions/enterprise-wifi" className="hover:text-[#246598] transition-colors">
                  Enterprise Wi-Fi
                </Link>
              </li>
              <li>
                <Link href="/solutions/cctv-iot" className="hover:text-[#246598] transition-colors">
                  CCTV, IoT & Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-[#246598] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-[#246598] transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-[#246598] transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#246598] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/resources" className="hover:text-[#246598] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-[#246598] transition-colors">
                  Whitepapers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#246598] transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#246598] transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <PhoneIcon />
                <a href="tel:+1234567890" className="hover:text-[#246598] transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MailIcon />
                <a href="mailto:info@dassolution.com" className="hover:text-[#246598] transition-colors">
                  info@dassolution.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">&copy; 2025 DASsolution. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-gray-400 hover:text-[#246598] transition-colors">
              <LinkedinIcon />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#246598] transition-colors">
              <TwitterIcon />
            </Link>
          </div>
          <div className="flex gap-4 text-sm">
            <Link href="#" className="text-gray-400 hover:text-[#246598] transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#246598] transition-colors">
              Terms
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#246598] transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
