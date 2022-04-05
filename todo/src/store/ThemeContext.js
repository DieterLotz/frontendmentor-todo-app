import React, {useContext, createContext, useState} from "react";

const ThemeContext = createContext({
    theme: "",
    toggleTheme : () => {},
});

export const useTheme = () => {
    const [theme, setTheme] = useState("dark");
}

const ThemeContextProvider = ({children}) => {
    const context = useContext(ThemeContext);
    
    return (
        <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
    );
}

export default ThemeContextProvider;