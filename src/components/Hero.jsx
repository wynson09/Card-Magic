import React from "react";
import { useNavigate } from "react-router-dom";
import card from "../assets/card-img.png";
import TransitionEffect from "./TransitionEffect";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="flex justify-center items-center h-screen midMax:h-full midMax:my-[200px] wh:my-[200px]">
      <TransitionEffect />
      <article className="w-auto flex justify-between items-center gap-20 mx-[20px] midMax:flex-col-reverse midMax:justify-center">
        <div className="text-white w-[500px] extraSmall:w-[300px] midMax:text-center">
          <h1 className="text-[40px]">
            <span className="text-[#4db5ff] font-medium">Magic</span> is
            believing in yourself.{" "}
            <span className="italic">IF YOU CAN DO THAT</span>.{" "}
            <span className="text-[#4db5ff] font-medium">You</span> can make
            anything happen
          </h1>
          <h3 className="text-[20px] text-gray-400 mt-5">
            Would you like to see a magic trick?
          </h3>
          <div className="flex justify-start items-center midMax:justify-center">
            <button
              className="button mt-5"
              onClick={(e) => {
                e.stopPropagation();
                navigate("/game");
              }}
            >
              <span>PLAY</span>
            </button>
            <div className="loader-wrapper midMax:hidden">
              <div className="packman"></div>
              <div className="dots">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={card} alt="card" width="500" />
        </div>
      </article>
    </section>
  );
};

export default Hero;
