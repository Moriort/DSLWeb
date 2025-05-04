"use client"

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AndroidHero from './Hero'
import WebHero from './WebHero'
import { Smartphone, Globe } from 'lucide-react'

export type HeroType = 'android' | 'web'

interface HeroSwitcherProps {
  activeHero: HeroType;
  setActiveHero: (hero: HeroType) => void;
  autoSwitch: boolean;
  setAutoSwitch: (auto: boolean) => void;
}

export default function HeroSwitcher({ activeHero, setActiveHero, autoSwitch, setAutoSwitch }: HeroSwitcherProps) {

  const heroRef = useRef<HeroType>(activeHero);
  useEffect(() => {
    heroRef.current = activeHero;
  }, [activeHero]);

  useEffect(() => {
    if (!autoSwitch) return;
    const interval = setInterval(() => {
      setActiveHero(heroRef.current === 'android' ? 'web' : 'android');
    }, 360000);
    return () => clearInterval(interval);
  }, [autoSwitch, setActiveHero]);

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] }
    }
  }

  return (
    <div className="relative min-h-[500px] flex flex-col justify-end">
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-30 flex items-center bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-full px-1 py-1 shadow-xl scale-90 sm:scale-100">
        <button
          onClick={() => {
            setActiveHero('android')
            setAutoSwitch(false)
          }}
          className={`relative rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm focus:outline-none transition-all duration-300 ${
            activeHero === 'android' 
              ? 'text-white' 
              : 'text-zinc-400 hover:text-zinc-200'
          }`}
          aria-label="Mostrar desarrollo Android"
        >
          {activeHero === 'android' && (
            <motion.div
              layoutId="heroSelector"
              className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 rounded-full -z-10"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <div className="flex items-center gap-1 sm:gap-1.5">
            <Smartphone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span>Android</span>
          </div>
        </button>
        <button
          onClick={() => {
            setActiveHero('web')
            setAutoSwitch(false)
          }}
          className={`relative rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm focus:outline-none transition-all duration-300 ${
            activeHero === 'web' 
              ? 'text-white' 
              : 'text-zinc-400 hover:text-zinc-200'
          }`}
          aria-label="Mostrar desarrollo Web"
        >
          {activeHero === 'web' && (
            <motion.div
              layoutId="heroSelector"
              className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 rounded-full -z-10"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <div className="flex items-center gap-1 sm:gap-1.5">
            <Globe className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span>Web</span>
          </div>
        </button>
        <button
          onClick={() => setAutoSwitch(!autoSwitch)}
          className={`ml-1 px-1.5 sm:px-2 rounded-full transition-colors duration-300 ${
            autoSwitch 
              ? 'text-blue-400 hover:text-blue-300' 
              : 'text-zinc-500 hover:text-zinc-400'
          }`}
          title={autoSwitch ? "Desactivar cambio automático" : "Activar cambio automático"}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 sm:h-4 sm:w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center w-full mt-12 sm:mt-0">
  
        <AnimatePresence mode="wait">
          <motion.div
            key={activeHero}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={contentVariants}
            className="w-full"
          >
            {activeHero === 'android' ? <AndroidHero /> : <WebHero />}
          </motion.div>
        </AnimatePresence>
      </div>
      {autoSwitch && (
        <div className="fixed md:absolute bottom-6 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none select-none">
          <div className="bg-zinc-900/80 backdrop-blur-md rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-blue-300 flex items-center gap-2 sm:gap-3 border border-zinc-800/70 shadow-2xl animate-fade-in">
            <span>Cambio automático en</span>
            <motion.div 
              className="w-12 sm:w-16 h-1.5 sm:h-2 bg-zinc-700 rounded-full overflow-hidden border border-blue-700"
              title="Tiempo hasta el siguiente cambio"
            >
              <motion.div 
                className={`h-full transition-colors duration-300 ${activeHero === 'android' ? 'bg-blue-400' : 'bg-blue-400'}`}
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 10, ease: "linear" }}
              />
            </motion.div>
          </div>
        </div>
      )}
    </div>
  )
}