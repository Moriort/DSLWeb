"use client"

import Image from "next/image"
import { ChevronRight, Code, Smartphone, BarChart, Calendar, Sun, Heart, MessageCircle, Camera, Home, Wifi, Battery, BellRing } from "lucide-react"
import { NeonButton } from "@/components/common/neon-button"
import { RevealText } from "@/components/common/reveal-text"
import { AnimatedGradientText } from "@/components/common/animated-gradient-text"
import { ThreeDCard } from "@/components/common/3d-card"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import AndroidPhone from "@/components/Movil/AndroidPhone"

export default function Hero() {
  const [colorIndex, setColorIndex] = useState(0)
  const colors = ["blue", "indigo", "violet"]
  const [currentTime, setCurrentTime] = useState("")
  
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.getHours().toString().padStart(2, '0') + ":" + 
                    now.getMinutes().toString().padStart(2, '0'))
    }
    updateTime()
    const interval = setInterval(updateTime, 60000)
    return () => clearInterval(interval)
  }, [])
  
  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.15 * i,
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1],
      },
    }),
  }

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }

  // Variante para los botones con efecto pulsante
  const pulseAnimation = {
    scale: [1, 1.02, 1],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }

  // Animación para el smartphone
  const phoneAnimation = {
    initial: { opacity: 0, scale: 0.9, y: 20 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        duration: 0.9, 
        delay: 0.5,
        ease: [0.23, 1, 0.32, 1] 
      } 
    }
  }

  // Obtener fecha actual para mostrar en el widget
  const getCurrentDate = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const now = new Date();
    const day = days[now.getDay()];
    const date = now.getDate();
    const month = months[now.getMonth()];
    
    return `${day}, ${month} ${date}`;
  };

  return (
    <section className="relative overflow-hidden pt-16 pb-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-b from-zinc-900 to-zinc-950 min-h-[90vh] flex flex-col justify-center">
      {/* Efecto de partículas o "burbujas" de código en el fondo */}
      <div className="absolute inset-0 opacity-30 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-blue-900 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-2/3 left-1/3 w-12 h-12 bg-blue-600 rounded-full blur-xl animate-pulse delay-700"></div>
        <div className="absolute top-1/4 right-1/4 w-10 h-10 bg-blue-500 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-6 h-6 bg-blue-900 rounded-full blur-xl animate-pulse delay-1500"></div>
        <div className="absolute top-1/2 right-1/2 w-16 h-16 bg-blue-900/30 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/3 left-1/5 w-14 h-14 bg-blue-900/20 rounded-full blur-xl animate-pulse delay-2500"></div>
      </div>

      {/* Patrones de código en el fondo */}
      <div className="absolute inset-0 opacity-5 select-none overflow-hidden pointer-events-none">
        <div className="absolute -rotate-12 -left-10 top-20 text-[40px] sm:text-[60px] md:text-[80px] text-blue-900 font-mono">
          {`<Kotlin/>`}
        </div>
        <div className="absolute rotate-12 -right-10 bottom-20 text-[30px] sm:text-[40px] md:text-[60px] text-blue-900 font-mono">
          {`{Android}`}
        </div>
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10 w-full">
        <div className="grid gap-10 lg:gap-12 md:grid-cols-2 items-center">
          {/* Columna de texto - optimizada para móvil */}
          <div className="space-y-6 md:space-y-6">
            <motion.div
              custom={0}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center rounded-full border border-blue-900/30 bg-blue-900/10 px-3 py-1 text-sm text-blue-400 transform-gpu"
            >
              <span>Especialistas en Android</span>
            </motion.div>
            
            <motion.div
              custom={1}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="transform-gpu mt-4"
            >
              <RevealText className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] sm:leading-tight tracking-wider font-outfit font-bold uppercase">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300">Aplicaciones Android</span> <br className="hidden sm:block" />
                <span className="sm:mt-1 inline-block">para Empresas</span>
              </RevealText>
            </motion.div>
            
            <motion.p
              custom={2}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="text-base md:text-lg text-zinc-400 max-w-[600px] transform-gpu mt-4"
            >
              Transformamos su visión en aplicaciones Android nativas de alto rendimiento utilizando{" "}
              <AnimatedGradientText>Kotlin</AnimatedGradientText> y las últimas tecnologías. Soluciones personalizadas
              que optimizan procesos y mejoran la experiencia de sus clientes.
            </motion.p>
            
            <motion.div
              custom={3}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="transform-gpu mt-6"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contacto"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-900 rounded-lg shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:ring-offset-zinc-900 transition-colors"
                >
                  Solicitar Cotización
                  <ChevronRight className="ml-2 -mr-1 h-5 w-5" />
                </a>
                
                <a 
                  href="#metodologia"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-blue-400 bg-transparent rounded-lg border-2 border-blue-900/20 hover:border-blue-900/40 hover:bg-blue-900/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:ring-offset-zinc-900 transition-colors"
                >
                  Ver Metodología
                  <ChevronRight className="ml-2 -mr-1 h-5 w-5" />
                </a>
              </div>
            </motion.div>

            <motion.div
              custom={4}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="transform-gpu mt-8"
            >
              <div className="pt-6 border-t border-zinc-800">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-4">
                  <div className="flex items-center gap-3 group bg-zinc-900/40 hover:bg-zinc-900/60 rounded-lg p-3 transition-colors duration-300">
                    <div className="w-10 h-10 rounded-lg bg-blue-900/10 flex items-center justify-center group-hover:bg-blue-900/20 transition-colors duration-300">
                      <Smartphone className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-sm text-white font-medium group-hover:text-blue-400 transition-colors duration-300">Experiencias móviles nativas</h3>
                      <p className="text-xs text-zinc-400 mt-0.5">UI/UX optimizada para Android</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 group bg-zinc-900/40 hover:bg-zinc-900/60 rounded-lg p-3 transition-colors duration-300">
                    <div className="w-10 h-10 rounded-lg bg-blue-900/10 flex items-center justify-center group-hover:bg-blue-900/20 transition-colors duration-300">
                      <Code className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-sm text-white font-medium group-hover:text-blue-400 transition-colors duration-300">Código limpio</h3>
                      <p className="text-xs text-zinc-400 mt-0.5">Arquitectura robusta</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 group bg-zinc-900/40 hover:bg-zinc-900/60 rounded-lg p-3 transition-colors duration-300">
                    <div className="w-10 h-10 rounded-lg bg-blue-900/10 flex items-center justify-center group-hover:bg-blue-900/20 transition-colors duration-300">
                      <BarChart className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-sm text-white font-medium group-hover:text-blue-400 transition-colors duration-300">Soluciones escalables</h3>
                      <p className="text-xs text-zinc-400 mt-0.5">Tecnologías modernas</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8,
              delay: 0.3,
              ease: [0.23, 1, 0.32, 1]
            }}
          >
            <AndroidPhone />
          </motion.div>
        </div>
      </div>
      
      {/* Indicador de scroll para móvil */}
      <div className="mt-6 sm:hidden flex justify-center items-center opacity-60">
        <motion.button
          initial={{ opacity: 0.5, y: 0 }}
          animate={{ opacity: [0.5, 1, 0.5], y: [0, 8, 0] }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            ease: "easeInOut" 
          }}
          className="flex flex-col items-center group cursor-pointer"
          onClick={() => {
            const currentPosition = window.scrollY;
            const viewportHeight = window.innerHeight;
            window.scrollTo({
              top: currentPosition + viewportHeight * 0.6,
              behavior: 'smooth'
            });
          }}
          aria-label="Descubrir más contenido"
        >
          <span className="text-[10px] uppercase tracking-widest text-zinc-500 group-hover:text-blue-400 mb-1 transition-colors duration-300">
            Descubrir
          </span>
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500 group-hover:text-blue-400 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <div className="absolute inset-0 rounded-full bg-blue-900/0 group-hover:bg-blue-900/20 group-active:bg-blue-900/30 scale-0 group-hover:scale-150 transition-all duration-300 blur-md -z-10"></div>
          </div>
        </motion.button>
      </div>
    </section>
  )
}
