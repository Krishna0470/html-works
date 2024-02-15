import React,{useState} from "react";

function Form({onSubmit}) {

    const  [inputData , setInptData] =useState('');

    const handleChange =(e) => {
        e.preventDefault();
        setInptData(e.target.value);
    }

    const handleSubmit =(e) =>


    return (
        <>
        <form onSubmit={onSubmit}>
            <input type="text" onChange={}/>
        </form>
        </>
    )
}