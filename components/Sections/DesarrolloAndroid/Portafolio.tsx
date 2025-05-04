import React from "react";
import { MorphingBackground } from "@/components/common/morphing-background";
import { NeonButton } from "@/components/common/neon-button";
import { RevealText } from "@/components/common/reveal-text";
import { ThreeDCard } from "@/components/common/3d-card";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image"
import Link from "next/link"

export default function PortafolioAndroid() {
  return (
    <section id="portafolio" className="py-20 bg-zinc-900 relative overflow-hidden">
    <div className="absolute inset-0 z-0">
      <MorphingBackground
        intensity={15}
        speed={2}
        color1="rgba(30, 58, 138, 0.05)"
        color2="rgba(10, 10, 10, 0)"
        color3="rgba(20, 20, 20, 0.03)"
      />
    </div>
    <div className="container relative z-10">
      <div className="text-center mb-16">
        <div className="inline-flex items-center rounded-full border border-blue-900/30 bg-blue-900/10 px-3 py-1 text-sm text-blue-400 mb-4">
          <span>Casos de Éxito</span>
        </div>
        <RevealText className="text-3xl md:text-4xl font-bold mb-4">Nuestro Portafolio</RevealText>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          Explore algunos de los proyectos Android que hemos desarrollado para empresas de diversos sectores,
          demostrando nuestra capacidad para crear soluciones personalizadas de alto impacto.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Sistema de Gestión Logística",
            desc: "Aplicación Android para optimización de rutas y seguimiento de entregas en tiempo real",
            tech: "Kotlin, MVVM, Google Maps API, Room Database",
          },
          {
            title: "App de Gestión de Inventario",
            desc: "Solución empresarial para control de inventario con lectura de códigos QR/barras",
            tech: "Kotlin, Clean Architecture, ML Kit, Firebase",
          },
          {
            title: "Plataforma de Ventas en Campo",
            desc: "Aplicación para equipos comerciales con funcionalidad offline y sincronización",
            tech: "Kotlin, Jetpack Compose, WorkManager, Retrofit",
          },
          {
            title: "Sistema de Monitoreo Industrial",
            desc: "Aplicación para supervisión de equipos industriales con alertas en tiempo real",
            tech: "Kotlin, MQTT, Room, MPAndroidChart",
          },
          {
            title: "App de Gestión Hospitalaria",
            desc: "Solución para personal médico con acceso seguro a historiales clínicos",
            tech: "Kotlin, MVVM, Biometric Auth, HL7 FHIR",
          },
          {
            title: "Plataforma de Capacitación",
            desc: "Aplicación de e-learning corporativo con contenido multimedia y evaluaciones",
            tech: "Kotlin, ExoPlayer, Jetpack Compose, Firestore",
          },
        ].map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={index % 3 === 1 ? "md:mt-8" : index % 3 === 2 ? "md:mt-16" : ""}
          >
            <ThreeDCard
              className="group relative overflow-hidden rounded-lg h-[350px]"
              depth={15}
              glareColor="rgba(30, 58, 138, 0.15)"
            >
              <div className="absolute inset-0">
                <Image
                  src={`/placeholder.svg?height=300&width=400&text=Proyecto ${index + 1}`}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/95 via-zinc-900/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-zinc-300 text-sm mb-3">{project.desc}</p>
                  <div className="bg-zinc-800/80 px-3 py-1.5 rounded-full text-xs text-blue-400 inline-block mb-3 w-fit backdrop-blur-sm">
                    {project.tech}
                  </div>
                  <Link href="#" className="text-blue-400 inline-flex items-center text-sm font-medium">
                    Ver detalles <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </ThreeDCard>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-12">
        <NeonButton color="blue">Ver Todos los Proyectos</NeonButton>
      </div>
    </div>
  </section>
  );
}
