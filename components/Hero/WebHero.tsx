"use client"

import { ChevronRight, Code, Database, Sparkles } from "lucide-react"
import { RevealText } from "@/components/common/reveal-text"
import MockupWindow from "@/components/WebApp/WebApp"
import { AnimatedGradientText } from "@/components/common/animated-gradient-text"
import { memo } from 'react';
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const WebHero = memo(() => {
  const [colorIndex, setColorIndex] = useState(0)
  const colors = ["blue", "indigo", "violet"]
  
  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [])

  const fadeInUpSmooth = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.15 * i,
        duration: 1.2,
        ease: "easeInOut",
      },
    }),
  }

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <div className="py-12">
          <div className="grid gap-16 md:grid-cols-2 items-start">
            {/* Columna de texto */}
            <div className="space-y-8">
              <div className="inline-flex items-center bg-blue-950/30 border border-blue-900/40 rounded-full px-3 py-1">
                <span className="text-sm text-blue-400 font-medium">Especialistas en Desarrollo Web</span>
              </div>
              
              <div>
                <h1 className="text-5xl sm:text-5xl md:text-6xl font-bold leading-[1.1]">
                  <span className="block text-blue-400">Aplicaciones Web</span>
                  <span className="block text-white mt-1">para empresas</span>
                </h1>
              </div>
              
              <p className="text-zinc-400 text-lg max-w-xl">
                Transformamos su visión en plataformas web de alto rendimiento utilizando{" "}
                <span className="text-blue-400">React</span> y las últimas tecnologías. Soluciones escalables
                que optimizan procesos y mejoran la experiencia de sus usuarios finales.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contacto"
                  className="relative group inline-flex items-center justify-center overflow-hidden rounded-lg bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white font-medium transition-all"
                >
                  <span className="flex items-center gap-2">
                    Solicitar cotización <ChevronRight className="h-4 w-4" />
                  </span>
                </a>
                
                <a 
                  href="#portafolio"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-700/20 bg-blue-900/20 px-6 py-3 text-blue-400 transition-colors hover:bg-blue-900/30"
                >
                  Ver proyectos <ChevronRight className="h-4 w-4" />
                </a>
              </div>
              
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-zinc-800/50">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-900/20 flex items-center justify-center">
                      <Code className="h-4 w-4 text-blue-400" />
                    </div>
                    <h3 className="text-sm text-white font-medium">Aplicaciones modernas</h3>
                  </div>
                  <p className="text-xs text-zinc-400 pl-10">Frontend avanzado con React</p>
                </div>
                
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-900/20 flex items-center justify-center">
                      <Database className="h-4 w-4 text-blue-400" />
                    </div>
                    <h3 className="text-sm text-white font-medium">APIs robustas</h3>
                  </div>
                  <p className="text-xs text-zinc-400 pl-10">Backend modular y escalable</p>
                </div>
                
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-900/20 flex items-center justify-center">
                      <Sparkles className="h-4 w-4 text-blue-400" />
                    </div>
                    <h3 className="text-sm text-white font-medium">Experiencia integral</h3>
                  </div>
                  <p className="text-xs text-zinc-400 pl-10">Diseño responsive optimizado</p>
                </div>
              </div>
            </div>
            
            {/* Componente mockup de aplicación web */}
            <div className="flex justify-center md:justify-end pt-10 md:pt-0">
              <MockupWindow />
            </div>
          </div>
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
  );
});

export default WebHero;