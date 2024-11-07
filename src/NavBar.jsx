import React, { useEffect, useState } from "react";
import LOGO from "./testyantralogo.jpeg";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { FaChevronDown } from "react-icons/fa";

const NavBar = () => {
  const [serviceHover, setServiceHover] = useState(false);
  const [activeRoute, setActiveRoute] = useState("home");
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(()=>{
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsNavbarVisible(false);
      } else if (currentScrollY <= lastScrollY) {
        setIsNavbarVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY])

  return (
    
    <div className={`container ${isNavbarVisible ? "navbar-visible" : "navbar-hidden"}`}>
      <div className="img_containers">
        <img src={LOGO} alt="logo" />
      </div>
      <div className="list_btn">
        <ul>
          <li>
            <Link
              to="/"
              onClick={() => setActiveRoute("home")}
              className={activeRoute === "home" ? "home-active" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/service"
              onClick={() => setActiveRoute("service")}
              className={activeRoute === "service" ? "service-active" : ""}
            >
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
            <Link
              to="/partners"
              onClick={() => setActiveRoute("partners")}
              className={activeRoute === "partners" ? "partner-active" : ""}
            >
              Partners
            </Link>
          </li>
          <li>
            <Link
              to="/articles"
              onClick={() => setActiveRoute("article")}
              className={activeRoute === "article" ? "active-article" : ""}
            >
              Articles
            </Link>
          </li>
          <li>
            <Link
              to="/touch"
              onClick={() => setActiveRoute("touch")}
              className={activeRoute === "touch" ? "active-touch" : ""}
            >
              <button className="btn_get">Get in Touch</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
