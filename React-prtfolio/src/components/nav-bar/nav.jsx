import React, { useState } from "react";
import "./nav.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import pdf from "../assets/cv-updated.pdf"
const Navbar = ({ nav: { home, work, about, skills } }) => {
  const [nav, setNave] = useState(false);
  const clickHndler = () => {
    setNave(!nav);
  };
  return (
    <div className="fixed w-full">
      <nav
        className="
            w-full h-[80px] flex justify-between items-center px-4 text-[#ffffff] capitalize bg-[#4c2da2] "
      >
        <div className="n-left flex grow items-center gap-4">
          <div className="logo font-bold text-3xl ml-4 text-[#eb727c] ">
            <h1>logo</h1>
          </div>
        </div>
        <div className="n-right hidden md:flex grow text-xl items-center justify-center font-semibold	 ">
          <div className="n-list grow-4 ">
            <ul className="hidden md:flex gap-4 mr-8 cursor-pointer	">
              <li className="">
                <Link to="home" smooth={true} duration={500}>
                  {home}
                </Link>
              </li>

              <li className="">
                <Link to="Projects" smooth={true} duration={500}>
                  {work}
                </Link>
              </li>

              <li className="">
                <Link to="About" smooth={true} duration={500}>
                  {about}
                </Link>
              </li>
              <li className="">
                <Link to="skills" smooth={true} duration={500}>
                  {skills}
                </Link>
              </li>
              <li className="">
                <a
                  className="border-4 px-2 py-1 font-normal rounded-2xl hover:text-[#ffffff] hover:border-[#fcd303]  "
                  href={pdf}
                  download
                >
                  My Reasum
                </a>
              </li>
            </ul>
          </div>
          {/* <button className='Resume drop-shadow-lg'>Resume</button> */}
        </div>
        {/* hamburger menu */}
        <div className="md:hidden z-20" onClick={clickHndler}>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* mobile menu */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute z-10 bg-[#5031a9] bg-opacity-70 font-bold top-0 left-0 w-full  h-screen flex flex-col justify-center items-center cursor-pointer	"
          }
        >
          <li className=" py-6 text-4xl">
            <Link onClick={clickHndler} to="home" smooth={true} duration={500}>
              {home}
            </Link>
          </li>
          <li className=" py-6 text-4xl">
            <Link
              onClick={clickHndler}
              to="Projects"
              smooth={true}
              duration={500}
            >
              {work}
            </Link>
          </li>
          <li className=" py-6 text-4xl ">
            <Link onClick={clickHndler} to="About" smooth={true} duration={500}>
              {about}
            </Link>
          </li>
          <li onClick={clickHndler} className=" py-6 text-4xl">
            <Link
              onClick={clickHndler}
              to="skills"
              smooth={true}
              duration={500}
            >
              {skills}
            </Link>
          </li>
          {/* <li className=" py-6 text-4xl">{contact}</li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
