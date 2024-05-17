import React from "react";
import { tss } from "tss-react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { workHistory } from "./WorkData";
import "animate.css";
import { Divider } from "@mui/material";

const useStyles = tss.create({
  workHistoryRoot: {
    width: "80%",
    maxWidth: "1000px",
    padding: "30px",
    margin: "0px auto 50px auto",
  },
  company: {
    color: "white",
  },
  companyColor: {
    color: "rgb(128, 255, 217)",
  },
  techTitleColors: {
    color: "rgb(128, 204, 255)",
  },
  projectTitleColors: {
    color: "rgb(139, 128, 255)",
  },
  projectDescriptionColors: {
    color: "rgb(255, 176, 176)",
  },
  achievementTitleColors: {
    color: "rgb(255, 246, 176)",
  },
  extraTitleColor: {
    color: "rgb(255, 217, 128)",
  },
  historyTitle: {
    WebkitTextFillColor: "transparent",
    WebkitTextStroke: "1px",
    color: "rgba(255, 255, 255, 0.4)",
    fontSize: "160px",
    position: "absolute",
    top: "-130px",
    left: "150px",
  },
  techContainter: {
    margin: "20px auto",
  },
  tech: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
  },
});

const WorkHistory = () => {
  const { classes } = useStyles();
  return (
    <div>
      <AnimationOnScroll animateIn="animate__lightSpeedInLeft">
        <h1 className={classes.historyTitle}>Work History</h1>
        <br />
        <br />
      </AnimationOnScroll>
      {workHistory.map((data, i) => (
        <div className={classes.workHistoryRoot} key={i}>
          <h1 className={classes.company}>
            My Time at{" "}
            <span className={classes.companyColor}>{data.company}</span>
          </h1>
          <p className={classes.company}>{data.timeServed}</p>
          <Divider sx={{ bgcolor: "white" }} />
          <div className={classes.techContainter}>
            <h2 className={`${(classes.company, classes.techTitleColors)}`}>
              EveryDay Tech
            </h2>
            <div className={classes.tech}>
              {data.everyDayTech.map((tech, j) => (
                <div key={j}>
                  <AnimationOnScroll animateIn="animate__bounce">
                    <p className={classes.company}>{tech}</p>
                  </AnimationOnScroll>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className={`${(classes.company, classes.projectTitleColors)}`}>
              My Projects
            </h2>
            {data.projects.map((project, k) => (
              <div key={k}>
                <p
                  className={`${
                    (classes.company, classes.projectDescriptionColors)
                  }`}
                >
                  <strong>{project.name}</strong>
                </p>
                <p className={classes.company}>{project.description}</p>
                <br />
              </div>
            ))}
          </div>
          <br />
          <br />
          <div>
            <div>
              <h2
                className={`${
                  (classes.company, classes.achievementTitleColors)
                }`}
              >
                My Achievements
              </h2>
              <p className={classes.company}>{data.achievements}</p>
            </div>
            <br />
            <div>
              <h2 className={`${(classes.company, classes.extraTitleColor)}`}>
                Extras
              </h2>
              <p className={classes.company}>{data.extras}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkHistory;
