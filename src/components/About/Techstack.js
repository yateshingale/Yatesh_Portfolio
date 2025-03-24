import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiDocker, DiGit, DiJenkins, DiPython } from "react-icons/di";
import { SiTerraform, SiKubernetes, SiAnsible, SiPrometheus, SiGrafana, SiGitlab, SiGithub, SiBitbucket, SiLinux } from "react-icons/si";
import { FaAws } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws /> {/* AWS */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTerraform /> {/* Terraform */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes /> {/* Kubernetes */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker /> {/* Docker */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJenkins /> {/* Jenkins */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnsible /> {/* Ansible */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPrometheus /> {/* Prometheus */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGrafana /> {/* Grafana */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit /> {/* Git */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGitlab /> {/* GitLab */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub /> {/* GitHub */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBitbucket /> {/* Bitbucket */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython /> {/* Python */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux /> {/* Linux */}
      </Col>
    </Row>
  );
}

export default Techstack;
