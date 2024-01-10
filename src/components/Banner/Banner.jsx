import React from "react";
import DPImage from "./assets/dp.png";
import { Typewriter } from "react-simple-typewriter";
import Navbar from "../Navbar/Navbar";

const Banner = () => {
  return (
    <main className="md:px-12 md:py-12 bg-bodyColor">
      <section className="relative md:min-h-[650px] min-h-[450px] bg-gradient-to-r from-[#34363be8] to-[#2f3133] w-full md:rounded-xl shadow-md">
        <div className="">
          <Navbar/>
          <div className="md:min-h-[650px] sm:min-h-[450px] flex justify-center pt-4">
            <div className="">
              <img
                className="img-shadow relative z-[0] w-[530px] md:animate-updown sm:animate-updownS"
                src={DPImage}
                alt="mridul"
              />
            </div>
            <div className="md:hidden"></div>
          </div>
        </div>
        <h1 className="text-center text-[70px] md:text-[140px] xl:text-[140px]  text-white uppercase font-bold absolute bottom-0 w-full z-3 text-shadow ">
          <Typewriter
            words={["Hi! I am", "Sumonta", "Saha", "Mridul"]}
            loop={5}
            cursor
            cursorStyle="."
            typeSpeed={120}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
      </section>
    </main>
  );
};

export default Banner;
