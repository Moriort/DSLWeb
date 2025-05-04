import React from "react";

export default function PortafolioWeb() {
  return (
    <section className="py-16 px-4 md:px-0 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-400">Portafolio Web</h2>
      <p className="text-zinc-200 mb-4">Algunos de nuestros proyectos destacados en desarrollo web:</p>
      <ul className="list-disc list-inside text-zinc-100 mb-6">
        <li>Portal institucional para empresa de tecnología</li>
        <li>Sistema de reservas online</li>
        <li>Panel de administración personalizado</li>
      </ul>
    </section>
  );
}
