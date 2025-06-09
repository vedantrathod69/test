import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowLeft, Mail, Send, ShoppingBag, Store } from "lucide-react"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"

const buyerTemplates = [
  {
    id: "price-quote",
    name: "Request Price Quote",
    subject: "Diesel Price Quote Request",
    template: `Dear Team,

I'm interested in purchasing diesel fuel with the following specifications:

- Fuel Type: [FUEL_TYPE]
- Quantity Needed: [QUANTITY] gallons
- Delivery Location: [LOCATION]
- Delivery Timeline: [TIMELINE]
- Special Requirements: [SPECIAL_REQUIREMENTS]

Please provide me with your current pricing and availability for this order.

Thank you,
[YOUR_NAME]
[YOUR_COMPANY]
[YOUR_CONTACT]`,
    fields: [
      {
        id: "fuel-type",
        label: "Fuel Type",
        type: "select",
        options: ["Ultra Low Sulfur Diesel", "Biodiesel B20", "Diesel #2", "Marine Gas Oil", "Heating Oil"],
      },
      { id: "quantity", label: "Quantity Needed (gallons)", type: "input", placeholder: "e.g., 5,000" },
      { id: "location", label: "Delivery Location", type: "input", placeholder: "City, State" },
      {
        id: "timeline",
        label: "Delivery Timeline",
        type: "select",
        options: ["As soon as possible", "Within 1 week", "Within 2 weeks", "Within 30 days", "Flexible"],
      },
      {
        id: "special-requirements",
        label: "Special Requirements",
        type: "textarea",
        placeholder: "Any specific requirements or questions",
      },
    ],
  },
  {
    id: "bulk-purchase",
    name: "Bulk Purchase Inquiry",
    subject: "Bulk Diesel Purchase Inquiry",
    template: `Dear Team,

I'm looking to establish a regular bulk diesel supply for my business:

- Company Type: [COMPANY_TYPE]
- Monthly Volume: [MONTHLY_VOLUME] gallons
- Preferred Delivery Schedule: [DELIVERY_SCHEDULE]
- Delivery Locations: [DELIVERY_LOCATIONS]
- Contract Length Interest: [CONTRACT_LENGTH]

Please contact me to discuss bulk pricing options and contract terms.

Thank you,
[YOUR_NAME]
[YOUR_COMPANY]
[YOUR_CONTACT]`,
    fields: [
      {
        id: "company-type",
        label: "Company Type",
        type: "select",
        options: ["Trucking Company", "Construction", "Manufacturing", "Agriculture", "Marine", "Other"],
      },
      { id: "monthly-volume", label: "Monthly Volume (gallons)", type: "input", placeholder: "e.g., 25,000" },
      {
        id: "delivery-schedule",
        label: "Preferred Delivery Schedule",
        type: "select",
        options: ["Weekly", "Bi-weekly", "Monthly", "On-demand", "Custom"],
      },
      {
        id: "delivery-locations",
        label: "Delivery Locations",
        type: "textarea",
        placeholder: "List all locations where fuel is needed",
      },
      {
        id: "contract-length",
        label: "Contract Length Interest",
        type: "select",
        options: ["3 months", "6 months", "1 year", "2+ years", "Not sure yet"],
      },
    ],
  },
  {
    id: "quality-certification",
    name: "Quality & Certification",
    subject: "Diesel Quality and Certification Inquiry",
    template: `Dear Team,

I need information about your diesel fuel quality and certifications:

- Required Certifications: [REQUIRED_CERTIFICATIONS]
- Industry: [INDUSTRY]
- Equipment Type: [EQUIPMENT_TYPE]
- Specific Quality Concerns: [QUALITY_CONCERNS]

Please provide documentation on your fuel quality standards and testing procedures.

Thank you,
[YOUR_NAME]
[YOUR_COMPANY]
[YOUR_CONTACT]`,
    fields: [
      {
        id: "required-certifications",
        label: "Required Certifications",
        type: "select",
        options: ["ASTM D975", "EPA Compliance", "ISO 8217", "CARB Diesel", "Multiple/Other"],
      },
      { id: "industry", label: "Industry", type: "input", placeholder: "e.g., Construction, Marine, Transportation" },
      {
        id: "equipment-type",
        label: "Equipment Type",
        type: "input",
        placeholder: "e.g., Heavy machinery, Generators, Vessels",
      },
      {
        id: "quality-concerns",
        label: "Specific Quality Concerns",
        type: "textarea",
        placeholder: "Any specific quality requirements or concerns",
      },
    ],
  },
]

const sellerTemplates = [
  {
    id: "become-supplier",
    name: "Become a Supplier",
    subject: "New Diesel Supplier Registration",
    template: `Dear Team,

I would like to register as a diesel supplier on your marketplace:

- Business Name: [BUSINESS_NAME]
- Fuel Types Available: [FUEL_TYPES]
- Supply Capacity: [SUPPLY_CAPACITY] gallons per month
- Service Areas: [SERVICE_AREAS]
- Years in Business: [YEARS_IN_BUSINESS]
- Certifications Held: [CERTIFICATIONS]

Please provide information on the next steps to become a verified supplier.

Thank you,
[YOUR_NAME]
[YOUR_POSITION]
[YOUR_CONTACT]`,
    fields: [
      { id: "business-name", label: "Business Name", type: "input", placeholder: "Your company name" },
      {
        id: "fuel-types",
        label: "Fuel Types Available",
        type: "textarea",
        placeholder: "List all fuel types you supply",
      },
      { id: "supply-capacity", label: "Supply Capacity (gallons/month)", type: "input", placeholder: "e.g., 100,000" },
      {
        id: "service-areas",
        label: "Service Areas",
        type: "textarea",
        placeholder: "Regions, states, or cities you can service",
      },
      { id: "years-in-business", label: "Years in Business", type: "input", placeholder: "e.g., 10" },
      {
        id: "certifications",
        label: "Certifications Held",
        type: "textarea",
        placeholder: "List relevant certifications and licenses",
      },
    ],
  },
  {
    id: "pricing-commission",
    name: "Pricing & Commission",
    subject: "Diesel Supplier Pricing and Commission Inquiry",
    template: `Dear Team,

I'd like more information about your pricing structure and commission rates:

- Current Business Volume: [BUSINESS_VOLUME] gallons per month
- Average Transaction Size: [TRANSACTION_SIZE] gallons
- Number of Delivery Locations: [DELIVERY_LOCATIONS]
- Special Services Offered: [SPECIAL_SERVICES]
- Questions about Commission: [COMMISSION_QUESTIONS]

Please provide details on your commission structure and any volume-based incentives.

Thank you,
[YOUR_NAME]
[YOUR_COMPANY]
[YOUR_CONTACT]`,
    fields: [
      {
        id: "business-volume",
        label: "Current Business Volume (gallons/month)",
        type: "input",
        placeholder: "e.g., 50,000",
      },
      {
        id: "transaction-size",
        label: "Average Transaction Size (gallons)",
        type: "input",
        placeholder: "e.g., 5,000",
      },
      { id: "delivery-locations", label: "Number of Delivery Locations", type: "input", placeholder: "e.g., 3" },
      {
        id: "special-services",
        label: "Special Services Offered",
        type: "textarea",
        placeholder: "Any special services you provide (e.g., emergency delivery)",
      },
      {
        id: "commission-questions",
        label: "Questions about Commission",
        type: "textarea",
        placeholder: "Specific questions about the commission structure",
      },
    ],
  },
  {
    id: "partnership",
    name: "Partnership Opportunities",
    subject: "Diesel Supply Partnership Opportunity",
    template: `Dear Team,

I'm interested in exploring partnership opportunities with your marketplace:

- Partnership Type Interest: [PARTNERSHIP_TYPE]
- Current Market Position: [MARKET_POSITION]
- Business Model: [BUSINESS_MODEL]
- Partnership Goals: [PARTNERSHIP_GOALS]
- Timeline for Discussion: [TIMELINE]

I would appreciate the opportunity to discuss how we might work together.

Thank you,
[YOUR_NAME]
[YOUR_COMPANY]
[YOUR_POSITION]
[YOUR_CONTACT]`,
    fields: [
      {
        id: "partnership-type",
        label: "Partnership Type Interest",
        type: "select",
        options: [
          "Exclusive Supplier",
          "Regional Partner",
          "Volume-based Partnership",
          "Technology Integration",
          "Other",
        ],
      },
      {
        id: "market-position",
        label: "Current Market Position",
        type: "textarea",
        placeholder: "Brief description of your company's market position",
      },
      {
        id: "business-model",
        label: "Business Model",
        type: "textarea",
        placeholder: "Brief description of your business model",
      },
      {
        id: "partnership-goals",
        label: "Partnership Goals",
        type: "textarea",
        placeholder: "What you hope to achieve through this partnership",
      },
      {
        id: "timeline",
        label: "Timeline for Discussion",
        type: "select",
        options: ["Immediate", "Within 1 week", "Within 1 month", "No rush"],
      },
    ],
  },
]

export default function ContactEmailPage() {
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

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Send a Pre-Made Email</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our templates to quickly send a structured email to our team. We'll respond promptly to your
              inquiry.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Email Template Selection</CardTitle>
              <CardDescription>
                Select your role and choose from our pre-made templates to get a faster response.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="buyer" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="buyer" className="flex items-center">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    I'm a Buyer
                  </TabsTrigger>
                  <TabsTrigger value="seller" className="flex items-center">
                    <Store className="mr-2 h-4 w-4" />
                    I'm a Seller
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="buyer" className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Select a Template:</h3>
                    <RadioGroup defaultValue="price-quote" className="grid gap-4 md:grid-cols-3">
                      {buyerTemplates.map((template) => (
                        <div key={template.id}>
                          <RadioGroupItem value={template.id} id={template.id} className="peer sr-only" />
                          <Label
                            htmlFor={template.id}
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 hover:border-gray-200 peer-data-[state=checked]:border-blue-500 peer-data-[state=checked]:bg-blue-50 [&:has([data-state=checked])]:border-blue-500 [&:has([data-state=checked])]:bg-blue-50 cursor-pointer"
                          >
                            <Mail className="mb-3 h-6 w-6 text-blue-600" />
                            <span className="text-sm font-medium">{template.name}</span>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="text-lg font-medium mb-4">Fill in the Details:</h3>
                    <div className="space-y-4">
                      {buyerTemplates[0].fields.map((field) => (
                        <div key={field.id} className="space-y-2">
                          <Label htmlFor={field.id}>{field.label}</Label>
                          {field.type === "input" && <Input id={field.id} placeholder={field.placeholder} />}
                          {field.type === "textarea" && (
                            <Textarea id={field.id} placeholder={field.placeholder} rows={3} />
                          )}
                          {field.type === "select" && (
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder={`Select ${field.label}`} />
                              </SelectTrigger>
                              <SelectContent>
                                {field.options.map((option) => (
                                  <SelectItem key={option} value={option}>
                                    {option}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="text-lg font-medium mb-4">Your Contact Information:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="your-name">Your Name</Label>
                        <Input id="your-name" placeholder="Full Name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="your-company">Company Name</Label>
                        <Input id="your-company" placeholder="Company Name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="your-email">Email Address</Label>
                        <Input id="your-email" type="email" placeholder="email@example.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="your-phone">Phone Number</Label>
                        <Input id="your-phone" placeholder="(123) 456-7890" />
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="text-lg font-medium mb-4">Email Preview:</h3>
                    <Card className="bg-gray-50">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Subject: Request Price Quote</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">To: vedantrathod1910@gmail.com</p>
                        <pre className="whitespace-pre-wrap text-sm text-gray-700 font-mono bg-gray-50 p-4 rounded">
                          {buyerTemplates[0].template}
                        </pre>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="flex items-start space-x-2 pt-4">
                    <Checkbox id="copy-me" />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="copy-me"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Send me a copy of this email
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button size="lg" className="px-8">
                      <Send className="mr-2 h-4 w-4" />
                      Send Email to vedantrathod1910@gmail.com
                    </Button>
                  </div>

                  <p className="text-sm text-gray-500">
                    Email will be sent to: vedantrathod1910@gmail.com (Vedant Rathod - Buyer Support)
                  </p>
                </TabsContent>

                <TabsContent value="seller" className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Select a Template:</h3>
                    <RadioGroup defaultValue="become-supplier" className="grid gap-4 md:grid-cols-3">
                      {sellerTemplates.map((template) => (
                        <div key={template.id}>
                          <RadioGroupItem value={template.id} id={template.id} className="peer sr-only" />
                          <Label
                            htmlFor={template.id}
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 hover:border-gray-200 peer-data-[state=checked]:border-green-500 peer-data-[state=checked]:bg-green-50 [&:has([data-state=checked])]:border-green-500 [&:has([data-state=checked])]:bg-green-50 cursor-pointer"
                          >
                            <Mail className="mb-3 h-6 w-6 text-green-600" />
                            <span className="text-sm font-medium">{template.name}</span>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="text-lg font-medium mb-4">Fill in the Details:</h3>
                    <div className="space-y-4">
                      {sellerTemplates[0].fields.map((field) => (
                        <div key={field.id} className="space-y-2">
                          <Label htmlFor={field.id}>{field.label}</Label>
                          {field.type === "input" && <Input id={field.id} placeholder={field.placeholder} />}
                          {field.type === "textarea" && (
                            <Textarea id={field.id} placeholder={field.placeholder} rows={3} />
                          )}
                          {field.type === "select" && (
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder={`Select ${field.label}`} />
                              </SelectTrigger>
                              <SelectContent>
                                {field.options.map((option) => (
                                  <SelectItem key={option} value={option}>
                                    {option}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="text-lg font-medium mb-4">Your Contact Information:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="your-name-seller">Your Name</Label>
                        <Input id="your-name-seller" placeholder="Full Name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="your-company-seller">Company Name</Label>
                        <Input id="your-company-seller" placeholder="Company Name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="your-position">Your Position</Label>
                        <Input id="your-position" placeholder="Job Title" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="your-email-seller">Email Address</Label>
                        <Input id="your-email-seller" type="email" placeholder="email@example.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="your-phone-seller">Phone Number</Label>
                        <Input id="your-phone-seller" placeholder="(123) 456-7890" />
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="text-lg font-medium mb-4">Email Preview:</h3>
                    <Card className="bg-gray-50">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Subject: New Diesel Supplier Registration</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">To: gauravmathanikar2006@gmail.com</p>
                        <pre className="whitespace-pre-wrap text-sm text-gray-700 font-mono bg-gray-50 p-4 rounded">
                          {sellerTemplates[0].template}
                        </pre>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="flex items-start space-x-2 pt-4">
                    <Checkbox id="copy-me-seller" />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="copy-me-seller"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Send me a copy of this email
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button size="lg" className="px-8">
                      <Send className="mr-2 h-4 w-4" />
                      Send Email to gauravmathanikar2006@gmail.com
                    </Button>
                  </div>
                  <p className="text-sm text-gray-500">
                    Email will be sent to: gauravmathanikar2006@gmail.com (Gaurav Mathanikar - Business Development)
                  </p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Alternative Contact Methods */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Prefer to contact us directly?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-menu">
                <Button variant="outline">View All Contact Options</Button>
              </Link>
              <a href="https://t.me/lord_vedant19" target="_blank" rel="noopener noreferrer">
                <Button variant="outline">Chat with Vedant</Button>
              </a>
              <a href="https://t.me/GT_earner" target="_blank" rel="noopener noreferrer">
                <Button variant="outline">Chat with Gaurav</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
