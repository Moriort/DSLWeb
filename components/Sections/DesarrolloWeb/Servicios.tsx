import React from "react";

import Image from "next/image"
import Link from "next/link"
import {
  ChevronRight,
  Smartphone,
  Users,
  CheckCircle,
  Database,
  Shield,
  Zap,
  BarChart,
} from "lucide-react"
import { GlassmorphismCard } from "@/components/common/glassmorphism-card"
import { AnimatedBackgroundGradient } from "@/components/common/animated-background-gradient"
import { RevealText } from "@/components/common/reveal-text"
import { motion } from "framer-motion"

export default function ServiciosWeb() {
  return (
    <section id="servicios" className="relative">
      <div className="absolute inset-0 z-0">
        <AnimatedBackgroundGradient 
          color1="rgba(30, 58, 138, 0.02)" 
          color2="rgba(30, 64, 175, 0.02)" 
          speed={2} 
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center mb-14 md:mb-20">
          <div className="inline-flex items-center rounded-full border border-blue-900/20 bg-blue-900/5 px-3 py-1 text-sm text-blue-400 mb-4">
            <span>Servicios</span>
          </div>
          <RevealText className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Soluciones web profesionales
          </RevealText>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base">
            Ofrecemos servicios especializados en el ecosistema web, utilizando las mejores prácticas y
            tecnologías de vanguardia para crear aplicaciones robustas, escalables y de alto rendimiento.
          </p>
        </div>
        
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring", damping: 15 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <GlassmorphismCard 
              blurIntensity="medium" 
              borderColor="blue" 
              hoverEffect={true}
              className="group transition-all duration-300 hover:translate-y-[-4px] hover:shadow-blue-900/10 h-full overflow-hidden"
            >
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 bg-blue-900/10 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Smartphone className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">Desarrollo web</h3>
                <p className="text-zinc-400 mb-5 group-hover:text-zinc-300 transition-colors">
                  Desarrollamos aplicaciones web utilizando React, Next.js y TypeScript, creando interfaces fluidas y
                  experiencias de usuario optimizadas.
                </p>
                <ul className="space-y-3 mb-6 mt-auto">
                  <li className="flex items-start gap-2.5 group-hover:translate-x-1 transition-transform">
                    <CheckCircle className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors">Desarrollo de interfaces fluidas con React y Next.js</span>
                  </li>
                  <li className="flex items-start gap-2.5 group-hover:translate-x-1 transition-transform">
                    <CheckCircle className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors">Arquitectura SSR y SSG para rendimiento óptimo</span>
                  </li>
                  <li className="flex items-start gap-2.5 group-hover:translate-x-1 transition-transform">
                    <CheckCircle className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors">Optimización para diferentes dispositivos</span>
                  </li>
                </ul>
              </div>
            </GlassmorphismCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <GlassmorphismCard blurIntensity="medium" borderColor="blue" hoverEffect={true} className="h-full overflow-hidden">
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 bg-blue-900/10 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Database className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">Integración de sistemas</h3>
                <p className="text-zinc-400 mb-5 group-hover:text-zinc-300 transition-colors">
                  Conectamos sus aplicaciones web con sistemas empresariales existentes, bases de datos y
                  servicios en la nube, creando un ecosistema digital cohesivo.
                </p>
                <ul className="space-y-3 mb-6 mt-auto">
                  <li className="flex items-start gap-2.5 group-hover:translate-x-1 transition-transform">
                    <CheckCircle className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors">APIs RESTful y GraphQL para comunicación eficiente</span>
                  </li>
                  <li className="flex items-start gap-2.5 group-hover:translate-x-1 transition-transform">
                    <CheckCircle className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors">Sincronización con sistemas ERP/CRM empresariales</span>
                  </li>
                  <li className="flex items-start gap-2.5 group-hover:translate-x-1 transition-transform">
                    <CheckCircle className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors">Integración con servicios de Google Cloud, AWS y Azure</span>
                  </li>
                </ul>
              </div>
            </GlassmorphismCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-1"
          >
            <GlassmorphismCard blurIntensity="medium" borderColor="blue" hoverEffect={true} className="h-full overflow-hidden">
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 bg-blue-900/10 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Shield className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">Seguridad y cumplimiento</h3>
                <p className="text-zinc-400 mb-5 group-hover:text-zinc-300 transition-colors">
                  Implementamos las mejores prácticas de seguridad en cada aplicación, protegiendo los datos sensibles
                  y asegurando el cumplimiento de normativas como GDPR y PCI-DSS.
                </p>
                <ul className="space-y-3 mb-6 mt-auto">
                  <li className="flex items-start gap-2.5 group-hover:translate-x-1 transition-transform">
                    <CheckCircle className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors">Encriptación de datos sensibles end-to-end</span>
                  </li>
                  <li className="flex items-start gap-2.5 group-hover:translate-x-1 transition-transform">
                    <CheckCircle className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors">Implementación de autenticación multifactor</span>
                  </li>
                  <li className="flex items-start gap-2.5 group-hover:translate-x-1 transition-transform">
                    <CheckCircle className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors">Auditorías de seguridad y pentesting</span>
                  </li>
                </ul>
              </div>
            </GlassmorphismCard>
          </motion.div>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <GlassmorphismCard blurIntensity="medium" borderColor="blue" hoverEffect={true} className="h-full overflow-hidden">
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 bg-blue-900/10 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Zap className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">Optimización de rendimiento</h3>
                <p className="text-zinc-400 mb-5 group-hover:text-zinc-300 transition-colors">
                  Mejoramos aplicaciones web existentes para aumentar su velocidad, reducir el consumo de recursos
                  y mejorar la experiencia del usuario final.
                </p>
                <ul className="space-y-3 mb-6 mt-auto">
                  <li className="flex items-start gap-2.5 group-hover:translate-x-1 transition-transform">
                    <CheckCircle className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors">Análisis de rendimiento y optimización de código</span>
                  </li>
                  <li className="flex items-start gap-2.5 group-hover:translate-x-1 transition-transform">
                    <CheckCircle className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors">Mejora de Core Web Vitals y experiencia de usuario</span>
                  </li>
                  <li className="flex items-start gap-2.5 group-hover:translate-x-1 transition-transform">
                    <CheckCircle className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors">Reducción de tamaño de paquetes y optimización CDN</span>
                  </li>
                </ul>
              </div>
            </GlassmorphismCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <GlassmorphismCard blurIntensity="medium" borderColor="blue" hoverEffect={true} className="h-full overflow-hidden">
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 bg-blue-900/10 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <BarChart className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">Analítica y monitoreo</h3>
                <p className="text-zinc-400 mb-5 group-hover:text-zinc-300 transition-colors">
                  Implementamos soluciones de analítica para obtener insights sobre el uso de sus
                  aplicaciones, comportamiento de usuarios y detección proactiva de problemas.
                </p>
                <ul className="space-y-3 mb-6 mt-auto">
                  <li className="flex items-start gap-2.5 group-hover:translate-x-1 transition-transform">
                    <CheckCircle className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors">Integración con Google Analytics y Tag Manager</span>
                  </li>
                  <li className="flex items-start gap-2.5 group-hover:translate-x-1 transition-transform">
                    <CheckCircle className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors">Monitoreo de errores y rendimiento en tiempo real</span>
                  </li>
                  <li className="flex items-start gap-2.5 group-hover:translate-x-1 transition-transform">
                    <CheckCircle className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors">Dashboards personalizados para métricas clave</span>
                  </li>
                </ul>
              </div>
            </GlassmorphismCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-1"
          >
            <GlassmorphismCard blurIntensity="medium" borderColor="blue" hoverEffect={true} className="h-full overflow-hidden">
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 bg-blue-900/10 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Users className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">Consultoría tecnológica</h3>
                <p className="text-zinc-400 mb-5 group-hover:text-zinc-300 transition-colors">
                  Asesoramos en la estrategia digital web para maximizar el retorno de inversión de su proyecto
                  desde la conceptualización hasta la implementación.
                </p>
                <ul className="space-y-3 mb-6 mt-auto">
                  <li className="flex items-start gap-2.5 group-hover:translate-x-1 transition-transform">
                    <CheckCircle className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors">Evaluación de viabilidad técnica y análisis de requisitos</span>
                  </li>
                  <li className="flex items-start gap-2.5 group-hover:translate-x-1 transition-transform">
                    <CheckCircle className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors">Planificación de arquitectura basada en objetivos</span>
                  </li>
                  <li className="flex items-start gap-2.5 group-hover:translate-x-1 transition-transform">
                    <CheckCircle className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors">Roadmap tecnológico y estrategia de implementación</span>
                  </li>
                </ul>
              </div>
            </GlassmorphismCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}