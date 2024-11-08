import React from "react";
import "./Footer.css";
import PARTNERLOGO from "./Components/Home/partnerlogo2 (1).svg";

const Footer = () => {
  return (
    <section className="sec6">
      <div className="search_con">
        <h1>Subscribe to our Newsletter!</h1>
        <br />
        <div className="search_bar">
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter Your Business Email"
          />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="footcon">
        <div className="foot1">
          <div className="f_img">
            <img
              src="https://www.testyantraglobal.com/images/partnerlogo2.svg"
              alt=""
            />
          </div>
          <p>
            Test Yantra Global is an Exclusive Platinum Partner of FireFlink.
          </p>
          <br />
          <p>Let's get socially connected...</p>
          <br />
          <div className="icons">
            <span>
              <i class="fa-brands fa-linkedin"></i>
            </span>
            <span>
              <i class="fa-brands fa-youtube"></i>
            </span>
            <span>
              <i class="fa-brands fa-square-twitter"></i>
            </span>
            <span>
              <i class="fa-brands fa-square-facebook"></i>
            </span>
            <span>
              <i class="fa-brands fa-instagram"></i>
            </span>
          </div>
        </div>
        <div className="foot1 f1">
          <div className="f2_con">
            <h1>Services</h1>
            <div className="line"></div>
            <p>Software Testing (TaaS)</p>
            <p>Software Development</p>
            <p>Skills Enhancement</p>
            <p>IT Consulting</p>
            <p>Crowd Testing</p>
          </div>
        </div>
        <div className="foot1 f2">
          <div className="f2_con">
            <h1>Quick Links</h1>
            <div className="line"></div>
            <p>About Us</p>
            <p>Fireflink</p>
            <p>Article</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="foot1 f3">
          <div className="f2_con">
            <h1>Contacts</h1>
            <div className="line"></div>
            <p>Address:120 Adelaide Street</p>
            <p>Wast,</p>
            <p>Suite 2500, Toronto, ON, M5H 1T1, Canada.</p>
            <p>Email:hello@testyantraglobal.com</p>
            <p>Phone:1800 572 7905</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
