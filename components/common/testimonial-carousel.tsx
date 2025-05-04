"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Digital Strong Locking transformó nuestra operación logística con una aplicación Android que optimizó nuestras rutas de entrega y redujo los tiempos de respuesta en un 40%. Su conocimiento técnico y enfoque en nuestras necesidades específicas fue excepcional.",
    author: "Carlos Mendoza",
    position: "Director de Operaciones",
    company: "LogisTech Chile",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    quote:
      "Trabajar con el equipo de Digital Strong Locking fue una experiencia extraordinaria. Desarrollaron una aplicación Android para nuestro equipo de ventas que funciona perfectamente incluso en zonas sin conexión. El resultado superó nuestras expectativas y ha mejorado significativamente nuestra productividad.",
    author: "María Fernández",
    position: "Gerente Comercial",
    company: "Distribuidora Nacional",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    quote:
      "La aplicación de gestión de inventario que Digital Strong Locking desarrolló para nosotros ha revolucionado nuestro control de stock. Su implementación de lectura de códigos QR y la integración con nuestro ERP existente fue impecable. Altamente recomendados para proyectos Android empresariales.",
    author: "Javier Soto",
    position: "CTO",
    company: "Retail Solutions",
    image: "/placeholder.svg?height=60&width=60",
  },
]

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % testimonials.length)
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)

  return (
    <div className="relative bg-zinc-800/30 border border-zinc-700/50 rounded-xl p-8">
      <div className="absolute top-8 left-8">
        <Quote className="h-12 w-12 text-blue-900/20" />
      </div>

      <div className="relative z-10">
        <div className="min-h-[300px] flex flex-col justify-between">
          <p className="text-xl text-zinc-300 italic mb-8 pt-10">"{testimonials[current].quote}"</p>

          <div className="flex items-center gap-4">
            <Image
              src={testimonials[current].image || "/placeholder.svg"}
              alt={testimonials[current].author}
              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <h4 className="font-bold">{testimonials[current].author}</h4>
              <p className="text-sm text-zinc-400">{testimonials[current].position}</p>
              <p className="text-sm text-blue-400">{testimonials[current].company}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full ${index === current ? "bg-blue-900" : "bg-zinc-700"}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

