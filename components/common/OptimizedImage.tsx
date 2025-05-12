"use client";

import Image, { ImageProps } from "next/image";
import { useState, useEffect } from "react";

interface OptimizedImageProps extends Omit<ImageProps, "onLoadingComplete"> {
  lowQualityPlaceholder?: string;
  fadeInDuration?: number;
}

export function OptimizedImage({
  src,
  alt,
  lowQualityPlaceholder,
  fadeInDuration = 500,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  className = "",
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // Si la imagen es prioritaria, considerarla en vista inmediatamente
    if (priority) {
      setIsInView(true);
      return;
    }

    // Configurar IntersectionObserver para cargar la imagen cuando entre en el viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // Precargar cuando esté a 200px de entrar en viewport
    );

    const currentElement = document.getElementById(`image-${alt?.replace(/\s+/g, "-").toLowerCase()}`);
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      observer.disconnect();
    };
  }, [alt, priority]);

  // Estilo para el efecto de fade-in
  const imageStyle = {
    opacity: isLoaded ? 1 : 0,
    transition: `opacity ${fadeInDuration}ms ease-in-out`,
    objectFit: props.fill ? "cover" : "contain",
  };

  // Placeholder para blur
  const blurDataURL = lowQualityPlaceholder || 
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjAyMDIwIi8+PC9zdmc+";

  return (
    <div 
      id={`image-${alt?.replace(/\s+/g, "-").toLowerCase()}`}
      className={`relative overflow-hidden ${className}`}
      style={{ minHeight: "1px" }}
    >
      {(isInView || priority) && (
        <Image
          src={src}
          alt={alt || ""}
          sizes={sizes}
          priority={priority}
          placeholder="blur"
          blurDataURL={blurDataURL}
          onLoad={() => setIsLoaded(true)}
          style={imageStyle as any}
          {...props}
        />
      )}
    </div>
  );
} 