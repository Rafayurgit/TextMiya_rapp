import React, {useState} from "react";

export default function TextForm(props) {
    const handleUpClick =()=> {
        //console.log("Uppercase was clicked"+ text);
        let newText =text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase!", "success");
    }
    const handleOnChange =(event)=>{
        //console.log("On change");
        setText(event.target.value);
    }

    //for Lowercase Div
    const handlelowClick =()=>{
      let newText =text.toLowerCase();
      setText(newText)
      props.showAlert("converted to uppercase!", "success");
    }

    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces removed!", "success");
  }

   //for clearing text
    const handleclrClick =()=>{
      let newText ="";
      setText(newText)
      props.showAlert("Text CLEARED!!!");
    }

    const [text,setText]= useState('Enter Text Here');
  return (
    <>
    <div className="fiestdiv"  style={{color:props.Mode==='dark'?'white':'042743'}}>
      <h1>{props.heading} </h1>
      
      <div className="container  mb-3"   >
      <textarea className="form-control " value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#292F33':'white', color: props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8" ></textarea>
      </div  >
 
        <div className="text-center">
            <button className="btn btn-primary mx-3 my-3" onClick={handleUpClick}>UpperCase</button>
            <button className="btn btn-primary mx-3 my-3" onClick={handlelowClick}>LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

            <button className="btn btn-primary btn-right mx-3 my-3" onClick={handleclrClick}>Clear ❌</button>

        </div>

            

    </div>
    <div className="container my-3 text-center" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
    </>
  )
}
