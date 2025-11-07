"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Certifications } from "@/components/certifications"
import { Contact } from "@/components/contact"
import { BirthdayBanner } from "@/components/birthday-banner"
import { ParticleBackground } from "@/components/particle-background"
import { ThemeToggle } from "@/components/theme-toggle"
import { ColorWave } from "@/components/color-wave"
import { PatternBackground } from "@/components/pattern-background"

export default function Home() {
  const [particlesEnabled, setParticlesEnabled] = useState(true)

  return (
    <div className="min-h-screen bg-background relative pattern-overlay">
      <div className="geometric-pattern fixed inset-0 pointer-events-none z-0" />
      <PatternBackground />
      <ColorWave />
      <ParticleBackground enabled={particlesEnabled} />
      <ThemeToggle onParticleToggle={setParticlesEnabled} />

      <div className="relative z-10 vibrant-color-shift">
        <BirthdayBanner />
        <Navigation />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
        </main>
      </div>
    </div>
  )
}
