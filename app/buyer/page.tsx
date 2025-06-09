import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, ShoppingCart, Star, MapPin } from "lucide-react"
import Link from "next/link"

// Mock product data
const dieselListings = [
  {
    id: 1,
    supplier: "Metro Fuel Supply Co.",
    grade: "Ultra Low Sulfur Diesel",
    pricePerGallon: 3.45,
    minQuantity: 500,
    maxQuantity: 10000,
    location: "Houston, TX",
    deliveryRadius: "50 miles",
    rating: 4.8,
    reviews: 124,
    inStock: true,
    certifications: ["EPA Certified", "ASTM D975"],
  },
  {
    id: 2,
    supplier: "Industrial Diesel Direct",
    grade: "Biodiesel B20",
    pricePerGallon: 3.62,
    minQuantity: 1000,
    maxQuantity: 25000,
    location: "Chicago, IL",
    deliveryRadius: "75 miles",
    rating: 4.9,
    reviews: 89,
    inStock: true,
    certifications: ["ASTM D6751", "EPA Certified"],
  },
  {
    id: 3,
    supplier: "Regional Energy Solutions",
    grade: "Diesel #2",
    pricePerGallon: 3.38,
    minQuantity: 250,
    maxQuantity: 5000,
    location: "Atlanta, GA",
    deliveryRadius: "40 miles",
    rating: 4.7,
    reviews: 156,
    inStock: true,
    certifications: ["ASTM D975"],
  },
  {
    id: 4,
    supplier: "West Coast Fuel Trading",
    grade: "Marine Gas Oil",
    pricePerGallon: 3.78,
    minQuantity: 2000,
    maxQuantity: 50000,
    location: "Los Angeles, CA",
    deliveryRadius: "100 miles",
    rating: 4.6,
    reviews: 203,
    inStock: false,
    certifications: ["ISO 8217", "ASTM D975"],
  },
]

const fuelGrades = ["All Grades", "Ultra Low Sulfur", "Biodiesel B20", "Diesel #2", "Marine Gas Oil", "Heating Oil"]

const categories = ["All", "Electronics", "Fashion", "Services", "Food", "Home", "Books"]

export default function BuyerPage() {
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
              <a href="https://t.me/lord_vedant19" target="_blank" rel="noopener noreferrer">
                <Button>Contact Vedant</Button>
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input placeholder="Search diesel suppliers, grades, or locations..." className="pl-10" />
            </div>
            <Button variant="outline" className="md:w-auto">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "All" ? "default" : "secondary"}
                className="cursor-pointer hover:bg-blue-100"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {dieselListings.map((listing) => (
            <Card key={listing.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant={listing.inStock ? "default" : "secondary"}>
                    {listing.inStock ? "Available" : "Out of Stock"}
                  </Badge>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                    {listing.rating}
                  </div>
                </div>
                <CardTitle className="text-lg">{listing.grade}</CardTitle>
                <CardDescription className="font-medium text-blue-600">{listing.supplier}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">${listing.pricePerGallon}/gal</span>
                    <div className="text-sm text-gray-600">
                      <MapPin className="h-3 w-3 inline mr-1" />
                      {listing.location}
                    </div>
                  </div>

                  <div className="text-sm text-gray-600">
                    <div>Min: {listing.minQuantity.toLocaleString()} gal</div>
                    <div>Max: {listing.maxQuantity.toLocaleString()} gal</div>
                    <div>Delivery: {listing.deliveryRadius}</div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {listing.certifications.map((cert, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {cert}
                      </Badge>
                    ))}
                  </div>

                  <a href="https://t.me/lord_vedant19" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full" disabled={!listing.inStock}>
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      {listing.inStock ? "Contact on Telegram" : "Notify When Available"}
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
