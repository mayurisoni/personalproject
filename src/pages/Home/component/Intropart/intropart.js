import { Grid, Typography } from "@mui/material";
import React, { useRef, useEffect } from 'react';
import "./intropart.css";
import TextLoop from "react-text-loop";
import myImage from "../../../../Images/profile.jpeg";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
const Intropart = () => {
 
  const componnetVairant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  const imageVairant = {
    hidden: {
      opacity: 0,
      marginTop: -700,
    },
    visible: {
      opacity: 1,
      marginTop: 0,
      transition:{
        delay: 0.7,
        duration: 1,
        type: "spring",
        stiffness: 100,
      }
    },
  };

  return (
      <Grid id="home"className="introbackground" lg={12} sm={12} xs={12} md={12}>
        <div className="home">
          <div className="home-content">
            <motion.div
              variants={imageVairant}
              initial="hidden"
              animate="visible"
              // whileTap={{scale:0.9,borderColor:"#f5af19",transition:{duration:0.2}}}
              whileHover={{scale:1.1,borderColor:"#f5af19",transition:{duration:0.2}}}
              className="home-img"
            >
              <img src={myImage}></img>
            </motion.div>
            <motion.h1
             className="myName"
              variants={componnetVairant}
              initial="hidden"
              animate="visible"
              transition={{ delay: 2.5, duration: 0.5 }}
              style={{fontFamily:"Calibri"}}
            >
              Hi, I'm <span className="tilt " >Mayuri Soni</span>
            </motion.h1>
            <motion.h3 variants={componnetVairant}
              initial="hidden"
              animate="visible"
              transition={{ delay: 3.2, duration: 0.5 }}
              className="animatedText">
              And I'm{" "}
              <span style={{fontFamily:"cursive"}}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Front-End Developer")
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString("Freelance Developer")
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString("Front-End Developer")
                      .start();
                  }}
                />
              </span>
            </motion.h3>
            <motion.p variants={componnetVairant}
              initial="hidden"
              animate="visible"
              transition={{ delay: 3.5, duration: 0.5 }} 
              className='nunito '>
              I'm a freelance web developer with a passion for creating
              beautiful and functional websites that help businesses succeed
              online.
            </motion.p>{" "}
          </div>
        </div>
      </Grid>
    
   
    
  );
};

export default Intropart;
