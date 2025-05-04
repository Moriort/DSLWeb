"use client"

import { useRef, type ReactNode } from "react"
import { motion, useInView } from "framer-motion"

interface RevealTextProps {
  children: ReactNode
  className?: string
  threshold?: number
  delay?: number
}

export function RevealText({ children, className = "", threshold = 0.1, delay = 0 }: RevealTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  // Fix: Check if children is a string before splitting
  const childrenText = typeof children === "string" ? children : ""
  const words = childrenText.split(" ")
  
  // Determine if the component has special classes
  const hasQuantifyClass = className.includes('font-quantify')
  const hasOutfitClass = className.includes('font-outfit')
  const hasGroteskClass = className.includes('font-grotesk')
  const hasUppercaseClass = className.includes('uppercase')
  const fontWeightClass = 
    className.includes('font-normal') ? 'font-normal' : 
    className.includes('font-semibold') ? 'font-semibold' :
    className.includes('font-bold') ? 'font-bold' : ''
  
  // Combine needed classes
  let fontClass = 'font-outfit' // Por defecto usamos Outfit para títulos
  if (hasQuantifyClass) fontClass = 'font-quantify'
  else if (hasOutfitClass) fontClass = 'font-outfit'
  else if (hasGroteskClass) fontClass = 'font-grotesk'
  
  const textTransformClass = hasUppercaseClass ? 'uppercase' : ''
  const combinedClasses = `${fontClass} ${textTransformClass} ${fontWeightClass}`.trim()

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: delay * 0.1,
      },
    },
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  // If children is not a string, just render it with a simple fade animation
  if (typeof children !== "string") {
    return (
      <div ref={ref} className={`overflow-hidden ${className}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.5,
            delay: delay * 0.1,
            type: "spring",
            damping: 12,
            stiffness: 100,
          }}
          className={combinedClasses}
          style={{letterSpacing: hasUppercaseClass ? '0.03em' : 'inherit'}}
        >
          {children}
        </motion.div>
      </div>
    )
  }

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        style={{ display: "flex", flexWrap: "wrap", letterSpacing: hasUppercaseClass ? '0.03em' : 'inherit' }}
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={combinedClasses}
      >
        {words.map((word, index) => (
          <motion.span 
            key={index} 
            variants={child} 
            style={{ marginRight: "0.25em", display: "inline-block" }} 
            className={combinedClasses}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  )
}

