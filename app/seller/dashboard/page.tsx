import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, DollarSign, Package, Plus, Edit, Eye, MessageSquare, ShoppingCart } from "lucide-react"
import Link from "next/link"

// Mock data
const stats = [
  {
    title: "Total Revenue",
    value: "$45,678",
    change: "+8.2%",
    icon: DollarSign,
    color: "text-green-600",
  },
  {
    title: "Gallons Sold",
    value: "125K",
    change: "+12.5%",
    icon: Package,
    color: "text-blue-600",
  },
  {
    title: "Active Orders",
    value: "8",
    change: "+3",
    icon: ShoppingCart,
    color: "text-purple-600",
  },
  {
    title: "Quote Requests",
    value: "15",
    change: "7 pending",
    icon: MessageSquare,
    color: "text-orange-600",
  },
]

const recentOrders = [
  {
    id: "#ORD-001",
    customer: "Metro Trucking LLC",
    product: "Ultra Low Sulfur Diesel",
    quantity: "2,500 gal",
    amount: "$8,625",
    status: "Delivered",
    date: "2024-01-15",
  },
  {
    id: "#ORD-002",
    customer: "Construction Plus Inc",
    product: "Diesel #2",
    quantity: "1,000 gal",
    amount: "$3,450",
    status: "In Transit",
    date: "2024-01-14",
  },
  {
    id: "#ORD-003",
    customer: "Harbor Logistics",
    product: "Marine Gas Oil",
    quantity: "5,000 gal",
    amount: "$18,900",
    status: "Processing",
    date: "2024-01-13",
  },
]

const products = [
  {
    id: 1,
    name: "Ultra Low Sulfur Diesel",
    price: "$3.45/gal",
    stock: "45,000 gal",
    status: "Available",
    orders: 24,
  },
  {
    id: 2,
    name: "Biodiesel B20",
    price: "$3.62/gal",
    stock: "12,000 gal",
    status: "Available",
    orders: 8,
  },
  {
    id: 3,
    name: "Marine Gas Oil",
    price: "$3.78/gal",
    stock: "0 gal",
    status: "Out of Stock",
    orders: 0,
  },
]

export default function SellerDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/" className="text-2xl font-bold text-blue-600">
                Marketplace
              </Link>
              <span className="ml-4 text-gray-600">Seller Dashboard Demo</span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" disabled>
                <Eye className="mr-2 h-4 w-4" />
                View Store
              </Button>
              <Button disabled>
                <Plus className="mr-2 h-4 w-4" />
                Add Product
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Seller Dashboard Example</h1>
          <p className="text-gray-600">This is a demonstration of what sellers can expect on their dashboard.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">{stat.change}</span> from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Orders */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                  <CardDescription>Your latest customer orders</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <div className="font-medium">{order.id}</div>
                          <div className="text-sm text-gray-600">{order.customer}</div>
                          <div className="text-sm text-gray-500">{order.product}</div>
                          <div className="text-sm text-gray-500">{order.quantity}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">{order.amount}</div>
                          <Badge
                            variant={
                              order.status === "Delivered"
                                ? "default"
                                : order.status === "Shipped"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {order.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4" disabled>
                    View All Orders
                  </Button>
                </CardContent>
              </Card>

              {/* Performance Chart Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle>Sales Performance</CardTitle>
                  <CardDescription>Your sales over the last 30 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">Sales chart would go here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="products" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Your Products</CardTitle>
                  <CardDescription>Manage your product listings</CardDescription>
                </div>
                <Button disabled>
                  <Plus className="mr-2 h-4 w-4" />
                  Add New Product
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {products.map((product) => (
                    <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div>
                          <div className="font-medium">{product.name}</div>
                          <div className="text-sm text-gray-600">Price: {product.price}</div>
                          <div className="text-sm text-gray-500">Stock: {product.stock}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <Badge variant={product.status === "Available" ? "default" : "secondary"}>
                            {product.status}
                          </Badge>
                          <div className="text-sm text-gray-500 mt-1">{product.orders} orders</div>
                        </div>
                        <Button variant="outline" size="sm" disabled>
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>All Orders</CardTitle>
                <CardDescription>Manage and track your customer orders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <div className="font-medium">{order.id}</div>
                        <div className="text-sm text-gray-600">{order.customer}</div>
                        <div className="text-sm text-gray-500">{order.product}</div>
                        <div className="text-sm text-gray-500">{order.quantity}</div>
                        <div className="text-sm text-gray-400">{order.date}</div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="font-medium">{order.amount}</div>
                          <Badge
                            variant={
                              order.status === "Delivered"
                                ? "default"
                                : order.status === "Shipped"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {order.status}
                          </Badge>
                        </div>
                        <Button variant="outline" size="sm" disabled>
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Customer Messages</CardTitle>
                <CardDescription>Communicate with your customers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">No new messages</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Customer messages will appear here when you receive them.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
