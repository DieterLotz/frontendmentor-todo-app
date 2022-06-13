import React, {createContext, useState} from "react";

export const ThemeContext = createContext({
    theme: "",
    toggleTheme : () => {},
});

export const useTheme = () => {
    const [theme, setTheme] = useState(() => {
        const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        return isDarkMode ? "dark" : "light";
    });

    const toggleTheme = () => {
        setTheme(prev => {
            return prev === "dark" ? "light" : "dark";
        });
    };

    return {
        theme,
        toggleTheme
    }
}

const ThemeContextProvider = ({children}) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>
    );
}

export default ThemeContextProvider;