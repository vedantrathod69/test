import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, DollarSign, Users, TrendingUp, Upload, MessageSquare } from "lucide-react"
import Link from "next/link"

const steps = [
  {
    step: 1,
    title: "Register Your Fuel Business",
    description: "Verify your fuel supplier license, certifications, and business credentials.",
  },
  {
    step: 2,
    title: "List Your Diesel Products",
    description: "Add your fuel grades, pricing, delivery areas, and minimum order quantities.",
  },
  {
    step: 3,
    title: "Connect with Buyers",
    description: "Receive purchase requests, negotiate terms, and manage deliveries.",
  },
]

const benefits = [
  {
    icon: Users,
    title: "Access to Fleet Buyers",
    description: "Connect with trucking companies, construction firms, and industrial buyers.",
  },
  {
    icon: DollarSign,
    title: "Competitive Marketplace",
    description: "Set your own prices and compete fairly in the regional diesel market.",
  },
  {
    icon: TrendingUp,
    title: "Market Analytics",
    description: "Track regional pricing trends and optimize your fuel pricing strategy.",
  },
  {
    icon: MessageSquare,
    title: "Direct Negotiations",
    description: "Communicate directly with buyers for custom pricing and delivery terms.",
  },
]

export default function SellerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Marketplace
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/contact-menu">
                <Button variant="ghost">Contact Team</Button>
              </Link>
              <a href="https://t.me/GT_earner" target="_blank" rel="noopener noreferrer">
                <Button>Contact Gaurav</Button>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Supply Diesel Fuel</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Connect with businesses needing reliable diesel fuel supply. Expand your customer base and grow your fuel
            distribution business.
          </p>
          <a href="https://t.me/GT_earner" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Upload className="mr-2 h-5 w-5" />
              Contact Sales Team
            </Button>
          </a>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <Card key={step.step} className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{step.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Sell With Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <benefit.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Simple, Transparent Pricing</h2>
          <Card className="p-8">
            <div className="text-4xl font-bold text-blue-600 mb-4">5%</div>
            <div className="text-xl font-semibold mb-4">Commission per sale</div>
            <div className="text-gray-600 mb-6">
              No monthly fees, no setup costs. You only pay when you make a sale.
            </div>
            <div className="space-y-2 text-left">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <span>Free account setup</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <span>Unlimited product listings</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <span>24/7 customer support</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <span>Advanced analytics dashboard</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Interested in Selling?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our sales team to learn more about joining our marketplace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://t.me/GT_earner" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Contact Sales Team
              </Button>
            </a>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-gray-900"
              >
                More Information
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
