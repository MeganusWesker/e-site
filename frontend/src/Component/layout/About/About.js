import React from "react";
import "./About.css";
import { Button, Typography } from "@material-ui/core";
import logo from '../../../images/logo.png';
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/metropolite000?igshid=YmMyMTA2M2Y=";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <img className="imgofAbout" src={logo} alt="" />
            <Typography>MetroPolite</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <h2 className="aboutH2"> Give you're Health a New Style</h2>.
            <span>
               we care about you're health that's why we are here with India's No.1 100% Chemical free Natrual Products for Your Breakfase Lunch and Dinner
            </span>

            <span className="aboutSpan">
            FSSAI Lic No. :
            </span>

            <span className="aboutSpan1">
            20211209103066047
            </span>

            
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Follow Us</Typography>

            <a className="about-icon" href=" https://instagram.com/metropolite000?igshid=YmMyMTA2M2Y=" target='_blank' rel="noreferrer"><i className="fab fa-instagram"></i></a> 
            <a className="about-icon" href="https://www.facebook.com/metropolite000/" target='_blank' rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a className="about-icon" href=" https://twitter.com/metropolite000?t=r6KVTS_aM3Z_g6rKmcCPqg&s=08" target='_blank' rel="noreferrer"><i className="fab fa-twitter"></i></a>
  	 				<a className="about-icon" href="https://www.linkedin.com/in/metro-polite-68a429238/" target='_blank' rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;