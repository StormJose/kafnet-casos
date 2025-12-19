import { useTheme } from "../../contexts/ThemeContext";
import type React from "react";



interface ParagraphProps {
  children: React.ReactNode
  size?: "sm" | "md" | "lg";
  padding?: string
  className?: string
}



export function Paragraph({ size = "md", padding, className, children }: ParagraphProps) {
  const { state, theme } = useTheme();


  return (
    <p className={`${theme.sizes.text[size]} ${padding} text-dark rounded-lg ${className}`}>
      {children}
    </p>
  );
}
