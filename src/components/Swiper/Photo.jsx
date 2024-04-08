import React from "react";
import Swiper from "./App.jsx";
import { Fade } from "react-awesome-reveal";
import { FaCamera } from "react-icons/fa";
import { FaCameraRetro } from "react-icons/fa";
import { FaUnsplash } from "react-icons/fa";

function Photo() {
  return (
    <div className="mt-6">
      <div className="flex flex-col items-center justify-center w-full h-full gap-3 px-4 py-2 text-lightText">
        <Fade delay={420} direction="up">
          <div className="relative flex items-center gap-3 mt-4 text-3xl font-bold text-center text-gray-200 md:mt-5 md:text-6xl">
            <FaCamera className="text-yellow-400 animate-pulse" />
            <h1>Photography</h1>
          </div>
        </Fade>
        <div className="w-5/6 h-1 mb-3 bg-gray-200 animate-pulse md:w-1/2"></div>
      </div>

      <Fade delay={420}>
        <div className="container flex flex-col gap-4 pb-3 mt-3 md:flex-row">
          <button
            type="button"
            className="inline-flex items-center justify-center w-full gap-3 px-5 py-3 font-medium text-center rounded-lg text-gray-50 bg-rose-600 md:text-xl hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300"
            onClick={() =>
              window.open("https://mri-shot.vercel.app/", "_blank")
            }
          >
            <FaCameraRetro size={27} />
            Visit My Website MriShot
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center w-full gap-3 px-5 py-3 font-medium text-center text-black bg-gray-200 rounded-lg md:text-xl hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300"
            onClick={() =>
              window.open("https://unsplash.com/@sumonta056", "_blank")
            }
          >
            <FaUnsplash size={27} />
            Follow Me on Unsplash
          </button>
        </div>
      </Fade>

      <div>
        <Fade delay={220}>
          <Swiper />
        </Fade>
      </div>
    </div>
  );
}

export default Photo;
