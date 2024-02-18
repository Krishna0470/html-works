import React,{useState} from "react";
import AdduserNav from "./AdduserNav";
import Adduserpage from "./Adduserpage";


function Adduser(){
    const [dataToDisplay ,setDataToDisplay] = useState ('');

    const handleSubmit = (data)=> {
        setDataToDisplay(data);
    }

    return(
        <>
        <AdduserNav />
        <Adduserpage />
        </>
    )
}

export default Adduser;