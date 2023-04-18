import React from "react";
import TransitionEffect from "./TransitionEffect";
import card from "../assets/card.png";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <section className="h-screen relative flex justify-center items-center flex-col extraSmall:h-auto extraSmall:mt-[100px] extraSmall:mb-[50px]">
      <TransitionEffect />
      <h1 className="text-[60px] text-white -mt-[100px] border-b-[6px] extraSmall:mt-0">
        About
      </h1>
      <article className="flex justify-center items-center gap-10 flex-wrap extraSmall:gap-1 mt-[100px]">
        <div>
          <div className="tilt-box-wrap extraSmall:w-[300px]">
            <span className="t_over"></span>
            <span className="t_over"></span>
            <span className="t_over"></span>
            <span className="t_over"></span>
            <span className="t_over"></span>
            <span className="t_over"></span>
            <span className="t_over"></span>
            <span className="t_over"></span>
            <span className="t_over"></span>
            <div className="tilt-box">
              <img src={card} alt="card" />
            </div>
          </div>
        </div>
        <div>
          <p className="text-white from-inherit text-[20px] max-w-lg min-w-fit extraSmall:text-center m-5">
            {/* This is a 21-card magic trick. I used to play this card trick on my
            cousins and friends when I was a kid. Every time I play this card
            trick, they are confused and, at the same time, amazed by it. Since
            I am practicing my programming skills. I decided to implement a card
            trick like I used to play when I was a kid. I am happy with the
            output of this card trick project because it is working 100%. The
            design is simple, but I think it{`’`}s okay for a 2-day project. */}
            <Typewriter
              className="TW"
              words={[
                `This is a 21-card magic trick. I used to play this card trick on my
            cousins and friends when I was a kid. Every time I play this card
            trick, they are confused and, at the same time, amazed by it. Since
            I am practicing my programming skills. I decided to implement a card
            trick like I used to play when I was a kid. I am happy with the
            output of this card trick project because it is working 100%. The
            design is simple, but I think it’s okay for a 2-day project.`,
              ]}
              cursor
              cursorStyle="l"
              typeSpeed={50}
              delaySpeed={1000}
            />
          </p>
        </div>
      </article>
    </section>
  );
};

export default About;
