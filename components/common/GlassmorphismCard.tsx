import React from "react";

interface GlassmorphismCardProps extends React.HTMLAttributes<HTMLDivElement> {
  blurIntensity?: "light" | "medium" | "heavy";
  borderColor?: "emerald" | "cyan" | "teal" | "blue";
  hoverEffect?: boolean;
  children: React.ReactNode;
}

export default function GlassmorphismCard({
  blurIntensity = "medium",
  borderColor = "emerald",
  hoverEffect = false,
  className = "",
  children,
  ...rest
}: GlassmorphismCardProps) {
  const blurMap = {
    light: "backdrop-blur-sm",
    medium: "backdrop-blur-md",
    heavy: "backdrop-blur-xl",
  };
  
  const borderMap = {
    emerald: "border-emerald-400/30",
    cyan: "border-cyan-400/30",
    teal: "border-teal-400/30",
    blue: "border-blue-400/30",
  };
  
  const hoverClass = hoverEffect 
    ? 'transition-all duration-300 hover:border-opacity-50 hover:shadow-lg' 
    : '';
  
  return (
    <div
      className={`rounded-2xl border-2 ${borderMap[borderColor]} bg-white/5 ${blurMap[blurIntensity]} shadow-lg ${hoverClass} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
