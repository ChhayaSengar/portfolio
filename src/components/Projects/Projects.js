import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import crypto from "../../Assets/crypto.png";
import weather from "../../Assets/weather.png";
import shoping from "../../Assets/shoping.png"
import pizza1 from "../../Assets/pizza1.png";
import erthpot1 from "../../Assets/erthpot1.png";
import Shikshamitra from "../../Assets/Shikshamitra.png";

function Projects() {
  const [isGithub, setIsGithub] = useState(false)
 
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
              imgPath={erthpot1}
              isBlog={false}
              isGithub={false}
              title="Erthpot"
              description="We make Audio products that add value to your life. I'm working this project, 
              In the development of this project. The stack includes:
React.js: Powering the dynamic and responsive user interface.
Tailwind CSS: Crafting sleek and modern design aesthetics effortlessly.
Framer Motion: Adding fluid animations and transitions to enhance user engagement."
              
              demoLink="https://659b94b87ca9a5d87d87be6e--bright-rabanadas-d50fdf.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Shikshamitra}
              isBlog={false}
              isGithub={false}
              title="Shikshamitra"
              description="Developed a comprehensive school
              management system aimed at efficiently organizing and
              storing critical school data. The system facilitates the
              management of student information, employee attendance,
              and staff details, ensuring seamless administration.
              React.js,
              Tailwind CSS,
Redux Toolkit, API integration."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto}
           
              isGithub={true}
              title="Crypto Tracker"
              description="
              CryptoTracker is track the real-time data on the value and market movements of various crypto currencies. Compare different crypto currencies, look at their graphs - prices, total volumes, market cap, etc. Search from the top 100 Crypto currencies in real time and add them to your watchlist aswell. React.js, CSS3, Material-UI."
              ghLink="https://github.com/ChhayaSengar/Crypto-Tracker-Website.git"
              demoLink="https://cryptotracker-dashboard.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shoping}
              isGithub={true}
              title="MeShop."
              description="About
              A simple shopping cart application using html5, Css and Advanced JS concepts. The topics we’ll cover include promises, async await , using storage APIs and basic API calls while also dealing with complex DOM Manipulations."
              ghLink="https://github.com/ChhayaSengar/Shopping-Cart-Project.git"
              demoLink="https://chhayasengar.github.io/Shopping-Cart-Project/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isGithub={true}
              title="Weather"
              description="On clicking the fetch data button, first the geolocation api returns the lat and long and displays a google map of the current location. Then the weather data section shows, where all the details provided in the api response are handled.."
              ghLink="https://github.com/ChhayaSengar/FetchDataWeatherAPI-.git"
              demoLink="https://chhayasengar.github.io/FetchDataWeatherAPI-/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pizza1}
              isGithub={true}
              title="Pizza-Restauarant"
              description="responsive and accessible web page for a restaurant. 
                Our web page is meticulously designed to adapt seamlessly to various screen sizes and devices.
                Whether you're exploring our menu on a desktop, tablet, or smartphone, the responsive layout 
                ensures a consistent and engaging experience. "
              ghLink="https://github.com/ChhayaSengar/Pizza-Restauarant.git"
              demoLink="https://chhayasengar.github.io/Pizza-Restauarant/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
