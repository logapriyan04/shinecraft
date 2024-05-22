import React from "react";
import Iconimgae from "../Assests/images/icon_post.svg";
import Image1 from "../Assests/images/Project1.jpg";
function Portfolio() {
  return (
    <div className="Portfolio">
      <div className="Block-content-2">
        <div class="portfolio-num">
          <span>03</span>

          <h2 class="portfolio-title">Portfolio</h2>
        </div>
        <div className="Portfolio-images"></div>
        {/* <div
          class="grid-item element-item p_one_half"
          style={{ position: "absolute", left: "0px", top: "400px" }}
        >
          <img src={Image1} alt="" className="Project1"></img>

          <div class="portfolio-text-holder" style={{ display: "none" }}>
            <div class="portfolio-text-wrapper" style={{ marginTop: "100px" }}>
              <p class="portfolio-type">
                <img src={Iconimgae} alt=""></img>
              </p>
              <p class="portfolio-text">PSD MOCKUP</p>
              <p class="portfolio-sec-text">Smart Watch</p>
            </div> */}
      </div>
    </div>
  );
}
export default Portfolio;
