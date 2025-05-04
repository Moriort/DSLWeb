"use client"

import { useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NeonButton } from "@/components/common/neon-button"
import { useActiveSection } from "./ActiveSectionContext"
import Image from "next/image"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  menuLinks: Array<{ href: string; label: string }>
  isAtTop: boolean
}

export default function MobileMenu({ isOpen, onClose, menuLinks, isAtTop }: MobileMenuProps) {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSection()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const handleClick = (sectionId: string) => {
    setTimeOfLastClick(Date.now())
    setActiveSection(sectionId)
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-zinc-950/90 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-zinc-900 border-l border-zinc-800 p-6 z-50"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <Image 
                  src="/LogoLight.png" 
                  alt="Digital Strong Locking Logo" 
                  width={120} 
                  height={40} 
                  className="object-contain h-10"
                  priority
                />
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-zinc-800"
                onClick={onClose}
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Cerrar menú</span>
              </Button>
            </div>
            <nav className="space-y-2">
              {menuLinks.map((link) => {
                const isActive = !isAtTop && activeSection === link.href.substring(1)
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => handleClick(link.href.substring(1))}
                    className={`relative block px-4 py-3 rounded-lg transition-all duration-300 overflow-hidden ${
                      isActive
                        ? "bg-blue-950 text-blue-400 ring-1 ring-blue-400/50 shadow-[0_0_15px_rgba(59,130,246,0.15)]"
                        : "text-zinc-300 hover:bg-blue-950/50 hover:text-blue-400"
                    }`}
                  >
                    <span className="relative z-10">{link.label}</span>
                    {isActive && (
                      <>
                        <motion.div
                          layoutId="mobile-bubble"
                          className="absolute inset-0 z-[1] rounded-lg bg-blue-400/20"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                        <motion.div
                          className="absolute inset-0 z-[2]"
                          animate={{
                            background: [
                              "radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
                              "radial-gradient(circle at 60% 60%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
                              "radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
                              "radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
                            ]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                        <motion.div
                          className="absolute inset-0 z-[3] mix-blend-soft-light opacity-50"
                          style={{
                            background: "radial-gradient(100% 100% at 50% 50%, transparent 0%, rgba(59, 130, 246, 0.2) 100%)"
                          }}
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        <motion.div
                          className="absolute inset-0 z-[4] blur-md"
                          style={{
                            background: "linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.1), transparent)"
                          }}
                          animate={{
                            x: ["-100%", "100%"],
                            y: ["-100%", "100%"]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                      </>
                    )}
                  </Link>
                )
              })}
            </nav>
            <div className="mt-8">
              <NeonButton 
                color="blue" 
                variant="outline" 
                className={`w-full justify-center shadow-lg shadow-blue-500/20 ${
                  isAtTop ? "ring-2 ring-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.3)]" : ""
                }`}
              >
                Cotizar Proyecto
              </NeonButton>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
} 