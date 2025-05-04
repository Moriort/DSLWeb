"use client"

import type React from "react"

import { type ReactNode, useState, useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ThreeDCardProps {
  children: ReactNode
  className?: string
  glareColor?: string
  depth?: number
  borderRadius?: string
}

export function ThreeDCard({
  children,
  className = "",
  glareColor = "rgba(255, 255, 255, 0.1)",
  depth = 20,
  borderRadius = "0.75rem",
}: ThreeDCardProps) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [glarePosition, setGlarePosition] = useState({ x: 0, y: 0 })

  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()

    // Calculate mouse position relative to card center (in -0.5 to 0.5 range)
    const centerX = (e.clientX - rect.left) / rect.width - 0.5
    const centerY = (e.clientY - rect.top) / rect.height - 0.5

    // Set rotation (inverted for natural feel)
    setRotateX(-centerY * 10) // Multiply by degree factor
    setRotateY(centerX * 10)

    // Set glare position
    setGlarePosition({
      x: (centerX + 0.5) * 100, // Convert to percentage
      y: (centerY + 0.5) * 100,
    })
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
        borderRadius,
      }}
      className={cn("relative", className)}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          borderRadius,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative w-full h-full"
      >
        {/* Main content */}
        <div
          style={{
            transform: `translateZ(${depth}px)`,
            borderRadius,
          }}
          className="relative w-full h-full bg-zinc-900 border border-zinc-800"
        >
          {children}
        </div>

        {/* Bottom shadow/depth effect */}
        <div
          style={{
            transform: `translateZ(0px)`,
            borderRadius,
            boxShadow: `0 ${depth}px ${depth * 1.5}px rgba(0, 0, 0, 0.4)`,
          }}
          className="absolute inset-0 -z-10"
        />

        {/* Glare effect */}
        <div
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, ${glareColor} 0%, transparent 50%)`,
            borderRadius,
            opacity: Math.sqrt(rotateX * rotateX + rotateY * rotateY) / 10,
          }}
          className="absolute inset-0 pointer-events-none"
        />
      </motion.div>
    </motion.div>
  )
}

