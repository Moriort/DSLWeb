"use client"

import React, { useMemo, useState } from "react";
import { NeonButton } from "@/components/common/neon-button";
import { RevealText } from "@/components/common/reveal-text";
import { ThreeDCard } from "@/components/common/3d-card";
import { ExternalLink, X, Code, BarChart, Layers, Smartphone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Interfaz para los proyectos para evitar errores de tipado
interface Project {
  title: string;
  desc: string;
  tech: string;
  link: string;
  longDesc: string;
  challenges: string;
  features: string[];
  results: string;
}

// Datos extendidos de proyectos con información adicional para el modal
const projects: Project[] = [
  {
    title: "Sistema de gestión logística",
    desc: "Aplicación Android para optimización de rutas y seguimiento de entregas en tiempo real",
    tech: "Kotlin, MVVM, Google Maps API, Room",
    link: "#",
    longDesc: "Aplicación Android para empresas de logística que optimiza rutas de entrega y permite el seguimiento en tiempo real. Ofrece información detallada sobre tiempos de entrega, distancias, y estado actual de los envíos con sincronización offline-first.",
    challenges: "Implementación de tracking GPS eficiente con bajo consumo de batería, sincronización offline robusta, optimización de rutas en tiempo real.",
    features: ["Tracking GPS en tiempo real", "Optimización de rutas", "Modo offline", "Reportes PDF automatizados", "Notificaciones push"],
    results: "Reducción del 35% en costes de combustible y mejora del 28% en tiempos de entrega."
  },
  {
    title: "App de gestión de inventario",
    desc: "Solución empresarial para control de inventario con lectura de códigos QR/barras",
    tech: "Kotlin, Clean Architecture, ML Kit, Firebase",
    link: "#",
    longDesc: "Aplicación de inventario empresarial con funcionalidad de escaneo de códigos QR y códigos de barras mediante la cámara. Permite gestionar stock, movimientos y ubicaciones de productos con una experiencia fluida y rápida.",
    challenges: "Precisión en reconocimiento de códigos en condiciones variables, arquitectura escalable, sincronización eficiente con sistemas ERP.",
    features: ["Escaneo rápido de múltiples códigos", "Búsqueda predictiva", "Historial de movimientos", "Alertas de stock", "Sincronización con ERP"],
    results: "Incremento del 80% en velocidad de inventariado y reducción de errores en un 65%."
  },
  {
    title: "Plataforma de ventas móvil",
    desc: "Aplicación para equipos comerciales con funcionalidad offline y sincronización",
    tech: "Kotlin, Jetpack Compose, WorkManager",
    link: "#",
    longDesc: "Aplicación para vendedores de campo que permite gestionar catálogos, clientes y pedidos incluso sin conexión. Cuando el dispositivo vuelve a estar online, sincroniza automáticamente todos los datos con el servidor central.",
    challenges: "Manejo de conflictos en sincronización, experiencia fluida offline, gestión eficiente de recursos del dispositivo.",
    features: ["Catálogo interactivo", "Gestión de pedidos offline", "Sincronización inteligente", "Firma digital", "Reportes de ventas"],
    results: "Aumento del 45% en pedidos realizados por vendedor y reducción del 30% en tiempo administrativo."
  },
  {
    title: "Sistema de monitoreo industrial",
    desc: "Aplicación para supervisión de equipos industriales con alertas en tiempo real",
    tech: "Kotlin, MQTT, Room, MPAndroidChart",
    link: "#",
    longDesc: "Plataforma para monitoreo industrial que permite supervisar el rendimiento de equipos en plantas de producción. Ofrece visualizaciones avanzadas y alertas en tiempo real cuando los parámetros salen de los rangos establecidos.",
    challenges: "Procesamiento de grandes volúmenes de datos en tiempo real, visualizaciones complejas, comunicación fiable con sensores industriales.",
    features: ["Dashboard interactivo", "Alertas configurables", "Gráficos avanzados", "Histórico de datos", "Exportación de reportes"],
    results: "Reducción del 60% en tiempo de respuesta ante fallos y mejora del 25% en disponibilidad de equipos."
  },
  {
    title: "App de gestión hospitalaria",
    desc: "Solución para personal médico con acceso seguro a historiales clínicos",
    tech: "Kotlin, MVVM, Biometric Auth, HL7 FHIR",
    link: "#",
    longDesc: "Aplicación para profesionales sanitarios que permite acceder de forma segura a historiales clínicos de pacientes, gestionar citas, prescripciones y resultados de análisis. Integra autenticación biométrica y estándares de seguridad médica.",
    challenges: "Seguridad de datos sensibles, integración con sistemas legacy hospitalarios, respeto de normativa HIPAA y estándares médicos.",
    features: ["Autenticación biométrica", "Registros médicos cifrados", "Gestión de citas", "Prescripciones digitales", "Notificaciones seguras"],
    results: "Ahorro de 3.5 horas diarias por médico y mejora del 40% en precisión de tratamientos."
  },
  {
    title: "Plataforma de capacitación",
    desc: "Aplicación de e-learning corporativo con contenido multimedia y evaluaciones",
    tech: "Kotlin, ExoPlayer, Jetpack Compose",
    link: "#",
    longDesc: "Plataforma educativa para empresas que permite a empleados acceder a formaciones, realizar cursos interactivos y evaluaciones. Incluye reproducción de video optimizada, descarga de contenidos para uso offline y seguimiento de progreso.",
    challenges: "Experiencia fluida en reproducción multimedia, gestión eficiente de contenido descargado, interfaz intuitiva para múltiples perfiles.",
    features: ["Cursos interactivos", "Modo offline", "Certificaciones digitales", "Analytics de aprendizaje", "Notificaciones personalizadas"],
    results: "Incremento del 75% en finalización de formaciones obligatorias y 50% en satisfacción con la formación corporativa."
  },
  {
    title: "Aplicación de control IoT",
    desc: "Sistema para control de dispositivos IoT industriales y domésticos",
    tech: "Kotlin, Bluetooth LE, MQTT, Room",
    link: "#",
    longDesc: "Aplicación de control para ecosistemas IoT tanto industriales como domésticos. Permite monitorizar y controlar dispositivos mediante Bluetooth LE o conexión a la nube, con automatizaciones basadas en horarios, ubicación o condiciones.",
    challenges: "Gestión eficiente de batería con múltiples protocolos, experiencia unificada para diferentes tipos de dispositivos, fiabilidad en control remoto.",
    features: ["Control remoto", "Automatizaciones", "Integración multi-protocolo", "Histórico de actividad", "Modos de escena"],
    results: "Adopción del 85% entre usuarios de los dispositivos y reducción del 40% en problemas de conectividad."
  },
  {
    title: "App de realidad aumentada",
    desc: "Aplicación con funcionalidades de RA para visualización de productos 3D",
    tech: "Kotlin, ARCore, Jetpack Compose, Coroutines",
    link: "#",
    longDesc: "Aplicación de realidad aumentada que permite a empresas mostrar sus productos en 3D en el entorno real del cliente. Los usuarios pueden visualizar muebles, decoración o equipamiento en sus espacios antes de comprar, con posibilidad de personalización.",
    challenges: "Optimización de rendimiento 3D en diversos dispositivos, detección precisa de superficies, integración fluida con catálogos de productos.",
    features: ["Visualización 3D en espacio real", "Personalización de productos", "Medición espacial", "Compartir diseños", "Catálogo interactivo"],
    results: "Aumento del 65% en conversión de ventas y reducción del 40% en devoluciones de productos."
  }
];

// Colores de la UI para los fondos, estilo detallado para Android
const gradientColors = [
  "from-green-800/50 via-emerald-800/40 to-green-900/60",
  "from-emerald-800/50 via-teal-800/40 to-emerald-900/60",
  "from-teal-800/50 via-green-800/40 to-teal-900/60",
  "from-cyan-800/50 via-blue-800/40 to-cyan-900/60",
  "from-blue-800/50 via-indigo-800/40 to-blue-900/60",
  "from-indigo-800/50 via-blue-800/40 to-indigo-900/60",
  "from-sky-800/50 via-cyan-800/40 to-sky-900/60",
  "from-blue-800/50 via-slate-800/40 to-blue-900/60"
];

// Definir las props del modal para evitar errores de tipado
interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

// Componente Modal para mostrar detalles del proyecto
const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;
  
  // Encontrar el índice del proyecto seleccionado para usar el mismo gradiente
  const projectIndex = projects.findIndex(p => p.title === project.title);
  const gradientColor = gradientColors[projectIndex % gradientColors.length];
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/30 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div 
            className="w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl border border-zinc-700/20 shadow-lg"
            style={{
              background: "linear-gradient(to bottom right, rgba(15, 15, 20, 0.85), rgba(20, 20, 30, 0.9))",
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(38, 38, 50, 0.2)",
              backdropFilter: "blur(16px)"
            }}
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 350 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative overflow-hidden rounded-2xl">
              <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${gradientColor}`}></div>
              
              <div className="relative p-6 sm:p-8">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                  <button 
                    onClick={onClose}
                    className="p-1.5 rounded-full bg-zinc-800/50 hover:bg-zinc-700/80 transition-all border border-zinc-700/30 hover:border-zinc-600/50"
                  >
                    <X className="h-5 w-5 text-zinc-300" />
                  </button>
                </div>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.split(", ").map((tech, i) => (
                      <span
                        key={i}
                        className="bg-green-900/30 text-emerald-300 px-2.5 py-1 rounded-md text-xs backdrop-blur-sm border border-green-800/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-zinc-200 text-sm leading-relaxed mb-6">{project.longDesc}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-zinc-800/30 backdrop-blur-md rounded-xl p-4 border border-zinc-700/30 hover:border-emerald-900/30 transition-all">
                    <div className="flex items-center mb-3">
                      <Code className="h-5 w-5 text-emerald-400 mr-2" />
                      <h3 className="font-semibold text-white">Desafíos técnicos</h3>
                    </div>
                    <p className="text-zinc-200 text-sm leading-relaxed">{project.challenges}</p>
                  </div>
                  
                  <div className="bg-zinc-800/30 backdrop-blur-md rounded-xl p-4 border border-zinc-700/30 hover:border-emerald-900/30 transition-all">
                    <div className="flex items-center mb-3">
                      <BarChart className="h-5 w-5 text-emerald-400 mr-2" />
                      <h3 className="font-semibold text-white">Resultados</h3>
                    </div>
                    <p className="text-zinc-200 text-sm leading-relaxed">{project.results}</p>
                  </div>
                </div>
                
                <div className="bg-zinc-800/30 backdrop-blur-md rounded-xl p-4 border border-zinc-700/30 hover:border-emerald-900/30 transition-all mb-6">
                  <div className="flex items-center mb-3">
                    <Layers className="h-5 w-5 text-emerald-400 mr-2" />
                    <h3 className="font-semibold text-white">Características principales</h3>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="text-zinc-200 text-sm flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-end">
                  <Link 
                    href={project.link}
                    className="inline-flex items-center bg-emerald-600/80 hover:bg-emerald-700/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 backdrop-blur-sm border border-emerald-500/20 hover:border-emerald-500/40 shadow-sm shadow-emerald-900/10"
                  >
                    Ver proyecto <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function PortafolioAndroid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Generar colores aleatorios estables para cada proyecto
  const projectGradients = useMemo(() => {
    return projects.map((_, index) => {
      // Usar el índice para seleccionar un gradiente, garantizando consistencia entre renderizados
      return gradientColors[index % gradientColors.length];
    });
  }, []);

  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-b from-zinc-900/95 via-zinc-900 to-zinc-950">
      <div className="container relative z-10 mx-auto px-4 lg:px-6 max-w-7xl">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-green-900/30 bg-green-900/10 px-3 py-1 text-sm text-emerald-400 mb-3 backdrop-blur-sm"
          >
            <span>Proyectos destacados</span>
          </motion.div>
          
          <RevealText className="text-2xl md:text-3xl font-bold mb-3">
            Innovación en desarrollo Android
          </RevealText>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base"
          >
            Creamos aplicaciones Android nativas que optimizan procesos empresariales y mejoran la experiencia 
            de los usuarios finales.
          </motion.p>
        </div>

        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="transform transition-transform duration-300 hover:-translate-y-1"
            >
              <div 
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer"
              >
                <ThreeDCard
                  className="group relative overflow-hidden rounded-lg h-[220px] bg-zinc-900/50"
                  depth={10}
                  glareColor="rgba(16, 185, 129, 0.25)"
                >
                  <div className="absolute inset-0">
                    {/* Fondo con gradiente detallado */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${projectGradients[index]} z-10`} />
                    
                    {/* Capa de detalle sutil */}
                    <div className="absolute inset-0 opacity-20 z-10" 
                         style={{
                           backgroundImage: `linear-gradient(90deg, transparent 0%, transparent 98%, rgba(5, 150, 105, 0.2) 100%), 
                                            linear-gradient(0deg, transparent 0%, transparent 98%, rgba(16, 185, 129, 0.2) 100%)`,
                           backgroundSize: '24px 24px'
                         }}
                    ></div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/60 to-transparent flex flex-col justify-end p-4 z-20">
                      <div className="absolute top-4 right-4 opacity-70">
                        <Smartphone className="h-5 w-5 text-emerald-400" />
                      </div>
                      
                      <h3 className="text-base font-semibold mb-2 text-white group-hover:text-emerald-400 transition-colors line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-zinc-300 text-sm mb-3 line-clamp-3">
                        {project.desc}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.tech.split(", ").slice(0, 2).map((tech, i) => (
                          <span
                            key={i}
                            className="bg-green-900/30 text-emerald-400 px-1.5 py-0.5 rounded-sm text-[9px] backdrop-blur-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div 
                        className="inline-flex items-center text-[10px] font-medium text-emerald-400 group-hover:text-emerald-300 transition-colors"
                      >
                        Ver detalles <ExternalLink className="ml-0.5 h-3 w-3" />
                      </div>
                    </div>
                  </div>
                </ThreeDCard>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <NeonButton color="emerald" className="px-5 py-2 text-sm">
            Explorar más proyectos
          </NeonButton>
        </motion.div>
      </div>
      
      {/* Modal para detalles del proyecto */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
