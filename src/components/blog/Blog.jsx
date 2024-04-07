import React from "react";
import BlogCard from "./BlogCard";
import "./blog.css";
import { Fade } from "react-awesome-reveal";
import { MdStickyNote2 } from "react-icons/md";
import { FaMedium } from "react-icons/fa";
import { FaDev } from "react-icons/fa";
const Blog = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full gap-3 px-4 py-2 text-lightText">
        <Fade delay={420} direction="up">
          <div className="relative flex items-center gap-2 mt-4 text-3xl font-bold text-center text-gray-200 md:mt-5 md:text-6xl">
            <MdStickyNote2 className="text-yellow-400 animate-pulse" />
            <h1 className="">Blogs</h1>
          </div>
        </Fade>
        <div className="w-5/6 h-1 mb-3 bg-gray-200 animate-pulse md:w-1/2"></div>
      </div>

      <Fade>
        <div className="container flex flex-col gap-4 pb-3 mt-3 md:flex-row">
          <button
            type="button"
            className="inline-flex items-center justify-center w-full gap-3 px-5 py-3 font-medium text-center text-black bg-gray-200 rounded-lg nd:text-xl hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300"
            onClick={() => window.open("https://medium.com/@sumontasaha80", "_blank")}
          >
            <FaMedium size={27} />
            Read Articles on Medium
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center w-full gap-3 px-5 py-3 font-medium text-center text-black bg-gray-200 rounded-lg md:text-xl hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300"
            onClick={() => window.open("https://dev.to/sumonta056", "_blank")}
          >
            <FaDev size={27} />
            Follow Me on Dev.To
          </button>
        </div>
      </Fade>

      <section className="pt-4 blog">
        <div className="container grid2">
          <BlogCard />
        </div>
      </section>
    </>
  );
};

export default Blog;
