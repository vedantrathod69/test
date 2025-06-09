import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Mail, User } from "lucide-react"
import Link from "next/link"

export default function SimpleEmailPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Diesel Marketplace
            </Link>
            <Link href="/contact-menu">
              <Button variant="ghost">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Contact Menu
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Email Our Team</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Click the buttons below to send a pre-written email to the right team member. Your email client will open
              with everything ready to send.
            </p>
          </div>

          {/* Email Options */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vedant - For Buyers */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Email Vedant</CardTitle>
                <CardDescription>For Buyer Inquiries</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="text-sm text-gray-600 space-y-1">
                  <p>
                    <strong>Email:</strong> vedantrathod1910@gmail.com
                  </p>
                  <p>
                    <strong>Best for:</strong> Finding suppliers, price quotes, delivery questions
                  </p>
                </div>

                <div className="border-t pt-4">
                  <p className="text-sm text-gray-600 mb-4">Pre-written email will include:</p>
                  <div className="bg-gray-50 p-3 rounded text-xs text-left">
                    <p>
                      <strong>Subject:</strong> Diesel Buyer Inquiry
                    </p>
                    <p>
                      <strong>Message:</strong> Hello Vedant, I am interested in purchasing diesel fuel. Please contact
                      me to discuss pricing and availability. Thank you.
                    </p>
                  </div>
                </div>

                <a
                  href="mailto:vedantrathod1910@gmail.com?subject=Diesel%20Buyer%20Inquiry&body=Hello%20Vedant%2C%0D%0A%0D%0AI%20am%20interested%20in%20purchasing%20diesel%20fuel.%20Please%20contact%20me%20to%20discuss%20pricing%20and%20availability.%0D%0A%0D%0AThank%20you"
                  className="block"
                >
                  <Button className="w-full" size="lg">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email to Vedant
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Gaurav - For Sellers */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Email Gaurav</CardTitle>
                <CardDescription>For Seller Inquiries</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="text-sm text-gray-600 space-y-1">
                  <p>
                    <strong>Email:</strong> gauravmathanikar2006@gmail.com
                  </p>
                  <p>
                    <strong>Best for:</strong> Becoming a supplier, business partnerships, registration
                  </p>
                </div>

                <div className="border-t pt-4">
                  <p className="text-sm text-gray-600 mb-4">Pre-written email will include:</p>
                  <div className="bg-gray-50 p-3 rounded text-xs text-left">
                    <p>
                      <strong>Subject:</strong> Diesel Supplier Inquiry
                    </p>
                    <p>
                      <strong>Message:</strong> Hello Gaurav, I am interested in becoming a diesel supplier on your
                      marketplace. Please contact me to discuss the registration process. Thank you.
                    </p>
                  </div>
                </div>

                <a
                  href="mailto:gauravmathanikar2006@gmail.com?subject=Diesel%20Supplier%20Inquiry&body=Hello%20Gaurav%2C%0D%0A%0D%0AI%20am%20interested%20in%20becoming%20a%20diesel%20supplier%20on%20your%20marketplace.%20Please%20contact%20me%20to%20discuss%20the%20registration%20process.%0D%0A%0D%0AThank%20you"
                  className="block"
                >
                  <Button className="w-full" size="lg">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email to Gaurav
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* General Contact */}
          <div className="mt-12 max-w-xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle>General Inquiry</CardTitle>
                <CardDescription>Not sure who to contact? Send a general email to both team members.</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="text-sm text-gray-600">
                  <p>This will send your email to both Vedant and Gaurav</p>
                </div>

                <div className="border-t pt-4">
                  <div className="bg-gray-50 p-3 rounded text-xs text-left mb-4">
                    <p>
                      <strong>Subject:</strong> General Inquiry
                    </p>
                    <p>
                      <strong>Message:</strong> Hello, I have a question about your diesel marketplace. Please contact
                      me. Thank you.
                    </p>
                  </div>
                </div>

                <a
                  href="mailto:vedantrathod1910@gmail.com,gauravmathanikar2006@gmail.com?subject=General%20Inquiry&body=Hello%2C%0D%0A%0D%0AI%20have%20a%20question%20about%20your%20diesel%20marketplace.%20Please%20contact%20me.%0D%0A%0D%0AThank%20you"
                  className="block"
                >
                  <Button variant="outline" className="w-full" size="lg">
                    <Mail className="mr-2 h-5 w-5" />
                    Send General Email
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Instructions */}
          <div className="mt-12 max-w-2xl mx-auto">
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-center text-blue-800">📧 How It Works</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-blue-700">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">
                      1
                    </div>
                    <p>Click the email button for the person you want to contact</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">
                      2
                    </div>
                    <p>Your email client (Gmail, Outlook, etc.) will open automatically</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">
                      3
                    </div>
                    <p>The email will be pre-filled with the subject and message</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">
                      4
                    </div>
                    <p>Add your contact details and any specific questions, then send!</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Alternative Contact */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Prefer instant messaging?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://t.me/lord_vedant19" target="_blank" rel="noopener noreferrer">
                <Button variant="outline">Chat with Vedant on Telegram</Button>
              </a>
              <a href="https://t.me/GT_earner" target="_blank" rel="noopener noreferrer">
                <Button variant="outline">Chat with Gaurav on Telegram</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
