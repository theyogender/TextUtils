// import logo from "./logo.svg";

import "./App.css";
import Navbar from "./components/Navbar";
import Text from "./components/Text";
import Alert from "./components/Alert";
import React, { useState } from "react";
import About from "./components/About";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
  
} from "react-router-dom"



function App() {

  const [mode, setMode] = useState('light');
  const [alert, Setalert] = useState('null');
  let showalert = (msg, type) => {
    Setalert({
      message: msg,
      typ: type
    })

    setTimeout(() => {
      Setalert('null')
    }, 1500)

  }
  let chgbg = () => {
    if (mode === 'light') {
      setMode('black')
      document.body.style.backgroundColor = '#2F4F4F';
      showalert('Dark mode Enabled', 'danger')
      document.title = 'Gujjar Edits'

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert('Light mode Enabled', 'info')
    }
  }
  return (

    <><Router future={{ v7_startTransition: true }}>
      <Navbar Title="YogenderS" textAbout="Text1" mode={mode} changebg={chgbg} />
      <Alert alert={alert} />

      <div className="container">
       <Routes>
          <Route path="/"   element={<Text name="Yogender Bhai" mode={mode} alert={alert} alert1={showalert} />} />
          <Route path="/about"   element={<About />} />
         </Routes>
      </div>
    </Router>


    </>
  );
}

export default App;
