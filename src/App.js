import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {

  const [mode, setMode] = useState("light");

  const toggleMode = () =>{
    if(mode === 'dark'){
      setMode("light");
      document.body.style.backgroundColor = 'white';
    }
    else{
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
    }
  }
  return (
    <>  
      <Navbar title = "Text Transformer" abouttext = "About Us" mode = {mode} toggleMode = {toggleMode}/>
      <div className="container my-4">
        <Textform head = "Enter the text: " mode = {mode}/> 
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
