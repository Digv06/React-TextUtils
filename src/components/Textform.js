import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpclick = ()=>{
      // console.log("Uppercase was clicked");
      let newText = text.toUpperCase();
      setText(newText);
    }

    const handleLowClick = () =>{
      // console.log("Lowecase Has been clicked");
      let newtext = text.toLowerCase();
      setText(newtext);
    }

    const handleClearClick= ()=>{
      // console.log("Clear Text");
      let newText = ''
      setText(newText);
    }

    const handleOnChange = (event)=>{
      // console.log("On Change");
      setText(event.target.value);
    }
    const[text, setText] = useState("Enter text here");
    // text = "This is the new text"; //This is the wrong way to change the state 
    // setText("This is right way"); //This is right way of state 
  return (
    <>
      <div className = "container">
          <div className="mb-3">
              <h1>{props.head}</h1>
              <label htmlFor="textBox" className="form-label">Chutiya ho aap </label>
              <textarea className="form-control" id="textBox" onChange={handleOnChange} value = {text} rows="10"></textarea>
          </div>
          <button className="btn btn-primary my-2 mx-2" onClick = {handleUpclick}>Convert to Uppercase</button>
          <button className="btn btn-danger my-2 mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
          <button className="btn btn-secondary my-2 mx-2" onClick = {handleClearClick}>Clear Text</button>
          <button className="btn btn-success my-2 mx-2">Copy Text</button>
          <button className="btn btn-warning my-2 mx-2">Remove Extra Text</button>
      </div>
      <div className="container">
        <h1>Your Text Summary :</h1>
        <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
        <p><b>{0.008 * text.split(" ").length}</b> minutes to read</p>
      </div>
    </>
  )
}
