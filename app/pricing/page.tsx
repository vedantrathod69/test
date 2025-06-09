import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, MapPin, Clock, Fuel } from "lucide-react"
import Link from "next/link"

// Mock real-time pricing data
const currentPrices = [
  {
    region: "Gulf Coast (Houston, TX)",
    grade: "Ultra Low Sulfur Diesel",
    price: 3.45,
    change: +0.02,
    lastUpdated: "2 minutes ago",
  },
  {
    region: "Midwest (Chicago, IL)",
    grade: "Ultra Low Sulfur Diesel",
    price: 3.52,
    change: -0.01,
    lastUpdated: "5 minutes ago",
  },
  {
    region: "West Coast (Los Angeles, CA)",
    grade: "Ultra Low Sulfur Diesel",
    price: 3.78,
    change: +0.03,
    lastUpdated: "1 minute ago",
  },
  {
    region: "Northeast (New York, NY)",
    grade: "Ultra Low Sulfur Diesel",
    price: 3.65,
    change: +0.01,
    lastUpdated: "3 minutes ago",
  },
]

const fuelGrades = [
  {
    name: "Ultra Low Sulfur Diesel (ULSD)",
    description: "Standard highway diesel with <15 ppm sulfur content",
    avgPrice: 3.58,
    specifications: ["ASTM D975", "EPA Certified", "15 ppm sulfur max"],
  },
  {
    name: "Biodiesel B20",
    description: "20% biodiesel blend with 80% petroleum diesel",
    avgPrice: 3.65,
    specifications: ["ASTM D7467", "20% bio content", "Cold weather stable"],
  },
  {
    name: "Marine Gas Oil",
    description: "Marine diesel fuel for vessels and equipment",
    avgPrice: 3.82,
    specifications: ["ISO 8217", "Low sulfur", "Marine grade"],
  },
  {
    name: "Off-Road Diesel",
    description: "Red-dyed diesel for agricultural and construction use",
    avgPrice: 3.35,
    specifications: ["ASTM D975", "Red dyed", "Tax exempt"],
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Diesel Marketplace
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/contact-menu">
                <Button variant="ghost">Contact Team</Button>
              </Link>
              <a href="https://t.me/lord_vedant19" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost">Contact Us</Button>
              </a>
              <a href="https://t.me/GT_earner" target="_blank" rel="noopener noreferrer">
                <Button>Get Started</Button>
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Real-Time Diesel Pricing</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get live market prices for diesel fuel across all major regions. Updated every minute from verified
            suppliers.
          </p>
        </div>

        {/* Live Pricing Table */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Current Market Prices</h2>
            <div className="flex items-center text-sm text-gray-600">
              <Clock className="h-4 w-4 mr-1" />
              Last updated: {currentPrices[0].lastUpdated}
            </div>
          </div>

          <div className="grid gap-4">
            {currentPrices.map((price, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Fuel className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{price.grade}</h3>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-4 w-4 mr-1" />
                          {price.region}
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-2xl font-bold">${price.price.toFixed(2)}/gal</div>
                      <div className="flex items-center justify-end">
                        <TrendingUp
                          className={`h-4 w-4 mr-1 ${price.change >= 0 ? "text-green-600" : "text-red-600"}`}
                        />
                        <span className={price.change >= 0 ? "text-green-600" : "text-red-600"}>
                          {price.change >= 0 ? "+" : ""}
                          {price.change.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Fuel Grades Information */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Diesel Fuel Grades & Specifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {fuelGrades.map((grade, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {grade.name}
                    <Badge variant="outline">${grade.avgPrice.toFixed(2)}/gal avg</Badge>
                  </CardTitle>
                  <CardDescription>{grade.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-medium">Specifications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {grade.specifications.map((spec, specIndex) => (
                        <Badge key={specIndex} variant="secondary">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Market Insights */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Market Insights</CardTitle>
            <CardDescription>Key factors affecting diesel pricing today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">↑ 2.3%</div>
                <div className="text-sm text-gray-600">Weekly Average</div>
                <p className="text-xs text-gray-500 mt-1">Prices trending upward</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">$3.58</div>
                <div className="text-sm text-gray-600">National Average</div>
                <p className="text-xs text-gray-500 mt-1">ULSD nationwide</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">15¢</div>
                <div className="text-sm text-gray-600">Regional Spread</div>
                <p className="text-xs text-gray-500 mt-1">Price difference range</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Ready to Trade Diesel?</CardTitle>
              <CardDescription>
                Join our marketplace to access real-time pricing, connect with verified suppliers, and streamline your
                fuel procurement.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://t.me/lord_vedant19" target="_blank" rel="noopener noreferrer">
                <Button size="lg">Find Suppliers</Button>
              </a>
              <a href="https://t.me/GT_earner" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline">
                  Become a Supplier
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
