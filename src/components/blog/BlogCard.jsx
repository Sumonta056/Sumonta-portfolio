import React from "react";
import { blog } from "../Data.js";
import { FcLike } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaMedium } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
const BlogCard = () => {
  return (
    <>
      {blog.map((val) => (
        <Fade delay={490} direction="left">
          <div className="rounded shadow">
            <div className="w-full h-48">
              <img src={val.cover} alt="" />
            </div>

            <div className="my-2 text">
              <div className="flex justify-between">
                <span className="flex gap-1">
                  <SlCalender color="gray" />
                  <label htmlFor=""> {val.date}</label>
                </span>
                <span className="flex gap-1">
                  <FcLike color="red" />
                  <label htmlFor="">{val.type}</label>
                </span>
                <span className="flex gap-1">
                  <FaEye size={19} />
                  <label htmlFor="">{val.com}</label>
                </span>
              </div>
              <h1>{val.title}</h1>
              <p className="mb-2">{val.desc}</p>
              <div className="flex justify-center mt-2 lg:mt-4">
                <a
                  href={val.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <button
                    type="button"
                    className="w-full justify-center text-white bg-[#24292F] hover:bg-[#295891]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#354168]/90 me-2 mb-2 gap-2"
                  >
                    <FaMedium size={23} />
                    Medium
                  </button>
                </a>
              </div>
            </div>
          </div>
        </Fade>
      ))}
    </>
  );
};

export default BlogCard;
