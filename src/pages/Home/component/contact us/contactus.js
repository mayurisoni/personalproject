import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./contactus.css";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { motion } from "framer-motion";
import Resume from "../contact us/RESUME.pdf";

const contactus = () => {
  const validationSchema = Yup.object({
    Name: Yup.string().required("Required!"),
    subject: Yup.string().required("Required!"),
    email: Yup.string()
      .email("Please enter a valid email address.")
      .required("Required!"),

    message: Yup.string().required("Required!"),
  });
  const dance = {
    "@keyframes dance": {
      "0%": {
        transform: "scale(1)",
      },
      "50%": {
        transform: "scale(1.2)",
      },
      "100%": {
        transform: "scale(1)",
      },
    },
  };
  return (
    <div id="contact">
      <Formik
        initialValues={{ Name: "", email: "", subject: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={async (values, onSubmitProps) => {
          console.log(values);
          const res = await axios.post(
            "https://sheet.best/api/sheets/ee0fa45b-4a37-47e1-a07e-bce470ad7a21",
            values
          );
          console.log(res);
          onSubmitProps.resetForm();
        }}
      >
        {(formik) => {
          console.log(formik);
          return (
            <Grid container className="contactusbody">
              <Grid
                item
                lg={6}
                md={12}
                sm={12}
                xs={12}
                className="contactTextPart"
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
                  Get In Touch
                </Typography>
                <Typography className="nunito" variant="div" color="white">
                  {" "}
                  Although I’m currently looking for any new opportunities, my
                  inbox is always open. Whether you have a question or just want
                  to say hi, I’ll try my best to get back to you!
                </Typography>
                <div
                  style={{
                    padding: "10px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "left",
                  }}
                >
                  <TfiEmail
                    style={{
                      color: "white",
                      height: "30px",
                      width: "30px",
                      marginRight: "10px",
                    }}
                  />
                  <Typography
                    className="nunito contactemail"
                    variant="h6"
                    color="white"
                  >
                    {" "}
                    <a
                      href="mailto:Sonimayuri403@gmail.com"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      {" "}
                      Sonimayuri403@gmail.com
                    </a>
                  </Typography>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "20px",
                    padding: "10px",
                  }}
                >
                  <a href="https://github.com/mayurisoni" target={"_blank"}>
                    <BsGithub
                      style={{
                        color: "#f5af19",
                        height: "30px",
                        width: "30px",
                      }}
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/mayuri_soni/"
                    target={"_blank"}
                  >
                    <BsInstagram
                      style={{
                        color: "#f5af19",
                        height: "30px",
                        width: "30px",
                      }}
                    />
                  </a>
                  <a
                    href="https://twitter.com/MayuriS48142288"
                    target={"_blank"}
                  >
                    <BsTwitter
                      style={{
                        color: "#f5af19",
                        height: "30px",
                        width: "30px",
                      }}
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mayuri-soni/"
                    target={"_blank"}
                  >
                    <BsLinkedin
                      style={{
                        color: "#f5af19",
                        height: "30px",
                        width: "30px",
                      }}
                    />
                  </a>
                </div>
                <motion.div style={{ padding: "5px" }}>
                  <Link
                    href={Resume}
                    download="RESUME.pdf"
                    component={Button}
                    sx={{
                      backgroundColor: "#f5af19",
                      color: "white",
                      textDecoration: "none",
                      "&:active": {
                        transform: "scale(0.9)",
                      },
                      "&:hover": {
                        transform: "scale(1.1)",
                        transition: "transform 0.2s ease-in-out",
                        textShadow: "0px 0px 0px #f5af19",
                        boxShadow: "0px 0px 0px #f5af19",
                        backgroundColor: "#f5af19",
                        color: "white",
                      },
                    }}
                  >
                    {" "}
                    Download CV
                  </Link>
                </motion.div>
              </Grid>

              <Grid
                item
                lg={6}
                md={12}
                sm={8}
                xs={12}
                className="contactformPart"
              >
                <Box p={5}>
                  <Grid
                    container
                    spacing={1}
                    direction="column"
                    className="form"
                  >
                    <Grid item>
                      <Grid container direction="row" mb={2}>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                          <input
                            name="Name"
                            value={formik.values.Name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type={"text"}
                            id="Name"
                            placeholder="Your Name"
                            className="halfinput "
                          />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                          <input
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type={"text"}
                            id="Email"
                            placeholder="Your Email"
                            className="halfinput"
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <input
                        name="subject"
                        value={formik.values.subject}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        style={{
                          height: "50px",
                          width: "95%",
                          marginBottom: "20px",
                        }}
                        type={"text"}
                        id="Subject"
                        placeholder="Subject"
                      />
                      <br />
                      <textarea
                        name="message"
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        rows="10"
                        style={{ width: "95%", marginBottom: "20px" }}
                        type={"text"}
                        id="Message"
                        placeholder="Message"
                      />
                    </Grid>
                    <Button
                      type="submit"
                      onClick={formik.handleSubmit}
                      variant="contained"
                      sx={{ marginLeft: "7px", width: "160px", height: "50px" }}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          );
        }}
      </Formik>
    </div>
  );
};

export default contactus;
