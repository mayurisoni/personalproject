import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import "./Skills.css";
import Html from "../../../../Images/html.png";
import Css from "../../../../Images/CSS.png";
import git from "../../../../Images/git.png";
import react from "../../../../Images/react.png";
import redux from "../../../../Images/redux.png";
import mui from "../../../../Images/mui.png";
import bootstrap from "../../../../Images/bootstrap.png";
import framermotion from "../../../../Images/uk0uq2vb0zlmw9h77oh3.webp";

import { Box } from "@mui/system";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
const AboutMe = () => {
  const FirstSkillSet = [
    { img: Html, name: "HTML" },
    { img: Css, name: "CSS" },
    { img: react, name: "React JS" },
    { img: redux, name: "Redux" },
  ];
  const SecondSkillSet = [
    { img: mui, name: "Material UI" },
    { img: bootstrap, name: "Bootstrap" },
    { img: git, name: "Git" },
    { img: framermotion, name: "Framer Motion" },
  ];
  const { ref, inView } = useInView({ threshold: 1, triggerOnce: false });

  return (
    <Grid
      container
      sx={{ paddingTop: { lg: 10, md: 10, sm: 10, xs: 10 } }}
      direction={{
        lg: "row",
        md: "column-reverse",
        sm: "column-reverse",
        xs: "column-reverse",
      }}
      className="Skillbody"
      spacing={10}
      id="skills"
    >
      <Grid item lg={6} className="SkillSetNameGrid">
        <Grid
          container
          direction={{ lg: "row", md: "row", sm: "row", xs: "row" }}
          sx={{
            marginLeft: { lg: 0, md: 0, sm: 0, xs: 0 },
          }}
          className="list"
        >
          <Grid
            item
            lg={2.5}
            md={2.5}
            sm={2.5}
            xs={12}
            sx={{
              marginLeft: { lg: 15, md: 15, sm: 20, xs: 0 },
              marginTop: { lg: 8, md: 8, sm: 8, xs: 8 },
            }}
          >
            <Grid container direction={"column"}>
              {FirstSkillSet.map((item) => (
                <Grid item lg={6} xs={3} pb={3} classname="marginleftZero">
                  <Grid
                    container
                    direction={"row"}
                    spacing={10}
                    sx={{ width: { xs: "80%" } }}
                    className="Skills"
                  >
                    <Grid item lg={4} md={4} sm={4} xs={4} className="Skillimg">
                      {" "}
                      <img
                        src={item.img}
                        style={{
                          height: "50px",
                          width: "50px",

                          // border: "2px solid #b23130",
                        }}
                      />
                    </Grid>
                    <Grid
                      item
                      lg={8}
                      md={8}
                      sm={8}
                      xs={6}
                      className="SkillimgPaper"
                    >
                      <Paper
                        className="skill"
                        elevation={24}
                        sx={{
                          padding: "5px",
                          backgroundColor: "#000a23",
                          width: "150px",
                        }}
                      >
                        <motion.div whileHover={{ scale: 1.1 }}>
                          <Typography variant="h6" color="white">
                            {item.name}
                          </Typography>
                        </motion.div>
                      </Paper>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid
            item
            ml={10}
            mt={8}
            lg={2.5}
            md={2.5}
            sm={2.5}
            xs={12}
            sx={{
              marginLeft: { lg: 15, md: 15, sm: 20, xs: 0 },
              marginTop: { lg: 8, md: 8, sm: 8, xs: 0 },
            }}
          >
            <Grid container direction={"column"}>
              {SecondSkillSet.map((item) => (
                <Grid item lg={6} xs={3} pb={3} classname="marginleftZero">
                  <Grid
                    container
                    direction={"row"}
                    spacing={10}
                    sx={{ width: { xs: "80%" } }}
                    className="Skills"
                  >
                    <Grid item lg={4} md={4} sm={4} xs={4} className="Skillimg">
                      {" "}
                      <img
                        src={item.img}
                        style={{
                          height: "50px",
                          width: "50px",

                          // border: "2px solid #b23130",
                        }}
                      />
                    </Grid>
                    <Grid
                      item
                      lg={8}
                      md={8}
                      sm={8}
                      xs={6}
                      className="SkillimgPaper"
                    >
                      <Paper
                        className="skill"
                        elevation={24}
                        sx={{
                          padding: "5px",
                          backgroundColor: "#000a23",
                          width: "150px",
                        }}
                      >
                        <motion.div whileHover={{ scale: 1.1 }}>
                          <Typography variant="h6" color="white">
                            {item.name}
                          </Typography>
                        </motion.div>
                      </Paper>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
              
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        lg={6}
        md={12}
        sm={12}
        xs={12}
        className="SkillSetNameGrid skillSetName"
        sx={{ paddingTop: { xs: 0 } }}
      >
        <Grid
          item
          sx={{
            marginLeft: { lg: 0, md: 0, sm: 10, xs: 3 },
            marginTop: { lg: 0, md: 0, sm: 0, xs: 0 },
          }}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className="skillBodyitem "
        >
          <motion.div
            ref={ref}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: -50 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              mt={3}
              sx={{
                color: "white",
                fontFamily: "Calibri",
                fontWeight: "700",
              }}
              variant="h2"
            >
              Skill{" "}
              <span
                style={{
                  color: "#f5af19",
                }}
              >
                Set
              </span>
            </Typography>
          </motion.div>
          <Typography className="nunito" variant="div" color="white">
            {" "}
            Experienced React developer with a strong background in HTML, CSS,
            and Redux, capable of building responsive and dynamic web
            applications that provide an exceptional user experience.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutMe;
