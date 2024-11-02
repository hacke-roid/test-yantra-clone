import React, { useEffect, useState } from "react";
import "./HomeModule.css";
import { FaArrowRight } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Slider1 from "./image1.png";
import Slider2 from "./image2.png";
import Slider3 from "./image3.png";
import Logo1 from "./logo1.webp";
import Logo2 from "./logo2.webp";
import Logo3 from "./logo3.webp";
import Logo4 from "./logo4.webp";
import Logo5 from "./logo5.webp";
import VideoThumbnail from "./video-thumbnail5.png";
import TypingEffect from "./TypingEffect";
import Location from "./location.webp";
import ClientGlobals from "./ClientAcrossGlobe.webp";
import TotalTeam from "./TeamMembers.webp";
import Demand from "./OnDemandEngineers.webp";

const Home = () => {
  const [isEnter1, setIsEnter] = useState(false);
  const [isEnter2, setIsEnter2] = useState(false);
  const [isEnter3, setIsEnter3] = useState(false);
  const [isEnter4, setIsEnter4] = useState(false);
  const [isEnter5, setIsEnter5] = useState(false);
  const [showImage, setShowImage] = useState(true);
  const [countryValue, setCountryValue] = useState(0);
  const [clientValue, setClientValue] = useState(0);
  const [TeamMembers, setTeamMembers] = useState(0);
  const [demand, setDemand] = useState(0);
  const [isEnterBox, setIsEnterBox] = useState(false);
  const [isEnterBox2, setIsEnterBox2] = useState(false);
  const [isEnterBox3, setIsEnterBox3] = useState(false);
  const [isEnterBox4, setIsEnterBox4] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountryValue((prevValue) => {
        if (prevValue < 6) {
          return prevValue + 1;
        } else {
          clearInterval(intervalId); // Stop the interval once it reaches 6
          return prevValue;
        }
      });
    }, 50);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId2 = setInterval(() => {
      setClientValue((prevValue) => {
        if (prevValue < 3000) {
          return prevValue + 1;
        } else {
          clearInterval(intervalId2); // Stop the interval once it reaches 4
          return prevValue;
        }
      });
    }, 0.01);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId2);
  });

  useEffect(() => {
    const intervalId3 = setInterval(() => {
      setTeamMembers((prevValue) => {
        if (prevValue < 5000) {
          return prevValue + 1;
        } else {
          clearInterval(intervalId3); // Stop the interval once it reaches 1000
          return prevValue;
        }
      });
    }, 0.00000000001);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId3);
  });

  useEffect(() => {
    const intervalId4 = setInterval(() => {
      setDemand((prevValue) => {
        if (prevValue < 7000) {
          return prevValue + 1;
        } else {
          clearInterval(intervalId4); // Stop the interval once it reaches 1000
          return prevValue;
        }
      });
    }, 0.00000000001);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId4);
  });

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
  };

  const handleThumbnailClick = () => {
    setShowImage(!showImage);
  };

  const sentence = [
    "Unify Web, Mobile, API, and DB Testing..|",
    "Achieve Digital Transformation..",
    "Drive AI Automation Testing..|",
    "Access 1,000s of expert Test Engineers..|",
  ];
  return (
    <div className="home_container">
      <div className="container-fluid">
        <div className="Info_container">
          <div className="row1">
            <h2>With Test Yantra Global</h2>
            <div>
              <div className="App">
                <TypingEffect texts={sentence} />
              </div>
            </div>
            <p>
              Test Yantra Global's 5,000+ employees provide a range of
              innovative technology solutions to digitally transform your
              organization.
            </p>
            <p>
              From IT consulting, application design and development, to
              automated AI enabled test management platform that unifies web,
              android, iOS, API, and DB testing, we have the expertise,
              technology, experience, and tools to help transform your business.
            </p>
            <div className="btn_started_container">
              <button className="btn_started">
                Get Started Free <FaArrowRight className="arrow" />
              </button>
            </div>
          </div>
        </div>
        <div className="background_container">
          <div className="row2">
            <Slider {...settings}>
              <div>
                <img src={Slider1} alt="slider" className="slider-image" />
              </div>
              <div>
                <img src={Slider2} alt="slider" className="slider-image" />
              </div>
              <div>
                <img src={Slider3} alt="slider" className="slider-image" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <section className="service_area">
        <div className="service_container">
          <div className="heading_container">
            <h1>
              Leverage Test Yantra Global's range
              <br />
              of Professional Services
            </h1>
          </div>

          <div className="box_container">
            <div
              id="box1"
              onMouseEnter={() => setIsEnter(true)}
              onMouseLeave={() => setIsEnter(false)}
              className={isEnter1 ? "active" : "inActive"}
            >
              <div className="img_container">
                <img src={Logo1} alt="logo1" />
              </div>
              <div>
                <h3>Software Testing Services (TaaS)</h3>
              </div>
              <div>
                <p>
                  We offer cost-effective, reliable and scalable software
                  testing services.
                </p>
              </div>
            </div>
            <div
              id="box2"
              onMouseEnter={() => setIsEnter2(true)}
              onMouseLeave={() => setIsEnter2(false)}
              className={isEnter2 ? "active" : "inActive"}
            >
              <div className="img_container">
                <img src={Logo2} alt="logo1" />
              </div>
              <div>
                <h3>Crowd Testing</h3>
              </div>
              <div>
                <p>
                  We offer comprehensive crowd-testing services, leveraging a
                  global network of skilled testers.
                </p>
              </div>
            </div>
            <div
              id="box3"
              onMouseEnter={() => setIsEnter3(true)}
              onMouseLeave={() => setIsEnter3(false)}
              className={isEnter3 ? "active" : "inActive"}
            >
              <div className="img_container">
                <img src={Logo3} alt="logo1" />
              </div>
              <div>
                <h3>IT Software Skills Enhancement</h3>
              </div>
              <div>
                <p>
                  Our customized and curated training models help organizations
                  elevate their IT quotient.
                </p>
              </div>
            </div>
            <div
              id="box4"
              onMouseEnter={() => setIsEnter4(true)}
              onMouseLeave={() => setIsEnter4(false)}
              className={isEnter4 ? "active" : "inActive"}
            >
              <div className="img_container">
                <img src={Logo4} alt="logo1" />
              </div>
              <div>
                <h3>Deployment & Support Services</h3>
              </div>
              <div>
                <p>
                  Our team of experts help you craft a winning IT strategy for
                  your organization.
                </p>
              </div>
            </div>
            <div
              id="box5"
              onMouseEnter={() => setIsEnter5(true)}
              onMouseLeave={() => setIsEnter5(false)}
              className={isEnter5 ? "active" : "inActive"}
            >
              <div className="img_container">
                <img src={Logo5} alt="logo1" />
              </div>
              <div>
                <h3>Software Design & Development</h3>
              </div>
              <div>
                <p>
                  We deliver IT solutions in a wide variety of verticals and
                  elevate businesses to the next level.
                </p>
              </div>
            </div>
          </div>
          <div className="video_container">
            <div className="thumbnail">
              {/* <img src={VideoThumbnail} alt="video thumbnail" /> */}
              {showImage ? (
                <div
                  style={{ position: "relative", cursor: "pointer" }}
                  onClick={handleThumbnailClick}
                >
                  <img
                    src={VideoThumbnail}
                    alt="video thumbnail"
                    onClick={() => setShowImage(false)}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "80px",
                      height: "80px",
                      backgroundColor: "rgba(0, 0, 0, 0.6)",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "0",
                        height: "0",
                        borderLeft: "20px solid white",
                        borderTop: "12px solid transparent",
                        borderBottom: "12px solid transparent",
                        marginLeft: "8px",
                      }}
                    ></div>
                  </div>
                </div>
              ) : (
                <iframe
                  width="900px"
                  height="420px"
                  src="https://www.youtube.com/embed/tuwxrL7Kh4E"
                  title="TestYantra Global"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                  onClick={() => setShowImage(true)}
                ></iframe>
              )}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="speak-container">
          <div>
            <h1>The numbers speak for themselves</h1>
          </div>
          <div className="box_all">
            <div className="box_row">
              <div
                id="number-box"
                onMouseEnter={() => {
                  setIsEnterBox(true);
                }}
                onMouseLeave={() => {
                  setIsEnterBox(false);
                }}
                className={isEnterBox ? "active_container" : ""}
              >
                <div>
                  <img src={Location} alt="locationLogo" />
                </div>
                <div>{countryValue}</div>
                <div>
                  <h3>Countries & Growing</h3>
                </div>
              </div>
              <div
                id="number-box"
                onMouseEnter={() => {
                  setIsEnterBox2(true);
                }}
                onMouseLeave={() => {
                  setIsEnterBox2(false);
                }}
                className={isEnterBox2 ? "active_container" : ""}
              >
                <div>
                  <img src={ClientGlobals} alt="Client global" />
                </div>
                <div>{clientValue}+</div>
                <div>
                  <h3>Clients Across Globe</h3>
                </div>
              </div>
              <div
                id="number-box"
                onMouseEnter={() => {
                  setIsEnterBox3(true);
                }}
                onMouseLeave={() => {
                  setIsEnterBox3(false);
                }}
                className={isEnterBox3 ? "active_container" : ""}
              >
                <div>
                  <img src={TotalTeam} alt="totalTeam" />
                </div>
                <div>{TeamMembers}+</div>
                <div>
                  <h3>Total Team Members</h3>
                </div>
              </div>
              <div
                id="number-box"
                onMouseEnter={() => {
                  setIsEnterBox4(true);
                }}
                onMouseLeave={() => {
                  setIsEnterBox4(false);
                }}
                className={isEnterBox4 ? "active_container" : ""}
              >
                <div>
                  <img src={Demand} alt="" />
                </div>
                <div>{demand}+</div>
                <div>
                  <h3>On Demand Test Engineers</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
