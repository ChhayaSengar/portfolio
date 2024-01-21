import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Chhaya Sengar</span>
            from <span className="purple"> Uttar Pradesh, India.</span>
            <br />
            I am currently employed as a Frontend developer at Corplyx Technologies Pvt.Ltd.
            <br />
            I have completed B.Tech in Electrical And Electronics Eng. at A.K.T.U, Lucknow U.P.
           
            <br />
            
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Explore New Things
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">ChhayaSengar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
