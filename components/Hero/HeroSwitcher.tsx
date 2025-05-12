"use client"

import { useState, useEffect, useRef, Suspense, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Smartphone, Globe } from 'lucide-react'
import Hero from './Hero'
import WebHero from './WebHero'

export type HeroType = 'android' | 'web' | 'ios' | 'desktop'

interface HeroSwitcherProps {
  activeHero: HeroType;
  setActiveHero: (hero: HeroType) => void;
  autoSwitch: boolean;
  setAutoSwitch: (auto: boolean) => void;
}

// Estilos de animaciones globales
const GlobalAnimations = () => (
  <style jsx global>{`
    @keyframes shiftGradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
    
    @keyframes pulseLED {
      0% {
        opacity: 0.2;
      }
      50% {
        opacity: 0.4;
      }
      100% {
        opacity: 0.2;
      }
    }
    
    @keyframes moveLight {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(100%);
      }
    }
    
    @keyframes shine {
      0% {
        background-position: -200% center;
      }
      100% {
        background-position: 200% center;
      }
    }
    
    @keyframes metalShine {
      0% {
        opacity: 0.5;
        transform: translateX(-100%) skewX(-45deg);
      }
      100% {
        opacity: 0;
        transform: translateX(100%) skewX(-45deg);
      }
    }
    
    @keyframes brushedMetalShine {
      0% {
        opacity: 0;
      }
      25% {
        opacity: 0.3;
      }
      50% {
        opacity: 0.5;
      }
      75% {
        opacity: 0.3;
      }
      100% {
        opacity: 0;
      }
    }
    
    @keyframes goldenPulse {
      0% {
        opacity: 0.3;
        filter: brightness(1);
      }
      50% {
        opacity: 0.6;
        filter: brightness(1.2);
      }
      100% {
        opacity: 0.3;
        filter: brightness(1);
      }
    }
    
    @keyframes diamondPlateShine {
      0% {
        opacity: 0.2;
        background-position: -50px -50px;
      }
      50% {
        opacity: 0.4;
        background-position: 50px 50px;
      }
      100% {
        opacity: 0.2;
        background-position: 150px 150px;
      }
    }
    
    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
    
    @keyframes plutoniumGlow {
      0% {
        opacity: 0.6;
        filter: hue-rotate(0deg) brightness(1.2);
        transform: rotate(0deg);
      }
      50% {
        opacity: 0.9;
        filter: hue-rotate(15deg) brightness(1.5);
      }
      100% {
        opacity: 0.6;
        filter: hue-rotate(0deg) brightness(1.2);
        transform: rotate(360deg);
      }
    }
    
    @keyframes threadSpin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `}</style>
);

export default function HeroSwitcher({ activeHero, setActiveHero, autoSwitch, setAutoSwitch }: HeroSwitcherProps) {
  const heroRef = useRef<HeroType>(activeHero);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [hoverButton, setHoverButton] = useState<HeroType | null>(null);

  // Efecto para marcar el componente como montado
  useEffect(() => {
    setMounted(true);
    
    // Agregar estilos de animación
    const styleElement = document.createElement('style');
    styleElement.innerHTML = GlobalAnimations().props.children;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  // Memoización de variantes de animación para el contenido
  const contentVariants = useMemo(() => ({
    hidden: { 
      opacity: 0, 
      y: 20,
      transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] }
    }
  }), []);

  // Actualizar heroRef cuando cambia activeHero para cambio automático
  useEffect(() => {
    heroRef.current = activeHero;
    
    if (activeHero !== heroRef.current) {
      setIsTransitioning(true);
      
      // Desbloquear transiciones después de completar la animación
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 800);
      
      return () => clearTimeout(timer);
    }
  }, [activeHero]);

  // Controlador optimizado para cambio de vista
  const handleHeroChange = useCallback((newHeroType: HeroType) => {
    // Evitar cambios durante transiciones o cuando ya es el mismo tipo
    if (isTransitioning || newHeroType === activeHero) return;
    
    setIsTransitioning(true);
    setActiveHero(newHeroType);
    
    // Desactivar cambio automático al cambiar manualmente
    if (autoSwitch) {
      setAutoSwitch(false);
    }
  }, [activeHero, autoSwitch, isTransitioning, setActiveHero, setAutoSwitch]);

  // Control de cambio automático con protección contra transiciones
  useEffect(() => {
    if (!autoSwitch) return;
    
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setActiveHero(heroRef.current === 'android' ? 'web' : 'android');
        
        // Reducir el tiempo de bloqueo de transición
        setTimeout(() => {
          setIsTransitioning(false);
        }, 600);
      }
    }, 360000); // 6 minutos
    
    return () => clearInterval(interval);
  }, [autoSwitch, isTransitioning, setActiveHero]);

  // Componente de Loading optimizado con mensaje de estado
  const LoadingFallback = useCallback(() => (
    <div className="flex items-center justify-center h-[80vh] w-full">
      <div className="flex flex-col items-center bg-zinc-900/90 p-8 rounded-xl border border-zinc-800 shadow-2xl backdrop-blur-xl relative overflow-hidden">
        {/* Textura de acero inoxidable cepillado */}
        <div className="absolute inset-0 opacity-40" 
          style={{
            background: 'linear-gradient(90deg, #94a3b8 0%, #64748b 25%, #94a3b8 50%, #64748b 75%, #94a3b8 100%)',
            backgroundSize: '200% 100%',
            animation: 'shiftGradient 15s linear infinite',
            opacity: '0.1',
            mixBlendMode: 'overlay'
          }}
        />
        
        {/* Textura de metal fino granulado */}
        <div className="absolute inset-0" 
          style={{
            background: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
            opacity: '0.07',
            mixBlendMode: 'overlay'
          }}
        />
        
        {/* Textura de metal con patrón de diamante (inspirado en diamond plate) */}
        <div className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20h20v20H0V20zm20 0h20v20H20V20zM0 0h20v20H0V0zm20 0h20v20H20V0z' fill='%23ffffff' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            mixBlendMode: 'overlay'
          }}
        />
        
        {/* Acabado metálico cepillado horizontal */}
        <div className="absolute inset-0 opacity-20" 
          style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(176, 190, 197, 0.07) 1px, rgba(176, 190, 197, 0.07) 2px)',
            mixBlendMode: 'overlay'
          }}
        />
        
        {/* Resplandor metálico superior */}
        <div className="absolute inset-x-0 top-0 h-[20%]" 
          style={{
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.1), transparent)',
            borderRadius: '0.75rem 0.75rem 0 0'
          }}
        />
        
        {/* Bordes metálicos industriales con efecto de luz */}
        <div className="absolute inset-0 rounded-xl" 
          style={{
            boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.1), inset 0 -1px 1px rgba(0, 0, 0, 0.8)',
            border: '1px solid rgba(51, 65, 85, 0.9)',
            overflow: 'hidden'
          }}
        />
        
        {/* Efecto de luz de borde superior */}
        <div className="absolute inset-x-0 top-0 h-[1px]"
             style={{
               background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)'
             }}
        />
        
        {/* Tornillos metálicos en las esquinas - con textura metálica mejorada */}
        <div className="absolute left-3 top-3 w-2 h-2 rounded-full"
             style={{
               background: 'radial-gradient(circle, rgba(176, 190, 197, 0.8) 10%, rgba(148, 163, 184, 0.4) 70%)',
               boxShadow: 'inset 0 0 1px rgba(0, 0, 0, 0.9), 0 0 3px rgba(203, 213, 225, 0.5)'
             }}
        />
        <div className="absolute right-3 top-3 w-2 h-2 rounded-full"
             style={{
               background: 'radial-gradient(circle, rgba(176, 190, 197, 0.8) 10%, rgba(148, 163, 184, 0.4) 70%)',
               boxShadow: 'inset 0 0 1px rgba(0, 0, 0, 0.9), 0 0 3px rgba(203, 213, 225, 0.5)'
             }}
        />
        <div className="absolute left-3 bottom-3 w-2 h-2 rounded-full"
             style={{
               background: 'radial-gradient(circle, rgba(176, 190, 197, 0.8) 10%, rgba(148, 163, 184, 0.4) 70%)',
               boxShadow: 'inset 0 0 1px rgba(0, 0, 0, 0.9), 0 0 3px rgba(203, 213, 225, 0.5)'
             }}
        />
        <div className="absolute right-3 bottom-3 w-2 h-2 rounded-full"
             style={{
               background: 'radial-gradient(circle, rgba(176, 190, 197, 0.8) 10%, rgba(148, 163, 184, 0.4) 70%)',
               boxShadow: 'inset 0 0 1px rgba(0, 0, 0, 0.9), 0 0 3px rgba(203, 213, 225, 0.5)'
             }}
        />
        
        {/* Detalle metálico: ranura en los tornillos */}
        <div className="absolute left-3 top-3 w-1 h-[1px] bg-black/60 rounded-full transform translate-x-0.5 translate-y-1"></div>
        <div className="absolute right-3 top-3 w-1 h-[1px] bg-black/60 rounded-full transform translate-x-0.5 translate-y-1"></div>
        <div className="absolute left-3 bottom-3 w-1 h-[1px] bg-black/60 rounded-full transform translate-x-0.5 translate-y-1"></div>
        <div className="absolute right-3 bottom-3 w-1 h-[1px] bg-black/60 rounded-full transform translate-x-0.5 translate-y-1"></div>
        
        {/* Líneas de soldadura con efecto metálico */}
        <div className="absolute left-5 top-0 w-[1px] h-[8px]"
             style={{
               background: 'linear-gradient(to bottom, transparent, rgba(203, 213, 225, 0.5), transparent)',
               boxShadow: '0 0 3px rgba(255, 255, 255, 0.3)'
             }}
        />
        
        <div className="relative p-2 z-10">
          <div className="w-12 h-12 mb-4 relative">
            {/* Spinner metálico con efecto de rotación */}
            <div className="absolute inset-0 rounded-full"
                 style={{
                   borderWidth: '2px',
                   borderStyle: 'solid',
                   borderColor: 'rgba(148, 163, 184, 0.1) rgba(148, 163, 184, 0.1) rgba(148, 163, 184, 0.1) rgba(59, 130, 246, 0.6)',
                   animation: 'spin 1s linear infinite',
                   boxShadow: '0 0 10px rgba(59, 130, 246, 0.3)'
                 }}
            />
            
            {/* Reflejos metálicos en el spinner */}
            <div className="absolute inset-1 rounded-full"
                 style={{
                   background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), transparent 50%, rgba(0, 0, 0, 0.1))',
                   animation: 'spin 4s linear infinite reverse'
                 }}
            />
          </div>
          
          <p className="text-blue-300 font-medium mb-1 text-center">Cargando contenido</p>
          <p className="text-zinc-400 text-xs text-center">Preparando componentes interactivos</p>
        </div>
      </div>
    </div>
  ), []);

  return (
    <div className="relative min-h-[500px] flex flex-col justify-end">
      {/* Selector de tipo de desarrollo con efecto de metal pulido */}
      <div 
        className="absolute top-4 left-1/2 transform -translate-x-1/2 z-30 flex items-center 
                   rounded-full px-0.5 py-0.5 scale-90 sm:scale-100 select-none"
        style={{
          background: 'linear-gradient(145deg, #0f172a, #1e293b)',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
          border: '1px solid rgba(51, 65, 85, 0.8)'
        }}
      >
        {/* Eliminar la mayoría de efectos y capas adicionales */}
        
        <div className="flex items-center relative z-10 py-[1px] px-[1px]">
          <button
            onClick={() => handleHeroChange('android')}
            onMouseEnter={() => setHoverButton('android')}
            onMouseLeave={() => setHoverButton(null)}
            className={`relative rounded-full px-4 sm:px-5 py-2.5 text-xs sm:text-sm focus:outline-none transition-all duration-300 ${
              activeHero === 'android' 
                ? 'text-white font-semibold' 
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
            aria-label="Mostrar desarrollo Android"
            disabled={isTransitioning}
            style={{
              background: activeHero === 'android' 
                ? 'linear-gradient(145deg, #1a2a43, #0c1525)' 
                : 'transparent',
              boxShadow: activeHero === "android"
                ? 'inset 0 1px 1px rgba(255, 255, 255, 0.05), 0 0 0 1px rgba(74, 222, 128, 0.5)'
                : 'none',
              textShadow: activeHero === 'android' ? '0 0 10px rgba(74, 222, 128, 0.5)' : 'none'
            }}
          >
            {activeHero === 'android' && (
              <motion.div
                layoutId="heroSelector"
                className="absolute inset-0 rounded-full -z-10 overflow-hidden"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                style={{
                  background: 'linear-gradient(135deg, #1e293b, #0f172a)',
                  boxShadow: 'inset 0 0 0 1px rgba(74, 222, 128, 0.5)'
                }}
              >
                {/* Brillo sutil cuando está activo */}
                <div className="absolute inset-0"
                     style={{
                       background: 'radial-gradient(circle at center, rgba(74, 222, 128, 0.2) 0%, transparent 70%)',
                       mixBlendMode: 'screen'
                     }}
                />
              </motion.div>
            )}
            
            <div className="flex items-center gap-1.5 sm:gap-2 relative">
              <Smartphone className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${activeHero === 'android' ? 'text-emerald-300' : 'text-zinc-500'}`} />
              <span className={`font-medium tracking-wide ${activeHero === 'android' ? 'text-emerald-300' : 'text-zinc-500'}`}>Android</span>
            </div>
          </button>
          
          <button
            onClick={() => handleHeroChange('web')}
            onMouseEnter={() => setHoverButton('web')}
            onMouseLeave={() => setHoverButton(null)}
            className={`relative rounded-full px-4 sm:px-5 py-2.5 text-xs sm:text-sm focus:outline-none transition-all duration-300 ${
              activeHero === 'web' 
                ? 'text-white font-semibold' 
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
            aria-label="Mostrar desarrollo Web"
            disabled={isTransitioning}
            style={{
              background: activeHero === 'web' 
                ? 'linear-gradient(135deg, #1e3b8a, #1e40af)' 
                : 'transparent',
              boxShadow: activeHero === "web"
                ? 'inset 0 1px 1px rgba(255, 255, 255, 0.05), 0 0 0 1px rgba(59, 130, 246, 0.5)'
                : 'none',
              textShadow: activeHero === 'web' ? '0 0 10px rgba(59, 130, 246, 0.5)' : 'none'
            }}
          >
            {activeHero === 'web' && (
              <motion.div
                layoutId="heroSelector"
                className="absolute inset-0 rounded-full -z-10 overflow-hidden"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                style={{
                  background: 'linear-gradient(135deg, #1e3b8a, #1e40af)',
                  boxShadow: 'inset 0 0 0 1px rgba(59, 130, 246, 0.5)'
                }}
              >
                {/* Brillo sutil cuando está activo */}
                <div className="absolute inset-0"
                     style={{
                       background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
                       mixBlendMode: 'screen'
                     }}
                />
              </motion.div>
            )}
            
            <div className="flex items-center gap-1.5 sm:gap-2 relative">
              <Globe className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${activeHero === 'web' ? 'text-blue-400' : 'text-zinc-500'}`} />
              <span className={`font-medium tracking-wide ${activeHero === 'web' ? 'text-white' : 'text-zinc-500'}`}>Web</span>
            </div>
          </button>
          
          <button
            onClick={() => setAutoSwitch(!autoSwitch)}
            onMouseEnter={() => setHoverButton(null)}
            className={`ml-1 px-2 sm:px-2.5 py-2 rounded-full transition-colors duration-300 relative overflow-hidden ${
              autoSwitch 
                ? 'text-blue-300' 
                : 'text-zinc-500 hover:text-zinc-400'
            }`}
            title={autoSwitch ? "Desactivar cambio automático" : "Activar cambio automático"}
            aria-label={autoSwitch ? "Desactivar cambio automático" : "Activar cambio automático"}
            disabled={isTransitioning}
            style={{
              boxShadow: autoSwitch ? 'inset 0 0 0 1px rgba(96, 165, 250, 0.4)' : 'none',
            }}
          >
            {autoSwitch && (
              <div className="absolute inset-0 rounded-full -z-10 overflow-hidden">
                <div className="absolute inset-0"
                     style={{
                       background: 'radial-gradient(circle at center, rgba(96, 165, 250, 0.1) 0%, transparent 70%)',
                       mixBlendMode: 'screen'
                     }}
                />
              </div>
            )}
            
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 sm:h-4 sm:w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Contenido del Hero con control optimizado de transiciones */}
      <div className="flex-1 flex flex-col justify-center items-center w-full mt-16 sm:mt-14">
        {!mounted ? (
          <LoadingFallback />
        ) : (
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeHero}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={contentVariants}
              className="w-full will-change-transform"
              style={{ 
                position: 'relative',
                zIndex: 1
              }}
              onAnimationComplete={() => {
                if (isTransitioning) {
                  setIsTransitioning(false);
                }
              }}
            >
              <Suspense fallback={<LoadingFallback />}>
                {activeHero === 'android' ? <Hero /> : <WebHero />}
              </Suspense>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
      
      {/* Indicador de cambio automático */}
      {autoSwitch && !isTransitioning && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none select-none">
          <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-blue-300 rounded-full shadow-lg"
               style={{
                 background: 'linear-gradient(145deg, #0f172a, #1e293b)',
                 boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
                 border: '1px solid rgba(51, 65, 85, 0.8)'
               }}
          >
            <span className="font-medium text-blue-300/90 relative tracking-wide z-10">Cambio automático en</span>
            <motion.div 
              className="h-1.5 sm:h-2 w-12 sm:w-16 rounded-full overflow-hidden relative"
              title="Tiempo hasta el siguiente cambio"
              style={{
                background: '#0f172a',
                boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.4)'
              }}
            >
              <motion.div 
                className="h-full relative"
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 360, ease: "linear" }}
                style={{
                  background: 'linear-gradient(90deg, #3b82f6, #60a5fa)'
                }}
              />
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
}