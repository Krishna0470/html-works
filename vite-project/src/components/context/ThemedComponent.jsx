import React,{useContext,} from "react";
import { ThemeContext } from "./UserContextComponent";
import Calc from "../calculator/Calc";

export default  function ThemedComponent () {
    const {theme} = useContext(ThemeContext);

    return (
    <div style={{background : theme, color :"green"}} > 
    <Calc/>
     </div>
  )
}