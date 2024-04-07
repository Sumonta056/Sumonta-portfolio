import React from "react";
import Heading from "../common/heading/Heading";
import "./about.css";
import { homeAbout } from "../dummydata";
import Awrapper from "./Awrapper";
import Me from "../Banner/assets/Cover1.jpg";
import { FaBookOpen } from "react-icons/fa";
const AboutCard = () => {
  return (
    <>
      <section className="container aboutHome">
        <div className="flex flex-wrap border-2 flexSB border-teal2">
          <div className="left row">
            <img src={Me} alt="" />
          </div>
          <div className="right row">
            <Heading subtitle="LEARN ANYTHING" title="Sumonta Saha Mridul" />
            <div className="mt-5">
              {homeAbout.map((val) => {
                return (
                  <div className="gap-2 mt-6 w-rjustify-between item md:flex">
                    <div className="flex m-2">
                      <FaBookOpen className="text-5xl" size={60} />
                    </div>
                    <div>
                      <h2 className="pl-2 mb-3 text-base font-semibold lgl:text-xl">
                        {val.title}
                      </h2>
                      <p className="pl-2 text-sm lgl:text-base">{val.desc}</p>
                    </div>
                  </div>
                );
              })}
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
