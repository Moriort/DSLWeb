"use client"

import { useEffect, useRef } from "react"

interface AnimatedBackgroundGradientProps {
  className?: string
  color1?: string
  color2?: string
  speed?: number
}

export function AnimatedBackgroundGradient({
  className = "",
  color1 = "rgba(16, 185, 129, 0.05)",
  color2 = "rgba(8, 145, 178, 0.05)",
  speed = 4,
}: AnimatedBackgroundGradientProps) {
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

    const createGradient = (x: number, y: number, width: number, height: number) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, Math.max(width, height) * 0.8)

      gradient.addColorStop(0, color1)
      gradient.addColorStop(1, "transparent")

      return gradient
    }

    const render = () => {
      if (!canvas || !ctx) return

      const { width, height } = canvas.getBoundingClientRect()

      ctx.clearRect(0, 0, width, height)

      // First gradient
      const x1 = width * 0.3 + Math.sin(time * 0.5) * width * 0.1
      const y1 = height * 0.3 + Math.cos(time * 0.3) * height * 0.1

      ctx.fillStyle = createGradient(x1, y1, width, height)
      ctx.fillRect(0, 0, width, height)

      // Second gradient
      const x2 = width * 0.7 + Math.cos(time * 0.4) * width * 0.1
      const y2 = height * 0.6 + Math.sin(time * 0.6) * height * 0.1

      ctx.fillStyle = createGradient(x2, y2, width, height)
      ctx.fillRect(0, 0, width, height)

      time += 0.003 * speed

      animationFrameId = requestAnimationFrame(render)
    }

    window.addEventListener("resize", resize)
    resize()
    render()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [color1, color2, speed])

  return <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full ${className}`} />
}

