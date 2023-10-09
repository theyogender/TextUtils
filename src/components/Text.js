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
         <h4  style={{'color':props.mode==='light'?'black':'white'}}>{props.name} enter Here </h4>
        </label>
        <textarea
          className="form-control "
          id="exampleFormControlTextarea1"
          value={text}
          onChange={onChange}
          rows="8"
          style={{'color':props.mode==='light'?'black':'white','backgroundColor':props.mode==='light'?'white':'#A9A9A9'}}
        ></textarea>
      </div>
       {/* <hr/> */}
      <div className="mb-3">
        <button className={`btn btn-outline-${props.mode=='light'?'primary':'dark'} mx-2`} onClick={onUpClick}  style={{'color':props.mode==='light'?'black':'white'}} >
          Change To Upper
        </button>
        <button className={`btn btn-outline-${props.mode=='light'?'primary':'dark'} mx-2`} onClick={onLoClick} style={{'color':props.mode==='light'?'black':'white'}} >
          Change To Lower
        </button>
      </div>

      <div className="container"  >
         <h2 style={{'color':props.mode==='light'?'black':'white'}}>Your Text Summary is :</h2>
         <p style={{'color':props.mode==='light'?'black':'white'}}>{text.split(" ").length} Words and {text.length} alphabets are there</p>
         
         <h3 style={{'color':props.mode==='light'?'black':'white'}}>Preview</h3>
        <p style={{'color':props.mode==='light'?'black':'white'}}>{text}</p>
        
        
      </div>
    </>
      //  <div className="container mx-3"></div>
  );
}
