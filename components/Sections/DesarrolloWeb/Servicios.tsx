"use client"

import React, { memo, useMemo } from "react"
import {
  ChevronRight,
  Users,
  Database,
  Shield,
  Zap,
  BarChart,
  Code,
  Globe,
  Server,
  Cloud,
  Cpu
} from "lucide-react"
import { GlassmorphismCard } from "@/components/common/glassmorphism-card"
import { AnimatedBackgroundGradient } from "@/components/common/animated-background-gradient"
import { RevealText } from "@/components/common/reveal-text"
import { motion } from "framer-motion"

// Optimización: Precarga de iconos más utilizados
const icons = {
  Code,
  Globe,
  Database,
  Shield,
  Zap,
  BarChart,
  Users,
  Server,
  Cloud,
  Cpu
}

// Componente reutilizable para el encabezado de la sección
const SectionHeader = memo(({ 
  title, 
  subtitle, 
  description 
}: { 
  title: string
  subtitle: string
  description: string
}) => (
  <div className="flex flex-col items-center justify-center text-center mb-14 md:mb-20">
    <div className="inline-flex items-center rounded-full border border-blue-900/20 bg-blue-900/5 px-3 py-1 text-sm text-blue-400 mb-4">
      <span>{subtitle}</span>
    </div>
    <RevealText className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
      {title}
    </RevealText>
    <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base">
      {description}
    </p>
  </div>
));

SectionHeader.displayName = "SectionHeader";

// Memoizamos el contenido de las tarjetas para evitar re-renderizados
const ServiceCard = memo(({
  icon: IconComponent,
  title,
  description,
  index
}: {
  icon: any,
  title: string,
  description: string,
  index: number
}) => {
  // Optimizar animaciones con useMemo
  const cardVariants = useMemo(() => ({
    hidden: { 
      opacity: 0, 
      y: 10 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.1 * index,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  }), [index]);

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="will-change-transform"
    >
      <GlassmorphismCard 
        blurIntensity="medium"
        borderColor="blue"
        hoverEffect={true}
        className="h-full overflow-hidden"
      >
        <div className="flex flex-col h-full">
          <div className="w-12 h-12 bg-blue-900/10 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200">
            <IconComponent className="h-6 w-6 text-blue-400" />
          </div>
          <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-200">{title}</h3>
          <p className="text-zinc-400 mb-5 group-hover:text-zinc-300 transition-colors duration-200">
            {description}
          </p>
        </div>
      </GlassmorphismCard>
    </motion.div>
  );
});

ServiceCard.displayName = "ServiceCard";

// Componente principal memoizado
const ServiciosWeb = memo(() => {
  // Memoizamos los servicios para evitar recálculos
  const servicios = useMemo(() => [
    {
      icon: icons.Code,
      title: 'Desarrollo web',
      description: 'Desarrollamos aplicaciones web utilizando React, Next.js y TypeScript, creando interfaces fluidas y experiencias de usuario optimizadas.'
    },
    {
      icon: icons.Database,
      title: 'Integración de sistemas',
      description: 'Conectamos sus aplicaciones web con sistemas empresariales existentes, bases de datos y servicios en la nube, creando un ecosistema digital cohesivo.'
    },
    {
      icon: icons.Shield,
      title: 'Seguridad y cumplimiento',
      description: 'Implementamos las mejores prácticas de seguridad en cada aplicación, protegiendo los datos sensibles y asegurando el cumplimiento de normativas.'
    },
    {
      icon: icons.Zap,
      title: 'Optimización de rendimiento',
      description: 'Mejoramos aplicaciones web existentes para aumentar su velocidad, reducir el consumo de recursos y mejorar la experiencia del usuario final.'
    },
    {
      icon: icons.BarChart,
      title: 'Analítica y monitoreo',
      description: 'Implementamos soluciones de analítica para obtener insights sobre el uso de sus aplicaciones, comportamiento de usuarios y detección proactiva de problemas.'
    },
    {
      icon: icons.Users,
      title: 'Consultoría tecnológica',
      description: 'Asesoramos en la estrategia digital web para maximizar el retorno de inversión de su proyecto desde la conceptualización hasta la implementación.'
    },
    {
      icon: icons.Cloud,
      title: 'Soluciones cloud',
      description: 'Implementamos y optimizamos infraestructuras en la nube para garantizar escalabilidad, disponibilidad y rendimiento de sus aplicaciones web.'
    },
    {
      icon: icons.Globe,
      title: 'SEO y rendimiento',
      description: 'Optimizamos sus aplicaciones web para mejorar su visibilidad en buscadores y ofrecer la mejor experiencia de usuario posible.'
    }
  ], []);

  // Memoizamos el fondo para evitar recálculos
  const Background = useMemo(() => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute z-10 inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-transparent opacity-50"></div>
      <div className="absolute z-0 -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-blue-900/20 blur-[120px]"></div>
      <div className="absolute z-0 -bottom-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-blue-900/10 blur-[120px]"></div>
    </div>
  ), []);

  // Memoizamos la animación del contenedor para evitar recálculos
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.3
      }
    }
  }), []);

  return (
    <section id="servicios" className="relative">
      <div className="absolute inset-0 z-0">
        <AnimatedBackgroundGradient 
          color1="rgba(30, 58, 138, 0.02)" 
          color2="rgba(30, 64, 175, 0.02)" 
          speed={2} 
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SectionHeader 
          title="Soluciones web profesionales"
          subtitle="Servicios"
          description="Ofrecemos servicios especializados en el ecosistema web, utilizando las mejores prácticas y tecnologías de vanguardia para crear aplicaciones robustas, escalables y de alto rendimiento."
        />
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 contain-layout contain-visibility"
        >
          {servicios.map((servicio, index) => (
            <ServiceCard
              key={`service-${index}`}
              icon={servicio.icon}
              title={servicio.title}
              description={servicio.description}
              index={index}
            />
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center text-blue-400 group cursor-pointer hover:text-blue-300 transition-colors duration-300"
          >
            <a href="#tecnologias" className="flex items-center no-underline">
              <span className="text-sm">Ver nuestras tecnologías</span>
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
});

ServiciosWeb.displayName = "ServiciosWeb";

export default ServiciosWeb;