"use client"

import { useState, useRef, useEffect } from "react"
import { 
  SiVsco, SiGit, SiJira, SiAmazon, SiVercel, SiDocker, SiJest, 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, 
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql
} from "react-icons/si"
import { motion, AnimatePresence } from "framer-motion"

// Tecnologías frontend
const frontendTechs = [
  {
    name: "React",
    desc: "Biblioteca UI",
    level: 95,
    icon: SiReact,
    color: "from-blue-400 to-cyan-400"
  },
  {
    name: "Next.js",
    desc: "Framework React",
    level: 90,
    icon: SiNextdotjs,
    color: "from-zinc-700 to-zinc-900"
  },
  {
    name: "TypeScript",
    desc: "Tipado estático",
    level: 90,
    icon: SiTypescript,
    color: "from-blue-500 to-blue-700"
  },
  {
    name: "Tailwind CSS",
    desc: "Framework CSS",
    level: 95,
    icon: SiTailwindcss,
    color: "from-cyan-400 to-blue-500"
  }
]

// Tecnologías backend
const backendTechs = [
  {
    name: "Node.js",
    desc: "Runtime JavaScript",
    level: 90,
    icon: SiNodedotjs,
    color: "from-green-600 to-green-700"
  },
  {
    name: "Express",
    desc: "Framework web",
    level: 85,
    icon: SiExpress,
    color: "from-zinc-600 to-zinc-800"
  },
  {
    name: "MongoDB",
    desc: "Base de datos NoSQL",
    level: 85,
    icon: SiMongodb,
    color: "from-green-500 to-green-700"
  },
  {
    name: "PostgreSQL",
    desc: "Base de datos SQL",
    level: 90,
    icon: SiPostgresql,
    color: "from-blue-600 to-indigo-800"
  }
]

// Herramientas de desarrollo
const devTools = [
  { 
    name: "VS Code", 
    desc: "Editor principal", 
    icon: SiVsco,
    color: "from-blue-600 to-blue-800"
  },
  { 
    name: "Git", 
    desc: "Control de versiones", 
    icon: SiGit,
    color: "from-orange-600 to-orange-800"
  },
  { 
    name: "Jira", 
    desc: "Gestión de proyectos", 
    icon: SiJira,
    color: "from-blue-500 to-blue-700"
  },
  { 
    name: "Docker", 
    desc: "Contenedores", 
    icon: SiDocker,
    color: "from-blue-500 to-blue-700"
  },
  { 
    name: "Jest", 
    desc: "Testing", 
    icon: SiJest,
    color: "from-red-500 to-red-700"
  }
]

// Plataformas de despliegue
const deployTools = [
  { 
    name: "Vercel", 
    desc: "Despliegue frontend", 
    icon: SiVercel,
    color: "from-zinc-800 to-zinc-950",
    badge: "Preferido"
  },
  { 
    name: "AWS", 
    desc: "Infraestructura cloud", 
    icon: SiAmazon,
    color: "from-orange-500 to-orange-700"
  }
]

// Categorías del stack
const categories = [
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "tools", label: "Herramientas" }
]

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState("frontend")
  const [isVisible, setIsVisible] = useState(false)
  const componentRef = useRef(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    
    if (componentRef.current) {
      observer.observe(componentRef.current)
    }
    
    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current)
      }
    }
  }, [])

  // Animación de entrada para las secciones
  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }
  
  // Animación para cada tarjeta
  const itemAnimation = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }

  // Obtener las tecnologías según la categoría seleccionada
  const getTechsByCategory = () => {
    switch(activeCategory) {
      case "frontend": return frontendTechs
      case "backend": return backendTechs
      case "tools": return [...devTools, ...deployTools]
      default: return frontendTechs
    }
  }

  return (
    <section 
      ref={componentRef}
      className="w-full bg-gradient-to-b from-zinc-900 to-zinc-950 pt-8 pb-20"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Stack Tecnológico Detallado</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Explora en profundidad nuestra selección de tecnologías para desarrollo web profesional
          </p>
        </div>
        
        {/* Categorías */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-zinc-800/70 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Tecnologías actuales */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeCategory === "frontend" && (
              <div className="mb-14">
                <h3 className="text-xl font-bold text-white mb-8 flex items-center justify-center">
                  <span className="bg-blue-600/20 p-2 rounded-lg mr-2 text-blue-400">
                    <SiReact className="w-5 h-5" />
                  </span>
                  Frontend
                </h3>
                <motion.div 
                  variants={containerAnimation}
                  initial={isVisible ? "show" : "hidden"}
                  animate={isVisible ? "show" : "hidden"}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                  {frontendTechs.map((tech, i) => (
                    <motion.div 
                      key={tech.name}
                      variants={itemAnimation}
                      className="group relative bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10"
                    >
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${tech.color}`}></div>
                      <div className="p-6 flex flex-col items-center">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tech.color} p-3.5 mb-5 shadow-lg`}>
                          <tech.icon className="w-full h-full text-white" />
                        </div>
                        <h4 className="text-lg font-semibold text-white mb-1">{tech.name}</h4>
                        <p className="text-sm text-zinc-400 mb-4">{tech.desc}</p>
                        
                        <div className="w-full">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs text-zinc-500">Nivel</span>
                            <span className="text-xs font-medium text-blue-400">{tech.level}%</span>
                          </div>
                          <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                            <motion.div 
                              className={`h-full rounded-full bg-gradient-to-r ${tech.color}`}
                              initial={{ width: 0 }}
                              animate={{ width: isVisible ? `${tech.level}%` : 0 }}
                              transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            )}
            
            {activeCategory === "backend" && (
              <div className="mb-14">
                <h3 className="text-xl font-bold text-white mb-8 flex items-center justify-center">
                  <span className="bg-green-600/20 p-2 rounded-lg mr-2 text-green-400">
                    <SiNodedotjs className="w-5 h-5" />
                  </span>
                  Backend
                </h3>
                <motion.div 
                  variants={containerAnimation}
                  initial={isVisible ? "show" : "hidden"}
                  animate={isVisible ? "show" : "hidden"}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                  {backendTechs.map((tech, i) => (
                    <motion.div 
                      key={tech.name}
                      variants={itemAnimation}
                      className="group relative bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 transition-all duration-300 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10"
                    >
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${tech.color}`}></div>
                      <div className="p-6 flex flex-col items-center">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tech.color} p-3.5 mb-5 shadow-lg`}>
                          <tech.icon className="w-full h-full text-white" />
                        </div>
                        <h4 className="text-lg font-semibold text-white mb-1">{tech.name}</h4>
                        <p className="text-sm text-zinc-400 mb-4">{tech.desc}</p>
                        
                        <div className="w-full">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs text-zinc-500">Nivel</span>
                            <span className="text-xs font-medium text-green-400">{tech.level}%</span>
                          </div>
                          <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                            <motion.div 
                              className={`h-full rounded-full bg-gradient-to-r ${tech.color}`}
                              initial={{ width: 0 }}
                              animate={{ width: isVisible ? `${tech.level}%` : 0 }}
                              transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            )}
            
            {activeCategory === "tools" && (
              <div>
                <div className="mb-14">
                  <h3 className="text-xl font-bold text-white mb-8 flex items-center justify-center">
                    <span className="bg-indigo-600/20 p-2 rounded-lg mr-2 text-indigo-400">
                      <SiVsco className="w-5 h-5" />
                    </span>
                    Entorno de desarrollo
                  </h3>
                  <motion.div 
                    variants={containerAnimation}
                    initial={isVisible ? "show" : "hidden"}
                    animate={isVisible ? "show" : "hidden"}
                    className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5"
                  >
                    {devTools.map((tool) => (
                      <motion.div 
                        key={tool.name}
                        variants={itemAnimation}
                        className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 transition-all duration-300 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 flex flex-col items-center justify-center text-center"
                      >
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tool.color} p-3 mb-4 shadow-lg`}>
                          <tool.icon className="w-full h-full text-white" />
                        </div>
                        <h4 className="text-white font-medium mb-1">{tool.name}</h4>
                        <p className="text-xs text-zinc-400">{tool.desc}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-8 flex items-center justify-center">
                    <span className="bg-orange-600/20 p-2 rounded-lg mr-2 text-orange-400">
                      <SiVercel className="w-5 h-5" />
                    </span>
                    Despliegue e infraestructura
                  </h3>
                  <motion.div 
                    variants={containerAnimation}
                    initial={isVisible ? "show" : "hidden"}
                    animate={isVisible ? "show" : "hidden"}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                  >
                    {deployTools.map((tool) => (
                      <motion.div 
                        key={tool.name}
                        variants={itemAnimation}
                        className={`flex items-center gap-5 bg-zinc-900 rounded-xl p-6 border border-zinc-800 transition-all duration-300 ${
                          tool.badge ? 'border-blue-700/30' : ''
                        } hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10`}
                      >
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tool.color} p-3.5 shadow-lg flex-shrink-0`}>
                          <tool.icon className="w-full h-full text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="text-lg font-semibold text-white">{tool.name}</h4>
                            {tool.badge && (
                              <span className="px-2.5 py-1 text-xs font-medium bg-blue-600/30 text-blue-400 rounded-full">
                                {tool.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-zinc-400 mt-1">{tool.desc}</p>
                          <div className="flex mt-3 gap-2">
                            <span className="px-2 py-1 bg-zinc-800/80 rounded text-xs text-zinc-400">
                              Escalable
                            </span>
                            <span className="px-2 py-1 bg-zinc-800/80 rounded text-xs text-zinc-400">
                              Alta disponibilidad
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
