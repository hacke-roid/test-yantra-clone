import React, { useState } from "react";
import LOGO from "./testyantralogo.jpeg";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { FaChevronDown } from "react-icons/fa";

const NavBar = () => {
  const [serviceHover, setServiceHover] = useState(false);

  return (
    <div className="container">
      <div className="img_containers">
        <img src={LOGO} alt="logo" />
      </div>
      <div className="list_btn">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/service">
              <div
                className="dropdown-container"
                onMouseEnter={() => {
                  setServiceHover(true);
                }}
                onMouseLeave={() => {
                  setServiceHover(false);
                }}
              >
                <div className="dropdown-button">
                  <span>Service</span>{" "}
                  <FaChevronDown style={{ paddingTop: "6px" }} />
                </div>
                {serviceHover && (
                  <div className="dropdown-options">
                    <div className="dropdown-option">
                      Software Testing (TAAS)
                    </div>
                    <div className="dropdown-option">Software Development</div>
                    <div className="dropdown-option">Skill Enhancement</div>
                    <div className="dropdown-option">IT consultant</div>
                    <div className="dropdown-option">Crowd Testing</div>
                  </div>
                )}
              </div>
            </Link>
          </li>
          <li>
            <Link to="/partners">Partners</Link>
          </li>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
          <li>
            <Link to="/touch">
              <button className="btn_get">Get in Touch</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
