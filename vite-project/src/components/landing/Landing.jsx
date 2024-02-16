import React,{useState} from "react";
import Landingpage from "./Landingpage";
import LandingNav from "./LandingNav";


function Landing(){
    const [dataToDisplay ,setDataToDisplay] = useState ('');

    const handleSubmit = (data)=> {
        setDataToDisplay(data);
    }

    return(
        <>
        <LandingNav />
        <Landingpage />
        </>
    )
}

export default Landing;