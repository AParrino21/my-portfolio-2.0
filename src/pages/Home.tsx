import React from "react";
import "./styles.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SchoolIcon from "@mui/icons-material/School";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import WorkHistory from "../components/WorkHistory/WorkHistory";
import Footer from "../components/Footer/Footer";

const Home = () => {
  const [copiedEmail, setCopiedEmail] = React.useState("Click To Copy!");
  const [copyColor, setCopyColor] = React.useState("white");

  function copyEmail() {
    navigator.clipboard.writeText("anthonyparrino90@gmail.com");
    setCopiedEmail("COPIED!");
    setCopyColor("rgb(52, 255, 55)");
  }
  return (
    <div>
      <div className="header-container">
        <div className="myheader">
          <h1 className="tracking-in-expand-fwd-top">Anthony Parrino</h1>
          <br />
          <p className="focus-in-contract">&lt;Software Engineer&gt;</p>
          <br />
          <div className="skills-container">
            <p className="text-focus-in">REACT</p>
            <p
              style={{
                animation:
                  "text-focus-in 1.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
              }}
              className="text-focus-in"
            >
              TYPESCRIPT
            </p>
            <p
              style={{
                animation:
                  "text-focus-in 2s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
              }}
              className="text-focus-in"
            >
              AWS
            </p>
            <p
              style={{
                animation:
                  "text-focus-in 2.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
              }}
              className="text-focus-in"
            >
              ML/AI
            </p>
          </div>
          <br />
          <div className="icons-container">
            <GitHubIcon
              className="icons icons-git"
              onClick={() =>
                (window.location.href = "https://github.com/AParrino21")
              }
            />
            <LinkedInIcon
              className="icons icons-link"
              onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/in/anthony-parrino-887b391b3/")
              }
            />
            <SchoolIcon
              className="icons icons-school"
              onClick={() =>
                (window.location.href = "https://github.com/goobisanubis21")
              }
            />
          </div>
          <br />
          <div>
            <p className="copy-email" onClick={copyEmail}>
              ANTHONYPARRINO90@GMAIL.COM{" "}
              <ContentCopyIcon style={{ fontSize: "20px" }} />
            </p>
            <p style={{ color: copyColor }} id="copy-text">
              {copiedEmail}
            </p>
          </div>
        </div>
        <div className="scrollable about-home-container">
          <About />
        </div>
        <div className="scrollable-project project-home-container">
          <Projects />
        </div>
        <div
          className="scrollable-project"
          style={{
            paddingBottom: "100px",
            backgroundColor: "black",
            textAlign: "initial",
            paddingTop: "150px"
          }}
        >
          <WorkHistory />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
