"use client"

import { useEffect, useRef } from "react"

interface ParticleBackgroundProps {
  variant?: "default" | "tech" | "minimal"
}

export function ParticleBackground({ variant = "default" }: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1

      canvas.width = width * dpr
      canvas.height = height * dpr

      ctx.scale(dpr, dpr)
    }

    const render = () => {
      if (!canvas || !ctx) return

      const { width, height } = canvas.getBoundingClientRect()

      ctx.clearRect(0, 0, width, height)

      // Create dynamic waves
      const createWave = (offset: number, color: string, amplitude: number, frequency: number) => {
        ctx.beginPath()
        ctx.moveTo(0, height)

        for (let x = 0; x <= width; x += 5) { // Reduced step size for smoother curves
          const wave1 = Math.sin(x * 0.008 + time + offset) * amplitude
          const wave2 = Math.sin(x * 0.015 + time * 0.8 + offset) * (amplitude * 0.5)
          const wave3 = Math.cos(x * 0.01 + time * 1.2 + offset) * (amplitude * 0.3)
          
          const y = height * 0.5 + wave1 + wave2 + wave3
          ctx.lineTo(x, y)
        }

        ctx.lineTo(width, height)
        ctx.lineTo(0, height)

        // Create gradient fill
        const gradient = ctx.createLinearGradient(0, 0, width, height)
        gradient.addColorStop(0, color)
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
        
        ctx.fillStyle = gradient
        ctx.fill()
      }

      // Render multiple waves with enhanced colors and dynamics
      createWave(0, "rgba(16, 185, 129, 0.08)", 60, 0.02) // Emerald wave
      createWave(Math.PI / 3, "rgba(8, 145, 178, 0.06)", 45, 0.015) // Cyan wave
      createWave(Math.PI * 2/3, "rgba(14, 165, 233, 0.07)", 50, 0.018) // Blue wave
      createWave(Math.PI, "rgba(20, 184, 166, 0.05)", 40, 0.02) // Teal wave

      time += 0.003 // Slower animation for smoother movement
      animationFrameId = requestAnimationFrame(render)
    }

    window.addEventListener("resize", resize)
    resize()
    render()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}