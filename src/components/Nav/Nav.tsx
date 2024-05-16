import React from "react";
import { Box, ListItem, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { tss } from "tss-react";

const useStyles = tss.create({
  navRoot: {
    padding: "10px",
    backgroundColor: "rgb(38, 38, 38)",
    zIndex: "999",
  },
  navPages: {
    display: "flex",
    justifyContent: "space-between",
  },
  navMainPages: {
    display: "flex",
    "& > li > a": {
      textDecoration: "none",
      color: "white",
      fontSize: "13px",
      cursor: "pointer",
    },
  },
});

const Nav = () => {
  const { classes } = useStyles();

  return (
    <>
      <div className={classes.navRoot}>
        <Box className={classes.navPages}>
          <div className={classes.navMainPages}>
            <ListItem>
              <Link to="/">HOME</Link>
            </ListItem>
            <ListItem>
              <Link to="/resume">RESUME</Link>
            </ListItem>
          </div>
        </Box>
      </div>
      <Divider />
    </>
  );
};

export default Nav;
