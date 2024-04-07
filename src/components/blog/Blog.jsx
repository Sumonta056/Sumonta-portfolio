import React from "react";
import BlogCard from "./BlogCard";
import "./blog.css";
import { Fade } from "react-awesome-reveal";
import { MdStickyNote2 } from "react-icons/md";
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
      <section className="pt-4 blog">
        <div className="container grid2">
          <BlogCard />
        </div>
      </section>
    </>
  );
};

export default Blog;
