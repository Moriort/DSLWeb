"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface StandardSectionProps {
  id?: string;
  children: ReactNode;
  bgColor?: string;
  topSpacing?: string;
  bottomSpacing?: string;
  fullWidth?: boolean;
  className?: string;
  withGradient?: boolean;
  withCustomGradient?: string;
}

/**
 * Componente para estandarizar todas las secciones del sitio con la misma estructura,
 * espaciado y ancho consistente.
 */
export function StandardSection({
  id,
  children,
  bgColor = "bg-transparent",
  topSpacing = "py-16 md:py-24",
  bottomSpacing = "", // si se deja vacío, se usa topSpacing para ambos
  fullWidth = false,
  className = "",
  withGradient = false,
  withCustomGradient = "",
}: StandardSectionProps) {
  const paddingY = bottomSpacing || topSpacing;
  const containerMaxWidth = fullWidth ? "w-full" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";
  
  return (
    <section
      id={id}
      className={`relative ${bgColor} ${paddingY} overflow-hidden ${className}`}
    >
      {/* Fondo con gradiente opcional */}
      {withGradient && (
        <div className="absolute inset-0 pointer-events-none">
          <div className={withCustomGradient || "absolute inset-0 bg-gradient-to-tr from-blue-900/5 via-transparent to-blue-900/5 opacity-30"}></div>
          <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-900/5 blur-[120px]"></div>
          <div className="absolute -bottom-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-900/5 blur-[120px]"></div>
        </div>
      )}

      {/* Contenedor principal con ancho máximo estándar */}
      <div className={`relative z-10 ${containerMaxWidth}`}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
} 