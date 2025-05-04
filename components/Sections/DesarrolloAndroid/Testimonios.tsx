import React from "react";
import { AnimatedBackgroundGradient } from "@/components/common/animated-background-gradient";
import { RevealText } from "@/components/common/reveal-text";
import { TestimonialCarousel } from "@/components/common/testimonial-carousel";

export default function TestimoniosAndroid() {
  return (
    <section className="py-20 bg-zinc-950 relative overflow-hidden">
    <div className="absolute inset-0 z-0">
      <AnimatedBackgroundGradient color1="rgba(30, 58, 138, 0.03)" color2="rgba(30, 64, 175, 0.03)" speed={2} />
    </div>
    <div className="container relative z-10">
    <div className="flex flex-col items-center justify-center text-center mb-16">
    <div className="inline-flex items-center rounded-full border border-blue-900/30 bg-blue-900/10 px-3 py-1 text-sm text-blue-400 mb-4">
          <span>Testimonios</span>
        </div>
        <RevealText className="text-3xl md:text-4xl font-bold mb-4">Lo que Dicen Nuestros Clientes</RevealText>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          Empresas de diversos sectores confían en nuestras soluciones Android para optimizar sus procesos y
          mejorar su presencia digital.
        </p>
      </div>

      <TestimonialCarousel />
    </div>
  </section>
  );
}
