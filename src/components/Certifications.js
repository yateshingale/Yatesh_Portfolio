import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificationCard from "./CertificationCard";
import Particle from './Particle';

// Import images for certificates
import aws from "../Assets/Certifications/Aws_certificate.jpg";
import devops from "../Assets/Certifications/DevOps_certificate.jpg";
import fullstack from "../Assets/Certifications/java.png";
import iot from "../Assets/Certifications/IOT_certificate.jpg";
import uiux from "../Assets/Certifications/UIUX_certificate.jpg";

function Certifications() {
  return (
    <Container fluid className="certification-section" style={{ paddingTop: "80px", paddingBottom: "50px", minHeight: "100vh" }}>
      <Particle />
      <Container>
        <h1 className="certification-heading" style={{ marginBottom: "30px" }}>
          <strong className="purple">My Certifications</strong>
        </h1>
        <p style={{ color: "white", marginBottom: "50px" }}>
          Here are some certifications I have earned to strengthen my expertise.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="certification-card">
            <CertificationCard
              imgPath={aws}
              title="AWS Certified Solutions Architect"
              issuedBy="Amazon Web Services"
              issueDate="Aug 2023"
              certLink="https://drive.google.com/file/d/1ZNNsV1CniCV4Es2jvlbO8u-sKhQe5pjo/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="certification-card">
            <CertificationCard
              imgPath={devops}
              title="DevOps Foundation Certification"
              issuedBy="DevOps Institute"
              issueDate="Nov 2023"
              certLink="https://drive.google.com/file/d/16JvKiR2_PT1--KNZyE3tnfRzXvwIOg20/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="certification-card">
            <CertificationCard
              imgPath={fullstack}
              title="Full Stack Java Developer Certification"
              issuedBy="Oracle"
              issueDate="Nov 2022"
              certLink="https://drive.google.com/file/d/1E68-UHmEg_ENSDDUgBI9Ntak2TW1dZhN/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="certification-card">
            <CertificationCard
              imgPath={iot}
              title="IoT Developer Certification"
              issuedBy="Cisco"
              issueDate="March 2021"
              certLink="https://drive.google.com/file/d/1Y4QVzUFLty08NHdSS5LIPU4srBC6Ditk/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="certification-card">
            <CertificationCard
              imgPath={uiux}
              title="UI/UX Design Certification"
              issuedBy="Google"
              issueDate="April 2021"
              certLink="https://drive.google.com/file/d/174yVlrQgojXZidzORYcd7EMD158pO24x/view?usp=sharing"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;
