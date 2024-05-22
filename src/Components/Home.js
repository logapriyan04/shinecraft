import React from "react";
// import topLogo from "../Assests/images/logo.png";
import logoRight from "../Assests/images/name1.png";
import logoLeft from "../Assests/images/name2.png";
function Home() {
  return (
    <div id="home" class="section intro-page">
      <div class="block content-1170 center-relative center-text">
        <div className="logo-images">
          {/* <img class="top-logo" src={topLogo} alt="topLogo"></img> */}
          <div className="Namelogo">
            {/* <img src={logoRight} alt="logoRight" className="logo-Right" />
            <img src={logoLeft} alt="logoleft" className="logo-Left" /> */}
          </div>
        </div>
        <br></br>
        <h1 class="big-title">
          We Craft Awesome Web And<br></br>
          <span>Graphic Design Solutions</span>
        </h1>
        <p class="title-desc">
          Support bright students today for a better tomorrow
        </p>
      </div>
    </div>
  );
}
export default Home;
