"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Sparkles } from "lucide-react"
import { useState } from "react"

const projects = [
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website built with Next.js 14, featuring dynamic animations and responsive design.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    status: "Completed",
    isBirthdaySpecial: true,
    githubUrl: "https://github.com/vedant/portfolio",
    liveUrl: "https://vedant-portfolio.vercel.app",
  },
  {
    title: "E-Commerce Dashboard",
    description:
      "Full-stack e-commerce admin dashboard with real-time analytics, inventory management, and order tracking.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Stripe API"],
    status: "Completed",
    githubUrl: "https://github.com/vedant/ecommerce-dashboard",
    liveUrl: "https://ecommerce-admin-vedant.vercel.app",
  },
  {
    title: "Weather App",
    description: "Modern weather application with location-based forecasts, interactive maps, and weather alerts.",
    technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation"],
    status: "Completed",
    githubUrl: "https://github.com/vedant/weather-app",
    liveUrl: "https://weather-app-vedant.vercel.app",
  },
  {
    title: "Task Management System",
    description:
      "Collaborative task management platform with real-time updates, team collaboration, and project tracking.",
    technologies: ["Next.js", "Supabase", "Real-time", "Team Collaboration"],
    status: "In Progress",
    githubUrl: "https://github.com/vedant/task-manager",
    liveUrl: "https://task-manager-vedant.vercel.app",
  },
  {
    title: "Blog Platform",
    description: "Modern blog platform with markdown support, comment system, and SEO optimization.",
    technologies: ["Next.js", "MDX", "Contentful", "SEO"],
    status: "Completed",
    githubUrl: "https://github.com/vedant/blog-platform",
    liveUrl: "https://blog-vedant.vercel.app",
  },
  {
    title: "AI Chat Application",
    description: "Intelligent chat application powered by OpenAI API with conversation history and custom prompts.",
    technologies: ["Next.js", "OpenAI API", "Streaming", "Chat UI"],
    status: "In Development",
    githubUrl: "https://github.com/vedant/ai-chat",
    liveUrl: "https://ai-chat-vedant.vercel.app",
  },
]

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section id="projects" className="py-12 sm:py-20 mobile-padding color-shift">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance gradient-text">
              My Vercel Projects
            </h2>
            <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-primary animate-pulse float-animation" />
          </div>
          <div className="w-12 sm:w-16 h-1 bg-primary mb-6 sm:mb-8 hover-glow"></div>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl leading-relaxed">
            Here are my web applications and projects deployed on Vercel, showcasing modern web development with Next.js
            and React.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`bg-card border-border transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover-glow wave-effect ${
                project.isBirthdaySpecial ? "ring-2 ring-primary/20 bg-gradient-to-br from-card to-primary/5" : ""
              }`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <CardHeader className="pb-3 sm:pb-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg sm:text-xl text-foreground flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                      <span className="leading-tight">{project.title}</span>
                      {project.isBirthdaySpecial && (
                        <Badge
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20 float-animation text-xs self-start sm:self-center"
                        >
                          🎂 Birthday Project!
                        </Badge>
                      )}
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs hover:bg-primary/10 hover:border-primary/30 transition-colors duration-300 px-2 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <Badge
                      variant={project.status === "Completed" ? "default" : "secondary"}
                      className={`text-xs ${
                        project.status === "Completed" ? "bg-green-500/10 text-green-600 border-green-500/20" : ""
                      }`}
                    >
                      {project.status}
                    </Badge>

                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 hover-glow hover:scale-110 transition-all duration-300 touch-manipulation"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 hover-glow hover:scale-110 transition-all duration-300 touch-manipulation"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <p className="text-muted-foreground mb-4 text-sm sm:text-base">More exciting projects coming soon! 🚀</p>
          <Button
            variant="outline"
            size="lg"
            className="wave-effect hover-glow hover:scale-105 transition-all duration-300 bg-transparent min-h-[48px] touch-manipulation w-full sm:w-auto"
            onClick={() => window.open("https://github.com/vedant", "_blank")}
          >
            <Github className="h-4 w-4 mr-2 float-animation" />
            View All on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}
