// import { useState } from "react"
import React from 'react'

export default function AboutUs(props) {



    // const [mode,changemode]=useState("enable dark mode");

    // var [styleSet,changeStyle]=useState({
    //     backgroundColor:'white',
    //     color:'#042743'
    // });

    //  const toggleStyle=()=>{

    //    if(styleSet.color==='#042743'){
    //     changeStyle(
    //        { backgroundColor:'#042743',
    //         color:'white'
    //          }
    //     )
    //       changemode("enable ligth mode" );
        
    // }
    //       else{
    //         changeStyle(
    //         {
    //             backgroundColor:'white',
    //             color:'#042743'
    //              }
    //             )
    //              changemode("enable dark mode")
            
    //         }

          
    //    }
   
  return (
    <div className="container my-3 " style={{color: props.mode === 'light' ?'#042743' :'white' , backgroundColor: props.mode === 'light' ?'white' :'#042743'}}>
        <h2>AboutUs :</h2>
         <div className="accordion" id="accordionExample">
  <div className="accordion-item" >
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"   aria-expanded="true" aria-controls="collapseOne" style={{color: props.mode === 'light' ?'rgb(6 82 144)' :'white' , backgroundColor: props.mode === 'light' ?'white' :'rgb(6 82 144)'}}>
        Analyse Your text :
      </button>
    </h2>

    <div id="collapseOne" className="accordion-collapse collapse show"  aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={{ backgroundColor: props.mode === 'light' ?'white' :'#042743'}}>
      <div className="accordion-body">
        <strong>About TextUtils</strong> 
           here you can manupulate the text.
      </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"  style={{color: props.mode === 'light' ?'rgb(6 82 144)' :'white' , backgroundColor: props.mode === 'light' ?'white' :'rgb(6 82 144)'}}>
        Open Source :
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse"   aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={{ backgroundColor: props.mode === 'light' ?'white' :'#042743'}}>
      <div className="accordion-body" >
        <strong>Open Source</strong> Free to use <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header" id="headingThree">

      <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"  style={{color: props.mode === 'light' ?'rgb(6 82 144)' :'white' , backgroundColor: props.mode === 'light' ?'white' :'rgb(6 82 144)'}}>
        Accordion Item #3
      </button>

    </h2>

    <div id="collapseThree" style={{backgroundColor: props.mode === 'light' ?'white' :'#042743'}} className="accordion-collapse collapse"  aria-labelledby="headingThree" data-bs-parent="#accordionExample" >
      <div className="accordion-body"  >

        <strong>Services.</strong> 
          ----
        <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

