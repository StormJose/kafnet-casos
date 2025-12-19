import type React from "react";
import { useTheme } from "../../contexts/ThemeContext";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  icon?: React.ReactNode
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  icon ,
  ...props
}: ButtonProps) {

  const { theme } = useTheme(); 


  const variants = {
    primary: `
      bg-[#db324b]
      text-white
      
    `,
    secondary: `
      bg-black
      text-white
    `,
    outline: `
      border border-[var(--primary)]
    `
  };

  return (
    <button
      className={`
        ${icon && 'flex items-center gap-2'}
        rounded-xl  hover:bg-[#db324b]/80
        cursor-pointer
        duration-200 transition-all
        ${ size === "sm" ? "px-4" : size === "md" ?  "px-4" : ""}
        ${theme.sizes.text[size]}
        ${theme.sizes.padding[size]}
        ${variants[variant]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}
