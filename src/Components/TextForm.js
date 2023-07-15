import React,{useState} from 'react'

export default function TextForm(props) {
  const [text,setText]=useState("Enter text here");

  // change update text
   const onchange=(event)=>{
     
        setText(event.target.value);
   }

   // covert UpperCase
   const upperCase=()=>{
    let newText=text;
    newText=newText.toUpperCase();
      setText(newText);

}

   // covert LowerCase
const LowerCase=()=>{
  let newText=text;
  newText=newText.toLowerCase();
    setText(newText);

}

// clear text
const clearText=()=>{

    setText(" ");

}

// screen-shot 
const downloadText=()=>{
           
        window.print(text);
}

// remove extra space
const removeSpace=()=>{
// /s white space remove
  const val=text.split(/\s+/);
  setText(val.join(" ").trim());

}

const downloadFile = () => {
  const link = document.createElement("a");
  const content = text;
  const file = new Blob([content], { type: 'text/plain' });
  link.href = URL.createObjectURL(file);
  link.download = "sample.txt";
  link.click();
  URL.revokeObjectURL(link.href);
};
  return (
    <>
    <div className='container'style={{color: props.mode === 'light' ?'#042743' :'white' , backgroundColor: props.mode === 'light' ?'white' :'#042743'}}>
        <div className="mb-2">
        <label htmlFor="myBox" className="form-label my-3"><h4 >{props.heading} : </h4></label>

        {/* { javaScript{ object}} */}
        <textarea className="form-control " id="myBox" rows="3" value={text} onChange={onchange} style={{color: props.mode === 'light' ?'#042743' :'white' , backgroundColor: props.mode === 'light' ?'white' :'#042743'}}></textarea>
        </div>

        <button className=' btn btn-primary me-3 my-1' onClick={upperCase}>convert to Uppercase</button>
   
        <button className='btn btn-primary me-3 my-1' onClick={LowerCase}>convert to LowerCase</button>

        <button className='btn btn-primary mx-3 my-1' onClick={clearText}>clearText</button>

        <button className='btn btn-primary  my-1 me-3' onClick={downloadFile}>DownloadText</button>

        <button className='btn btn-primary my-1 me-3' onClick={downloadText}>ScreenShot</button>

        <button className='btn btn-primary mz-1' onClick={removeSpace}>Remove Extra Space</button>

   

    <div className='container my-2'>
     <h1> WordCounter : </h1>

      <p>{  text.split(" ").length + " Word and"}   {text.length+" characters"}
      </p>

      <p>
        {text.split(" ").length * 0.008} Minutes read OR {text.split(" ").length * 0.008 *60} second
      </p>
      <h2>Preview content :</h2>
      <p>{text}</p>
    </div>
    </div>
    </>
  )
}
