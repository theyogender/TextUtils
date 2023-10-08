import logo from "./logo.svg";

import "./App.css";
import Navbar from "./components/Navbar";
// import Text from "./components/Text";
import About from "./components/About";
let Name = "Sujai";
function App() {
  return (
    <>
     
        <div >
          <Navbar Title="YogenderS" textAbout="Text1" />
          {/* <Navbar /> */}
          <div className="container">
          <Text name="Yogender Bhai" />
        </div>
        </div>
        {/* <div className="container mp-3">
          <About />
        </div> */}
        
        
      
    </>
  );
}

export default App;
