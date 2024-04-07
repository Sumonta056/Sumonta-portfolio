import { FaBookOpen } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaUnsplash } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

import Blog1 from "./blog/assets/blog-1.webp";
import Blog2 from "./blog/assets/blog-2.webp";
import Blog3 from "./blog/assets/blog-3.webp";
import Blog4 from "./blog/assets/blog-4.webp";
import Blog5 from "./blog/assets/blog-5.webp";
import Blog6 from "./blog/assets/blog-6.webp";

export const homeAbout = [
  {
    id: 1,
    cover: <FaBolt size={60} />,
    title: "Full-Stack Web Developer",
    desc: "Experienced in developing websites using React and other languages.",
  },
  {
    id: 2,
    cover: <FaTrophy size={60} />,
    title: "Hackathon Enthusiast",
    desc: "Love to explore new fields of software technology through hackathons to gain experience.",
  },
  {
    id: 3,
    cover: <FaBookOpen size={60} />,
    title: "Software Engineering Student",
    desc: "Currently studying in SWE, SUST with a CGPA of 3.83 out of 4 until the 6th semester.",
  },
  {
    id: 4,
    cover: <FaCamera size={60} />,
    title: "Blogger and Photographer",
    desc: "Occasionally write blogs on software-related topics on Medium and do casual photography.",
  },
];

export const awrapper = [
  {
    cover: <FaGithub />,
    data: "99+",
    title: "GitHub Followers",
  },
  {
    cover: <FaStar />,
    data: "130+",
    title: "GitHub Repo Stars",
  },

  {
    cover: <FaUnsplash />,
    data: "4100+",
    title: "Unsplash Views",
  },
  {
    cover: <BsLinkedin />,
    data: "750+",
    title: "Linkedin Follower",
  },
  {
    cover: <FaInstagram />,
    data: "340+",
    title: "Instagram Follower",
  },

  {
    cover: <FaTrophy />,
    data: "10+",
    title: "Competition Finalist",
  },

  {
    cover: <FaMedium />,
    data: "53+",
    title: "Medium Followers",
  },
  {
    cover: <FaEye />,
    data: "5300+",
    title: "Medium Blog Views",
  },
];

export const blog = [
  {
    id: 1,
    type: "541  Reads",
    date: "APR, 2023",
    com: "884 Views",
    title: "Learn Factory Design Pattern with Example in Java",
    desc: "A Factory Pattern says subclasses are responsible to create the instance of the class.",
    cover: Blog1,
    link: "https://medium.com/p/ba150444c8a7",
  },
  {
    id: 2,
    type: "442 Reads",
    date: "JUN, 2023",
    com: "771 Views",
    title: "The Power of the “Command Design Pattern” in Java",
    desc: "The Command design pattern is a that provides a way to encapsulate a request as an object.",
    cover: Blog2,
    link: "https://medium.com/p/d2f42b0f9d1d",
  },
  {
    id: 3,
    type: "376 Reads",
    date: "MAR, 2023",
    com: "769 Views",
    title: "Basic Things About HTTP Cookies and How It Works",
    desc: "An HTTP (Web) cookie is a small piece of data that a server sends to a user’s web browser.",
    cover: Blog3,
    link: "https://medium.com/p/1c1290f31f7b",
  },
  {
    id: 4,
    type: "272 CLAPS",
    date: "APR, 2023",
    com: "548 Views",
    title: "Learn “Flexbox” in CSS For Frontend Web Development",
    desc: "The justify-content property is used in CSS to align and distribute flex items along the main axis of container.",
    cover: Blog4,
    link: "https://medium.com/p/6ca1165c2a64",
  },
  {
    id: 5,
    type: "202 Reads",
    date: "MAR, 2023",
    com: "409 Views",
    title: "SOLID Principles: The Key to Writing Clean & Quality Code",
    desc: "The SOLID principles are a set of five design principles that aim to help developers create software systems.",
    cover: Blog5,
    link: "https://medium.com/p/9a8f88ea0a8",
  },
  {
    id: 6,
    type: "100 Claps",
    date: "MAR, 2023",
    com: "132 Views",
    title: "First Hackathon Experience and Some Tips for Beginners",
    desc: "I recently took part in the Brain Station 23 Hackathon at the Orbitax SUST SWE Technovent 2023, powered by DSi",
    cover: Blog6,
    link: "https://medium.com/p/945063ae8e66",
  },
];
