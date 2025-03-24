import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "AWS Cloud & DevOps Engineer",
          "Infrastructure as Code Enthusiast",
          "CI/CD & Automation Specialist",
          "Kubernetes & Docker Practitioner",
          "Building Scalable & Resilient Cloud Architectures",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
