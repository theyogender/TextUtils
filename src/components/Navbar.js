import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav class={`navbar navbar-expand-lg navbar-light bg-${props.mode}`}>
        <div className="container-fluid"  >
          <a className="navbar-brand " href="/" style={{'color':props.mode==='light'?'black':'white'}} >
            {props.Title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" style={{'color':props.mode==='light'?'black':'white'}}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" style={{'color':props.mode==='light'?'black':'white'}}>
                  {props.textAbout}
                </Link>
              </li>
              {/*  */}
            </ul>
          </div>
          <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.changebg}/>
          <label class="form-check-label" for="flexSwitchCheckDefault"  style={{'color':props.mode==='light'?'black':'white'}}>Dark Mode</label>
        </div>
        </div>
        
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  Title: PropTypes.string.isRequired,
  textAbout: PropTypes.string.isRequired,
};

// Navbar.defaultProps={
//   Title:"YogiG",
//   textAbout:"Price2"
// }
