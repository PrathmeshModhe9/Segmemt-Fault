import React from "react";
import "./About.css";
function About() {
  return (
    <div className="main-div">
      <div className="main-about">
        <h1>About Us</h1>
        <p>
       <b>
       Our mission is to make learning interactive and efficient. The idea is that if you can't answer a question, you can learn from the answer. That's why we built Segment Fault: a question and answer website for professional and enthusiast programmers.Segment Fault offers programming questions of interest to anyone interested in learning more about computer programming, whether you're new to the field or a seasoned expert.
        </b>
        </p>
      </div>
      <div className="our-details">
        <h2>Contributers</h2>
        <ul>
          <li>
            <div>
              <p>Prathmesh Modhe</p>
              <a
                href="https://www.linkedin.com/in/pmodhe2001/"
                target="_blank "
                rel="noreferrer"
              >
                Linkedin
              </a>
              
            </div>
          </li>
          <li>
            <div>
              <p> Rahul Bairagi</p>
              <a
                style={{ padding: "0 39px" }}
                href="https://www.linkedin.com/in/rahul-bairagi-b88b20165/"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </div>
          </li>
          <li>
            <div>
              <p>Pravishti Bhardwaj</p>
              <a
                style={{ padding: "0 2px" }}
                href="https://www.linkedin.com/in/pravishti-bhardwaj-7b4042200/"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
