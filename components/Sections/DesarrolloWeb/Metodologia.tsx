import React from "react";
import { AnimatedBackgroundGradient } from "@/components/common/animated-background-gradient";
import { RevealText } from "@/components/common/reveal-text";
import { AnimatedGradientText } from "@/components/common/animated-gradient-text";
import { GitBranch, Clock, Target } from "lucide-react";
import { motion } from "framer-motion";
import { GlassmorphismCard } from "@/components/common/glassmorphism-card";
import { ProcessTimeline } from "@/components/common/process-timeline";

export default function MetodologiaWeb() {
  return (
    <section id="metodologia" className="relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-blue-900/30 bg-blue-900/10 px-4 py-1.5 text-sm text-blue-400 mb-6">
            <span>Nuestra metodología</span>
          </div>
          <RevealText className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Proceso de Desarrollo <AnimatedGradientText>Ágil</AnimatedGradientText>
          </RevealText>
          <p className="text-zinc-400 max-w-2xl mx-auto text-base md:text-lg">
            Implementamos metodologías ágiles adaptadas específicamente para el desarrollo web,
            garantizando entregas incrementales de valor, transparencia y flexibilidad ante cambios.
          </p>
        </div>

        <ProcessTimeline />

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <GlassmorphismCard blurIntensity="medium" borderColor="blue" className="bg-zinc-900/50 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <GitBranch className="h-5 w-5 text-blue-500" />
                <h3 className="text-xl font-semibold text-white">Desarrollo Basado en Características</h3>
              </div>
              <p className="text-zinc-400 text-sm mb-6">
                Nuestro enfoque de desarrollo se centra en entregar características completas y funcionales en cada
                iteración, lo que permite obtener feedback temprano y ajustar el rumbo del proyecto según sea necesario.
              </p>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Target className="h-4 w-4 text-blue-500" />
                    <h4 className="text-white font-medium">Planificación detallada</h4>
                  </div>
                  <p className="text-zinc-500 text-sm pl-6">Análisis y diseño de cada característica</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Target className="h-4 w-4 text-blue-500" />
                    <h4 className="text-white font-medium">Desarrollo integrado</h4>
                  </div>
                  <p className="text-zinc-500 text-sm pl-6">Pruebas y documentación en cada fase</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Target className="h-4 w-4 text-blue-500" />
                    <h4 className="text-white font-medium">Control de calidad</h4>
                  </div>
                  <p className="text-zinc-500 text-sm pl-6">Revisión de código y testing automatizado</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Target className="h-4 w-4 text-blue-500" />
                    <h4 className="text-white font-medium">Despliegue continuo</h4>
                  </div>
                  <p className="text-zinc-500 text-sm pl-6">Integración y entrega automatizada</p>
                </div>
              </div>
            </GlassmorphismCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <GlassmorphismCard blurIntensity="medium" borderColor="blue" className="bg-zinc-900/50 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-5 w-5 text-blue-500" />
                <h3 className="text-xl font-semibold text-white">Ciclos de Desarrollo Rápidos</h3>
              </div>
              <p className="text-zinc-400 text-sm mb-6">
                Trabajamos en sprints de 1-2 semanas que permiten entregas frecuentes y visibilidad constante del
                progreso. Este enfoque minimiza riesgos y maximiza la adaptabilidad a cambios en los requisitos.
              </p>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Target className="h-4 w-4 text-blue-500" />
                    <h4 className="text-white font-medium">Planificación de sprint</h4>
                  </div>
                  <p className="text-zinc-500 text-sm pl-6">Objetivos claros y medibles</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Target className="h-4 w-4 text-blue-500" />
                    <h4 className="text-white font-medium">Daily standups</h4>
                  </div>
                  <p className="text-zinc-500 text-sm pl-6">Seguimiento diario del progreso</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Target className="h-4 w-4 text-blue-500" />
                    <h4 className="text-white font-medium">Revisión y demo</h4>
                  </div>
                  <p className="text-zinc-500 text-sm pl-6">Validación al final de cada sprint</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Target className="h-4 w-4 text-blue-500" />
                    <h4 className="text-white font-medium">Retrospectivas</h4>
                  </div>
                  <p className="text-zinc-500 text-sm pl-6">Mejora continua del proceso</p>
                </div>
              </div>
            </GlassmorphismCard>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <GlassmorphismCard blurIntensity="light" borderColor="blue" className="bg-zinc-900/50 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-white mb-6">Principios de Desarrollo Web</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-blue-400 font-medium mb-2">Arquitectura Moderna</h4>
                <p className="text-zinc-400 text-sm">
                  Implementamos arquitecturas escalables y mantenibles usando las últimas tecnologías y mejores prácticas.
                </p>
              </div>
              <div>
                <h4 className="text-blue-400 font-medium mb-2">Testing Automatizado</h4>
                <p className="text-zinc-400 text-sm">
                  Pruebas unitarias, de integración y E2E para garantizar la calidad y prevenir regresiones.
                </p>
              </div>
              <div>
                <h4 className="text-blue-400 font-medium mb-2">Optimización Continua</h4>
                <p className="text-zinc-400 text-sm">
                  Monitoreo constante del rendimiento, SEO y experiencia de usuario para identificar mejoras.
                </p>
              </div>
            </div>
          </GlassmorphismCard>
        </motion.div>
      </div>
    </section>
  );
}