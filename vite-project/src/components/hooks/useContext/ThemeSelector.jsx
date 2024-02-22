import React,{useContext,} from "react";
import { ThemeContext } from "./UserContextComponent";

export default  function ThemeSelector () {
    const {setTheme} = useContext(ThemeContext);

    return ( 
        <>
        <button onClick={()=> setTheme('white')} >Light Theme</button>
        <button onClick={()=> setTheme('pink')} >Dark Theme</button>
        </>
    )

   
}