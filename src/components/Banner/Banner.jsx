import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Navbar from "../Navbar/Navbar";
import { Slide } from "react-awesome-reveal";
import SocialLinks from "../Social_Links/SocialLinks";
import { useMediaQuery } from "react-responsive";
import BackgroundImage from "./assets/Cover1.jpg";

const Banner = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 500px)" });

  return (
    <main className="md:px-12 md:py-6 bg-bodyColor">
      {/* <section className="relative md:min-h-[650px] min-h-[450px] bg-gradient-to-r from-[#34363be8] to-[#2f3133] w-full md:rounded-xl shadow-md">
       */}
      <section
        className="relative md:min-h-[650px] min-h-[450px]  w-full md:rounded-xl shadow-md"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundPosition: window.innerWidth < 768 ? "left" : "center", // Shifts the background image to the left on small screens
          backgroundRepeat: "no-repeat", // Prevents the background image from repeating
          backgroundSize: "cover", // Makes the background image cover the entire container
        }}
      >
        <div className="">
          {isSmallScreen ? (
            <>
              <Navbar />
            </>
          ) : (
            <>
              <Slide direction="down" delay={300}>
                <Navbar />
              </Slide>
            </>
          )}
          <div className="md:min-h-[600px] sm:min-h-[450px] flex justify-end pt-4">
            <Slide direction="up" delay={300}>
              {/* <img
                className="img-shadow relative z-[0] w-[530px] md:animate-updown sm:animate-updownS"
                src={DPImage}
                alt="mridul"
              /> */}
            </Slide>
            <div className="md:hidden"></div>
          </div>
        </div>
        <Slide delay={400}>
          <h1 className="text-center text-[70px] md:text-[100px]  text-white uppercase font-bold absolute bottom-0 w-full z-3 text-shadow ">
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
      <SocialLinks />
    </main>
  );
};

export default Banner;
