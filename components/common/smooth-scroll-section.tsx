"use client"

import { type ReactNode, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface SmoothScrollSectionProps {
  children: ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right"
  intensity?: number
}

export function SmoothScrollSection({
  children,
  className = "",
  direction = "up",
  intensity = 0.2,
}: SmoothScrollSectionProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Fix: Properly define transform values with correct string formatting
  const getTransformValue = (dir: string) => {
    switch (dir) {
      case "up":
        return useTransform(scrollYProgress, [0, 1], [`${intensity * 100}%`, "0%"])
      case "down":
        return useTransform(scrollYProgress, [0, 1], [`-${intensity * 100}%`, "0%"])
      case "left":
        return useTransform(scrollYProgress, [0, 1], [`${intensity * 100}%`, "0%"])
      case "right":
        return useTransform(scrollYProgress, [0, 1], [`-${intensity * 100}%`, "0%"])
      default:
        return useTransform(scrollYProgress, [0, 1], [`${intensity * 100}%`, "0%"])
    }
  }

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])

  // Fix: Create transform values outside of render
  const yTransform = direction === "up" || direction === "down" ? getTransformValue(direction) : undefined

  const xTransform = direction === "left" || direction === "right" ? getTransformValue(direction) : undefined

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{
          y: yTransform,
          x: xTransform,
          opacity,
        }}
        className="relative"
      >
        {children}
      </motion.div>
    </div>
  )
}

