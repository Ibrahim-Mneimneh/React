import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";
function Home() {
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
      <div className="navbar">
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
      <div className="text1">
        <h1 id="title1">Marketing Software</h1>
        <h3 id="sub-title1">Stop interrupting. Start connecting.</h3>
        <button>Learn More</button>
      </div>

      <div className="text2">
        <h1 id="title2">CRM Software</h1>
        <h3 id="sub-title2">Close more deals with less work.</h3>
        <button>Learn More</button>
      </div>
      <div className="text3">
        <h1 id="title2">Sales Software</h1>
        <h3 id="sub-title2">Stop cold calling. Start closing.</h3>
        <button>Learn More</button>
      </div>
    </div>
  );
}

export default Home;
