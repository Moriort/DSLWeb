"use client"

import { useState } from "react"
import { SiAndroidstudio, SiGit, SiJira, SiGooglecloud, SiFirebase } from "react-icons/si"

const technologies = [
  {
    category: "Lenguajes y Frameworks",
    items: [
      { name: "Kotlin", desc: "Lenguaje principal para desarrollo Android", level: 95 },
      { name: "Jetpack Compose", desc: "Framework moderno de UI declarativa", level: 90 },
      { name: "Java", desc: "Soporte para proyectos legacy", level: 85 },
      { name: "XML", desc: "Layouts tradicionales de Android", level: 90 },
    ],
  },
  {
    category: "Arquitectura y Patrones",
    items: [
      { name: "MVVM", desc: "Model-View-ViewModel", level: 95 },
      { name: "Clean Architecture", desc: "Separación de responsabilidades", level: 90 },
      { name: "Repository Pattern", desc: "Abstracción de fuentes de datos", level: 85 },
      { name: "Dependency Injection", desc: "Hilt/Dagger", level: 90 },
    ],
  },
  {
    category: "Bibliotecas y APIs",
    items: [
      { name: "Retrofit", desc: "Cliente HTTP para Android", level: 95 },
      { name: "Room", desc: "Persistencia de datos", level: 90 },
      { name: "Coroutines", desc: "Programación asíncrona", level: 95 },
      { name: "Firebase", desc: "Suite de herramientas Google", level: 85 },
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
                ? "bg-blue-900/10 text-blue-400 border-b-2 border-blue-900"
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
                    <div
                      className="bg-blue-900 h-2.5 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-zinc-400 mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-8 border border-zinc-800/30">
            <h3 className="text-xl font-bold mb-4">Herramientas de desarrollo</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 bg-zinc-900 rounded-lg hover:bg-zinc-800/80 transition-colors group">
                <SiAndroidstudio className="text-blue-400 w-10 h-10 group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="font-medium">Android Studio</h4>
                  <p className="text-xs text-zinc-400">IDE principal</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-zinc-900 rounded-lg hover:bg-zinc-800/80 transition-colors group">
                <SiGit className="text-blue-400 w-10 h-10 group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="font-medium">Git</h4>
                  <p className="text-xs text-zinc-400">Control de versiones</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-zinc-900 rounded-lg hover:bg-zinc-800/80 transition-colors group">
                <SiJira className="text-blue-400 w-10 h-10 group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="font-medium">CI/CD</h4>
                  <p className="text-xs text-zinc-400">Integración continua</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-zinc-900 rounded-lg hover:bg-zinc-800/80 transition-colors group">
                <SiJira className="text-blue-400 w-10 h-10 group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="font-medium">Jira</h4>
                  <p className="text-xs text-zinc-400">Gestión de proyectos</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold mt-6 mb-4">Plataformas y servicios</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-zinc-900 rounded-lg hover:bg-zinc-800/80 transition-colors group">
                <div className="flex items-center gap-3">
                  <SiGooglecloud className="text-blue-400 w-10 h-10 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="font-medium">Google Cloud Platform</h4>
                    <p className="text-xs text-zinc-400">Infraestructura en la nube</p>
                  </div>
                </div>
                <span className="text-xs bg-blue-900/20 text-blue-400 px-2 py-1 rounded-full">Preferido</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-zinc-900 rounded-lg hover:bg-zinc-800/80 transition-colors group">
                <div className="flex items-center gap-3">
                  <SiFirebase className="text-blue-400 w-10 h-10 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="font-medium">Firebase</h4>
                    <p className="text-xs text-zinc-400">Backend como servicio</p>
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