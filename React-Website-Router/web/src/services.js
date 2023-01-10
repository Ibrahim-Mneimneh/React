import React from "react";
import { useNavigate } from "react-router-dom";
import "./services.css";
function Services() {
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
    <div className="page2">
      <div className="navbar2">
        <img
          id="logo2"
          src="https://cdn-icons-png.flaticon.com/128/1051/1051275.png"
          alt="No pic"
        ></img>
        <ul>
          <li onClick={navHome}>Home</li>
          <li onClick={navServices}>Services</li>
          <li onClick={navContact}>Contact us</li>
        </ul>
      </div>
      <div className="services">
        <header id="services-title">
          Professional Software Development Services
        </header>
        <p>
          We are reliable and affordable digital agency and talent network. We
          channel productivity.
        </p>
        <p>We code for better Branding.</p>
        <div className="services-op">
          <div className="op-box">
            <img
              id="pic101"
              src="https://cdn-icons-png.flaticon.com/128/6313/6313287.png"
              alt="no-pic"
            ></img>
            <header className="op">Branding</header>
          </div>
          <div className="op-box">
            <img
              id="pic101"
              src="https://cdn-icons-png.flaticon.com/128/8261/8261091.png"
              alt="no-pic"
            ></img>
            <header className="op">Quality</header>
          </div>
          <div className="op-box">
            <img
              id="pic101"
              src="https://cdn-icons-png.flaticon.com/128/1117/1117008.png"
              alt="no-pic"
            ></img>
            <header className="op">Design</header>
          </div>
          <div className="op-box">
            <img
              id="pic101"
              src="https://cdn-icons.flaticon.com/png/128/5342/premium/5342625.png?token=exp=1661263265~hmac=2c7037204a19bec0821cd1932c837355"
              alt="no-pic"
            ></img>
            <header className="op">Productivity</header>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
