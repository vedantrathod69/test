import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, User, ArrowLeft, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function ContactMenuPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Diesel Marketplace
            </Link>
            <Link href="/">
              <Button variant="ghost">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contact Our Team</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the right person for your inquiry. Our team is available 24/7 on Telegram for instant support.
            </p>
          </div>

          {/* Contact Options Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Vedant - For Buyers */}
            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-blue-200">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-10 w-10 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">VEDANT RATHOD</CardTitle>
                <CardDescription className="text-lg font-medium text-blue-600">
                  Buyer Support Specialist
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <h3 className="font-semibold mb-3 text-lg">Perfect for:</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span>Finding diesel suppliers in your area</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span>Getting competitive price quotes</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span>Fuel delivery and logistics</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span>Quality certifications and compliance</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span>General buyer support and questions</span>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="text-center mb-4">
                    <div className="text-sm text-gray-500 mb-2">Contact Information</div>
                    <div className="font-mono text-sm font-semibold">@lord_vedant19</div>
                    <div className="text-xs text-gray-500">vedantrathod1910@gmail.com</div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a href="https://t.me/lord_vedant19" target="_blank" rel="noopener noreferrer" className="block">
                      <Button className="w-full">
                        <MessageSquare className="mr-2 h-5 w-5" />
                        Chat on Telegram
                      </Button>
                    </a>
                    <a href="mailto:vedantrathod1910@gmail.com" className="block">
                      <Button variant="outline" className="w-full">
                        <Mail className="mr-2 h-5 w-5" />
                        Send Email
                      </Button>
                    </a>
                  </div>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Available 24/7
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Gaurav - For Sellers */}
            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-green-200">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-2xl">GAURAV</CardTitle>
                <CardDescription className="text-lg font-medium text-green-600">
                  Business Development Manager
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <h3 className="font-semibold mb-3 text-lg">Perfect for:</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      <span>Listing your fuel supply business</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      <span>Supplier registration and verification</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      <span>Partnership and collaboration opportunities</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      <span>Business development and growth</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      <span>Commission structure and pricing</span>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="text-center mb-4">
                    <div className="text-sm text-gray-500 mb-2">Contact Information</div>
                    <div className="font-mono text-sm font-semibold">@GT_earner</div>
                    <div className="text-xs text-gray-500">gauravmathanikar2006@gmail.com</div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a href="https://t.me/GT_earner" target="_blank" rel="noopener noreferrer" className="block">
                      <Button className="w-full">
                        <MessageSquare className="mr-2 h-5 w-5" />
                        Chat on Telegram
                      </Button>
                    </a>
                    <a href="mailto:gauravmathanikar2006@gmail.com" className="block">
                      <Button variant="outline" className="w-full">
                        <Mail className="mr-2 h-5 w-5" />
                        Send Email
                      </Button>
                    </a>
                  </div>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Available 24/7
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Contact Methods */}
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle>Not sure who to contact?</CardTitle>
                <CardDescription>
                  Start with either contact and they'll direct you to the right person if needed.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a href="https://t.me/lord_vedant19" target="_blank" rel="noopener noreferrer" className="block">
                    <Button variant="outline" className="w-full">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Start with Vedant
                    </Button>
                  </a>
                  <a href="https://t.me/GT_earner" target="_blank" rel="noopener noreferrer" className="block">
                    <Button variant="outline" className="w-full">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Start with Gaurav
                    </Button>
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t text-center">
                  <p className="text-sm text-gray-600 mb-4">Need more detailed contact options?</p>
                  <div className="flex justify-center gap-4">
                    <Link href="/simple-email">
                      <Button variant="ghost" size="sm">
                        <Mail className="mr-2 h-4 w-4" />
                        Email Options
                      </Button>
                    </Link>
                    <Button variant="ghost" size="sm">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Us
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Tips */}
          <div className="mt-12 max-w-3xl mx-auto">
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-center text-blue-800">💡 Quick Tips for Faster Service</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2 text-blue-800">For Buyers:</h4>
                    <ul className="space-y-1 text-blue-700">
                      <li>• Mention your location and fuel type needed</li>
                      <li>• Include quantity requirements (gallons)</li>
                      <li>• Specify delivery timeline</li>
                      <li>• Share any quality certifications needed</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-blue-800">For Sellers:</h4>
                    <ul className="space-y-1 text-blue-700">
                      <li>• Have your business license ready</li>
                      <li>• Know your fuel grades and capacity</li>
                      <li>• Mention your service areas</li>
                      <li>• Share your certifications and compliance</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
