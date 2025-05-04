"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NeonButton } from "@/components/common/neon-button"
import MobileMenu from "./MobileMenu"
import ProgressBar from "./ProgressBar"
import { motion } from "framer-motion"
import { useActiveSection } from "./ActiveSectionContext"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isAtTop, setIsAtTop] = useState(true)
  const { activeSection, setActiveSection, setTimeOfLastClick, timeOfLastClick } = useActiveSection()

  const menuLinks = [
    { href: "#servicios", label: "Servicios" },
    { href: "#tecnologias", label: "Tecnologías" },
    { href: "#metodologia", label: "Metodología" },
    { href: "#portafolio", label: "Portafolio" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#contacto", label: "Contacto" },
  ]

  // Detectar scroll para añadir sombra al header y verificar secciones visibles
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 20)
      setIsAtTop(scrollPosition < 100)

      // No actualizamos la sección si el usuario acaba de hacer clic (esperamos 1 segundo)
      if (timeOfLastClick && Date.now() - timeOfLastClick < 1000) return

      const sections = menuLinks.map(link => ({
        id: link.href.substring(1),
        element: document.getElementById(link.href.substring(1))
      }))

      const currentSection = sections.find(section => {
        if (!section.element) return false
        const rect = section.element.getBoundingClientRect()
        // Consideramos que una sección está activa cuando su parte superior está cerca del 30% de la altura de la ventana
        return rect.top <= window.innerHeight * 0.3 && rect.bottom >= window.innerHeight * 0.3
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Llamamos a handleScroll una vez para establecer el estado inicial
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
        className={`sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-900/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/80 transition-all duration-300 ${
          scrolled ? "shadow-lg shadow-zinc-950/20" : ""
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
                whileHover={{ scale: 1.05 }}
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
            <div className="flex items-center gap-1 bg-zinc-800/30 rounded-full px-2 py-1 backdrop-blur-sm">
              {menuLinks.map((link) => {
                const isActive = !isAtTop && activeSection === link.href.substring(1)
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => handleClick(link.href.substring(1))}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full overflow-hidden ${
                      isActive 
                        ? "text-blue-400 bg-blue-950 ring-2 ring-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:bg-blue-900" 
                        : "text-zinc-300 hover:text-blue-400 hover:bg-blue-950 hover:ring-1 hover:ring-blue-400/50"
                    }`}
                  >
                    <span className="relative z-10">{link.label}</span>
                    {isActive && (
                      <>
                        <motion.span
                          layoutId="bubble"
                          className="absolute inset-0 z-[1] rounded-full bg-blue-400/20"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.6, 0.3]
                          }}
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
                        <motion.span
                          className="absolute inset-0 z-[-2] rounded-full bg-blue-400/10 blur-xl"
                          animate={{
                            scale: [1.1, 1.2, 1.1],
                            opacity: [0.2, 0.4, 0.2]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
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
                className={`shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 ${
                  isAtTop ? "ring-2 ring-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.3)]" : ""
                }`}
              >
                Cotizar Proyecto
              </NeonButton>
            </div>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="relative md:hidden focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-zinc-900 rounded-full transition-all duration-300"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="h-5 w-5 text-zinc-200 hover:text-blue-400 transition-colors" />
            <span className="sr-only">Abrir menú</span>
          </Button>
        </div>
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        menuLinks={menuLinks}
        isAtTop={isAtTop}
      />
    </>
  )
}