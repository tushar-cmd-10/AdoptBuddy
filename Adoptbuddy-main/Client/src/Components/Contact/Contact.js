import React from "react";
import developerPng from "./images/developer-png.png";

const Contact = () => {
  return (
    <div className="contactUs-main-container">
      <div className="contactUs-left-para">
        <h3>Let's get in touch</h3>
        <i class="fa fa-envelope"></i>
        <a class="mail-links" href="mailto:tushardeshmukhh96k@gmail.com">
          tushardeshmukhh96k@gmail.com
        </a>

        <i class="fa fa-linkedin"></i>
        <a class="mail-links" href="https://www.linkedin.com/in/tushar-deshmukh96/">
          User Name: Tushar Deshmukh
        </a>

        <i class="fa fa-github"></i>
        <a class="mail-links" href="https://github.com/tushar-cmd-10">
          tushar-cmd-10
        </a>

        <i class="fa fa-instagram"></i>
        <a class="mail-links" href="https://www.instagram.com/tusharndeshmukh?igsh=MXB6eDNsdXZrYnJueg==">
          @tusharndeshmukh
        </a>

        <i class="fa fa-phone"></i>
        <a class="mail-links" href="tel:+917058209269">
          +91 7058209269
        </a>
      </div>
      <div className="contactUs-pic">
        <img src={developerPng} alt="Profile"/>
      </div>
    </div>
  );
};

export default Contact;
