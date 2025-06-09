import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, User } from "lucide-react"
import Link from "next/link"

export default function TelegramRedirectPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Contact Our Team</h1>
          <p className="text-gray-600">
            Choose the appropriate contact person for your inquiry. We're available 24/7 on Telegram.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Vedant - For Buyers */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <User className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>VEDANT RATHOD</CardTitle>
              <CardDescription>For Buyer Inquiries</CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="text-sm text-gray-600">
                <p>• Browse diesel suppliers</p>
                <p>• Get price quotes</p>
                <p>• Fuel delivery inquiries</p>
                <p>• General buyer support</p>
              </div>
              <a href="https://t.me/lord_vedant19" target="_blank" rel="noopener noreferrer">
                <Button className="w-full" size="lg">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Contact @lord_vedant19
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Gaurav - For Sellers */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <User className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle>GAURAV</CardTitle>
              <CardDescription>For Seller Inquiries</CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="text-sm text-gray-600">
                <p>• List your fuel business</p>
                <p>• Supplier registration</p>
                <p>• Partnership opportunities</p>
                <p>• Business development</p>
              </div>
              <a href="https://t.me/GT_earner" target="_blank" rel="noopener noreferrer">
                <Button className="w-full" size="lg">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Contact @GT_earner
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-600 mb-4">
            Not sure who to contact? Start with either contact and they'll direct you to the right person.
          </p>
          <Link href="/">
            <Button variant="outline">Back to Homepage</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
