"use client"

import { useEffect, useRef } from "react"

interface MorphingBackgroundProps {
  className?: string
  intensity?: number
  speed?: number
  color1?: string
  color2?: string
  color3?: string
}

export function MorphingBackground({
  className = "",
  intensity = 20,
  speed = 4,
  color1 = "rgba(16, 185, 129, 0.05)",
  color2 = "rgba(10, 10, 10, 0)",
  color3 = "rgba(20, 20, 20, 0.03)",
}: MorphingBackgroundProps) {
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

      // First blob
      ctx.fillStyle = color1
      ctx.beginPath()

      const w1 = width * 0.5
      const h1 = height * 0.5
      const cx1 = width * 0.3
      const cy1 = height * 0.4

      ctx.moveTo(cx1, cy1)

      for (let i = 0; i < Math.PI * 2; i += 0.02) {
        const x = cx1 + Math.cos(i) * w1 + Math.cos(i * intensity + time) * (w1 / 6)
        const y = cy1 + Math.sin(i) * h1 + Math.sin(i * intensity + time) * (h1 / 6)
        ctx.lineTo(x, y)
      }

      ctx.closePath()
      ctx.fill()

      // Second blob
      ctx.fillStyle = color2
      ctx.beginPath()

      const w2 = width * 0.3
      const h2 = height * 0.3
      const cx2 = width * 0.7
      const cy2 = height * 0.6

      ctx.moveTo(cx2, cy2)

      for (let i = 0; i < Math.PI * 2; i += 0.02) {
        const x = cx2 + Math.cos(i) * w2 + Math.cos(i * intensity + time * 0.8) * (w2 / 5)
        const y = cy2 + Math.sin(i) * h2 + Math.sin(i * intensity + time * 0.8) * (h2 / 5)
        ctx.lineTo(x, y)
      }

      ctx.closePath()
      ctx.fill()

      // Third blob
      ctx.fillStyle = color3
      ctx.beginPath()

      const w3 = width * 0.4
      const h3 = height * 0.4
      const cx3 = width * 0.5
      const cy3 = height * 0.7

      ctx.moveTo(cx3, cy3)

      for (let i = 0; i < Math.PI * 2; i += 0.02) {
        const x = cx3 + Math.cos(i) * w3 + Math.cos(i * intensity + time * 1.2) * (w3 / 7)
        const y = cy3 + Math.sin(i) * h3 + Math.sin(i * intensity + time * 1.2) * (h3 / 7)
        ctx.lineTo(x, y)
      }

      ctx.closePath()
      ctx.fill()

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
  }, [intensity, speed, color1, color2, color3])

  return <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full ${className}`} />
}

