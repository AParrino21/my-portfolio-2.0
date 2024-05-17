import React from "react";
import "./Project.css";
import { projectData } from "./ProjectData";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Projects = () => {
  return (
    <div style={{ width: "100%", maxWidth: "1600px", margin: "0 auto" }}>
      <AnimationOnScroll animateIn="animate__lightSpeedInLeft">
        <h1 className="projects-title">Projects</h1>
      </AnimationOnScroll>
      {projectData.map((data, i) => (
        <ProjectCard key={data.id} data={data} i={i} />
      ))}
    </div>
  );
};

export default Projects;

const ProjectCard = ({ data, i }: any) => {
  if (i % 2 === 0) {
    return (
      <div data-aos="fade-right" className="project-card even">
        <div className="project-title-container">
          <h1 style={{ color: "white" }}>{data.name}</h1>
          <br />
          <p className="project-description">{data.description}</p>
          <br />
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {data.tech.map((d: any) => (
                <p key={d}>{d}</p>
              ))}
            </div>
          </div>
          <br />
          <div>
            <h3 style={{ color: "white" }}>Integrated With</h3>
            <div
              style={{ borderBottom: "1px solid blue", marginBottom: "5px" }}
            ></div>
            <div
              style={{ display: "flex", justifyContent: "center", gap: "50px" }}
            >
              {data.integrations.map((int: any) => (
                <p key={int}>{int}</p>
              ))}
            </div>
          </div>
        </div>
        <div>
          <img
            onClick={() => (window.location.href = data.link)}
            className="project-image"
            src={data.image}
            alt="project"
          />
        </div>
      </div>
    );
  } else {
    return (
      <div data-aos="fade-left" className="project-card odd">
        <div style={{ textAlign: "right" }}>
          <img
            onClick={() => (window.location.href = data.link)}
            className="project-image"
            src={data.image}
            alt="project"
          />
        </div>
        <div className="project-title-container">
          <h1 style={{ color: "white" }}>{data.name}</h1>
          <br />
          <p className="project-description">{data.description}</p>
          <br />
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {data.tech.map((d: any) => (
                <p key={d}>{d}</p>
              ))}
            </div>
          </div>
          <br />
          <div>
            <h3 style={{ color: "white" }}>Integrated With</h3>
            <div
              style={{ borderBottom: "1px solid blue", marginBottom: "5px" }}
            ></div>
            <div
              style={{ display: "flex", justifyContent: "center", gap: "50px" }}
            >
              {data.integrations.map((int: any) => (
                <p key={int}>{int}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
};
