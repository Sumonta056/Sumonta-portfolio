import React from "react";
import "./about.css";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full gap-3 px-4 py-2 mb-2 text-lightText">
        <div className="w-5/6 h-1 mb-3 bg-gray-200 animate-pulse md:w-1/2"></div>
      </div>
      <AboutCard />
    </>
  );
};

export default About;
