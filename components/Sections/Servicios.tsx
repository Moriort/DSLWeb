"use client"

import { motion } from "framer-motion"
import { RevealText } from "@/components/common/reveal-text"
import { Card } from "@/components/ui/card"
import { BiCodeBlock, BiMobileAlt } from "react-icons/bi"
import { FaServer } from "react-icons/fa"
import { RiBugLine, RiShieldCheckLine } from "react-icons/ri"
import { IoMdAnalytics } from "react-icons/io"
import { StandardSection } from "@/components/common/StandardSection"

export default function Servicios() {
  const servicios = [
    {
      title: "Desarrollo Web",
      description:
        "Creamos sitios y aplicaciones web modernas, responsivas y altamente interactivas con las últimas tecnologías del mercado.",
      icon: <BiCodeBlock className="h-10 w-10 text-blue-500 group-hover:text-white transition-colors duration-300" />,
    },
    {
      title: "Desarrollo Android",
      description:
        "Desarrollamos aplicaciones Android nativas con alto rendimiento y experiencia de usuario superior para todos los dispositivos.",
      icon: <BiMobileAlt className="h-10 w-10 text-blue-500 group-hover:text-white transition-colors duration-300" />,
    },
    {
      title: "Servidores y Backend",
      description:
        "Configuramos infraestructura robusta, escalable y segura para respaldar sus aplicaciones con garantía de alto rendimiento.",
      icon: <FaServer className="h-10 w-10 text-blue-500 group-hover:text-white transition-colors duration-300" />,
    },
    {
      title: "Testing y Calidad",
      description:
        "Aplicamos metodologías rigurosas de pruebas para asegurar que sus aplicaciones funcionen correctamente en todos los escenarios.",
      icon: <RiBugLine className="h-10 w-10 text-blue-500 group-hover:text-white transition-colors duration-300" />,
    },
    {
      title: "Seguridad Digital",
      description:
        "Implementamos medidas de protección avanzadas para salvaguardar sus datos y sistemas contra amenazas cibernéticas.",
      icon: <RiShieldCheckLine className="h-10 w-10 text-blue-500 group-hover:text-white transition-colors duration-300" />,
    },
    {
      title: "Análisis y Métricas",
      description:
        "Proporcionamos herramientas analíticas potentes para ayudarle a comprender el comportamiento de usuarios y optimizar sus aplicaciones.",
      icon: <IoMdAnalytics className="h-10 w-10 text-blue-500 group-hover:text-white transition-colors duration-300" />,
    },
  ]

  return (
    <StandardSection 
      id="servicios" 
      withGradient={true}
      topSpacing="py-16 md:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-400 mb-4">
          <span>Nuestros servicios</span>
        </div>
        <RevealText className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
          Soluciones tecnológicas a medida
        </RevealText>
        <p className="mx-auto max-w-3xl text-lg text-zinc-400 mb-16">
          Ofrecemos servicios especializados de desarrollo para crear soluciones digitales que impulsen
          el crecimiento de su negocio y mejoren la productividad.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {servicios.map((servicio, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="border-zinc-800/50 bg-zinc-900/50 backdrop-blur-md h-full group hover:bg-blue-900/20 hover:border-blue-500/30 transition-all duration-300">
              <div className="p-6 space-y-4">
                <div className="p-3 bg-zinc-800/50 w-fit rounded-lg border border-zinc-700/50 group-hover:bg-blue-950/50 group-hover:border-blue-500/30 transition-all duration-300">
                  {servicio.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-200 group-hover:text-white transition-colors duration-300">
                  {servicio.title}
                </h3>
                <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                  {servicio.description}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </StandardSection>
  )
} 