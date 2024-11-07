import React from "react";
import "./Footer.css";
import PARTNERLOGO from "./Components/Home/partnerlogo2 (1).svg";

const Footer = () => {
  return (
    <div className="footer_container">
      <footer className="footer-area">
        <div className="container_footer">
          <div className="subscribe_container">
            <div className="ai-subscribe-content">
              <h2>Subscribe to our Newsletter!</h2>
              <form>
                <div className="input_btn">
                  <input
                    type="text"
                    placeholder="Enter Your Business Email"
                    className="subscribe_input"
                  />
                  <button type="submit" className="subscibe_btn">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="content-container">
            <div className="logo-container">
              <div className="all-container">
                <div>
                  <img src={PARTNERLOGO} alt="partnerlogo" />
                </div>
                <div>
                  <p>
                    Test Yantra Global is an Exclusive Platinum Partner of
                    FireFlink.
                  </p>
                </div>
                <div>
                  <p>Let's get socially connected...</p>
                </div>
              </div>
            </div>
            <div className="container_all">
              <div className="logo-container">
                <div className="service-container">
                  <div>
                    <h2>Services</h2>
                  </div>
                  <div>
                    <ul>
                      <li>Software Testing (TaaS)</li>
                      <li>Software Development</li>
                      <li>Skills Enhancement</li>
                      <li>IT consultant</li>
                      <li>Crowd Testing</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="logo-container">
                <div className="quick-link">
                  <div>
                    <h2>Quick Links</h2>
                  </div>
                  <div>
                    <ul>
                      <li>About Us</li>
                      <li>FireFlink</li>
                      <li>Article</li>
                      <li>Contact</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="logo-container">
                <div className="contacts-container">
                  <div>
                    <h2>Contacts</h2>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <b>Address:120</b> Adelaide Street West,
                      </li>
                      <li>Suite 2500, Toronto, ON, M5H 1T1, Canada.</li>
                      <li>
                        <b>Email:</b>hello@testyantraglobal.com
                      </li>
                      <li>
                        <b>Phone:</b>1800 572 7905
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
