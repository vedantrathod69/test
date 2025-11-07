"use client"

import { useEffect, useRef } from "react"

export function PatternBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const drawPatterns = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const time = Date.now() * 0.001

      const colors = [
        { r: 255, g: 140, b: 0, a: 0.02 }, // Orange
        { r: 255, g: 20, b: 147, a: 0.02 }, // Pink
        { r: 138, g: 43, b: 226, a: 0.02 }, // Purple
        { r: 220, g: 20, b: 60, a: 0.02 }, // Red
        { r: 255, g: 127, b: 80, a: 0.02 }, // Coral
      ]

      // Draw flowing wave patterns
      for (let i = 0; i < 5; i++) {
        const color = colors[i]
        const offset = time * (0.5 + i * 0.1)

        ctx.beginPath()
        for (let x = 0; x <= canvas.width; x += 10) {
          const y =
            canvas.height / 2 +
            Math.sin(x * 0.01 + offset) * 100 +
            Math.sin(x * 0.005 + offset * 1.5) * 50 +
            (i - 2) * 80

          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }

        ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`
        ctx.lineWidth = 3
        ctx.stroke()
      }

      // Draw geometric shapes
      for (let i = 0; i < 8; i++) {
        const color = colors[i % colors.length]
        const x = (canvas.width / 8) * i + Math.sin(time + i) * 50
        const y = canvas.height * 0.3 + Math.cos(time * 0.7 + i) * 100
        const size = 30 + Math.sin(time * 2 + i) * 10

        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a * 2})`
        ctx.fill()
      }

      animationRef.current = requestAnimationFrame(drawPatterns)
    }

    resizeCanvas()
    drawPatterns()

    const handleResize = () => {
      resizeCanvas()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "transparent" }} />
  )
}
