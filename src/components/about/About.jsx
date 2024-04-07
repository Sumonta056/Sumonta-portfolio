import React from "react";
import "./about.css";
import AboutCard from "./AboutCard";
import { FaTrophy } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
const About = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full gap-3 px-4 py-2 mb-2 text-lightText">
        <Fade delay={420} direction="down">
          <div className="relative flex items-center gap-2 mt-4 text-3xl font-bold text-center text-gray-200 md:mt-5 md:text-6xl">
            <FaTrophy className="text-yellow-400 animate-pulse" />
            <h1>About Me</h1>
          </div>
        </Fade>
        <div className="w-5/6 h-1 mb-3 bg-gray-200 animate-pulse md:w-1/2"></div>
      </div>
      <AboutCard />
    </>
  );
};

export default About;
