import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Payment App"
              description="Developed a full-stack application integrated with AWS EC2 and MongoDB, incorporating
               features such as data validation, authentication, session management"
              ghLink="https://github.com/dileep1228/paytm"
              //demoLink="https://medium-app-ashy.vercel.app/signup"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Blog App"
              description="Built a blogging app using React, TypeScript, Prisma ORM, PostgreSQL, JWT authentication, and
              CloudFlare deployment. Helps you to write, publish, view blogs."
              ghLink="https://github.com/dileep1228/medium-app"
              demoLink="https://medium-app-ashy.vercel.app/signup"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Search Albums"
              description="Using spotify API we extract the albums using the artist name. Built using react, node"
              ghLink="https://github.com/dileep1228/Spotify_Artist"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Meet UP"
              description="found out the locations of the events thats happening around using latitude and longitude data from meetup APP."
              ghLink="https://github.com/dileep1228/Meet_up"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
