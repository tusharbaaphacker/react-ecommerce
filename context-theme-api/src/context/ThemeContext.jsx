import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();


export const ThemeProvider = ({children}) =>{
    const [theme, setTheme] = useState("light");

    const toogleTheme = () => {
        setTheme(theme==="light" ? "dark" : "light")
    }

    return (
        <ThemeContext.Provider value={{theme, toogleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);