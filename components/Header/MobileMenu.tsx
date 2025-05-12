"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { X, Smartphone, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NeonButton } from "@/components/common/neon-button"
import Image from "next/image"
import { HeroType } from "@/components/Hero/HeroSwitcher"

interface LinkItem {
  href: string
  label: string
  icon: React.ElementType
}

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  links: LinkItem[]
  activeSection: string
  onLinkClick: (section: string) => void
  activeHero?: HeroType
}

export default function MobileMenu({ 
  isOpen, 
  onClose, 
  links, 
  activeSection,
  onLinkClick,
  activeHero = 'android'
}: MobileMenuProps) {
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
    const element = document.getElementById(sectionId)
    if (element) {
      onLinkClick(sectionId)
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" })
        onClose()
      }, 100)
    }
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
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="fixed right-0 top-0 z-50 h-full w-full max-w-xs bg-zinc-900 border-l border-zinc-800/40 shadow-xl"
          >
            <div className="flex h-full flex-col overflow-hidden">
              <div className="flex items-center justify-between border-b border-zinc-800/40 px-4 py-4">
                <div className="flex items-center gap-2">
                  <div 
                    className={`flex items-center rounded-full px-2 py-1 ${
                      activeHero === 'android' 
                      ? 'bg-emerald-900/20 border border-emerald-800/30 text-emerald-300'
                      : 'bg-blue-900/20 border border-blue-800/30 text-blue-300'
                    }`}
                  >
                    {activeHero === 'android' ? (
                      <div className="flex items-center gap-1.5">
                        <Smartphone className="h-3 w-3 text-emerald-300" />
                        <span className="text-xs font-medium text-emerald-300">Android</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5">
                        <Globe className="h-3 w-3 text-blue-300" />
                        <span className="text-xs font-medium text-blue-300">Web</span>
                      </div>
                    )}
                  </div>
                  <h2 className="text-lg font-semibold text-white">Menú</h2>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full text-zinc-400 hover:text-white"
                  onClick={onClose}
                >
                  <X className="h-5 w-5" />
                  <span className="sr-only">Cerrar menú</span>
                </Button>
              </div>
              
              <div className="flex-1 overflow-y-auto py-4 px-4">
                <nav className="grid gap-2">
                  {links.map((link) => {
                    const isActive = activeSection === link.href.substring(1)
                    const Icon = link.icon
                    
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault()
                          onLinkClick(link.href.substring(1))
                          onClose()
                        }}
                        className={`group relative flex items-center gap-3 rounded-lg p-3 text-sm transition-all ${
                          isActive
                            ? 'bg-blue-900/20 text-blue-400 font-medium'
                            : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-white'
                        }`}
                      >
                        <div className={`rounded-lg p-1.5 ${isActive ? 'bg-blue-900/30' : 'bg-zinc-800/40'}`}>
                          <Icon className={`h-5 w-5 ${isActive ? 'text-blue-400' : 'text-zinc-500 group-hover:text-zinc-300'}`} />
                        </div>
                        <span>{link.label}</span>
                      </Link>
                    )
                  })}
                </nav>
              </div>
              
              <div className="border-t border-zinc-800/40 p-4">
                <NeonButton 
                  color="blue" 
                  fullWidth={true}
                  variant="outline"
                  className="shadow-sm shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300"
                >
                  <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                    Cotizar
                  </span>
                </NeonButton>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
} 