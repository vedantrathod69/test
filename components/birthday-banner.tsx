"use client"

import { useState, useEffect } from "react"
import { X, Gift, Cake } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BirthdayBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [confetti, setConfetti] = useState<Array<{ id: number; left: number; delay: number }>>([])

  useEffect(() => {
    // Generate confetti particles
    const particles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
    }))
    setConfetti(particles)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm border-b border-primary/20">
      <div className="relative overflow-hidden">
        {/* Confetti Animation */}
        {confetti.map((particle) => (
          <div
            key={particle.id}
            className="absolute top-0 w-2 h-2 bg-primary rounded-full animate-bounce"
            style={{
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: "2s",
            }}
          />
        ))}

        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Cake className="h-5 w-5 text-primary animate-pulse" />
                <Gift className="h-5 w-5 text-accent animate-bounce" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">🎉 It's my birthday today! 🎂</p>
                <p className="text-xs text-muted-foreground">
                  Thank you for visiting my portfolio on this special day!
                </p>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setIsVisible(false)} className="h-8 w-8 p-0">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
