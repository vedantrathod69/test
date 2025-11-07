import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "R", "SQL"],
    isBirthdayHighlight: true,
  },
  {
    title: "Data Science & Analytics",
    skills: ["Data Analysis", "Data Visualization", "Big Data Concepts", "Statistical Analysis"],
  },
  {
    title: "Machine Learning & AI",
    skills: ["Machine Learning", "Deep Learning", "TensorFlow", "Chatbot Development"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Apache Spark", "Hadoop", "Kubernetes", "Cloud Computing", "DataOps"],
  },
  {
    title: "Soft Skills",
    skills: ["Analytical Thinking", "Problem Solving", "Teamwork", "Quick Learning", "Adaptability"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-20 mobile-padding bg-card/30 color-shift">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance gradient-text font-sans">
              Skills & Expertise
            </h2>
            <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-primary animate-pulse float-animation" />
          </div>
          <div className="w-12 sm:w-16 h-1 bg-primary mb-6 sm:mb-8 hover-glow"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`bg-card border-border transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover-glow wave-effect ${
                category.isBirthdayHighlight ? "ring-2 ring-primary/20 bg-gradient-to-br from-card to-primary/5" : ""
              }`}
            >
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="text-base sm:text-lg text-foreground flex flex-col sm:flex-row sm:items-center gap-2 font-sans text-stroke">
                  <span className="leading-tight">{category.title}</span>
                  {category.isBirthdayHighlight && (
                    <Badge
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20 text-xs float-animation font-sans text-stroke-light self-start sm:self-center"
                    >
                      🎂 Core Skills!
                    </Badge>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className={`bg-secondary text-secondary-foreground transition-all duration-200 hover:scale-105 wave-effect font-sans text-stroke-light text-xs sm:text-sm px-2 py-1 ${
                        category.isBirthdayHighlight ? "hover:bg-primary/20 hover:text-primary" : ""
                      }`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
