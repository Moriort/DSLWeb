"use client"

import React from "react";
import { motion } from "framer-motion";
import { RevealText } from "@/components/common/reveal-text";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Eye, Code, GanttChart } from "lucide-react";
import { GlassmorphismCard } from "@/components/common/glassmorphism-card";
import { StandardSection } from "@/components/common/StandardSection";

const proyectos = [
  {
    id: 1,
    titulo: "Portal de Gestión Logística",
    descripcion: "Sistema completo para la administración de operaciones logísticas con seguimiento en tiempo real.",
    imagen: "/images/portfolios/web-project-1.jpg",
    tecnologias: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    categoria: "plataforma",
  },
  {
    id: 2,
    titulo: "Aplicación de Análisis Financiero",
    descripcion: "Dashboard interactivo para visualización y análisis de datos financieros con reportes personalizables.",
    imagen: "/images/portfolios/web-project-2.jpg",
    tecnologias: ["React", "Redux", "Node.js", "D3.js", "MongoDB"],
    categoria: "dashboard",
  },
  {
    id: 3,
    titulo: "E-commerce de Productos Orgánicos",
    descripcion: "Tienda online con catálogo de productos, sistema de pagos y gestión de inventario integrada.",
    imagen: "/images/portfolios/web-project-3.jpg",
    tecnologias: ["Next.js", "Stripe", "Firebase", "Framer Motion"],
    categoria: "ecommerce",
  }
];

export default function PortafolioWeb() {
  return (
    <StandardSection 
      id="portafolio-web"
      withGradient={true}
      topSpacing="py-16 md:py-24"
    >
      <div className="text-center mb-12">
        <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-400 mb-4">
          <span>Nuestros Proyectos</span>
        </div>
        <RevealText className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
          Casos de éxito en desarrollo web
        </RevealText>
        <p className="text-zinc-400 max-w-3xl mx-auto text-lg">
          Hemos ayudado a empresas de diversos sectores a transformar sus ideas en soluciones web de alto impacto. 
          Estos son algunos ejemplos de nuestro trabajo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {proyectos.map((proyecto) => (
          <motion.div
            key={proyecto.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: (proyecto.id - 1) * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="h-full"
          >
            <GlassmorphismCard
              blurIntensity="medium"
              borderColor="blue"
              className="h-full overflow-hidden flex flex-col"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={proyecto.imagen}
                  alt={proyecto.titulo}
                  fill
                  className="object-cover transition-all duration-500 hover:scale-110"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAJpAOF4QY1DgAAAABJRU5ErkJggg=="
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-600/50 backdrop-blur-sm text-white">
                    {proyecto.categoria}
                  </span>
                  <div className="flex gap-1">
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-800/80 backdrop-blur-sm hover:bg-blue-600/50 transition-colors">
                      <Eye className="h-4 w-4 text-white" />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-800/80 backdrop-blur-sm hover:bg-blue-600/50 transition-colors">
                      <GanttChart className="h-4 w-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-5 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">{proyecto.titulo}</h3>
                <p className="text-zinc-400 text-sm mb-4 flex-grow">
                  {proyecto.descripcion}
                </p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {proyecto.tecnologias.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium px-2 py-1 rounded-full bg-zinc-800 text-blue-400 border border-zinc-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </GlassmorphismCard>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-16"
      >
        <GlassmorphismCard blurIntensity="light" borderColor="blue">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Nuestro proceso de desarrollo</h3>
              <p className="text-zinc-300 mb-6">
                Aplicamos una metodología ágil adaptada a las necesidades específicas de cada cliente, asegurando entregas de valor constantes y una colaboración fluida durante todo el proyecto.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-900/20 flex items-center justify-center shrink-0">
                    <span className="text-blue-400 font-semibold">01</span>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white">Descubrimiento y planificación</h4>
                    <p className="text-sm text-zinc-400">Entendemos sus necesidades y definimos los objetivos y alcance del proyecto.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-900/20 flex items-center justify-center shrink-0">
                    <span className="text-blue-400 font-semibold">02</span>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white">Diseño y arquitectura</h4>
                    <p className="text-sm text-zinc-400">Diseñamos la interfaz y la experiencia de usuario, además de definir la arquitectura técnica.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-900/20 flex items-center justify-center shrink-0">
                    <span className="text-blue-400 font-semibold">03</span>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white">Desarrollo e implementación</h4>
                    <p className="text-sm text-zinc-400">Construimos la solución utilizando las tecnologías más adecuadas para sus necesidades.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-900/20 flex items-center justify-center shrink-0">
                    <span className="text-blue-400 font-semibold">04</span>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white">Pruebas y lanzamiento</h4>
                    <p className="text-sm text-zinc-400">Realizamos pruebas exhaustivas y desplegamos la solución en un entorno de producción.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-64 md:h-auto">
              <div className="absolute inset-0 overflow-hidden rounded-lg">
                <Image 
                  src="/images/proceso-desarrollo.jpg" 
                  alt="Proceso de desarrollo" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88P5jPQAIgwMm3Y8bQQAAAABJRU5ErkJggg=="
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/80 to-transparent"></div>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center z-10 p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 mb-4">
                    <Code className="h-6 w-6 text-blue-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Código limpio y mantenible</h4>
                  <p className="text-sm text-zinc-300 max-w-xs mx-auto">
                    Aplicamos las mejores prácticas de desarrollo para construir soluciones robustas y fáciles de mantener.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </GlassmorphismCard>
      </motion.div>
    </StandardSection>
  );
}
