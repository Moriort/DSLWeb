"use client"

import { ButtonHTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "emerald" | "blue" | "purple" | "pink"
  variant?: "solid" | "outline"
}

export const NeonButton = forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, color = "emerald", variant = "solid", children, ...props }, ref) => {
    const baseStyles = "relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium transition-all rounded-md group"
    
    const colorVariants = {
      emerald: {
        solid: "bg-emerald-500 text-white hover:bg-emerald-600 shadow-[0_0_15px_rgba(16,185,129,0.35)] hover:shadow-[0_0_25px_rgba(16,185,129,0.45)]",
        outline: "border-2 border-emerald-500 text-emerald-500 hover:text-white hover:bg-emerald-500/10 shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:shadow-[0_0_25px_rgba(16,185,129,0.25)]"
      },
      blue: {
        solid: "bg-blue-500 text-white hover:bg-blue-600 shadow-[0_0_15px_rgba(59,130,246,0.35)] hover:shadow-[0_0_25px_rgba(59,130,246,0.45)]",
        outline: "border-2 border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500/10 shadow-[0_0_15px_rgba(59,130,246,0.15)] hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]"
      },
      purple: {
        solid: "bg-purple-500 text-white hover:bg-purple-600 shadow-[0_0_15px_rgba(168,85,247,0.35)] hover:shadow-[0_0_25px_rgba(168,85,247,0.45)]",
        outline: "border-2 border-purple-500 text-purple-500 hover:text-white hover:bg-purple-500/10 shadow-[0_0_15px_rgba(168,85,247,0.15)] hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]"
      },
      pink: {
        solid: "bg-pink-500 text-white hover:bg-pink-600 shadow-[0_0_15px_rgba(236,72,153,0.35)] hover:shadow-[0_0_25px_rgba(236,72,153,0.45)]",
        outline: "border-2 border-pink-500 text-pink-500 hover:text-white hover:bg-pink-500/10 shadow-[0_0_15px_rgba(236,72,153,0.15)] hover:shadow-[0_0_25px_rgba(236,72,153,0.25)]"
      }
    }

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          colorVariants[color][variant],
          "transition-all duration-300",
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

