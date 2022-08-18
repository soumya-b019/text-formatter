import './App.css';
import React, {useState} from 'react'
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import Alert from './components/Alert'; 
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";

function App() {
  // It tells the status whether Dark Mode is enabled or not
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState('Light mode has been enabled');

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(()=>{
      setAlert(null);
    }, 2000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils-DarkMode';
      // setTimeout(()=>{
      //   document.title = 'TextUtils is Amazing';
      // }, 2000);

      // setTimeout(()=>{
      //   document.title = 'Bookmark TextUtils Now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils-LightMode';
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="TxtFormatter" aboutText="AboutTextUtils" mode={mode} toggleMode={toggleMode}/>
        {/* Here default props will be used as we have not passed any props */}
        {/* <Navbar /> */}
        {/* <Alert alert={alert} /> */}
        <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text here to analyze below" mode={mode}/>
          {/* <Routes> */}
            {/* Here, exact keyword is used taaki jab hamara path exact match ho tabhi react hume us link pr jaega otherwise it won't */}
              {/* <Route exact path="/about" element={<About />} /> */}
              {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text here to analyze below" mode={mode}/>} /> */}
            {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
