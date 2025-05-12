"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

interface Testimonio {
  texto: string
  autor: string
  empresa: string
  calificacion: number
}

export default function TestimoniosWeb() {
  const testimonios: Testimonio[] = [
    {
      texto: "El sitio web que desarrollaron impulsó nuestra presencia digital y captó nuevos clientes. La atención al detalle y el diseño moderno superaron nuestras expectativas.",
      autor: "Carlos Méndez",
      empresa: "TechSolutions SpA",
      calificacion: 5
    },
    {
      texto: "Rápidos, profesionales y con excelente soporte post-lanzamiento. El equipo entendió perfectamente nuestras necesidades y entregó una solución que realmente funciona.",
      autor: "María González",
      empresa: "Innovatech Chile",
      calificacion: 5
    }
  ]

  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  }

  return (
    <section className="py-20 px-4 md:px-6 relative overflow-hidden">
      {/* Fondo con gradiente y efecto de blur */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-zinc-950/50 backdrop-blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-transparent bg-clip-text">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-base md:text-lg">
            Testimonios de empresas que han confiado en nuestros servicios de desarrollo web
          </p>
        </motion.div>

        <motion.div
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 md:gap-8"
        >
          {testimonios.map((testimonio, index) => (
            <motion.div
              key={index}
              variants={itemAnimation}
              className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/50 rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center">
                    <Quote className="w-5 h-5 text-blue-400" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonio.calificacion)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-blue-400 text-blue-400" />
                    ))}
                  </div>
                  <blockquote className="text-zinc-200 text-base md:text-lg mb-4 leading-relaxed">
                    "{testimonio.texto}"
                  </blockquote>
                  <div className="border-t border-zinc-800 pt-4 mt-4">
                    <div className="font-medium text-white">{testimonio.autor}</div>
                    <div className="text-sm text-blue-400">{testimonio.empresa}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
