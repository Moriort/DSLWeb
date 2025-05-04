"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface GlassmorphismCardProps {
  children: React.ReactNode
  className?: string
  blurIntensity?: "light" | "medium" | "strong"
  borderColor?: "blue" | "gray"
  hoverEffect?: boolean
}

export function GlassmorphismCard({
  children,
  className,
  blurIntensity = "medium",
  borderColor = "gray",
  hoverEffect = false,
}: GlassmorphismCardProps) {
  const blurMap = {
    light: "backdrop-blur-sm",
    medium: "backdrop-blur-md",
    strong: "backdrop-blur-lg",
  }

  const borderMap = {
    blue: "border-blue-900/10 group-hover:border-blue-900/20",
    gray: "border-zinc-800/50 group-hover:border-zinc-700/50",
  }

  return (
    <div
      className={cn(
        "relative rounded-lg p-6 backdrop-saturate-[1.2] bg-zinc-900/40",
        blurMap[blurIntensity],
        "border",
        borderMap[borderColor],
        hoverEffect && "transition-all duration-300",
        className
      )}
      style={{
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
      }}
    >
      {children}
    </div>
  )
}

