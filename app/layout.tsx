import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DASsolution - Private Wireless & In-Building Coverage",
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
    title: "DASsolution - Private Wireless & In-Building Coverage",
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
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  )
}
