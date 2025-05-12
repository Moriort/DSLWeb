"use client"

import { Mail, Phone, MapPin, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { GlassmorphismCard } from "@/components/common/glassmorphism-card"
import { NeonButton } from "@/components/common/neon-button"
import { RevealText } from "@/components/common/reveal-text"
import { StandardSection } from "@/components/common/StandardSection"

export default function Contacto() {
  return (
    <StandardSection 
      id="contacto" 
      withGradient={true}
      topSpacing="py-16 md:py-24"
    >
      <div className="grid gap-20 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-400 mb-4"
            >
              <span>Contáctenos</span>
            </motion.div>
            <RevealText className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              Hablemos de su proyecto
            </RevealText>
            <p className="text-zinc-400 mb-8 text-lg">
              Estamos aquí para responder a sus preguntas y discutir cómo podemos ayudar a su empresa con
              soluciones de aplicaciones Web o Android personalizadas que impulsen su crecimiento y eficiencia.
            </p>
            <div className="space-y-6">
              <motion.div 
                className="flex items-start gap-4 group"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-zinc-800/50 p-3 rounded-lg border border-zinc-700/50 backdrop-blur-sm group-hover:bg-blue-950/50 group-hover:border-blue-500/30 transition-all duration-300">
                  <Mail className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1 text-zinc-200">Email</h3>
                  <p className="text-zinc-400 hover:text-blue-400 transition-colors">
                    <a href="mailto:contacto@digitalstronglocking.com">contacto@digitalstronglocking.com</a>
                  </p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-start gap-4 group"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-zinc-800/50 p-3 rounded-lg border border-zinc-700/50 backdrop-blur-sm group-hover:bg-blue-950/50 group-hover:border-blue-500/30 transition-all duration-300">
                  <Phone className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1 text-zinc-200">Teléfono</h3>
                  <p className="text-zinc-400 hover:text-blue-400 transition-colors">
                    <a href="tel:+56934424489">+56 9 3442 4489</a>
                  </p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-start gap-4 group"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-zinc-800/50 p-3 rounded-lg border border-zinc-700/50 backdrop-blur-sm group-hover:bg-blue-950/50 group-hover:border-blue-500/30 transition-all duration-300">
                  <MapPin className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1 text-zinc-200">Dirección</h3>
                  <p className="text-zinc-400 hover:text-blue-400 transition-colors">
                    Eduardo Orchard 1246, Antofagasta, Chile
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-10 p-6 bg-zinc-800/30 rounded-lg border border-zinc-700/30 backdrop-blur-sm relative overflow-hidden"
            >
              {/* Decoración de líneas sutiles */}
              <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0,100 L400,100" stroke="#3b82f6" strokeWidth="0.5" />
                  <path d="M0,200 L400,200" stroke="#3b82f6" strokeWidth="0.5" />
                  <path d="M0,300 L400,300" stroke="#3b82f6" strokeWidth="0.5" />
                  <path d="M100,0 L100,400" stroke="#3b82f6" strokeWidth="0.5" />
                  <path d="M200,0 L200,400" stroke="#3b82f6" strokeWidth="0.5" />
                  <path d="M300,0 L300,400" stroke="#3b82f6" strokeWidth="0.5" />
                </svg>
              </div>
              
              {/* Glow sutil en las esquinas */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/5 rounded-full blur-xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/5 rounded-full blur-xl"></div>
              
              <div className="relative">
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                  Preguntas frecuentes
                </h3>
                <div className="space-y-4">
                  <motion.div 
                    className="group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <h4 className="font-semibold text-blue-400 mb-1 group-hover:text-blue-300 transition-colors">
                      ¿Cuánto tiempo toma desarrollar una aplicación Web o Android?
                    </h4>
                    <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors">
                      El tiempo de desarrollo varía según la complejidad, pero típicamente entre 2-4 meses para una
                      aplicación empresarial completa.
                    </p>
                  </motion.div>
                  <motion.div 
                    className="group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <h4 className="font-semibold text-blue-400 mb-1 group-hover:text-blue-300 transition-colors">
                      ¿Ofrecen mantenimiento post-lanzamiento?
                    </h4>
                    <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors">
                      Sí, ofrecemos planes de mantenimiento y soporte continuo para garantizar que su aplicación
                      permanezca actualizada y funcional.
                    </p>
                  </motion.div>
                  <motion.div 
                    className="group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <h4 className="font-semibold text-blue-400 mb-1 group-hover:text-blue-300 transition-colors">
                      ¿Pueden integrar mi aplicación con sistemas existentes?
                    </h4>
                    <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors">
                      Absolutamente. Nos especializamos en integrar aplicaciones Web o Android con sistemas empresariales
                      como ERP, CRM y bases de datos existentes.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <GlassmorphismCard blurIntensity="medium" borderColor="blue" className="p-8 relative overflow-hidden">
            {/* Decoración sutil para el fondo del formulario */}
            <div className="absolute inset-0 opacity-5">
              <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,100 L400,100" stroke="#3b82f6" strokeWidth="0.5" />
                <path d="M0,200 L400,200" stroke="#3b82f6" strokeWidth="0.5" />
                <path d="M0,300 L400,300" stroke="#3b82f6" strokeWidth="0.5" />
                <path d="M100,0 L100,400" stroke="#3b82f6" strokeWidth="0.5" />
                <path d="M200,0 L200,400" stroke="#3b82f6" strokeWidth="0.5" />
                <path d="M300,0 L300,400" stroke="#3b82f6" strokeWidth="0.5" />
              </svg>
            </div>
            
            {/* Glow sutil en las esquinas */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/5 rounded-full blur-xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/5 rounded-full blur-xl"></div>
            
            <div className="relative">
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                Envíenos un mensaje
              </h3>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-zinc-300">
                      Nombre
                    </label>
                    <input
                      id="name"
                      className="w-full px-4 py-2.5 bg-zinc-900/70 border border-zinc-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 placeholder-zinc-500"
                      placeholder="Pedro Orellana"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-zinc-300">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-4 py-2.5 bg-zinc-900/70 border border-zinc-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 placeholder-zinc-500"
                      placeholder="pedro@ejemplo.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="telefono" className="text-sm font-medium text-zinc-300">
                      Teléfono
                    </label>
                    <input
                      id="telefono"
                      type="tel"
                      className="w-full px-4 py-2.5 bg-zinc-900/70 border border-zinc-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 placeholder-zinc-500"
                      placeholder="+56 9 XXXX XXXX"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="empresa" className="text-sm font-medium text-zinc-300">
                      Empresa
                    </label>
                    <input
                      id="empresa"
                      className="w-full px-4 py-2.5 bg-zinc-900/70 border border-zinc-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 placeholder-zinc-500"
                      placeholder="Nombre de su empresa"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-zinc-300">
                    Asunto
                  </label>
                  <input
                    id="subject"
                    className="w-full px-4 py-2.5 bg-zinc-900/70 border border-zinc-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 placeholder-zinc-500"
                    placeholder="¿En qué podemos ayudarle?"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-zinc-300">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2.5 bg-zinc-900/70 border border-zinc-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 placeholder-zinc-500 resize-none"
                    placeholder="Cuéntenos más sobre su proyecto..."
                  ></textarea>
                </div>
                <div className="flex justify-end mt-6">
                  <NeonButton color="blue" className="w-full sm:w-auto">
                    Enviar mensaje
                  </NeonButton>
                </div>
              </form>
            </div>
          </GlassmorphismCard>
        </motion.div>
      </div>
    </StandardSection>
  )
}
