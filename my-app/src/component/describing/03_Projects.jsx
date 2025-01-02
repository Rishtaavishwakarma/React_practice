import React from "react";
import "./03_Projects.css";

const projects = [
  {
    title: "Spotify Clone",
    image: "https://cdn.pixabay.com/photo/2016/10/22/00/15/spotify-1759471_1280.jpg",
    description: "A Spotify clone built with HTML, CSS, and JavaScript.",
    link: "https://github.com/yourusername/spotify-clone",
  },
  {
    title: "Calculator App",
    image: "https://cdn.icon-icons.com/icons2/2516/PNG/512/calculator_icon_150972.png",
    description: "A simple calculator app using basic JavaScript.",
    link: "https://github.com/yourusername/calculator-app",
  },
  {
    title: "Portfolio Website",
    image: "https://via.placeholder.com/150/portfolio.png?text=Portfolio",
    description: "My personal portfolio to showcase projects and skills.",
    link: "https://yourusername.github.io/portfolio",
  },
  {
    title: "Weather App",
    image: "https://cdn-icons-png.flaticon.com/512/3845/3845731.png",
    description: "A weather app fetching real-time data via APIs.",
    link: "https://github.com/yourusername/weather-app",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
