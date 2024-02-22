import React,{useContext,} from "react";
import { ThemeContext } from "./UserContextComponent";

export default  function ThemedComponent () {
    const {theme} = useContext(ThemeContext);

    return <div style={{background : theme, color :"green"}} > Themed Component</div>
}