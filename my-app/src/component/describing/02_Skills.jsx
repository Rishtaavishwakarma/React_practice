import React from "react";
import "./02_Skills.css";

const skills = [
  {
    name: "HTML",
    icon: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
    description: "Building the structure of web pages with semantic markup.",
  },
  {
    name: "CSS",
    icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    description: "Styling websites to make them visually appealing and responsive.",
  },
  {
    name: "JavaScript",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    description: "Adding interactivity and dynamic functionality to web pages.",
  },
  {
    name: "React",
    icon: "https://cdn-icons-png.flaticon.com/512/1183/1183672.png",
    description: "Building reusable UI components for modern web applications.",
  },
  {
    name: "Node.js",
    icon: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
    description: "Creating scalable server-side applications and APIs.",
  },
  {
    name: "AWS",
    icon: "https://cdn-icons-png.flaticon.com/512/226/226779.png",
    description: "Cloud computing and infrastructure for scalable applications.",
  },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h1>My Skills</h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
