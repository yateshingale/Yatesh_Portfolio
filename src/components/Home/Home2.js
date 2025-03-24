import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/myphoto.jpg";
import "../../Assets/Home2.css"; // Adjust path if necessary
 // Ensure correct path and extension
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with Cloud & DevOps automation, and every day is a new opportunity to learn and innovate! 🚀
              <br />
              <br />I specialize in AWS, Terraform, Ansible, and Kubernetes, designing scalable cloud architectures and optimizing CI/CD pipelines. Passionate about automation, reliability, and monitoring, I leverage tools like Prometheus & Grafana to ensure peak performance.
              <br />
              <br />
              Whenever possible, I bring my love for AWS, DevOps, and automation together to build highly efficient, scalable, and robust cloud solutions. 💡🔥
              <br />
              <br />
              <b className="purple">
                My current focus is on building highly scalable, resilient, and automated cloud infrastructure to drive efficiency and reliability. 🚀
              </b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid my-photo" alt="Yatesh Ingale" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/yateshingale"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/Yatesh5553"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/yatesh-ingale/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/yatesh_ingale/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;

// CSS (Add to your stylesheet)
// .my-photo {
//   width: 300px;
//   height: 300px;
//   border-radius: 50%;
//   object-fit: cover;
//   border: 5px solid #6c63ff;
// }
