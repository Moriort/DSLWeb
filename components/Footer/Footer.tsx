"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/50 py-16 relative overflow-hidden">
      {/* Elementos de fondo para crear atmósfera */}
      <div className="absolute w-full h-full overflow-hidden">
        <div className="absolute -top-[30%] -left-[10%] w-[500px] h-[500px] bg-blue-950/5 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-[30%] -right-[10%] w-[500px] h-[500px] bg-blue-950/5 rounded-full blur-[120px]"></div>
      </div>
      
      {/* Gradiente de fondo */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-950/20 to-zinc-950" />
      
      {/* Decoración de líneas sutiles */}
      <div className="absolute inset-0 opacity-[0.03] z-0">
        <svg className="w-full h-full" viewBox="0 0 1000 400" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grid-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path d="M0,100 L1000,100" stroke="url(#grid-gradient)" strokeWidth="0.5" />
          <path d="M0,200 L1000,200" stroke="url(#grid-gradient)" strokeWidth="0.5" />
          <path d="M0,300 L1000,300" stroke="url(#grid-gradient)" strokeWidth="0.5" />
          <path d="M200,0 L200,400" stroke="url(#grid-gradient)" strokeWidth="0.5" />
          <path d="M400,0 L400,400" stroke="url(#grid-gradient)" strokeWidth="0.5" />
          <path d="M600,0 L600,400" stroke="url(#grid-gradient)" strokeWidth="0.5" />
          <path d="M800,0 L800,400" stroke="url(#grid-gradient)" strokeWidth="0.5" />
        </svg>
      </div>
      
      <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="relative h-16 w-52">
                <Image 
                  src="/LogoLight.png" 
                  alt="Digital Strong Locking" 
                  fill
                  className="object-contain" 
                  sizes="(max-width: 768px) 260px, 260px"
                  priority
                />
              </div>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Brindamos soluciones tecnológicas de alto impacto mediante el desarrollo especializado de aplicaciones web y Android empresariales, transformando los desafíos de negocio en ventajas competitivas para nuestros clientes.
            </p>
            <div className="flex gap-4">
              <Link 
                href="#" 
                className="text-zinc-500 hover:text-blue-400 transition-all duration-300 p-2.5 rounded-lg hover:bg-blue-400/10 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link 
                href="#" 
                className="text-zinc-500 hover:text-blue-400 transition-all duration-300 p-2.5 rounded-lg hover:bg-blue-400/10 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link 
                href="#" 
                className="text-zinc-500 hover:text-blue-400 transition-all duration-300 p-2.5 rounded-lg hover:bg-blue-400/10 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link 
                href="#" 
                className="text-zinc-500 hover:text-blue-400 transition-all duration-300 p-2.5 rounded-lg hover:bg-blue-400/10 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="font-semibold text-lg text-white bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Servicios
            </h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  href="#desarrollo-web" 
                  className="text-zinc-400 hover:text-blue-400 transition-all duration-300 text-sm hover:translate-x-1 inline-flex"
                >
                  Desarrollo web
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-zinc-400 hover:text-blue-400 transition-all duration-300 text-sm hover:translate-x-1 inline-flex"
                >
                  Desarrollo nativo en Kotlin
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-zinc-400 hover:text-blue-400 transition-all duration-300 text-sm hover:translate-x-1 inline-flex"
                >
                  Integración de sistemas
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-zinc-400 hover:text-blue-400 transition-all duration-300 text-sm hover:translate-x-1 inline-flex"
                >
                  Seguridad y cumplimiento
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-zinc-400 hover:text-blue-400 transition-all duration-300 text-sm hover:translate-x-1 inline-flex"
                >
                  Optimización de rendimiento
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-zinc-400 hover:text-blue-400 transition-all duration-300 text-sm hover:translate-x-1 inline-flex"
                >
                  Analítica y monitoreo
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h3 className="font-semibold text-lg text-white bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Empresa
            </h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  href="#" 
                  className="text-zinc-400 hover:text-blue-400 transition-all duration-300 text-sm hover:translate-x-1 inline-flex"
                >
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-zinc-400 hover:text-blue-400 transition-all duration-300 text-sm hover:translate-x-1 inline-flex"
                >
                  Metodología
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-zinc-400 hover:text-blue-400 transition-all duration-300 text-sm hover:translate-x-1 inline-flex"
                >
                  Portafolio
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-zinc-400 hover:text-blue-400 transition-all duration-300 text-sm hover:translate-x-1 inline-flex"
                >
                  Testimonios
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-zinc-400 hover:text-blue-400 transition-all duration-300 text-sm hover:translate-x-1 inline-flex"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h3 className="font-semibold text-lg text-white bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Legal
            </h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  href="#" 
                  className="text-zinc-400 hover:text-blue-400 transition-all duration-300 text-sm hover:translate-x-1 inline-flex"
                >
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-zinc-400 hover:text-blue-400 transition-all duration-300 text-sm hover:translate-x-1 inline-flex"
                >
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-zinc-400 hover:text-blue-400 transition-all duration-300 text-sm hover:translate-x-1 inline-flex"
                >
                  Política de cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-800/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500 text-sm">
              © {new Date().getFullYear()} Digital Strong Locking. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-zinc-400 text-sm">Sistemas operando con normalidad</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}