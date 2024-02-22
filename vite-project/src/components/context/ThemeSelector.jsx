import React,{useContext,} from "react";
import { ThemeContext } from "./UserContextComponent";
import '../calculator/calculator.css';


export default  function ThemeSelector () {
    const {setTheme} = useContext(ThemeContext);

    return ( 
        <>
        <button className="context" onClick={()=> setTheme('white')} >Light Theme</button>
        <button className="context1" onClick={()=> setTheme('pink')} >Dark Theme</button>
        </>
    )

   
}