import { useEffect, useState } from 'react'

export const useTheme = () => {
    const [isDark, setIsDark] = useState()

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }

    useEffect(()=>{
        localStorage.theme === 'dark'? setIsDark(true): setIsDark(false) 
    },[])

    const toggleTheme = () => {
        !isDark? localStorage.theme = 'dark': localStorage.theme = 'light'
        setIsDark(!isDark)
    }

    return { toggleTheme, isDark }
}
