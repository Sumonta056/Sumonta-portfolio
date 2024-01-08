import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ sidebar, setSidebar }) => {
  return (
    <div className="absolute top-0 left-0 w-full py-6 text-white z-20">
      <div className="container">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold uppercase ">
            Mri<span className="font-normal text-2xl">Shot</span>
          </h1>
          <ul className="space-x-10 text-xl hidden lg:flex">
            <li>Home</li>
            <li>Projects</li>
            <li>Achievment</li>
            <li>Photography</li>
            <li>Blogs</li>
            <li>Contact</li>
          </ul>
          <div onClick={() => setSidebar(!sidebar)}>
            <GiHamburgerMenu className="text-3xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
