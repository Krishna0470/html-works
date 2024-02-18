import React,{useState} from "react";
import AdminloginNav from "./AdminloginNav";
import Adminloginpage from "./Adminloginpage";


function Adminlogin(){
    const [dataToDisplay ,setDataToDisplay] = useState ('');

    const handleSubmit = (data)=> {
        setDataToDisplay(data);
    }

    return(
        <>
        <AdminloginNav />
        <Adminloginpage />
        </>
    )
}

export default Adminlogin;