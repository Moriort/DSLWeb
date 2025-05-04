import { motion } from "framer-motion"

export function ProcessTimeline() {
  const steps = [
    {
      number: "01",
      title: "Descubrimiento y Planificación",
      description:
        "Analizamos sus necesidades empresariales, definimos objetivos claros y elaboramos un plan detallado para el desarrollo de su aplicación Android.",
      items: [
        "Entrevistas con stakeholders",
        "Análisis de requisitos",
        "Definición de alcance",
        "Planificación de sprints",
      ],
    },
    {
      number: "02",
      title: "Diseño y Arquitectura",
      description:
        "Creamos wireframes, prototipos interactivos y definimos la arquitectura técnica que servirá como base sólida para su aplicación.",
      items: [
        "Wireframing y prototipado",
        "Diseño de UI/UX",
        "Arquitectura MVVM/Clean",
        "Planificación de bases de datos",
      ],
    },
    {
      number: "03",
      title: "Desarrollo Iterativo",
      description:
        "Implementamos su aplicación en ciclos cortos (sprints), entregando funcionalidades completas y listas para pruebas en cada iteración.",
      items: [
        "Desarrollo basado en características",
        "Integración continua",
        "Revisiones de código",
        "Pruebas unitarias y de integración",
      ],
    },
    {
      number: "04",
      title: "Pruebas y Aseguramiento de Calidad",
      description:
        "Realizamos pruebas exhaustivas para garantizar que su aplicación funcione perfectamente en diferentes dispositivos y escenarios.",
      items: [
        "Pruebas funcionales",
        "Pruebas de rendimiento",
        "Pruebas de seguridad",
        "Pruebas en dispositivos reales",
      ],
    },
    {
      number: "05",
      title: "Despliegue y Lanzamiento",
      description:
        "Gestionamos el proceso de publicación en Google Play Store y/o distribución empresarial, asegurando una transición suave.",
      items: [
        "Preparación para Google Play",
        "Configuración de distribución empresarial",
        "Optimización de ficha de Play Store",
        "Estrategia de lanzamiento",
      ],
    },
    {
      number: "06",
      title: "Soporte y Evolución",
      description:
        "Proporcionamos mantenimiento continuo, monitoreo de rendimiento y actualizaciones regulares para mantener su aplicación relevante.",
      items: [
        "Monitoreo de rendimiento",
        "Actualizaciones de seguridad",
        "Nuevas funcionalidades",
        "Optimización continua",
      ],
    },
  ]

  return (
    <div className="space-y-12 relative">
      {/* Elementos de fondo sutiles */}
      <div className="absolute -left-[10%] top-1/4 w-[300px] h-[300px] bg-blue-900/5 rounded-full blur-[100px] z-0"></div>
      <div className="absolute -right-[10%] top-2/3 w-[300px] h-[300px] bg-blue-900/5 rounded-full blur-[100px] z-0"></div>
      
      {steps.map((step, index) => (
        <motion.div 
          key={index} 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col md:flex-row gap-6 relative z-10"
        >
          <div className="md:w-1/4 flex flex-col items-center md:items-end">
            <div className="bg-blue-500/10 text-blue-400 font-bold text-4xl w-16 h-16 rounded-full flex items-center justify-center border border-blue-500/20 shadow-inner shadow-blue-500/5">
              {step.number}
            </div>
            {index < steps.length - 1 && (
              <div className="h-full w-0.5 bg-gradient-to-b from-blue-500/20 via-zinc-800 to-zinc-800 my-2 md:mr-8"></div>
            )}
          </div>
          <div className="md:w-3/4 bg-zinc-900/80 backdrop-blur-sm p-6 rounded-lg border border-zinc-800 hover:border-blue-900/30 transition-all duration-300 relative group overflow-hidden">
            {/* Decoración sutil en el fondo de cada paso */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-blue-500/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-3 text-blue-50 group-hover:text-white transition-colors duration-300">{step.title}</h3>
              <p className="text-zinc-400 mb-4 group-hover:text-zinc-300 transition-colors duration-300">{step.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {step.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-zinc-300 group-hover:text-zinc-200 transition-colors duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:bg-blue-400 transition-colors duration-300"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

