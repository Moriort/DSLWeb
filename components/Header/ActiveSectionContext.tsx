"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

type ActiveSectionContextType = {
  activeSection: string
  setActiveSection: (section: string) => void
  timeOfLastClick: number
  setTimeOfLastClick: (time: number) => void
}

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)

export function ActiveSectionProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState("")
  const [timeOfLastClick, setTimeOfLastClick] = useState(0) // Para evitar conflictos entre click y scroll

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentTime = Date.now()
          const timeSinceLastClick = currentTime - timeOfLastClick
          
          // Solo actualizar si no hubo un click reciente (900ms)
          if (timeSinceLastClick > 900) {
            const sectionId = entry.target.id
            setActiveSection(sectionId)
          }
        }
      })
    }

    const observerOptions: IntersectionObserverInit = {
      threshold: 0.5,
      rootMargin: "-10% 0px -45% 0px"
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observar todas las secciones
    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [timeOfLastClick])

  return (
    <ActiveSectionContext.Provider 
      value={{ 
        activeSection, 
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  )
}

export function useActiveSection() {
  const context = useContext(ActiveSectionContext)
  if (!context) {
    throw new Error("useActiveSection must be used within an ActiveSectionProvider")
  }
  return context
} 