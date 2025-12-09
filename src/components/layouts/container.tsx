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
            break
        case '2': 
            gridTemplateColumns = 'sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2' 
            break
        case '3': 
            gridTemplateColumns = 'sm:grid-cols-1 md:grid-cols-3' 
    } return ( 
    <div className={`${display} ${gridTemplateColumns} max-w-[1300px] m-[0_auto] sm:px-8 px-4  ${padding} ${flexCol ? 'flex-col' : 'flex-row'} ${className} ${props}` }> 
        {children} 
    </div> ) 
    

}
