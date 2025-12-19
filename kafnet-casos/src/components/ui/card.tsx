import type React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import placeHolder from "../../assets/image-placeholder.png"

interface CardProps {
  children?: React.ReactNode;
  title: string;
  description?: string;
  className?: string;
  justifyContent?: string
  borderStyles?: boolean
  hasImage?: boolean
  image?: string
  contentGap?: string;
}

export function Card({children, title, description,  borderStyles, hasImage = false, image, contentGap, className = "" }: CardProps) {
  const { theme } = useTheme();

  return (
    <div
      className={`
        relative
        rounded-xl
        border-[1.55px]
        text-left
        transition-all
        ${theme.colors.text}
        ${className}
      `}
    >
     
     {borderStyles && (
        <>
            <span
            className="
            absolute top-0 left-0
            w-6 h-6
            border-t-[2.5px] border-l-[2.5px]
            border-[#db324b]
            rounded-tl-xl
            pointer-events-none
            drop-shadow-[0_0_6px_#db324b]
            "
            ></span>

            <span
            className="
            absolute bottom-0 right-0
            w-6 h-6
            border-b-[2.5px] border-r-[2.5px]
            border-[#db324b]
            rounded-br-xl
            pointer-events-none
            drop-shadow-[0_0_6px_#db324b]
            "
            ></span>
       </>
        )}

    {/*  <span
        className="
          absolute top-0 right-0
          w-6 h-6
          border-t-[2.5px] border-r-[2.5px]
          border-[#db324b]
          rounded-tr-xl
          pointer-events-none
          drop-shadow-[0_0_6px_#db324b]
        "
      ></span>
      */}

     
      {/*
      <span
        className="
          absolute bottom-0 left-0
          w-6 h-6
          border-b-[2.5px] border-l-[2.5px]
          border-[#db324b]
          rounded-bl-xl
          pointer-events-none
          drop-shadow-[0_0_6px_#db324b]
        "
      ></span>
      */ }
      {
          hasImage || image ?
          <img src={image || placeHolder} alt="card image" className="rounded-xl max-w-full" /> : ""
      }
      <div className={`${hasImage ? 'p-6' : ''} `}>

        {children}
 
        <div className={`mt-4 ${contentGap && 'flex flex-col'} ${contentGap} `}>

          <h3 className="text-2xl font-semibold mb-2">
              {title}
          </h3>

          <p className="text-lg mb-4 opacity-80">
              {description}
          </p>
        </div>
      </div>

    </div>
  );
}
