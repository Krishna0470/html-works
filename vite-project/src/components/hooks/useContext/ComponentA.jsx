import React,{useContext} from "react";
import { MyContext } from "./UseContextApp";

export default function ComponentA() {
    const contextvalue = useContext(MyContext);

    return <div> Component A :{contextvalue}</div>
}

