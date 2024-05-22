import React, { useState } from "react";
import Icons from "../Assests/images/icon_01.png";
import Icons1 from "../Assests/images/icon_02 (1).png";
import Icons2 from "../Assests/images/icon_03.png";
import Icons3 from "../Assests/images/icon_04.png";
import NextIcon from "../Assests/images/navigation_arrows_right.svg";

function Services() {
  const [nextPage, setNextPage] = useState(false);
  return (
    <div className="Services">
      <div className="Block-content">
        <div
          class="section-title-holder left is_stuck"
          style={{ position: "sticky", top: "74px", width: "370px" }}
        >
          <div className="Services-num">
            <span>01</span>
            <h2 className="Services-title">Services</h2>
          </div>
        </div>
        <div class="section-content-holder right">
          <div class="content-wrapper">
            <img
              src={NextIcon}
              alt="Next Icon"
              onClick={() => setNextPage(!nextPage)}
            />
            <div class="image-slider-wrapper relative service slider1">
              <div
                class="caroufredsel_wrapper"
                style={{
                  display: "block",
                  textAlign: "start",
                  float: "none",
                  position: "relative",
                  inset: "auto",
                  Zindex: "auto",
                  width: "680px",
                  height: "390px",
                  margin: "0px",
                  overflow: "hidden",
                  cursor: "move",
                }}
              >
                <ul
                  id="slider1"
                  class="image-slider slides"
                  style={{
                    textAlign: "left",
                    float: "none",
                    position: "absolute",
                    inset: "0px auto auto 0px",
                    margin: "0px",
                    width: "3400px",
                    height: "390px",
                  }}
                >
                  {!nextPage ? (
                    <li style={{ width: "680px" }}>
                      <div class="service-holder ">
                        <img src={Icons} alt=""></img>
                        <div class="service-content-holder">
                          <div class="service-title">BRANDING</div>
                          <div class="service-content">
                            Donecos arem ipsum sit amet consectetur adipisicing
                            elit sed eiusmod tempor incididunt ut donecos dolore
                            ipsum temporest.<br></br>
                          </div>
                        </div>
                      </div>
                      <div class="service-holder ">
                        <img src={Icons1} alt=""></img>
                        <div class="service-content-holder">
                          <div class="service-title">MOBILE APPS</div>
                          <div class="service-content">
                            Disum lorem sit amet consectetur adipisicing elit
                            sed eiusmod tempor incididunt ut donecos dolore
                            ipsum temporest.<br></br>
                          </div>
                        </div>
                      </div>
                      <div class="service-holder ">
                        <img src={Icons2} alt=""></img>
                        <div class="service-content-holder">
                          <div class="service-title">WEB</div>
                          <div class="service-content">
                            Polor sit amet consectetur adipisicing elit sed
                            eiusmod tempor incididunt ut dolore magna labore
                            eiusmod.<br></br>
                          </div>
                        </div>
                      </div>
                      <div class="service-holder ">
                        <img src={Icons3} alt=""></img>
                        <div class="service-content-holder">
                          <div class="service-title">GRAPHIC</div>
                          <div class="service-content">
                            Cadipisicing elit sed eiusmod tempor incididunt ut
                            labore lorem ipsum dolor sit amet consectetur lorem
                            ipsum dolor sit amet.<br></br>
                          </div>
                        </div>
                      </div>
                    </li>
                  ) : (
                    <li style={{ width: "680px" }}>
                      <div class="service-holder ">
                        <img src={Icons} alt=""></img>
                        <div class="service-content-holder">
                          <div class="service-title">SERVICES</div>
                          <div class="service-content">
                            Donecos arem ipsum sit amet consectetur adipisicing
                            elit sed eiusmod tempor incididunt ut donecos dolore
                            ipsum temporest.<br></br>
                          </div>
                        </div>
                      </div>
                      <div class="service-holder ">
                        <img src={Icons} alt=""></img>
                        <div class="service-content-holder">
                          <div class="service-title">PSD</div>
                          <div class="service-content">
                            Disum lorem sit amet consectetur adipisicing elit
                            sed eiusmod tempor incididunt ut donecos dolore
                            ipsum temporest.<br></br>
                          </div>
                        </div>
                      </div>
                      <div class="service-holder ">
                        <img src={Icons} alt=""></img>
                        <div class="service-content-holder">
                          <div class="service-title">HTML</div>
                          <div class="service-content">
                            Polor sit amet consectetur adipisicing elit sed
                            eiusmod tempor incididunt ut dolore magna labore
                            eiusmod.<br></br>
                          </div>
                        </div>
                      </div>
                      <div class="service-holder ">
                        <img src={Icons} alt=""></img>
                        <div class="service-content-holder">
                          <div class="service-title">PHP</div>
                          <div class="service-content">
                            Cadipisicing elit sed eiusmod tempor incididunt ut
                            labore lorem ipsum dolor sit amet consectetur lorem
                            ipsum dolor sit amet.<br></br>
                          </div>
                        </div>
                      </div>
                    </li>
                  )}
                </ul>
              </div>
              <div class="clear"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
