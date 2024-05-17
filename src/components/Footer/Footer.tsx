import React from "react";
import { tss } from "tss-react";

const useStyles = tss.create({
  footerRoot: {
    padding: "50px",
    background: "linear-gradient(black, rgb(38, 38, 38))",
    zIndex: "999",
    display: "flex",
    justifyContent: "center",
    "& > p": {
        color: "white"
    }
  },
});

const Footer = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.footerRoot}>
      <p style={{color: "white"}}>Anthony Parrino 2024</p>
    </div>
  );
};

export default Footer;
