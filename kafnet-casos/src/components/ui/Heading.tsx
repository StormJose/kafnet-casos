import { useTheme } from "../../contexts/ThemeContext";
import type React from "react";



interface HeadingProps {
  children: React.ReactNode
  size?: "sm" | "md" | "lg"
  className?: string
}



export function Heading({ size = "sm", children, className }: HeadingProps) {
  const { state, theme } = useTheme();


  return (
    <h1 className={`${theme.sizes.headings[size]} font-bold  text-dark rounded-lg ${className}`}>
      {children}
    </h1>
  );
}
