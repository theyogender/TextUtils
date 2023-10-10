import logo from "./logo.svg";

import "./App.css";
import Navbar from "./components/Navbar";
import Text from "./components/Text";
import Alert from "./components/Alert";
import React, { useState } from "react";
// import About from "./components/About";



function App() {

  const [mode, setMode] = useState('light');
  const [alert, Setalert] = useState('null');
  let showalert = (msg, type) => {
    Setalert({
      message: msg,
      typ: type
    })

    setTimeout(()=>{
       Setalert('null')
    },1500)

  }
  let chgbg = () => {
    if (mode === 'light') {
      setMode('black')
      document.body.style.backgroundColor = '#2F4F4F';
      showalert('Dark mode Enabled','danger')

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert('Light mode Enabled','info')
    }
  }
  return (
    <>

      <div >
        <Navbar Title="YogenderS" textAbout="Text1" mode={mode} changebg={chgbg} />
        <Alert alert={alert} />
        {/* <Navbar /> */}
        <div className="container">
          <Text name="Yogender Bhai" mode={mode}  alert={alert} alert1={showalert} />
        </div>
      </div>


    </>
  );
}

export default App;
