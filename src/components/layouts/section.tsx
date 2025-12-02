import type React from "react";
import { useTheme } from "../../contexts/ThemeContext";



interface SectionProps {
    children: React.ReactNode
    className?: string
  
}

export function Section({children,  className }: SectionProps)  {

    const { state, theme } = useTheme();

    return (
        <section className={` bg-[${theme.colors.background }] p-[120px_0] ${className}`}>
            {children}
        </section>
    )
}