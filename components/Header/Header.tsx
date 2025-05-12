"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, Smartphone, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NeonButton } from "@/components/common/neon-button"
import MobileMenu from "./MobileMenu"
import ProgressBar from "./ProgressBar"
import { motion } from "framer-motion"
import { useActiveSection } from "./ActiveSectionContext"
import { HeroType } from "@/components/Hero/HeroSwitcher"
import { 
  Code2, 
  Layers, 
  GitBranch, 
  Briefcase, 
  Users, 
  MessageSquareMore 
} from "lucide-react"

interface HeaderProps {
  activeHero?: HeroType;
  onHeroChange?: (hero: HeroType) => void;
}

export default function Header({ activeHero = "android", onHeroChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isAtTop, setIsAtTop] = useState(true)
  const { activeSection, setActiveSection, setTimeOfLastClick, timeOfLastClick } = useActiveSection()

  const menuLinks = [
    { href: "#servicios", label: "Servicios", icon: Code2 },
    { href: "#tecnologias", label: "Tecnologías", icon: Layers },
    { href: "#metodologia", label: "Metodología", icon: GitBranch },
    { href: "#portafolio", label: "Portafolio", icon: Briefcase },
    { href: "#nosotros", label: "Nosotros", icon: Users },
    { href: "#contacto", label: "Contacto", icon: MessageSquareMore }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 20)
      setIsAtTop(scrollPosition < 100)

      if (timeOfLastClick && Date.now() - timeOfLastClick < 1000) return

      const sections = menuLinks.map(link => ({
        id: link.href.substring(1),
        element: document.getElementById(link.href.substring(1))
      }))

      const currentSection = sections.find(section => {
        if (!section.element) return false
        const rect = section.element.getBoundingClientRect()
        return rect.top <= window.innerHeight * 0.3 && rect.bottom >= window.innerHeight * 0.3
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [setActiveSection, timeOfLastClick, menuLinks])

  const handleClick = (sectionId: string) => {
    setTimeOfLastClick(Date.now())
    setActiveSection(sectionId)
  }

  return (
    <>
      <ProgressBar />
      
      <header
        className={`sticky top-0 z-50 w-full border-b border-zinc-800/50 bg-zinc-900/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/80 transition-all duration-300 ${
          scrolled ? "shadow-lg shadow-zinc-950/10" : ""
        }`}
      >
        <div className="container flex h-16 items-center justify-between max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center group">
              <motion.div
                className="relative h-12 w-auto"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <Image 
                  src="/LogoLight.png" 
                  alt="Digital Strong Locking Logo" 
                  width={160} 
                  height={48} 
                  className="object-contain h-12"
                  priority
                />
              </motion.div>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-4">
            <div className="mr-2 flex items-center">
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
            </div>
            
            <div className="flex items-center gap-1 bg-zinc-800/20 rounded-full px-2 py-1 backdrop-blur-sm">
              {menuLinks.map((link) => {
                const isActive = !isAtTop && activeSection === link.href.substring(1)
                const Icon = link.icon
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => handleClick(link.href.substring(1))}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full overflow-hidden flex items-center gap-2 ${
                      isActive 
                        ? "text-blue-400 bg-blue-950/50 ring-1 ring-blue-400/30 shadow-[0_0_15px_rgba(59,130,246,0.15)]" 
                        : "text-zinc-400 hover:text-blue-400 hover:bg-blue-950/30"
                    }`}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Icon className={`w-4 h-4 ${isActive ? "text-blue-400" : "text-zinc-500"}`} />
                      <span className={`bg-gradient-to-r ${isActive ? 'from-blue-400 via-blue-400 to-blue-500' : 'from-zinc-400 via-zinc-400 to-zinc-500'} bg-clip-text text-transparent`}>
                        {link.label}
                      </span>
                    </span>
                    {isActive && (
                      <>
                        <motion.span
                          layoutId="bubble"
                          className="absolute inset-0 z-[1] rounded-full bg-blue-400/10"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                        <motion.div
                          className="absolute inset-0 z-[2]"
                          animate={{
                            background: [
                              "radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)",
                              "radial-gradient(circle at 60% 60%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)",
                              "radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)",
                            ]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                      </>
                    )}
                  </Link>
                )
              })}
            </div>
            <div className="pl-2">
              <NeonButton 
                color="blue" 
                variant="outline"
                className={`shadow-sm shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300 text-sm px-5 py-2 ${
                  isAtTop ? "ring-1 ring-blue-400/30 shadow-[0_0_10px_rgba(59,130,246,0.1)]" : ""
                }`}
              >
                <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                  Cotizar
                </span>
              </NeonButton>
            </div>
          </nav>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden relative overflow-hidden" 
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="h-6 w-6 relative z-10 text-zinc-400" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>
      
      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        links={menuLinks} 
        activeSection={activeSection}
        onLinkClick={handleClick}
        activeHero={activeHero}
      />
    </>
  )
}