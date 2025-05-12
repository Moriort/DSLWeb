"use client"

import React, { memo, useMemo, useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link"
import {
  Database,
  CheckCircle,
  Shield,
  Share2,
  Users,
  Zap,
  Smartphone,
  Code,
  Lock,
  Rocket,
  Server,
  CornerDownRight,
  Cpu,
  HardDrive
} from "lucide-react"
import { GlassmorphismCard } from "@/components/common/glassmorphism-card"
import { AnimatedBackgroundGradient } from "@/components/common/animated-background-gradient"
import { RevealText } from "@/components/common/reveal-text"
import { motion } from "framer-motion"

// Optimización: Precarga de iconos más utilizados
const icons = {
  Smartphone,
  Code,
  Database,
  Lock,
  Rocket,
  Server,
  Cpu,
  HardDrive
}

// Componente reutilizable para el encabezado de la sección
const SectionHeader = memo(({ 
  title, 
  subtitle, 
  description 
}: { 
  title: string; 
  subtitle: string; 
  description: string; 
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
const ServiciosAndroid = memo(() => {
  // Eliminamos el estado innecesario y el useRef
  const [isVisible] = useState(true);

  // Memoizamos los servicios para evitar recálculos
  const servicios = useMemo(() => [
    {
      icon: icons.Smartphone,
      title: 'Desarrollo de aplicaciones nativas',
      description: 'Aplicaciones Android optimizadas con Kotlin para máximo rendimiento y experiencia de usuario nativa.',
    },
    {
      icon: icons.Server,
      title: 'Backend para móviles',
      description: 'Implementación de APIs y servicios en la nube optimizados para interactuar con aplicaciones móviles.',
    },
    {
      icon: icons.Lock,
      title: 'Seguridad y autenticación',
      description: 'Protocolos de encriptación, autenticación segura y protección contra vulnerabilidades comunes.',
    },
    {
      icon: icons.Rocket,
      title: 'Optimización de rendimiento',
      description: 'Análisis y mejora de velocidad, consumo de batería y experiencia general en dispositivos Android.',
    },
    {
      icon: icons.Code,
      title: 'Clean Architecture',
      description: 'Desarrollo con arquitecturas MVVM, Clean Architecture y patrones de diseño modernos.',
    },
    {
      icon: icons.Database,
      title: 'Soluciones offline-first',
      description: 'Aplicaciones que funcionan sin conexión y sincronizan automáticamente cuando hay conectividad.',
    },
    {
      icon: icons.HardDrive,
      title: 'Integración con hardware',
      description: 'Aprovechamiento de sensores, cámaras, GPS, NFC y otras características específicas de los dispositivos.',
    },
    {
      icon: icons.Cpu,
      title: 'Procesamiento inteligente',
      description: 'Implementación de algoritmos de ML/AI y procesamiento de datos optimizado para dispositivos móviles.',
    },
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
          title="Servicios de Desarrollo Android"
          subtitle="Soluciones móviles empresariales"
          description="Creamos aplicaciones Android nativas de alto rendimiento que cumplen con los estándares actuales de la plataforma y proporcionan a sus usuarios una experiencia excepcional."
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
              <CornerDownRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
});

ServiciosAndroid.displayName = "ServiciosAndroid";

export default ServiciosAndroid;
