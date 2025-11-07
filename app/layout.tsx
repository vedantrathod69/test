import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Cinzel } from "next/font/google"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700"],
})

const battlesbridge = localFont({
  src: "../public/fonts/BattlesbridgeDemoRegular.ttf",
  variable: "--font-battlesbridge",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Vedant Rathod - Data Science & Development Portfolio",
  description:
    "Portfolio of Vedant Rathod - Class 10 student specializing in Data Science, Machine Learning, and Python Development",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${cinzel.variable} ${battlesbridge.variable} antialiased`}
      >
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
