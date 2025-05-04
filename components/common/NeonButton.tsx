import React from "react";

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "emerald" | "cyan" | "teal" | "blue";
  variant?: "solid" | "outline";
  children: React.ReactNode;
}

export default function NeonButton({
  color = "emerald",
  variant = "solid",
  className = "",
  children,
  ...rest
}: NeonButtonProps) {
  const colorMap = {
    emerald: "emerald-400",
    cyan: "cyan-400",
    teal: "teal-400",
    blue: "blue-400",
  };
  const base =
    variant === "solid"
      ? `bg-${color}-600 text-white border border-${colorMap[color]} shadow-lg hover:bg-${color}-500`
      : `bg-transparent text-${colorMap[color]} border border-${colorMap[color]} hover:bg-${color}-900/10`;
  return (
    <button
      className={`px-5 py-2 rounded-full font-semibold transition-colors duration-300 ${base} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
