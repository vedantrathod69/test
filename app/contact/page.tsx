import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MapPin, MessageSquare, HelpCircle } from "lucide-react"
import Link from "next/link"

const contactMethods = [
  {
    icon: MessageSquare,
    title: "Telegram - VEDANT RATHOD",
    description: "Chat with Vedant for buyer inquiries",
    action: "@lord_vedant19",
    available: "Available 24/7",
    link: "https://t.me/lord_vedant19",
  },
  {
    icon: MessageSquare,
    title: "Telegram - GAURAV",
    description: "Chat with Gaurav for seller inquiries",
    action: "@GT_earner",
    available: "Available 24/7",
    link: "https://t.me/GT_earner",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us an email",
    action: "support@marketplace.com",
    available: "Response within 24 hours",
  },
]

const faqs = [
  {
    question: "How do I start selling on your platform?",
    answer: "Simply register as a seller, verify your business details, and start listing your products or services.",
  },
  {
    question: "What are the commission fees?",
    answer: "We charge a competitive 5% commission on each successful sale. No monthly fees or setup costs.",
  },
  {
    question: "How do I get paid?",
    answer: "Payments are processed weekly to your registered bank account or PayPal.",
  },
  {
    question: "Can I sell internationally?",
    answer: "Yes, you can sell to customers worldwide. Shipping and tax handling varies by location.",
  },
]

export default function ContactPage() {
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
              <a href="https://t.me/lord_vedant19" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost">Contact Vedant</Button>
              </a>
              <a href="https://t.me/GT_earner" target="_blank" rel="noopener noreferrer">
                <Button>Contact Gaurav</Button>
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to our support team or browse our FAQ section.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Methods */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-6">Contact Methods</h2>
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <method.icon className="h-6 w-6 text-blue-600 mt-1" />
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{method.title}</h3>
                        <p className="text-gray-600 text-sm mb-2">{method.description}</p>
                        {method.link ? (
                          <a
                            href={method.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-blue-600 hover:underline mb-1 block"
                          >
                            {method.action}
                          </a>
                        ) : (
                          <p className="font-medium text-blue-600 mb-1">{method.action}</p>
                        )}
                        <p className="text-xs text-gray-500">{method.available}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Office Location */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5" />
                  Our Office
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  123 Business Street
                  <br />
                  Suite 100
                  <br />
                  New York, NY 10001
                  <br />
                  United States
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="seller">Seller Support</SelectItem>
                      <SelectItem value="buyer">Buyer Support</SelectItem>
                      <SelectItem value="technical">Technical Issue</SelectItem>
                      <SelectItem value="billing">Billing Question</SelectItem>
                      <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea id="message" placeholder="Please describe your question or issue in detail..." rows={6} />
                </div>

                <Button className="w-full" size="lg">
                  Send Message
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  We typically respond within 24 hours during business days.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Find quick answers to common questions about our marketplace.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-start">
                    <HelpCircle className="mr-2 h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Can't find what you're looking for?</p>
            <Button variant="outline">View Full FAQ</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
