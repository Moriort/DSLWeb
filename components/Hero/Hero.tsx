"use client"

import Image from "next/image"
import { ChevronRight, Code, Smartphone, BarChart, Calendar, Sun, Heart, MessageCircle, Camera, Home, Wifi, Battery, BellRing } from "lucide-react"
import { RevealText } from "@/components/common/reveal-text"
import { AnimatedGradientText } from "@/components/common/animated-gradient-text"
import { motion } from "framer-motion"
import { useEffect, useState, useMemo, useCallback } from "react"
import dynamic from 'next/dynamic'
import { Suspense } from "react"

// Cargar el componente AndroidPhone de forma dinámica para mejorar el rendimiento
const AndroidPhone = dynamic(() => import('@/components/Movil/AndroidPhone'), {
  ssr: false, // Deshabilitar SSR para este componente pesado
})

const Hero = () => {
  const [colorIndex, setColorIndex] = useState(0)
  const [currentTime, setCurrentTime] = useState("")
  
  // Memorizar array de colores para evitar recrearlo en cada renderizado
  const colors = useMemo(() => ["blue", "indigo", "violet"], []);
  
  // Uso de useCallback para optimizar funciones
  const updateTime = useCallback(() => {
    const now = new Date()
    setCurrentTime(now.getHours().toString().padStart(2, '0') + ":" + 
                 now.getMinutes().toString().padStart(2, '0'))
  }, []);
  
  // Efecto para actualizar el tiempo actual
  useEffect(() => {
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, [updateTime]);
  
  // Efecto para cambiar el índice de color
  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [colors]);

  // Memorizar animaciones para evitar recrearlas en cada renderizado
  const fadeInUpSmooth = useMemo(() => ({
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
  }), []);

  const floatingAnimation = useMemo(() => ({
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }), []);

  // Variante para los botones con efecto pulsante
  const pulseAnimation = useMemo(() => ({
    scale: [1, 1.02, 1],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }), []);

  // Animación para el smartphone
  const phoneAnimation = useMemo(() => ({
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
  }), []);

  // Obtener fecha actual para mostrar en el widget - memoizado
  const getCurrentDate = useCallback(() => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const now = new Date();
    const day = days[now.getDay()];
    const date = now.getDate();
    const month = months[now.getMonth()];
    
    return `${day}, ${month} ${date}`;
  }, []);

  // Memoizar el componente de scroll para móvil
  const MobileScrollIndicator = useMemo(() => (
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
  ), []);


  // Memoizar las características del producto
  const ProductFeatures = useMemo(() => (
    <div className="pt-6 border-t border-zinc-800">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-4">
        <div className="flex items-center gap-3 group bg-zinc-900/40 hover:bg-zinc-900/60 rounded-lg p-3 transition-colors duration-300">
          <div className="w-10 h-10 rounded-lg bg-blue-900/10 flex items-center justify-center group-hover:bg-blue-900/20 transition-colors duration-300">
            <Smartphone className="h-5 w-5 text-blue-400" />
          </div>
          <div>
            <h3 className="text-sm text-white font-medium group-hover:text-blue-400 transition-colors duration-300">Experiencias nativas</h3>
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
  ), []);

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <div className="py-12">
          <div className="grid gap-16 md:grid-cols-2 items-start">
            {/* Columna de texto */}
            <div className="space-y-8">
              <div className="inline-flex items-center bg-blue-950/30 border border-blue-900/40 rounded-full px-3 py-1">
                <span className="text-sm text-blue-400 font-medium">Especialistas en Android</span>
              </div>
              
              <div>
                <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold leading-[1.2]">
                    <span className="block text-white">Soluciones móviles</span>
                    <span className="block text-white mb-1">personalizadas en</span>
                    <span className="block text-blue-400">tecnología Android</span>
                </h1>
              </div>
              
              <p className="text-zinc-400 text-base max-w-xl leading-relaxed">
                  Creamos aplicaciones Android innovadoras que transforman ideas en experiencias 
                  digitales excepcionales. Nuestro enfoque combina diseño intuitivo con tecnología 
                  avanzada para ofrecer soluciones que impulsan el crecimiento de tu negocio.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contacto"
                  className="relative group inline-flex items-center justify-center overflow-hidden rounded-lg bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white font-medium transition-all"
                >
                  <span className="flex items-center gap-2">
                    Contactar ahora <ChevronRight className="h-4 w-4" />
                  </span>
                </a>
                
                <a 
                  href="#servicios" 
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-700/20 bg-blue-900/20 px-6 py-3 text-blue-400 transition-colors hover:bg-blue-900/30"
                >
                  Ver servicios
                </a>
              </div>
              
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-zinc-800/50">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-900/20 flex items-center justify-center">
                      <Smartphone className="h-4 w-4 text-blue-400" />
                    </div>
                    <h3 className="text-sm text-white font-medium">Experiencias nativas</h3>
                  </div>
                  <p className="text-xs text-zinc-400 pl-10">UI/UX optimizada</p>
                </div>
                
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-900/20 flex items-center justify-center">
                      <Code className="h-4 w-4 text-blue-400" />
                    </div>
                    <h3 className="text-sm text-white font-medium">Código limpio</h3>
                  </div>
                  <p className="text-xs text-zinc-400 pl-10">Arquitectura robusta</p>
                </div>
                
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-900/20 flex items-center justify-center">
                      <BarChart className="h-4 w-4 text-blue-400" />
                    </div>
                    <h3 className="text-sm text-white font-medium">Soluciones</h3>
                  </div>
                  <p className="text-xs text-zinc-400 pl-10">Tecnologías modernas</p>
                </div>
              </div>
            </div>
            
            {/* Columna del smartphone */}
            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-md">
                <Suspense fallback={<div className="w-full h-[550px] bg-zinc-800/50 animate-pulse rounded-[30px]"></div>}>
                  <AndroidPhone />
                </Suspense>
                
                {/* Iconos flotantes */}
                <motion.div
                  className="absolute -left-6 top-1/4 w-12 h-12 rounded-xl overflow-hidden"
                  animate={floatingAnimation}
                >
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 p-2 shadow-lg">
                    <Calendar className="w-full h-full text-white" />
                  </div>
                </motion.div>
                
                <motion.div
                  className="absolute right-4 top-14 w-10 h-10 rounded-lg overflow-hidden"
                  animate={{
                    ...floatingAnimation,
                    transition: { ...floatingAnimation.transition, delay: 0.5 }
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-400 to-orange-600 p-2">
                    <Sun className="w-full h-full text-white" />
                  </div>
                </motion.div>
                
                <motion.div
                  className="absolute -right-4 top-1/3 w-10 h-10 rounded-full overflow-hidden"
                  animate={{
                    ...floatingAnimation,
                    transition: { ...floatingAnimation.transition, delay: 1 }
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-500 to-pink-700 p-2">
                    <Heart className="w-full h-full text-white" />
                  </div>
                </motion.div>
                
                <motion.div
                  className="absolute left-4 top-3/4 w-8 h-8 rounded-lg overflow-hidden"
                  animate={{
                    ...floatingAnimation,
                    transition: { ...floatingAnimation.transition, delay: 1.5 }
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-500 to-green-700 p-1.5">
                    <MessageCircle className="w-full h-full text-white" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {MobileScrollIndicator}
    </section>
  )
}

export default Hero
