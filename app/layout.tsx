import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MyBantuan - Connecting People with Aid Programs",
  description: "Centralized platform for finding and applying to aid programs",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-800 antialiased flex flex-col min-h-screen`}>
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
