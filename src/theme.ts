

export const lightTheme = {
    colors: {
        main: '#db324b',
        secondary: '',
        background: '#fff',
        text: '#000',
        gray: '#f1f5f9'
        
    },
    sizes: {
        headings: {

            sm: "text-[24px]",
            md: "text-[44px]",
            lg: "text-[60px]",
        },
        text: {
            sm: "text-sm",
            md: "text-[24px]",
            lg: "text-[32px]",
        },
        padding: {
            sm: "px-2 py-1.5",
            md: "px-4 py-1.5",
            lg: "px-4 py-2"
        }
    },
    breakpoints: {
        
    }
}

export const darkTheme = {
    colors: lightTheme.colors,
    sizes: lightTheme.sizes,
    breakpoints: lightTheme.breakpoints
}