"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface AnimatedGradientTextProps {
  children: ReactNode
  className?: string
  from?: string
  via?: string
  to?: string
}

export function AnimatedGradientText({
  children,
  className = "",
  from = "from-emerald-500",
  via = "via-teal-300",
  to = "to-emerald-500",
}: AnimatedGradientTextProps) {
  return (
    <motion.span
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      }}
      className={`bg-gradient-to-r ${from} ${via} ${to} bg-clip-text text-transparent ${className}`}
    >
      {children}
    </motion.span>
  )
}

