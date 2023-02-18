import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>  
      <Navbar title = "Text Transformer" abouttext = "About Us"/>
      <div className="container my-4">
        <Textform head = "Enter the text: "/> 
      </div>
    </>
  );
}

export default App;
