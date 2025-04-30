import React from 'react'
import Navbar from "./component/navbar/Navbar"
import Intropart from './component/Intropart/intropart'
import AboutMe from './component/About/AboutMe'
import Skills from './component/Skills/Skills'
import Projects from './component/Projects/Projects'
import ContactUs from './component/contact us/contactus'
import Footer from './component/Footer/footer'
const index = () => {
  return (<>
    <Navbar/>
    <Intropart id="home" />
     <AboutMe id="about" />
     <Skills id="skills" />
     <Projects id="projects" />
     <ContactUs id="contact" />
     <Footer/>
   </>)
}

export default index