import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi , I am <span className="purple">Dileep Latchireddi </span>
            from <span className="purple"> India.</span>
            <br />
            I am a masters student at <span className="purple"> George Mason University, Fairfax, VA, USA.</span> <br />
            I have completed my B.Tech in Information Technology at ANITS, India.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Then I better make the most of today"{" "}
          </p>
          <footer className="blockquote-footer">Turbo</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
