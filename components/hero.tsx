"use client"

import { Button } from "@/components/ui/button"
import { Github, Mail, MapPin, Cake } from "lucide-react"
import { useState, useEffect } from "react"

export function Hero() {
  const [showBirthdayMessage, setShowBirthdayMessage] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowBirthdayMessage(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center mobile-padding pt-20 sm:pt-16 color-shift pattern-overlay">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6 sm:mb-8">
          {showBirthdayMessage && (
            <div className="mb-4 sm:mb-6 p-1 rounded-lg rainbow-border animate-in fade-in slide-in-from-top duration-1000">
              <div className="p-3 sm:p-4 rounded-lg bg-primary/10 border border-primary/20 hover-glow wave-effect">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Cake className="h-4 w-4 sm:h-5 sm:w-5 text-primary animate-pulse float-animation" />
                  <span className="text-base sm:text-lg font-battlesbridge text-black">🎂 BIRTHDAY SPECIAL 🎂</span>
                  <Cake className="h-4 w-4 sm:h-5 sm:w-5 text-primary animate-pulse float-animation" />
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Celebrating another year of growth, learning, and coding adventures!
                </p>
              </div>
            </div>
          )}

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-royal mb-3 sm:mb-4 text-balance animate-in fade-in slide-in-from-bottom duration-1000 gradient-text leading-tight">
            Vedant Rathod
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-primary font-royal mb-4 sm:mb-6 animate-in fade-in slide-in-from-bottom duration-1000 delay-200 hover:scale-105 transition-transform duration-300">
            Data Science & Development Enthusiast
          </p>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty animate-in fade-in slide-in-from-bottom duration-1000 delay-300 px-2 sm:px-0">
            Motivated Class 10 student with strong interest in development, data science, and emerging technologies.
            Eager to apply technical knowledge and contribute to innovative projects.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 hover-glow p-2 rounded-lg touch-manipulation">
            <MapPin className="h-4 w-4 float-animation" />
            <span className="text-sm sm:text-base">Wardha, Maharashtra</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 hover-glow p-2 rounded-lg touch-manipulation">
            <Mail className="h-4 w-4 float-animation" />
            <span className="text-sm sm:text-base break-all sm:break-normal">vedantrathod1910@gmail.com</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-in fade-in slide-in-from-bottom duration-1000 delay-500 px-4 sm:px-0">
          <div className="rainbow-border rounded-lg w-full sm:w-auto">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="text-base relative overflow-hidden group wave-effect hover-glow hover:scale-105 transition-all duration-300 w-full min-h-[48px] touch-manipulation"
            >
              <span className="relative z-10">Get In Touch</span>
            </Button>
          </div>
          <div className="rainbow-border rounded-lg w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="text-base bg-transparent hover:bg-primary/10 wave-effect hover-glow hover:scale-105 transition-all duration-300 w-full min-h-[48px] touch-manipulation"
            >
              <Github className="h-4 w-4 mr-2 float-animation" />
              View Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
