import { useTheme } from "../../contexts/ThemeContext";
import type React from "react";



interface ImageProps {
  children: React.ReactNode
  width?: string 
  height?: string
}



export function Image({  src }: ImageProps) {
  const { state, theme } = useTheme();


  return (
    <image src={src}/>
  );
}
