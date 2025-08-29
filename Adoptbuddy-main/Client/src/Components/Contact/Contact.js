import React from "react";
import developerPng from "./images/developer-png.png";

const Contact = () => {
  return (
    <div className="contactUs-main-container">
      <div className="contactUs-left-para">
        <h3>Let's get in touch</h3>
        <i class="fa fa-envelope"></i>
        <a class="mail-links" href="mailto:ketanpathade7@gmail.com">
          ketanpathade7@gmail.com
        </a>

        <i class="fa fa-linkedin"></i>
        <a class="mail-links" href="https://www.linkedin.com/in/ketan-pathade/">
          User Name: Ketan-Pathade
        </a>

        <i class="fa fa-github"></i>
        <a class="mail-links" href="https://github.com/Ketan-cmd">
          Ketan-cmd
        </a>

        <i class="fa fa-instagram"></i>
        <a class="mail-links" href="https://www.instagram.com/_ketan_302_">
          @_ketan_302_
        </a>

        <i class="fa fa-phone"></i>
        <a class="mail-links" href="tel:+919404304871">
          +91 9404304871
        </a>
      </div>
      <div className="contactUs-pic">
        <img src={developerPng} alt="Profile"/>
      </div>
    </div>
  );
};

export default Contact;
