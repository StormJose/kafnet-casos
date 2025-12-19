

export const lightTheme = {
    colors: {
        main: '#db324b',
        secondary: '',
        background: 'bg-white',
        text: 'text-[#000]',
        gray: '#f1f5f9'
        
    },
    sizes: {
        headings: {
            sm: "text-[26px] md:text-[32px] ",
            md: "text-[28px] md:text-[44px]",
            lg: "text-[42px] md:text-[60px]",
        },
        text: {
            sm: "text-[16px] md:text-[20px]",
            md: "text-[20px] md:text-[26px]",
            lg: "text-base/16 lg:text-base/24 text-[22px] md:text-[29px]",
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
    colors: {
        ...lightTheme.colors,
        background: 'bg-dark',
        text: 'text-white',
    },
    sizes: lightTheme.sizes,
    breakpoints: lightTheme.breakpoints
}