import React,{createContext} from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

//Creat a context with a default value
export const MyContext = createContext('default');


function UseContextApp(){
    //provide the context value to the tree

    return(
        <MyContext.Provider value=" Hello from CONTEXT">
            <ComponentA/>
            <ComponentB/>
        </MyContext.Provider>
    )
}

export default UseContextApp;