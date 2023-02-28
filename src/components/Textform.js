import React, { useState } from 'react'

export default function Textform(props) {

  
  const[text, setText] = useState("");
  // text = "This is the new text"; //This is the wrong way to change the state 
  // setText("This is right way"); //This is right way of state 

    const handleUpclick = ()=>{
      // console.log("Uppercase was clicked");
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Text is in the Upper Case", 'success', 'primary')
    }

    const handleLowClick = () =>{
      // console.log("Lowecase Has been clicked");
      let newtext = text.toLowerCase();
      setText(newtext);
      props.showAlert("Text is in the Lower Case", 'success', 'danger')
    }

    const handleClearClick= ()=>{
      // console.log("Clear Text");
      let newText = ''
      setText(newText);
      props.showAlert("Text has been cleared", 'success', 'secondary')
    }

    const handleOnChange = (event)=>{
      // console.log("On Change");
      setText(event.target.value);
    }

    const handleCopy = ()=>{
      navigator.clipboard.writeText(text);
      props.showAlert("Text is copied. Check your clipboard", 'success', 'success')
    }

    const handleExtraSpace = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Text is in the right form", 'success', 'warning')
    }

  return (
    <>
      <div className = "container" style={{backgroundColor: props.mode === 'dark'? '#042743': 'white', color: props.mode === 'dark'?'white':'black'}}>
          <div className="mb-3">
              <h1>{props.head}</h1>
              {/* <label htmlFor="textBox" className="form-label">Chutiya ho aap </label> */}
              <textarea className="form-control" id="textBox" onChange={handleOnChange} value = {text} rows="10" style={{backgroundColor: props.mode==='dark'?'#154d76':'white', color:props.mode==='dark'?'white':'black'}}></textarea>
          </div>
          <button disabled = {text.length === 0} className="btn btn-primary my-2 mx-2" onClick = {handleUpclick}>Convert to Uppercase</button>
          <button disabled = {text.length === 0} className="btn btn-danger my-2 mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
          <button disabled = {text.length === 0} className="btn btn-secondary my-2 mx-2" onClick = {handleClearClick}>Clear Text</button>
          <button disabled = {text.length === 0} className="btn btn-success my-2 mx-2" onClick = {handleCopy}>Copy Text</button>
          <button disabled = {text.length === 0} className="btn btn-warning my-2 mx-2" onClick = {handleExtraSpace}>Remove Extra Text</button>
      </div>
      <div className="container" style = {{color: props.mode === 'dark'?'white':'black'}}>
        <h1>Your Text Summary :</h1>
        <p><b>{text.split(/\s+/).filter((element)=> {return element.length!==0}).length}</b> words and <b>{text.length}</b> characters</p>
        <p><b>{0.008 * text.split(" ").filter((element) => {return element.length!==0}).length}</b> minutes to read</p>
      </div>
    </>
  )
}
