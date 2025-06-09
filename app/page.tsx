import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingBag, Store, Users, Shield, Zap, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Diesel Fuel Marketplace
            <span className="text-blue-600"> Connect & Trade</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            The premier platform for diesel fuel trading. Connect buyers with suppliers for competitive pricing,
            reliable delivery, and quality fuel across all regions.
          </p>

          {/* Main Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/buyer">
              <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-4">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Browse Suppliers
              </Button>
            </Link>
            <Link href="/seller">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 py-4">
                <Store className="mr-2 h-5 w-5" />
                List Your Business
              </Button>
            </Link>
          </div>

          {/* Contact Selection Menu */}
          <div className="max-w-md mx-auto">
            <Link href="/contact-menu">
              <Button size="lg" variant="secondary" className="w-full text-lg px-8 py-4">
                <MessageSquare className="mr-2 h-5 w-5" />
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Platform?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Verified Suppliers</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Connect with licensed diesel suppliers and distributors with verified fuel quality certificates.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle>Quality Guaranteed</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                All diesel meets industry standards with quality certificates and testing documentation.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Zap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <CardTitle>Real-Time Pricing</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Get live market prices and competitive quotes from multiple suppliers in your area.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Active Buyers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">200+</div>
              <div className="text-gray-600">Verified Suppliers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">50M+</div>
              <div className="text-gray-600">Gallons Traded</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Market Access</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
