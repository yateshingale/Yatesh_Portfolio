import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey Guys, I am <span className="purple">Yatesh Ingale</span>
            from <span className="purple"> Pune, India.</span>
            <br />
            Hi Everyone, I am Yatesh Ingale from Pune, Maharashtra, India.
            I am an Aspiring AWS/DevOps Engineer with a strong foundation in cloud computing, automation, and CI/CD pipelines.
            <br />
            I hold a Bachelor of Computer Application (BCA) from Savitribai Phule Pune University with a CGPA of 8.3 and
             have gained hands-on experience in
             AWS, Terraform, Kubernetes, Jenkins, Docker, and Ansible through internships and projects.
            <br />
            <br />
            🔹 Key Expertise:
            <br />
✔️ Cloud Infrastructure (AWS – EC2, S3, IAM, RDS, Route 53)
<br />
✔️ CI/CD Pipelines (Jenkins, GitHub Actions, ArgoCD)
<br />
✔️ Infrastructure as Code (Terraform, CloudFormation)
<br />
✔️ Containerization & Orchestration (Docker, Kubernetes)
<br />
✔️ Monitoring & Security (Prometheus, Grafana, SonarQube, Trivy)
<br />
Beyond tech, I love:
<br />
🏔️ Trekking in the Mountains
<br />
🏖️ Relaxing by the Beach
<br />
✍️ Writing Tech Blogs
<br />
🌍 Traveling & Exploring
<br />

🌟 "Passionate about building scalable, secure, and automated cloud solutions!"
<br />
          </p>
          <ul>
           
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Code, deploy, automate—repeat. The DevOps way!"{" "}
          </p>
          <footer className="blockquote-footer">Yateshingale</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
