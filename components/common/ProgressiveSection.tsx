"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProgressiveSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  priority?: boolean;
  threshold?: number;
  rootMargin?: string;
  animationDelay?: number;
  animationDuration?: number;
}

export function ProgressiveSection({
  children,
  id,
  className = "",
  priority = false,
  threshold = 0.1,
  rootMargin = "200px 0px",
  animationDelay = 0,
  animationDuration = 0.5,
}: ProgressiveSectionProps) {
  const [isVisible, setIsVisible] = useState(priority);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Si es una sección prioritaria, cargarla inmediatamente
    if (priority) {
      setIsVisible(true);
      setIsLoaded(true);
      return;
    }

    // Configurar IntersectionObserver para cargar la sección cuando entre en el viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { 
        threshold,
        rootMargin
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      observer.disconnect();
    };
  }, [priority, threshold, rootMargin]);

  // Cuando se marca como visible, establecer un pequeño retraso antes de cargar el contenido
  useEffect(() => {
    if (isVisible && !isLoaded) {
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, animationDelay);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, isLoaded, animationDelay]);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={className}
      aria-busy={!isLoaded}
    >
      <AnimatePresence>
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: animationDuration, ease: "easeOut" }}
            className="w-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
} 