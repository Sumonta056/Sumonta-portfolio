import React from "react";
import "./Mobile.css";
import { Link } from "react-scroll";
const MobileNav = ({ isOpen, toggleMenu }) => {
  function handleButtonClick() {
    window.location.href = "https://sumonta056.github.io/";
  }

  function handleButtonClick1() {
    window.location.href = "https://github.com/Sumonta056";
  }
  return (
    <div className="z-50">
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <h1
            className="text-xl font-bold text-yellow-400 uppercase md:text-2xl"
            onClick={handleButtonClick1}
          >
            @
            <span className="text-sm font-normal text-white md:text-xl">
              Sumonta056
            </span>
          </h1>
          <ul>
            <li>
              <Link
                activeClass="active"
                className="menu-item"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="menu-item"
                to="project"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="menu-item"
                to="achivement"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
              >
                Achievement
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="menu-item"
                to="photo"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
              >
                Photography
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="menu-item"
                to="blog"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="menu-item"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
              >
                Contact Me
              </Link>
            </li>

            <button className="contact-btn" onClick={handleButtonClick}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.63605 5.63605C7.19815 4.07395 9.73081 4.07395 11.2929 5.63605L14.1213 8.46448C15.6834 10.0266 15.6834 12.5592 14.1213 14.1213C13.7308 14.5119 13.0976 14.5119 12.7071 14.1213C12.3166 13.7308 12.3166 13.0976 12.7071 12.7071C13.4882 11.9261 13.4882 10.6597 12.7071 9.87869L9.87869 7.05026C9.09764 6.26922 7.83131 6.26922 7.05026 7.05026C6.26922 7.83131 6.26922 9.09764 7.05026 9.87869L7.75737 10.5858C8.1479 10.9763 8.14789 11.6095 7.75737 12C7.36685 12.3905 6.73368 12.3905 6.34316 12L5.63605 11.2929C4.07395 9.73081 4.07395 7.19815 5.63605 5.63605ZM11.2929 9.8787C11.6834 10.2692 11.6834 10.9024 11.2929 11.2929C10.5119 12.074 10.5119 13.3403 11.2929 14.1213L14.1213 16.9498C14.9024 17.7308 16.1687 17.7308 16.9498 16.9498C17.7308 16.1687 17.7308 14.9024 16.9498 14.1213L16.2427 13.4142C15.8521 13.0237 15.8521 12.3905 16.2427 12C16.6332 11.6095 17.2663 11.6095 17.6569 12L18.364 12.7071C19.9261 14.2692 19.9261 16.8019 18.364 18.364C16.8019 19.9261 14.2692 19.9261 12.7071 18.364L9.8787 15.5356C8.3166 13.9735 8.3166 11.4408 9.8787 9.8787C10.2692 9.48817 10.9024 9.48817 11.2929 9.8787Z"
                  fill="#000000"
                />
              </svg>
              Old Portfolio
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
