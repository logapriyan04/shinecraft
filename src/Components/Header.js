import React from "react";
import logoTop from "../Assests/images/logo.png";
import logoRight from "../Assests/images/name1.png";
import logoLeft from "../Assests/images/name2.png";
function Header() {
  return (
    <div className="Top-Header">
      <div className="Left-navbar">
        <div className="logo-Header">
          <img src={logoTop} alt="Logo" className="logo-top" />
        </div>
        <div className="logo-Name">
          <img src={logoRight} alt="logoRight" className="logo-RightName" />
          <img src={logoLeft} alt="logoleft" className="logo-LeftName" />
        </div>
      </div>
      <div className="Nav-bar">
        <div class="mob-menu">MENU</div>
        <ul class="Right-navbar" data-smartmenus-id="17161767969297773">
          <li class="active">
            <a href="#home">Home</a>
          </li>
          <li class="">
            <a href="#about">About</a>
          </li>
          <li class="">
            <a href="#services">Services</a>
          </li>
          <li class="">
            <a href="#portfolio">Portfolio</a>
          </li>

          <li class="">
            <a href="#video">Video</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
