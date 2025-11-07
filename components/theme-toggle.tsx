"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sun, Moon, Sparkles, SparklesIcon } from "lucide-react"

interface ThemeToggleProps {
  onParticleToggle: (enabled: boolean) => void
}

export function ThemeToggle({ onParticleToggle }: ThemeToggleProps) {
  const [isDark, setIsDark] = useState(false)
  const [particlesEnabled, setParticlesEnabled] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark =
      savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    setIsDark(prefersDark)
    document.documentElement.classList.toggle("dark", prefersDark)
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    document.documentElement.classList.toggle("dark", newTheme)
    localStorage.setItem("theme", newTheme ? "dark" : "light")
  }

  const toggleParticles = () => {
    const newState = !particlesEnabled
    setParticlesEnabled(newState)
    onParticleToggle(newState)
  }

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2">
      <Button
        onClick={toggleTheme}
        variant="outline"
        size="sm"
        className="bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10 transition-all duration-300"
      >
        {isDark ? <Sun className="h-4 w-4 text-primary" /> : <Moon className="h-4 w-4 text-primary" />}
        <span className="ml-2 text-sm">{isDark ? "Light" : "Dark"}</span>
      </Button>

      <Button
        onClick={toggleParticles}
        variant="outline"
        size="sm"
        className="bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10 transition-all duration-300"
      >
        {particlesEnabled ? (
          <Sparkles className="h-4 w-4 text-primary" />
        ) : (
          <SparklesIcon className="h-4 w-4 text-muted-foreground" />
        )}
        <span className="ml-2 text-sm">Particles</span>
      </Button>
    </div>
  )
}
