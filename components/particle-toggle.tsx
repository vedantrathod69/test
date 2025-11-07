"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles, SparklesIcon } from "lucide-react"

interface ParticleToggleProps {
  onToggle: (enabled: boolean) => void
}

export function ParticleToggle({ onToggle }: ParticleToggleProps) {
  const [enabled, setEnabled] = useState(true)

  const handleToggle = () => {
    const newState = !enabled
    setEnabled(newState)
    onToggle(newState)
  }

  return (
    <Button
      onClick={handleToggle}
      variant="outline"
      size="sm"
      className="fixed top-4 right-4 z-50 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10 transition-all duration-300"
    >
      {enabled ? (
        <Sparkles className="h-4 w-4 text-primary" />
      ) : (
        <SparklesIcon className="h-4 w-4 text-muted-foreground" />
      )}
      <span className="ml-2 text-sm">{enabled ? "Particles On" : "Particles Off"}</span>
    </Button>
  )
}
