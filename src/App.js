import logo from "./logo.svg";

import "./App.css";
import Navbar from "./components/Navbar";
import Text from "./components/Text";
import React, { useState } from "react";
// import About from "./components/About";


let Name = "Sujai";
function App() {

  const [mode, setMode] = useState('light');
  let chgbg = () => {
    if (mode === 'light') {
      setMode('black')
      document.body.style.backgroundColor = '#A9A9A9';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>

      <div >
        <Navbar Title="YogenderS" textAbout="Text1" mode={mode} changebg={chgbg} />
        {/* <Navbar /> */}
        <div className="container">
          <Text name="Yogender Bhai" mode={mode} changebg={chgbg} />
        </div>
      </div>
      

    </>
  );
}

export default App;
