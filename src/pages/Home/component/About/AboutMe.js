import { Grid, Typography } from "@mui/material";
import React from "react";
import "./Aboutme.css";
import MyImage from "../../../../Images/full.jpeg";
import { Box } from "@mui/system";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const AboutMe = () => {
  const { ref, inView } = useInView({ threshold: 0 }); // Detect when component is 50% visible in viewport
  const mainComponent = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  const aboutmetitleVariants = {
    hidden: {
      opacity: 0,
      marginTop: -20,
    },
    visible: {
      opacity: 1,
      marginTop: 0,
    },
  };
  return (
    <motion.div
      id="about"
      variants={mainComponent}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.2 }}
      
    >
      <Grid
        container
        style={{ backgroundColor: "#000612" }}
        className="aboutbody"
        direction={"column"}
       
      >
        <Grid container direction={"row"} >
        
          <Grid item sx={{margin:{lg:6,md:5,sm:3,xs:3}}} mt={8} md={3} lg={3} xs={12} sm={3} className="imageGrid">
            <motion.div whileHover={{ scale: 1.1 }}>
              <img
                src={MyImage}
                className="imageSize"
                style={{
                  border: "4px solid #f5af19",
                }}
              />
            </motion.div>
          </Grid>
          <Grid item sx={{margin:{lg:6,md:4,sm:4,xs:4},marginTop:{xs:1}}} lg={7} md={5} sm={6} xs={12} >
           <motion.div variants={mainComponent}
      whileHover={{
        y: -12
      }}
       >
              <Typography
                sx={{
                  color: "white",
                  fontFamily: "Calibri",
                  fontWeight: "700",
                }}
                variant="h4"
              >
                About{" "}
                <span
                  style={{
                    color: "#f5af19",
                    fontFamily: "'Tilt Neon', cursive",
                  }}
                >
                  Me
                </span>
              </Typography>
            </motion.div>
            <Typography
              variant="div"
              color="white"
              sx={{
                fontFamily: "'Nunito Sans', sans-serif",
              }}
            >
              {" "}
              I am a freelance frontend developer with expertise in creating
              visually appealing and intuitive interfaces using web technologies
              such as HTML, CSS, and JavaScript. With a focus on performance,
              accessibility, and compatibility, she delivers engaging and
              user-friendly interfaces.
            </Typography>
            <Box
             className="boxSize"
              p={2}
              mt={2}
            style={{ border: "2px solid white"}}
            >
              <Grid container direction={"row"} spacing={7}>
                <Grid item>
                  <Typography
                    variant="subtitle1"
                    color="#f5af19"
                    sx={{
                      paddingBottom: "10px",
                      fontFamily: "'Nunito Sans', sans-serif",
                    }}
                  >
                    Name : <span style={{ color: "white" }}>Mayuri Soni</span>
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="#f5af19"
                    sx={{
                      paddingBottom: "10px",
                      fontFamily: "'Nunito Sans', sans-serif",
                    }}
                  >
                    Age : <span style={{ color: "white" }}>26</span>
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="#f5af19"
                    sx={{
                      paddingBottom: "10px",
                      fontFamily: "'Nunito Sans', sans-serif",
                    }}
                  >
                    Address :{" "}
                    <span style={{ color: "white" }}>
                      Anaval, Gujarat, India
                    </span>
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="#f5af19"
                    sx={{
                      paddingBottom: "10px",
                      fontFamily: "'Nunito Sans', sans-serif",
                    }}
                  >
                    Phone : <span style={{ color: "white" }}>9624038541</span>
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="#f5af19"
                    sx={{
                      paddingBottom: "10px",
                      fontFamily: "'Nunito Sans', sans-serif",
                    }}
                  >
                    Email :{" "}
                    <span style={{ color: "white" }}>
                      Sonimayuri403@gmail.com
                    </span>
                  </Typography>
                </Grid>
                <Grid item>
                  {/* <Typography variant="subtitle1"  color="#e4ccb8"sx={{paddingBottom:"10px"}}>Name : <span style=
              {{color:'#54e4f4'}}>Mayuri Soni</span></Typography>
              <Typography variant="subtitle1" color="#e4ccb8" sx={{paddingBottom:"10px"}}>Age : <span style=
              {{color:'#54e4f4'}}>26</span></Typography>
              <Typography variant="subtitle1" color="#e4ccb8" sx={{paddingBottom:"10px"}}>Address : <span style=
              {{color:'#54e4f4'}}>Anaval,Gujarat,India</span></Typography>
              <Typography variant="subtitle1" color="#e4ccb8" sx={{paddingBottom:"10px"}}>Phone : <span style=
              {{color:'#54e4f4'}}>9624038541</span></Typography>
              <Typography variant="subtitle1" color="#e4ccb8" sx={{paddingBottom:"10px"}}>Email : <span style=
              {{color:'#54e4f4'}}>Sonimayuri403@gmail.com</span></Typography> */}
                </Grid>
              </Grid>
            </Box>
          </Grid>
          </Grid>
      </Grid>
    </motion.div>
  );
};

export default AboutMe;
