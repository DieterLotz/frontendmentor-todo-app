import React, {useContext, createContext, useState} from "react";

const ThemeContext = createContext({
    isDarkMode: true
});

export const useTheme = () => {
    const [theme, setTheme] = useState();
}


export const ThemeContextProvider = ({children}) => {
    const context = useContext(ThemeContext);

    return <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
}