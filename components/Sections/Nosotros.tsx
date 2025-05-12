"use client"

import { motion } from "framer-motion"
import { RevealText } from "@/components/common/reveal-text"
import { AnimatedCounter } from "@/components/common/animated-counter"
import ReactorEffect from "@/components/common/ReactorEffect"
import Image from "next/image"
import { StandardSection } from "@/components/common/StandardSection"

export default function Nosotros() {
  return (
    <StandardSection 
      id="nosotros" 
      withGradient={true}
      topSpacing="py-16 md:py-24"
    >
      <div className="grid gap-12 md:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-[500px] h-[450px] md:h-[500px] rounded-md overflow-hidden">

            {/* Capas de blend para integrar la imagen */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/30 via-transparent to-blue-900/20 mix-blend-color-burn z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/10 via-transparent to-zinc-900/30 mix-blend-multiply z-10"></div>
            
            {/* Vignette effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950 opacity-40 z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-zinc-950 opacity-40 z-10"></div>
            
            {/* Componente del reactor */}
            <ReactorEffect />
            
            {/* Imagen con filtros ajustados para mejor integración */}
            <div className="absolute inset-[2px] z-1 overflow-hidden rounded-sm">
              <Image 
                src="/images/Nosotros.jpg" 
                alt="Equipo de desarrollo trabajando" 
                fill
                className="object-cover object-[center_right_30%] opacity-95 filter saturate-[1.05] contrast-[1.02] brightness-[0.98]" 
                sizes="(max-width: 768px) 100vw, 500px"
                priority
                quality={95}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEPgJgKDm2xwAAAABJRU5ErkJggg=="
              />
            </div>
            
            {/* Borde con forma más orgánica */}
            <div className="absolute inset-0 border border-blue-500/5 rounded-sm z-20 pointer-events-none"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-blue-900/30 bg-blue-900/10 px-3 py-1 text-sm text-blue-400">
              <span>Sobre nosotros</span>
            </div>
            <RevealText className="text-3xl md:text-4xl font-bold">Un equipo comprometido con resultados</RevealText>
            <p className="text-zinc-300">
              En Digital Strong Locking somos un equipo de profesionales apasionados que va más allá del código. 
              Nos enfocamos en crear relaciones de confianza a largo plazo con nuestros clientes.
            </p>
            <p className="text-zinc-400">
              Con más de 3 años de experiencia en el mercado, hemos trabajado con empresas de diversos sectores
              como logística, retail y manufactura, siempre poniendo el factor humano y la comunicación 
              en el centro de cada proyecto.
            </p>
            <p className="text-zinc-400">
              Creemos que el verdadero valor no está solo en la tecnología, sino en cómo la implementamos para
              resolver problemas reales y mejorar la vida de las personas. Nuestro enfoque colaborativo
              asegura soluciones adaptadas a cada contexto empresarial.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <div className="text-3xl font-bold text-blue-400">
                  <AnimatedCounter end={50} suffix="+" />
                </div>
                <p className="text-zinc-400">Proyectos completados</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">
                  <AnimatedCounter end={30} suffix="+" />
                </div>
                <p className="text-zinc-400">Clientes satisfechos</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">
                  <AnimatedCounter end={8} suffix="+" />
                </div>
                <p className="text-zinc-400">Desarrolladores certificados</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">
                  <AnimatedCounter end={99} suffix="%" />
                </div>
                <p className="text-zinc-400">Tasa de retención de clientes</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </StandardSection>
  )
}
