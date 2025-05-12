import React from "react";
import { GlassmorphismCard } from "../../common/glassmorphism-card";
import { NeonButton } from "../../common/neon-button";
import { RevealText } from "../../common/reveal-text";
import { motion } from "framer-motion";
import { ArrowRight, Phone, FileText, Smartphone } from "lucide-react";
import { StandardSection } from "@/components/common/StandardSection";

export default function CTAAndroid() {
  return (
    <StandardSection 
      id="cta-android" 
      withGradient={true}
      topSpacing="py-16 md:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <GlassmorphismCard
          blurIntensity="strong"
          borderColor="blue"
          className="p-8 md:p-12 relative overflow-hidden"
        >
        
          {/* Content grid */}
          <div className="grid gap-8 md:grid-cols-2 items-center relative z-10">
            <div className="space-y-5">
              <div className="inline-flex items-center rounded-full border border-blue-900/30 bg-blue-900/10 px-3 py-1 text-sm text-blue-400 mb-3">
                <span>¿Necesitas una app Android?</span>
              </div>
              <RevealText className="text-2xl md:text-3xl lg:text-4xl font-bold">
                Transforma tu negocio con una aplicación móvil
              </RevealText>
              <p className="text-zinc-300 text-base md:text-lg">
                Nuestro equipo de desarrolladores Android puede crear aplicaciones móviles nativas que conecten con tus clientes y potencien tu marca en el ecosistema móvil.
              </p>
              
              <div className="pt-2">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-zinc-300">
                    <div className="w-5 h-5 rounded-full bg-blue-900/30 flex items-center justify-center">
                      <ArrowRight className="w-3 h-3 text-blue-400" />
                    </div>
                    <span className="text-sm">Diseño Material You personalizado</span>
                  </li>
                  <li className="flex items-center gap-2 text-zinc-300">
                    <div className="w-5 h-5 rounded-full bg-blue-900/30 flex items-center justify-center">
                      <ArrowRight className="w-3 h-3 text-blue-400" />
                    </div>
                    <span className="text-sm">Alto rendimiento y experiencia de usuario fluida</span>
                  </li>
                  <li className="flex items-center gap-2 text-zinc-300">
                    <div className="w-5 h-5 rounded-full bg-blue-900/30 flex items-center justify-center">
                      <ArrowRight className="w-3 h-3 text-blue-400" />
                    </div>
                    <span className="text-sm">Integración con servicios en la nube</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col gap-6 md:justify-center lg:pl-8">
              <div className="bg-zinc-900/60 p-6 rounded-xl border border-zinc-800/60">
                <h3 className="text-lg font-semibold text-white mb-4">¿Listo para empezar?</h3>
                <div className="flex flex-col gap-4">
                  <motion.div 
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                    className="flex items-center gap-3 p-3 bg-blue-900/20 rounded-lg border border-blue-900/40 hover:border-blue-400/40 transition-colors cursor-pointer"
                  >
                    <div className="w-10 h-10 bg-blue-900/40 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Solicitar Cotización</h4>
                      <p className="text-xs text-zinc-400">Recibe una propuesta personalizada</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                    className="flex items-center gap-3 p-3 bg-zinc-900/60 rounded-lg border border-zinc-800/60 hover:border-blue-400/40 transition-colors cursor-pointer"
                  >
                    <div className="w-10 h-10 bg-blue-900/40 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Agendar Llamada</h4>
                      <p className="text-xs text-zinc-400">Consulta directa con un experto</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </GlassmorphismCard>
      </motion.div>
    </StandardSection>
  );
}
