import React from "react";
import Heading from "../common/heading/Heading";
import "./about.css";
import { homeAbout } from "../Data";
import Awrapper from "./Awrapper";
import Me from "../Banner/assets/Cover1.jpg";
import { Fade, Slide } from "react-awesome-reveal";
import { FaWpforms } from "react-icons/fa";

const AboutCard = () => {
  return (
    <>
      <section className="container aboutHome">
        <div className="flex flex-wrap border-2 flexSB border-teal2">
          <div className="left row">
            <img src={Me} alt="" />
          </div>
          <div className="right row">
            <Fade>
              <Heading
                subtitle="Sumonta Saha Mridul"
                title="Sotfware Engineer"
              />
            </Fade>
            <div className="mt-5">
              {homeAbout.map((val) => {
                return (
                  <Slide direction="up">
                    <div className="justify-between gap-2 mt-6 item md:flex">
                      <div className="flex m-2">{val.cover}</div>
                      <div>
                        <h2 className="pl-2 mb-1 text-base font-semibold lgl:text-xl">
                          {val.title}
                        </h2>
                        <p className="pl-2 text-sm lgl:text-base">{val.desc}</p>
                      </div>
                    </div>
                  </Slide>
                );
              })}

              <Slide direction="up">
                <button className="flex justify-center w-full px-4 py-5 mt-2 text-teal-600 transition duration-500 ease-in-out transform bg-gray-100 shadow-lg cursor-pointer hover:scale-110 hover:bg-teal-600 hover:text-white">
                  <FaWpforms size={30} />
                  <h2 className="pl-2 mb-1 text-base font-semibold lgl:text-xl">
                    My Curriculum Vitae (CV)
                  </h2>
                </button>
              </Slide>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <Awrapper />
      </div>
    </>
  );
};

export default AboutCard;
