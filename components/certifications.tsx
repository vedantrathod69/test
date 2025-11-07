import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Award } from "lucide-react"

const certifications = [
  {
    title: "Beyond the Basics: Istio and IBM Cloud Kubernetes Service",
    provider: "IBM",
    date: "Jan 5, 2025",
    category: "Cloud & DevOps",
  },
  {
    title: "Data Science Tools",
    provider: "IBM",
    date: "Jan 5, 2025",
    category: "Data Science",
  },
  {
    title: "Data Visualization with R",
    provider: "IBM",
    date: "Jan 3, 2025",
    category: "Data Science",
  },
  {
    title: "Hadoop Foundations - Level 1",
    provider: "IBM",
    date: "Jan 3, 2025",
    category: "Big Data",
  },
  {
    title: "Data Visualization Using Python",
    provider: "IBM",
    date: "Jan 2, 2025",
    category: "Data Science",
  },
  {
    title: "Deep Learning using TensorFlow",
    provider: "IBM",
    date: "Jan 2, 2025",
    category: "Machine Learning",
  },
  {
    title: "Apache Spark - Level 1",
    provider: "IBM",
    date: "Jan 2, 2025",
    category: "Big Data",
  },
  {
    title: "Big Data Foundations - Level 1",
    provider: "IBM",
    date: "Jan 1, 2025",
    category: "Big Data",
  },
  {
    title: "Build Your Own Chatbot - Level 1",
    provider: "IBM",
    date: "Dec 29, 2024",
    category: "AI Development",
  },
  {
    title: "Data Analysis Using Python",
    provider: "IBM",
    date: "Dec 29, 2024",
    category: "Data Science",
  },
  {
    title: "DataOps Methodology",
    provider: "IBM",
    date: "Dec 29, 2024",
    category: "Data Engineering",
  },
  {
    title: "Python for Data Science",
    provider: "IBM",
    date: "Dec 28, 2024",
    category: "Programming",
  },
]

const categories = [
  "All",
  "Data Science",
  "Machine Learning",
  "Big Data",
  "Cloud & DevOps",
  "AI Development",
  "Programming",
  "Data Engineering",
]

export function Certifications() {
  return (
    <section id="certifications" className="py-12 sm:py-20 mobile-padding bg-card/30 color-shift">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-balance gradient-text">
            Certifications
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-primary mb-6 sm:mb-8 hover-glow"></div>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            {certifications.length} professional certifications from IBM demonstrating expertise in data science,
            machine learning, and emerging technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover-glow wave-effect hover:scale-[1.02]"
            >
              <CardHeader className="pb-2 sm:pb-3">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <Award className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0 mt-1 float-animation" />
                  <Badge
                    variant="outline"
                    className="text-xs hover:bg-primary/10 transition-colors duration-300 flex-shrink-0"
                  >
                    {cert.category}
                  </Badge>
                </div>
                <CardTitle className="text-sm sm:text-base leading-tight text-pretty hover:text-primary transition-colors duration-300">
                  {cert.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground">
                  <span className="font-medium">{cert.provider}</span>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <Calendar className="h-3 w-3" />
                    <span>{cert.date}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
