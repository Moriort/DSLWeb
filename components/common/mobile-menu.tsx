"use client"
import Link from "next/link"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-zinc-950/90 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div></div>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-5 w-5" />
          <span className="sr-only">Cerrar menú</span>
        </Button>
      </div>
      <nav className="container mt-8 flex flex-col gap-6">
        <Link
          href="#servicios"
          className="text-2xl font-medium hover:text-emerald-500 transition-colors"
          onClick={onClose}
        >
          Servicios
        </Link>
        <Link
          href="#tecnologias"
          className="text-2xl font-medium hover:text-emerald-500 transition-colors"
          onClick={onClose}
        >
          Tecnologías
        </Link>
        <Link
          href="#metodologia"
          className="text-2xl font-medium hover:text-emerald-500 transition-colors"
          onClick={onClose}
        >
          Metodología
        </Link>
        <Link
          href="#portafolio"
          className="text-2xl font-medium hover:text-emerald-500 transition-colors"
          onClick={onClose}
        >
          Portafolio
        </Link>
        <Link
          href="#nosotros"
          className="text-2xl font-medium hover:text-emerald-500 transition-colors"
          onClick={onClose}
        >
          Nosotros
        </Link>
        <Link
          href="#contacto"
          className="text-2xl font-medium hover:text-emerald-500 transition-colors"
          onClick={onClose}
        >
          Contacto
        </Link>
        <Button className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white">Cotizar Proyecto</Button>
      </nav>
    </div>
  )
}

