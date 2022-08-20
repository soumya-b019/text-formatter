import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  // It tells the status whether Dark Mode is enabled or not
  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="TxtFormatter" aboutText="AboutTextUtils" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
      <TextForm heading="Try TxtFormatter - Modify text with few clicks !!" mode={mode}/>
      </div>
    </>
  );
}

export default App;
