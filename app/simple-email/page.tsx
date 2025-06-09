import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Mail, User, Copy } from "lucide-react"
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
              Contact our team members directly via email for any inquiries about our diesel marketplace.
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
                  <p className="text-sm text-gray-600 mb-4">Click to send email:</p>
                </div>

                <div className="flex flex-col gap-2">
                  <a href="mailto:vedantrathod1910@gmail.com?subject=Diesel%20Buyer%20Inquiry" className="block">
                    <Button className="w-full" size="lg">
                      <Mail className="mr-2 h-5 w-5" />
                      Email Vedant
                    </Button>
                  </a>
                  <div className="text-xs text-gray-500">Opens your default email client</div>
                </div>
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
                  <p className="text-sm text-gray-600 mb-4">Click to send email:</p>
                </div>

                <div className="flex flex-col gap-2">
                  <a href="mailto:gauravmathanikar2006@gmail.com?subject=Diesel%20Supplier%20Inquiry" className="block">
                    <Button className="w-full" size="lg">
                      <Mail className="mr-2 h-5 w-5" />
                      Email Gaurav
                    </Button>
                  </a>
                  <div className="text-xs text-gray-500">Opens your default email client</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Email Addresses for Manual Copy */}
          <div className="mt-12 max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Email Addresses</CardTitle>
                <CardDescription className="text-center">
                  Copy these addresses to use in your preferred email client
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-gray-50 rounded border">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-sm">Vedant Rathod (Buyer Support)</div>
                        <div className="font-mono text-sm text-gray-600">vedantrathod1910@gmail.com</div>
                      </div>
                      <Copy className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>

                  <div className="p-3 bg-gray-50 rounded border">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-sm">Gaurav (Business Development)</div>
                        <div className="font-mono text-sm text-gray-600">gauravmathanikar2006@gmail.com</div>
                      </div>
                      <Copy className="h-4 w-4 text-gray-400" />
                    </div>
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
