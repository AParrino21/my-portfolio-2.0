import React from "react";
import { tss } from "tss-react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { workHistory } from "./WorkData";
import "animate.css";

const useStyles = tss.create({
  companyName: {
    color: "white",
  },
  historyTitle: {
    "-webkit-text-fill-color": 'transparent',
    "-webkit-text-stroke": '1px',
    color: 'rgba(255, 255, 255, 0.4)',
    fontSize: '160px',
    position: 'absolute',
    top: '-130px',
    left: '150px',
}
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
        <div key={i}>
          <h1 style={{ color: "white" }}>My Time at {data.company}</h1>
        </div>
      ))}
    </div>
  );
};

export default WorkHistory;
