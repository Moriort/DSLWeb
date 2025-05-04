import React from "react";

interface RevealTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export default function RevealText({ children, className = "", ...rest }: RevealTextProps) {
  // Puedes agregar animación con framer-motion u otra librería si lo deseas
  return (
    <span className={`transition-all duration-700 font-outfit ${className}`} {...rest}>
      {children}
    </span>
  );
}
