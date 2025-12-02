import type React from "react"; import type React from "react"; 





interface ContainerProps { 
    children: React.ReactNode 
    display: 'flex' | 'grid' | 'block' 
    flexCol?: boolean
    gridColumns?: string 
    padding?: string
    className?: string
} 


export function Container({children, display, gridColumns, padding, flexCol, className, ...props} : ContainerProps) { 
    let gridTemplateColumns = '1' 
    switch (gridColumns) { 
        case '1': 
            gridTemplateColumns = 'grid-cols-1' 
        case '2': 
            gridTemplateColumns = 'grid-cols-2' 
        case '3': 
            gridTemplateColumns = 'grid-cols-3' 
    } return ( 
    <div className={`${display} ${gridTemplateColumns} max-w-[1300px]  m-[0_auto] ${padding} ${flexCol ? 'flex-col' : 'flex-row'} ${className} ${props}` }> 
        {children} 
    </div> ) 
    

}
