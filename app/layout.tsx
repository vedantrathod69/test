import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Diesel Marketplace - Buy & Sell Diesel Fuel",
  description:
    "Premier diesel fuel marketplace connecting buyers with verified suppliers. Get competitive pricing, quality fuel, and reliable delivery across all regions.",
  keywords: "diesel fuel, fuel marketplace, diesel suppliers, bulk diesel, fuel trading, ULSD, biodiesel",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        {children}

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Diesel Marketplace</h3>
                <p className="text-gray-400">
                  Connecting diesel buyers and suppliers with competitive pricing, quality fuel, and reliable delivery.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-4">For Buyers</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="/browse" className="hover:text-white transition-colors">
                      Browse Suppliers
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://t.me/lord_vedant19"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      Contact Vedant (@lord_vedant19)
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">For Suppliers</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="/suppliers" className="hover:text-white transition-colors">
                      List Your Business
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://t.me/GT_earner"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      Contact Gaurav (@GT_earner)
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="/contact-menu" className="hover:text-white transition-colors">
                      Contact Team
                    </a>
                  </li>
                  <li>
                    <a href="/simple-email" className="hover:text-white transition-colors">
                      Email Us
                    </a>
                  </li>
                  <li>
                    <a href="/pricing" className="hover:text-white transition-colors">
                      Live Pricing
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Diesel Marketplace. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
