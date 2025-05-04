import React from "react";

export default function TestimoniosWeb() {
  return (
    <section className="py-16 px-4 md:px-0 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-400">Testimonios Web</h2>
      <div className="space-y-6">
        <blockquote className="border-l-4 border-cyan-400 pl-4 text-zinc-200">
          "El sitio web que desarrollaron impulsó nuestra presencia digital y captó nuevos clientes."
        </blockquote>
        <blockquote className="border-l-4 border-cyan-400 pl-4 text-zinc-200">
          "Rápidos, profesionales y con excelente soporte post-lanzamiento."
        </blockquote>
      </div>
    </section>
  );
}
