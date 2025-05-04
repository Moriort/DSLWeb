"use client"

import { useState } from "react"
import { SiWebstorm, SiGit, SiJira, SiAwsamplify, SiVercel } from "react-icons/si"

const technologies = [
  {
    category: "Lenguajes y Frameworks",
    items: [
      { name: "JavaScript", desc: "Lenguaje principal para desarrollo web", level: 95 },
      { name: "TypeScript", desc: "Superset de JavaScript para tipado estático", level: 90 },
      { name: "React", desc: "Librería para construir interfaces de usuario", level: 95 },
      { name: "Next.js", desc: "Framework para aplicaciones React con renderizado híbrido", level: 90 },
      { name: "Ruby on Rails", desc: "Framework backend para aplicaciones web", level: 85 },
    ],
  },
  {
    category: "Arquitectura y Patrones",
    items: [
      { name: "MVC", desc: "Model-View-Controller", level: 95 },
      { name: "Server-Side Rendering", desc: "Renderizado en el servidor", level: 90 },
      { name: "Static Site Generation", desc: "Generación de sitios estáticos", level: 85 },
      { name: "RESTful APIs", desc: "Diseño de APIs REST", level: 90 },
      { name: "GraphQL", desc: "Consulta de datos flexible", level: 85 },
    ],
  },
  {
    category: "Bibliotecas y APIs",
    items: [
      { name: "Axios", desc: "Cliente HTTP para JavaScript", level: 95 },
      { name: "React Query", desc: "Gestión de estado para datos remotos", level: 90 },
      { name: "Tailwind CSS", desc: "Framework de utilidades CSS", level: 95 },
      { name: "PostgreSQL", desc: "Base de datos relacional", level: 90 },
      { name: "Prisma", desc: "ORM moderno para bases de datos", level: 85 },
    ],
  },
]

export function TechStack() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/30 rounded-xl shadow-xl">
      <div className="flex border-b border-zinc-800/30">
        {technologies.map((tech, index) => (
          <button
            key={index}
            className={`px-6 py-4 text-sm font-medium transition-colors ${
              activeTab === index
                ? "bg-blue-900/10 text-blue-400 border-b-2 border-blue-400"
                : "text-zinc-400 hover:text-zinc-300 hover:bg-zinc-800/50"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tech.category}
          </button>
        ))}
      </div>
      <div className="p-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-6">{technologies[activeTab].category}</h3>
            <div className="space-y-8">
              {technologies[activeTab].items.map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-white">{item.name}</span>
                    <span className="text-blue-400">{item.level}%</span>
                  </div>
                  <div className="w-full bg-zinc-800/50 rounded-full h-2.5">
                    <div className="bg-blue-400 h-2.5 rounded-full transition-all duration-500 ease-out" style={{ width: `${item.level}%` }}></div>
                  </div>
                  <p className="text-sm text-zinc-400 mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-8 border border-zinc-800/30">
            <h3 className="text-xl font-bold mb-4">Herramientas de Desarrollo</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 bg-zinc-900 rounded-lg">
                <SiWebstorm className="text-blue-400 w-10 h-10" />
                <div>
                  <h4 className="font-medium">WebStorm</h4>
                  <p className="text-xs text-zinc-400">IDE principal</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-zinc-900 rounded-lg">
                <SiGit className="text-blue-400 w-10 h-10" />
                <div>
                  <h4 className="font-medium">Git</h4>
                  <p className="text-xs text-zinc-400">Control de versiones</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-zinc-900 rounded-lg">
                <SiJira className="text-blue-400 w-10 h-10" />
                <div>
                  <h4 className="font-medium">Jira</h4>
                  <p className="text-xs text-zinc-400">Gestión de proyectos</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold mt-6 mb-4">Plataformas y Servicios</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-zinc-900 rounded-lg">
                <div className="flex items-center gap-3">
                  <SiAwsamplify className="text-blue-400 w-10 h-10" />
                  <div>
                    <h4 className="font-medium">AWS</h4>
                    <p className="text-xs text-zinc-400">Infraestructura en la nube</p>
                  </div>
                </div>
                <span className="text-xs bg-blue-900/20 text-blue-400 px-2 py-1 rounded-full">Preferido</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-zinc-900 rounded-lg">
                <div className="flex items-center gap-3">
                  <SiVercel className="text-blue-400 w-10 h-10" />
                  <div>
                    <h4 className="font-medium">Vercel</h4>
                    <p className="text-xs text-zinc-400">Despliegue de aplicaciones</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
