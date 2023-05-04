import React, {useState} from 'react';
import './App.css';
import DisplayColor from './components/DisplayColor';
import Form from './components/Form'; 

function App() {
  const [currentColor, setCurrentColor] = useState([]);

  const colorBlock = ( newColor ) => {
    setCurrentColor( newColor );
  }

  return (
    <div className="App">
      <Form currentColor={currentColor} setColorList= {setCurrentColor}/>
      <DisplayColor currentColor= {currentColor}/>
    </div>
  );
}

export default App;
