import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isActive, setActive] = useState("false");
  const [isClick, setClick] = useState("false");

  const toggleMenu = () => {
    setClick(!isClick);
    setActive(!isActive);
  };
  return (
    <header className="fixed top-0 right-0 bg-[#121111] left-0 h-[80px] flex justify-center z-10 neumorphism-1">
      <section className="flex justify-between items-center mx-[20px] w-[1024px] wideMax:w-[100%]">
        <Link to="/#">
          <img src={logo} alt="logo" className="w-[60px]" />
        </Link>
        <div>
          <button
            id="hamburger-button"
            className={
              isActive
                ? "relative h-8 w-8 cursor-pointer text-3xl md:hidden"
                : "toggle-btn relative h-8 w-8 cursor-pointer text-3xl md:hidden"
            }
            onClick={() => toggleMenu()}
          >
            <div className="absolute top-4 -mt-1 h-1 w-8 rounded bg-white transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']"></div>
          </button>
          <nav className="hidden text-white md:flex gap-5 text-[20px]">
            <Link to="/" className="nav_style my-4 text-center">
              Home
            </Link>
            <Link to="/about" className="nav_style my-4 text-center">
              About
            </Link>
            <Link to="/instruction" className="nav_style my-4 text-center">
              Instruction
            </Link>
          </nav>
        </div>
      </section>
      <section
        id="mobile-menu"
        className={
          isClick
            ? "hidden top-[80px] absolute w-full origin-top animate-open-menu flex-col justify-center bg-black text-2xl text-white"
            : "flex top-[80px] absolute w-full origin-top animate-open-menu flex-col justify-center bg-black text-2xl text-white"
        }
        onClick={() => toggleMenu()}
      >
        <button className="self-end px-6 text-8xl"></button>
        <nav className="flex min-h-screen flex-col items-center py-8">
          <Link to="/" className="nav_style my-4 text-center">
            Home
          </Link>
          <Link to="/about" className="nav_style my-4 text-center">
            About
          </Link>
          <Link to="/instruction" className="nav_style my-4 text-center">
            Instruction
          </Link>
        </nav>
      </section>
    </header>
  );
};

export default Header;
