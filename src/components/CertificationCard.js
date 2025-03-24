import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function CertificationCard(props) {
  return (
    <Card className="project-card-view" style={{ height: "auto" }}>
      <Card.Img 
        variant="top" 
        src={props.imgPath} 
        alt={props.title} 
        className="certification-img"
        style={{ objectFit: "contain", width: "100%", maxHeight: "400px" }}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          <strong>Issue Date:</strong> {props.issueDate}
        </Card.Text>
        <Button 
          variant="primary" 
          href={props.certLink} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          View Certification
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CertificationCard;
