"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface GlowCardProps {
  children: ReactNode
  className?: string
  glowColor?: string
}

export function GlowCard({ children, className = "", glowColor = "emerald" }: GlowCardProps) {
  const glowColorMap = {
    emerald: "from-emerald-500/20 via-transparent to-transparent",
    blue: "from-blue-500/20 via-transparent to-transparent",
    purple: "from-purple-500/20 via-transparent to-transparent",
    cyan: "from-cyan-500/20 via-transparent to-transparent",
  }

  const glowClass = glowColorMap[glowColor as keyof typeof glowColorMap] || glowColorMap.emerald

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`relative group ${className}`}
    >
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r ${glowClass} rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`}
      ></div>
      <div className="relative bg-zinc-900 p-6 rounded-lg border border-zinc-800 transition-all duration-200 group-hover:border-transparent">
        {children}
      </div>
    </motion.div>
  )
}

