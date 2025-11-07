"use client"

import { useEffect, useState } from "react"

export function ColorWave() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{
            background: "radial-gradient(circle, oklch(0.7 0.1 180 / 0.3) 0%, transparent 70%)",
            top: "10%",
            left: "10%",
            animation: "float 6s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-80 h-80 rounded-full blur-3xl animate-pulse"
          style={{
            background: "radial-gradient(circle, oklch(0.65 0.08 160 / 0.25) 0%, transparent 70%)",
            top: "60%",
            right: "15%",
            animation: "float 8s ease-in-out infinite reverse",
          }}
        />
        <div
          className="absolute w-72 h-72 rounded-full blur-3xl animate-pulse"
          style={{
            background: "radial-gradient(circle, oklch(0.75 0.12 200 / 0.2) 0%, transparent 70%)",
            bottom: "20%",
            left: "20%",
            animation: "float 7s ease-in-out infinite 2s",
          }}
        />
      </div>
    </div>
  )
}
