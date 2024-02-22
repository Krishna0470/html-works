import React,{useContext} from "react";
import { MyContext } from "./UseContextApp";

export default  function ComponentB() {
    const contextvalue = useContext(MyContext);
    

    return <div> Component B :{contextvalue}</div>
}

