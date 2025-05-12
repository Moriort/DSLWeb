"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";

interface OptimizedLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  onClick?: () => void;
  prefetchDelay?: number;
  preloadData?: boolean;
}

export function OptimizedLink({
  href,
  children,
  className = "",
  ariaLabel,
  onClick,
  prefetchDelay = 200,
  preloadData = true,
  ...props
}: OptimizedLinkProps) {
  const router = useRouter();
  const [isPrefetching, setIsPrefetching] = useState(false);
  
  // Manejar la precarga de la ruta al hacer hover
  const handleMouseEnter = () => {
    if (isPrefetching) return;
    
    setIsPrefetching(true);
    
    // Retrasar la precarga para evitar precarga innecesaria en hover rápido
    const timer = setTimeout(() => {
      // Prefetch manual para tener más control
      if (typeof href === 'string' && href.startsWith('/')) {
        router.prefetch(href);
      }
    }, prefetchDelay);
    
    return () => clearTimeout(timer);
  };
  
  // Manejar el clic en el enlace
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick();
    }
    
    // Si es un enlace externo o un ancla, no hacemos nada especial
    if (typeof href !== 'string' || href.startsWith('http') || href.startsWith('#')) {
      return;
    }
    
    // Para enlaces internos, podemos realizar acciones adicionales
    // como mostrar un indicador de carga, etc.
  };

  return (
    <Link
      href={href}
      className={className}
      aria-label={ariaLabel}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      prefetch={false} // Desactivamos el prefetch automático para usar el nuestro
      {...props}
    >
      {children}
    </Link>
  );
} 