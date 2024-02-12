import React from "react";
import DPImage from "./assets/dp.png";
import { Typewriter } from "react-simple-typewriter";
import Navbar from "../Navbar/Navbar";
import { Slide } from "react-awesome-reveal";

const Banner = () => {
  return (
    <main className="md:px-12 md:py-6 bg-bodyColor">
      <section className="relative md:min-h-[650px] min-h-[450px] bg-gradient-to-r from-[#34363be8] to-[#2f3133] w-full md:rounded-xl shadow-md">
        <div className="">
          <Slide direction="down" delay={300}>
            <Navbar />
          </Slide>
          <div className="md:min-h-[600px] sm:min-h-[450px] flex justify-center pt-4">
            <Slide direction="up" delay={300}>
              <img
                className="img-shadow relative z-[0] w-[530px] md:animate-updown sm:animate-updownS"
                src={DPImage}
                alt="mridul"
              />
            </Slide>
            <div className="md:hidden"></div>
          </div>
        </div>
        <Slide delay={400}>
          <h1 className="text-center text-[70px] md:text-[140px] xl:text-[140px]  text-white uppercase font-bold absolute bottom-0 w-full z-3 text-shadow ">
            <Typewriter
              words={["Hi! I am", "Sumonta", "Saha", "Mridul"]}
              loop={5}
              cursor
              cursorStyle="."
              typeSpeed={200}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
        </Slide>
      </section>
    </main>
  );
};

export default Banner;
