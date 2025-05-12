"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import Header from "@/components/Header/Header"
import HeroSwitcher, { HeroType } from "@/components/Hero/HeroSwitcher"
import Nosotros from "@/components/Sections/Nosotros"
import Contacto from "@/components/Sections/Contacto"
import Footer from "@/components/Footer/Footer"
import ScrollToTop from "@/components/common/ScrollToTop"
import { useState, useEffect, useCallback } from "react";
import { ProgressiveSection } from '@/components/common/ProgressiveSection';
import { OptimizedLink } from '@/components/common/OptimizedLink';

// Importaciones directas para componentes críticos
import ServiciosAndroid from '@/components/Sections/DesarrolloAndroid/Servicios';
import ServiciosWeb from '@/components/Sections/DesarrolloWeb/Servicios';

// Importaciones dinámicas con prioridad para componentes secundarios
const TecnologiasMovil = dynamic(() => import('@/components/Sections/DesarrolloMovil/Tecnologias'), {
  ssr: true,
  loading: () => null
});

const TecnologiasWeb = dynamic(() => import('@/components/Sections/DesarrolloWeb/Tecnologias'), {
  ssr: true,
  loading: () => null
});

const MetodologiaAndroid = dynamic(() => import('@/components/Sections/DesarrolloAndroid/Metodologia'), {
  ssr: true,
  loading: () => null
});

const MetodologiaWeb = dynamic(() => import('@/components/Sections/DesarrolloWeb/Metodologia'), {
  ssr: true,
  loading: () => null
});

const CTAAndroid = dynamic(() => import('@/components/Sections/DesarrolloAndroid/CTA'), {
  ssr: true,
  loading: () => null
});

const CTAWeb = dynamic(() => import('@/components/Sections/DesarrolloWeb/CTA'), {
  ssr: true,
  loading: () => null
});

// Componentes comentados que no se usarán por ahora
const PortafolioAndroid = dynamic(() => import('@/components/Sections/DesarrolloAndroid/Portafolio'), {
  ssr: true,
  loading: () => null
});

const PortafolioWeb = dynamic(() => import('@/components/Sections/DesarrolloWeb/Portafolio'), {
  ssr: true,
  loading: () => null
});

const TestimoniosAndroid = dynamic(() => import('@/components/Sections/DesarrolloAndroid/Testimonios'), {
  ssr: true,
  loading: () => null
});

const TestimoniosWeb = dynamic(() => import('@/components/Sections/DesarrolloWeb/Testimonios'), {
  ssr: true,
  loading: () => null
});

// Función para precargar componentes en segundo plano con priorización
const preloadComponentWithPriority = (importFn: () => Promise<any>, priority: number = 1) => {
  return new Promise((resolve) => {
    const timeoutId = setTimeout(() => {
      importFn()
        .then(resolve)
        .catch(() => {
          // Reintentar en caso de fallo con backoff exponencial
          setTimeout(() => preloadComponentWithPriority(importFn, priority * 2), 1000);
        });
    }, priority * 100); // Prioridad escalonada
    
    return () => clearTimeout(timeoutId);
  });
};

const projects = [
  {
    id: 'globe-example',
    title: 'Visualización Global Interactiva',
    description: 'Un globo terrestre 3D completamente personalizable que muestra conexiones y puntos de actividad global.',
    icon: '🌎',
    color: 'from-blue-900 to-indigo-600',
    tags: ['3D', 'Interactivo', 'Visualización de datos']
  },

  {
    id: 'coming-soon',
    title: 'Más Ejemplos Próximamente',
    description: 'Estamos desarrollando más componentes y ejemplos interactivos para esta galería.',
    icon: '🚀',
    color: 'from-blue-900 to-indigo-600',
    tags: ['Próximamente']
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const router = useRouter();
  const isComingSoon = project.id === 'coming-soon';
  
  // Animaciones
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0],
      }
    })
  };
  
  return (
    <motion.div
      custom={index}
      initial="hidden"
      animate="visible"
      variants={variants}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="col-span-1"
    >
      <div 
        className={`h-full rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm
                   shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
        onClick={() => !isComingSoon && router.push(`/${project.id}`)}
      >

        <div className={`h-24 bg-gradient-to-r ${project.color} flex items-center justify-center text-4xl`}>
          <span>{project.icon}</span>
        </div>
        
        <div className="p-6">
          <h2 className="text-xl font-bold mb-2 text-white">{project.title}</h2>
          <p className="text-zinc-400 mb-4 text-sm">{project.description}</p>
          
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span 
                key={tag} 
                className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="mt-6">
            {isComingSoon ? (
              <div className="px-4 py-2 text-sm bg-zinc-800 text-zinc-400 rounded-md text-center">
                En desarrollo
              </div>
            ) : (
              <div className="px-4 py-2 text-sm bg-blue-900 hover:bg-blue-800 text-white rounded-md text-center transition-colors">
                Ver demostración
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Home() {
  const [activeHero, setActiveHero] = useState<HeroType>("android");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [autoSwitch, setAutoSwitch] = useState(false);
  const isWeb = activeHero === "web";
  
  // Estado para seguimiento de componentes visibles
  const [visibleSections, setVisibleSections] = useState({
    hero: true,
    servicios: false,
    tecnologias: false,
    metodologia: false,
    nosotros: false,
    cta: false,
    contacto: false
  });

  // Memoizar controlador de cambio de héroe
  const handleHeroChange = useCallback((heroType: HeroType) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveHero(heroType);
    
    // Desbloquear transiciones después de un tiempo
    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  }, [isTransitioning]);

  // Precarga inteligente con priorización basada en visibilidad
  useEffect(() => {
    // Precargar componentes críticos inmediatamente
    if (isWeb) {
      // Los componentes de servicios ya están importados directamente
      
      // Precargar el siguiente componente más importante
      if (visibleSections.tecnologias) {
        preloadComponentWithPriority(() => import('@/components/Sections/DesarrolloWeb/Tecnologias'), 1);
      }
      
      // Precargar componentes adicionales si están cerca de ser visibles
      if (visibleSections.metodologia) {
        preloadComponentWithPriority(() => import('@/components/Sections/DesarrolloWeb/Metodologia'), 2);
      }
      
      if (visibleSections.cta) {
        preloadComponentWithPriority(() => import('@/components/Sections/DesarrolloWeb/CTA'), 3);
      }
    } else {
      // Los componentes de servicios ya están importados directamente
      
      // Precargar el siguiente componente más importante
      if (visibleSections.tecnologias) {
        preloadComponentWithPriority(() => import('@/components/Sections/DesarrolloAndroid/Tecnologias'), 1);
      }
      
      // Precargar componentes adicionales si están cerca de ser visibles
      if (visibleSections.metodologia) {
        preloadComponentWithPriority(() => import('@/components/Sections/DesarrolloAndroid/Metodologia'), 2);
      }
      
      if (visibleSections.cta) {
        preloadComponentWithPriority(() => import('@/components/Sections/DesarrolloAndroid/CTA'), 3);
      }
    }
  }, [isWeb, visibleSections]);

  // Configurar observadores de visibilidad para las secciones
  useEffect(() => {
    const sectionIds = ['servicios', 'tecnologias', 'metodologia', 'nosotros', 'cta', 'contacto'];
    const observers: IntersectionObserver[] = [];
    
    sectionIds.forEach(id => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setVisibleSections(prev => ({ ...prev, [id]: true }));
          }
        },
        { threshold: 0.1, rootMargin: '200px 0px' }
      );
      
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
        observers.push(observer);
      }
    });
    
    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950">
      <Header activeHero={activeHero} onHeroChange={handleHeroChange} />
      
      {/* Hero - Carga prioritaria */}
      <ProgressiveSection priority={true} className="w-full">
        <HeroSwitcher 
          activeHero={activeHero} 
          setActiveHero={setActiveHero} 
          autoSwitch={autoSwitch} 
          setAutoSwitch={setAutoSwitch} 
        />
      </ProgressiveSection>
      
      {/* Servicios - Carga prioritaria */}
      <ProgressiveSection id="servicios" priority={true} className="w-full">
        {isWeb ? <ServiciosWeb /> : <ServiciosAndroid />}
      </ProgressiveSection>
      
      {/* Tecnologías - Carga progresiva */}
      <ProgressiveSection id="tecnologias" className="w-full">
        {isWeb ? <TecnologiasWeb /> : <TecnologiasMovil />}
      </ProgressiveSection>
      
      {/* Metodología - Carga progresiva */}
      <ProgressiveSection id="metodologia" className="w-full">
        {isWeb ? <MetodologiaWeb /> : <MetodologiaAndroid />}
      </ProgressiveSection>
      
      {/* Nosotros - Carga progresiva */}
      <ProgressiveSection id="nosotros" className="w-full">
        <Nosotros />
      </ProgressiveSection>
      
      {/* CTA - Carga progresiva */}
      <ProgressiveSection id="cta" className="w-full">
        {isWeb ? <CTAWeb /> : <CTAAndroid />}
      </ProgressiveSection>
      
      {/* Contacto - Carga progresiva */}
      <ProgressiveSection id="contacto" className="w-full">
        <Contacto />
      </ProgressiveSection>
      
      {/* Footer - Carga normal */}
      <Footer />
      
      {/* Botón de scroll to top */}
      <ScrollToTop />
    </div>
  );
}
