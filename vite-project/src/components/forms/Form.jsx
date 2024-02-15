import React,{useState} from "react";

function Form({onSubmit}) {

    const  [inputData , setInptData] = useState('');

    const handleChange =(e) => {
        e.preventDefault();
        setInptData(e.target.value);
    }

    const handleSubmit =(e) =>{
        e.preventDefault();
        onSubmit(inputData);
    }


    return (
        <>
        <form onSubmit={handleSubmit}>
            <input value={inputData} type="text" onChange={handleChange}/>
            <input type="submit" value="submit"/>
        </form>
        </>
    )
}

export default Form;