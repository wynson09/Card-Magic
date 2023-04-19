import React, { useState } from "react";
import TransitionEffect from "./TransitionEffect";
import step1 from "../assets/step1.png";
import step2 from "../assets/step2.png";
import step3 from "../assets/step3.png";
import step4 from "../assets/step4.png";

const Instruction = () => {
  const [getStarted, setGetStarted] = useState(false);
  const [getStep1, setGetStep1] = useState(false);
  const [getStep2, setGetStep2] = useState(false);
  const [getStep3, setGetStep3] = useState(false);

  const instruction = [
    {
      id: 1,
      Title: "Get Started",
      Text: `To get started on this card trick game, you need to click the play
              button on the home page.`,
      Image: step1,
      option: getStarted,
    },
    {
      id: 2,
      Title: "Step 1",
      Text: `You need to choose one card and remember it. You can swipe left or
              right to see all the cards. If you are ready, click the START
              button below. Then the cards will start to shuffle.`,
      Image: step2,
      option: getStep1,
    },
    {
      id: 3,
      Title: "Step 2",
      Text: `There are 3 rounds of card shuffle, and for each round you need to choose a group where your card belongs.`,
      Image: step3,
      option: getStep2,
    },
    {
      id: 4,
      Title: "Step 3",
      Text: `After three rounds of shuffled cards, the AI will guess what card you’ve chosen. Click the "CLICK ME" button to reveal your card. The accuracy of the AI's guessing what card you are thinking about depends on how honest you are in choosing to which group your card belongs.`,
      Image: step4,
      option: getStep3,
    },
  ];

  const toggle = (value) => {
    if (value === 1) {
      setGetStarted(!getStarted);
    } else if (value === 2) {
      setGetStep1(!getStep1);
    } else if (value === 3) {
      setGetStep2(!getStep2);
    } else {
      setGetStep3(!getStep3);
    }
  };
  return (
    <section className="h-auto max-h-[4000px] mt-[100px] flex justify-start items-center flex-col mb-[100px]">
      <TransitionEffect />
      <div className="spinner mb-[50px] text-[50px] tracking-widest superSmall:text-[45px]">
        <span>I</span>
        <span>N</span>
        <span>S</span>
        <span>T</span>
        <span>R</span>
        <span>U</span>
        <span>C</span>
        <span>T</span>
        <span>I</span>
        <span>O</span>
        <span>N</span>
      </div>
      <article className="flex flex-col gap-10 mt-[50px]">
        {instruction.map(({ id, Title, Text, Image, option }) => {
          return (
            <div
              className={
                !option
                  ? "box-shadow max-w-[900px] w-[auto] cursor-pointer content-hide mx-[20px]"
                  : "box-shadow max-w-[900px] w-[auto] cursor-pointer content-show mx-[20px]"
              }
              onClick={() => toggle(id)}
              key={id}
            >
              <h3 className="text-white text-[25px] ml-10 my-5">{Title}</h3>
              <div className="flex justify-between items-center p-5 gap-5 midMax:flex-col midMax:items-center">
                <p className="text-white text-2xl">{Text}</p>
                <img src={Image} alt="step" className="w-[300px]" />
              </div>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Instruction;
