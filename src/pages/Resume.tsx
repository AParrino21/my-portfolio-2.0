import React from "react";
import { tss } from "tss-react";

const useStyles = tss.create({
  root: {},
});

const Resume = () => {
  const { classes } = useStyles();
  return (
    <div>
      <p>Resume</p>
    </div>
  );
};

export default Resume;
