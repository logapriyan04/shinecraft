import React from "react";
function Contact() {
  return (
    <div className="Contact">
      <div className="Block-content-4">
        <div class="Contact-num">
          <span>05</span>

          <h2 class="Contact-title">CONTACT</h2>
        </div>
        <div className="contact-content-holder">
          <div class="contact-content-wrapper">
            <div class="one_half ">
              <p>
                Consectetur adipisicing elit sed eiusmod tempor incididunt ut
                dolore magna labore eiusmod. Lorem ipsum dolor sit amet
                consectetur est adipisicing elit, sed do eiusmod tempor.
              </p>
              <br></br>
              <p>
                <strong>
                  <span style={{ color: "#e64b77" }}>Incididunt ut dolore</span>
                </strong>{" "}
                magna labore eiusmod. Dolor sit amet consectetur est adipisicing
                elit, sed do eiusmod.
              </p>
            </div>
            <div class="one_half last">
              <div class="contact-form">
                <p>
                  <input
                    id="name"
                    type="text"
                    name="your-name"
                    placeholder="Name"
                  ></input>
                </p>
                <p>
                  <input
                    id="contact-email"
                    type="email"
                    name="your-email"
                    placeholder="Email"
                  ></input>
                </p>
                <p>
                  <input
                    id="subject"
                    type="text"
                    name="your-subject"
                    placeholder="Subject"
                  ></input>
                </p>
                <p>
                  <textarea
                    id="message"
                    name="your-message"
                    placeholder="Message"
                  ></textarea>
                </p>
                <p>
                  <input
                    type="submit"
                    onclick="SendMail()"
                    value="SEND"
                    placeholder=""
                  ></input>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3903.4821703077987!2d79.836468!3d11.941081999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDU2JzI3LjkiTiA3OcKwNTAnMTEuMyJF!5e0!3m2!1sen!2sin!4v1716347800148!5m2!1sen!2sin"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
export default Contact;
