"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Header from "@/components/Header/Header"
import HeroSwitcher, { HeroType } from "@/components/Hero/HeroSwitcher"
import ServiciosAndroid from "@/components/Sections/DesarrolloAndroid/Servicios";
import ServiciosWeb from "@/components/Sections/DesarrolloWeb/Servicios";
import TecnologiasAndroid from "@/components/Sections/DesarrolloAndroid/Tecnologias";
import TecnologiasWeb from "@/components/Sections/DesarrolloWeb/Tecnologias";
import MetodologiaAndroid from "@/components/Sections/DesarrolloAndroid/Metodologia";
import MetodologiaWeb from "@/components/Sections/DesarrolloWeb/Metodologia";
import PortafolioAndroid from "@/components/Sections/DesarrolloAndroid/Portafolio";
import PortafolioWeb from "@/components/Sections/DesarrolloWeb/Portafolio";
import TestimoniosAndroid from "@/components/Sections/DesarrolloAndroid/Testimonios";
import TestimoniosWeb from "@/components/Sections/DesarrolloWeb/Testimonios";
import CTAAndroid from "@/components/Sections/DesarrolloAndroid/CTA";
import CTAWeb from "@/components/Sections/DesarrolloWeb/CTA";
import Nosotros from "@/components/Sections/Nosotros"
import Contacto from "@/components/Sections/Contacto"
import Footer from "@/components/Footer/Footer"
import ScrollToTop from "@/components/common/ScrollToTop"
import { useState } from "react";

const projects = [
  {
    id: 'globe-example',
    title: 'Visualización Global Interactiva',
    description: 'Un globo terrestre 3D completamente personalizable que muestra conexiones y puntos de actividad global.',
    icon: '🌎',
    color: 'from-blue-900 to-indigo-600',
    tags: ['3D', 'Interactivo', 'Visualización de datos']
  },

  {
    id: 'coming-soon',
    title: 'Más Ejemplos Próximamente',
    description: 'Estamos desarrollando más componentes y ejemplos interactivos para esta galería.',
    icon: '🚀',
    color: 'from-blue-900 to-indigo-600',
    tags: ['Próximamente']
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const router = useRouter();
  const isComingSoon = project.id === 'coming-soon';
  
  // Animaciones
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0],
      }
    })
  };
  
  return (
    <motion.div
      custom={index}
      initial="hidden"
      animate="visible"
      variants={variants}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="col-span-1"
    >
      <div 
        className={`h-full rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm
                   shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
        onClick={() => !isComingSoon && router.push(`/${project.id}`)}
      >

        <div className={`h-24 bg-gradient-to-r ${project.color} flex items-center justify-center text-4xl`}>
          <span>{project.icon}</span>
        </div>
        
        <div className="p-6">
          <h2 className="text-xl font-bold mb-2 text-white">{project.title}</h2>
          <p className="text-zinc-400 mb-4 text-sm">{project.description}</p>
          
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span 
                key={tag} 
                className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="mt-6">
            {isComingSoon ? (
              <div className="px-4 py-2 text-sm bg-zinc-800 text-zinc-400 rounded-md text-center">
                En desarrollo
              </div>
            ) : (
              <div className="px-4 py-2 text-sm bg-blue-900 hover:bg-blue-800 text-white rounded-md text-center transition-colors">
                Ver demostración
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Home() {
  const [activeHero, setActiveHero] = useState<HeroType>("android");
  const [autoSwitch, setAutoSwitch] = useState(true);

  const isAndroid = activeHero === "android";
  const isWeb = activeHero === "web";

  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 relative overflow-hidden">
        <div className="relative w-full">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/0 via-zinc-900/50 to-zinc-900/80"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <HeroSwitcher
              activeHero={activeHero}
              setActiveHero={setActiveHero}
              autoSwitch={autoSwitch}
              setAutoSwitch={setAutoSwitch}
            />
          </div>
        </div>

        <div className="relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            
            <section id="servicios" className="relative py-24 rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 my-24">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 to-transparent pointer-events-none"></div>
              {isWeb ? <ServiciosWeb /> : <ServiciosAndroid />}
            </section>

            <section id="tecnologias" className="relative py-24 rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 my-24">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/5 to-transparent pointer-events-none"></div>
              {isWeb ? <TecnologiasWeb /> : <TecnologiasAndroid />}
            </section>

            <section id="metodologia" className="relative py-24 rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 my-24">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 to-transparent pointer-events-none"></div>
              {isWeb ? <MetodologiaWeb /> : <MetodologiaAndroid />}
            </section>

             {/* <section id="portafolio" className="relative py-24 rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 my-24">
              <div className="absolute inset-0 bg-gradient-to-l from-blue-900/5 to-transparent pointer-events-none"></div>
              {isWeb ? <PortafolioWeb /> : <PortafolioAndroid />}
            </section>  */}

            {/* <section className="relative py-24 rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 my-24">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/5 via-transparent to-blue-900/5 pointer-events-none"></div>
              {isWeb ? <TestimoniosWeb /> : <TestimoniosAndroid />}
            </section> */}

            <section className="relative py-24 rounded-2xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 my-24">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none"></div>
              {isWeb ? <CTAWeb /> : <CTAAndroid />}
            </section>

            <section id="nosotros" className="relative py-24 rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 my-24">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/5 via-transparent to-blue-900/5 pointer-events-none"></div>
              <Nosotros />
            </section>

            <section id="contacto" className="relative py-24 rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 my-24">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/5 via-transparent to-blue-900/5 pointer-events-none"></div>
              <Contacto />
            </section>
          </div>
        </div>
      </main>

      <Footer />

      <div className="fixed bottom-8 right-8 z-50">
        <ScrollToTop />
      </div>

      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/5 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-blue-900/5 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 via-zinc-900 to-zinc-900 pointer-events-none"></div>
      </div>
    </div>
  );
}
