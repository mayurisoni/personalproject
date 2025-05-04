import { Card, Grid, Typography } from "@mui/material";
import React from "react";
import "./Project.css";
import MyImage from "../../../../Images/myImage.jpeg";
import { Box } from "@mui/system";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import burgerbuider from "../../../../Images/burger.jpeg"
import Mcommerce from "../../../../Images/mcommercee.jpeg"
const AboutMe = () => {
  return (
    <>
      <Grid
        container
        className="body"
        direction={"column"}
        pb={10}
        id="projects"
      >
        <Grid item lg={5}md={5} xs={12} sm={12}
        className="projectMainItem">
          <Typography
            mt={3}
            sx={{ color: "#f5af19", fontFamily: "Calibri", fontWeight: "700" }}
            variant="h2"
          >
            Projects
          </Typography>
          <Typography className="nunito" variant="div" color="white">
            {" "}
            <Typography className="nunito" variant="div" color="white">
              {" "}
              In this section, you can find some of the projects I have worked on. These projects showcase my skills and experience as a developer, and demonstrate my ability to design and implement solutions to real-world problems.
            </Typography>
          </Typography>
        </Grid>
        <Grid item  lg={5} md={5} xs={12} sm={12} className="projectMainItem">
          <Grid
            container
            className="body worklist"
            direction={"row"}
            
          >
            <Grid item lg={4} md={4} xs={12} sm={4}>
              <Card className="work">
         
                <img src={burgerbuider} className="imageLayerSize" height={"100%"}/>
                <Grid className="layer" direction={"column"}>
                  <h3>React-Burger-Builder</h3>
                  <p>
                  React burger builder app with Firebase integration, developed through Maximilian Schwarzmuller's React course.
                  </p>
                  <a href="https://react-burger-builder-85bf1.web.app/ " target="_blank">
                    <OpenInBrowserIcon />
                  </a>
                </Grid>
              </Card>
            </Grid>
            <Grid item lg={4}  md={3} xs={12} sm={4}>
              <Card className="work">
                <img className="imageLayerSize" src={MyImage} />
                <Grid className="layer" direction={"column"}>
                  <h3>My Portfolio</h3>
                  <p>
                  My React portfolio project is a website that I designed and developed to showcase my skills, experiences, and projects to potential employers or clients.
                  </p>
                  <a href="http://www.mayuri-soni.great-site.net/" target="_blank">
                    <OpenInBrowserIcon />
                  </a>
                </Grid>
              </Card>
            </Grid>
            <Grid item lg={4} md={4} xs={12} sm={4}>
              <Card className="work">
                <img src={Mcommerce} className="imageLayerSize" />
                <Grid className="layer" direction={"column"}>
                  <h3>Mcommerce</h3>
                  <p>
                  Developed an e-commerce website using Commerce.js and React.js to showcase products and allow users to add items to their cart and complete purchases.
                  </p>
                  <a href="https://mcommercee.netlify.app/" target="_blank">
                    <OpenInBrowserIcon />
                  </a>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutMe;
