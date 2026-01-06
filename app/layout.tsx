import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google" // ✅ Next.js 14 compatible
import "./globals.css"

const inter = Inter({ subsets: ["latin"] }) // font object

export const metadata: Metadata = {
  title: "DAS Solution - Private Wireless & In-Building Coverage",
  description:
    "Enterprise telecom & IT solutions for private 5G, in-building coverage, enterprise Wi-Fi, and network security.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/DAS LOGO favicon.png",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "/DAS LOGO favicon.png",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/DAS LOGO favicon.png",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "DAS Solution - Private Wireless & In-Building Coverage",
    description:
      "Enterprise telecom & IT solutions for private 5G, in-building coverage, enterprise Wi-Fi, and network security.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
