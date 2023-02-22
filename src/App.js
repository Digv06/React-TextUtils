import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type, atype) =>{
    setAlert({
      msg : message,
      type : type,
      atype: atype
    }) 
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const toggleMode = () =>{
    if(mode === 'dark'){
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled",'success', 'success');
    }
    else{
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", 'success', 'success');
    }
  }
  return (
    <>  
      <Navbar title = "Text Transformer" abouttext = "About Us" mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container my-4">
        <Textform showAlert = {showAlert} head = "Enter the text: " mode = {mode}/> 
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
