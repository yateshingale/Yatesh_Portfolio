import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/Terraform.webp";
import editor from "../../Assets/Projects/s3 python.webp";
import chatify from "../../Assets/Projects/bitbucket cicd.webp";
import bitsOfCode from "../../Assets/Projects/jenkins cicd.webp";

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
              imgPath={chatify}
              isBlog={false}
              title="BitBucket AutoDeploy 🤖

"
              description="This project automates the deployment of a Node.js application using Bitbucket Pipelines, 
              ensuring seamless CI/CD integration on an AWS EC2 instance with PM2 for process management. 🚀"
              ghLink="https://github.com/yateshingale/nodejs-app-deploy-bitbucket-project"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="🚀 Jenkins AutoDeploy"
              description="This project showcases a Jenkins pipeline for automating build, test, and deployment workflows.
               It integrates with Git, Docker, and cloud environments to enable seamless CI/CD automation. 🚀"
              ghLink="https://github.com/yateshingale/jenkins-pipeline/tree/master"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="S3 Directory Scanner 📂

"
              description="This project features a **Python script** that retrieves and displays the directory structure of
               an **AWS S3 bucket**. It helps in listing and organizing stored files efficiently. 📂🚀"
              ghLink="https://github.com/yateshingale/s3_details"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="S3 Bucket Analyzer With Terraform🛠️"
              description="This project automates the retrieval and display of AWS S3 bucket details using Terraform, providing an
               infrastructure-as-code (IaC) approach for managing and monitoring cloud storage configurations efficiently.
                It simplifies cloud resource visibility and enhances automation in cloud operations."
              ghLink="https://github.com/yateshingale/s3_detail_using_terraform"
              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
