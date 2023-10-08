import React, { useState } from "react"; //React Finction based component "rfc"

export default function Textform(props) {
  let onChange = (event) => {
    setText(event.target.value);
  };

  let onUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    // console.log(text);
  };

  let onLoClick=()=>{
    let newtext=text.toLowerCase();
    setText(newtext);
  }
  

  
  const [text, setText] = useState('');
  return (
    <>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
         <h4>{props.name} enter Here </h4>
        </label>
        <textarea
          className="form-control "
          id="exampleFormControlTextarea1"
          value={text}
          onChange={onChange}
          rows="8"
        ></textarea>
      </div>
       {/* <hr/> */}
      <div className="mb-3">
        <button className="btn btn-outline-success mx-2" onClick={onUpClick} >
          Change To Upper
        </button>
        <button className="btn btn-outline-danger " onClick={onLoClick} >
          Change To Lower
        </button>
      </div>

      <div className="container">
         <h2>Your Text Summary is :</h2>
         <p>{text.split(" ").length} Words and {text.length} alphabets are there</p>
         
         <h3>Preview</h3>
        <p>{text}</p>
        
        
      </div>
    </>
      //  <div className="container mx-3"></div>
  );
}
