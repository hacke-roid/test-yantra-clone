import React from "react";
import "./SoftwareTesting.css";
import ManageQA from "./ServiceImages/ManageQA.webp";
import Crowdtesting from "./ServiceImages/CrowdTesting.webp";
import TESTINGSOLUTION from "./ServiceImages/TestingSolution.webp";

const SoftwareTesting = () => {
  return (
    <div className="software-testing-container">
      <section className="background-img-testing">
        <div className="contact-banner">
          <div className="details-content">
            <div className="text-span">
              <span>Software Testing Services (TaaS)</span>
            </div>
            <div className="text-para">
              <p>
                Trusted by 3000+ clients across the globe to provide a range of
                Software testing solutions, expertise, and AI based software
                testing platform.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="second_section">
        <div className="testing-section-second">
          <div className="header-leverage">
            <h1>Leverage two decades of Testing Expertise </h1>
            <p>
              Our testing center of excellence (CoE) provides a unified
              solutions for web, android, ios, API, and databases.
            </p>
          </div>
          <div className="software-section-allbox">
            <div className="software-section-box">
              <img src={ManageQA} alt="manageQA" />
              <h3>Managed QA</h3>
              <p>
                Our team of IT consultants and managed services experts provide
                timely consulting, software configuration, deployment, and
                support for an array of cloud and premise based applications.
              </p>
            </div>
            <div className="software-section-box">
              <img src={Crowdtesting} alt="manageQA" />
              <h3>Crowd Testing</h3>
              <p>
                Crowdsourced Testing is a necessity and important solution for
                companies that are launching time-sensitive products, such as
                mobile applications and web-based platforms with UI, UX issues
                and software bugs.
              </p>
            </div>
            <div className="software-section-box">
              <img src={TESTINGSOLUTION} alt="manageQA" />
              <h3>Testing Solutions</h3>
              <p>
                Test Yantra Global offers a suite of software testing tools,
                methodology, and resources aimed at enhancing the quality
                assurance of your applications including testing services like
                automation, performance, application and security testing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareTesting;
