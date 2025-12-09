'use client';
import type React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string
}

export function Section({ children, className, id }: SectionProps) {
  const { theme } = useTheme();

  return (
    <motion.section
        id={id}
      initial={{ opacity: 0, y: 20 }}                // start invisible and lowered
      whileInView={{ opacity: 1, y: 0 }}             // fade + rise up
      viewport={{ once: true, amount: 0.2 }}         // trigger when 20% enters screen
      transition={{ duration: 1, ease: "easeOut" }} // smooth timing
      className={`bg-[${theme.colors.background}] py-11 xl:p-[72px_0] ${className}`}
    >
      {children}
    </motion.section>
  );
}
