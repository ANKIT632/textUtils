import React, {useState} from "react";

const UseCase = () => {
    const [inputValue,changeValue]=useState("ankit");

    // event an object.
   const onchange=(event)=>{
       const val=event.target.value;
        changeValue(val);
    }
    return( 
        <div>
            <h1>{inputValue}</h1>
           <input type="text" value={inputValue} placeholder="enter Name" onChange={onchange}></input>
        </div>
    );
};

export default UseCase;