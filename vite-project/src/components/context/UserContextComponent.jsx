import React,{createContext,useState} from "react";
import ThemedComponent from "./ThemedComponent";
import ThemeSelector from "./ThemeSelector";

 export const ThemeContext = createContext('black');


function UseContextComponent() {
    const [theme , setTheme] =useState('light');

    const contextValue = {theme,setTheme};

    return (
        <ThemeContext.Provider value={contextValue}>
        <ThemedComponent/>
        <ThemeSelector/>
        </ThemeContext.Provider>
    )
}

export default UseContextComponent;