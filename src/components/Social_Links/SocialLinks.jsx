import React from "react";
import { useMediaQuery } from "react-responsive";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaMedium,
  FaFacebook,
  FaEnvelope,
  FaYoutube,
} from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

function SocialLinks() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 500px)" });

  const socialLinks = [
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={35} />
        </>
      ),
      href: "https://www.linkedin.com/in/mridul-saha-3a8b3a1b1/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={35} />
        </>
      ),
      href: "https://github.com/Sumonta056",
    },
    {
      id: 3,
      child: (
        <>
          Instagram <FaInstagram size={35} />
        </>
      ),
      href: "https://www.instagram.com/_sumonta_saha_/",
    },
    {
      id: 4,
      child: (
        <>
          Facebook <FaFacebook size={35} />
        </>
      ),
      href: "https://www.facebook.com/sumonta.mridul/",
    },
    {
      id: 5,
      child: (
        <>
          Medium <FaMedium size={35} />
        </>
      ),
      href: "https://medium.com/@sumontasaha80",
    },
    {
      id: 6,
      child: (
        <>
          YouTube <FaYoutube size={35} />
        </>
      ),
      href: "https://www.youtube.com/@sumontasaha5638",
    },
    {
      id: 7,
      child: (
        <>
          YouTube <FaEnvelope size={35} />
        </>
      ),
      href: "mailto:sumontasaha80@gmail.com",
    },
  ];

  const linksToShow = isSmallScreen ? socialLinks.slice(0, 6) : socialLinks;

  return (
    <div className="flex-col top-[11%] md:top-[23%] absolute left-0">
      <ul>
        {linksToShow.map(({ id, child, href }) => (
          <Fade delay={500}>
            <li
              key={id}
              className="flex items-center rounded justify-center mb-2 w-56 px-8 pr-4 bg-zinc-600 text-2xl h-14 ml-[-160px] hover:ml-[-10px] hover:rounded-md duration-300 cursor-pointer"
            >
              <a
                href={href}
                className="flex items-center justify-between w-full text-white"
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          </Fade>
        ))}
      </ul>
    </div>
  );
}

export default SocialLinks;
