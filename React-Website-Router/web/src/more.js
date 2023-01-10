import React from "react";
import { useNavigate } from "react-router-dom";
import "./home";
function More() {
  const navigate = useNavigate();
  const navHome = () => {
    navigate("/home");
  };
  const navServices = () => {
    navigate("/services");
  };
  const navContact = () => {
    navigate("/contact");
  };
  return (
    <div className="page">
      <div className="navbar" style={{}}>
        <img
          id="logo"
          src="https://cdn-icons-png.flaticon.com/128/1051/1051275.png"
          alt="No pic"
        ></img>
        <ul>
          <li onClick={navHome}>Home</li>
          <li onClick={navServices}>Services</li>
          <li onClick={navContact}>Contact us</li>
        </ul>
      </div>
      <div className="contact-us-info">
        <header id="contact-title">Contact Us</header>
        <hr></hr>
        <p>
          Feel free to get in touch with our team. We're always open to
          discussing new projects, ideas and visions.
        </p>
      </div>
      <div className="contact-us">
        <input type="text" placeholder="Enter your name"></input>
        <input type="email" placeholder="Enter your email"></input>
        <input
          type="text"
          placeholder="Enter your message"
          id="message"
        ></input>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default More;
