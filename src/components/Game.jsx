import React, { useState } from "react";
import TransitionEffect from "./TransitionEffect";
import Header from "./Header";
import card1 from "../card-imgs/1.png";
import card2 from "../card-imgs/2.png";
import card3 from "../card-imgs/3.png";
import card4 from "../card-imgs/4.png";
import card5 from "../card-imgs/5.png";
import card6 from "../card-imgs/6.png";
import card7 from "../card-imgs/7.png";
import card8 from "../card-imgs/8.png";
import card9 from "../card-imgs/9.png";
import card10 from "../card-imgs/10.png";
import card11 from "../card-imgs/11.png";
import card12 from "../card-imgs/12.png";
import card13 from "../card-imgs/13.png";
import card14 from "../card-imgs/14.png";
import card15 from "../card-imgs/15.png";
import card16 from "../card-imgs/16.png";
import card17 from "../card-imgs/17.png";
import card18 from "../card-imgs/18.png";
import card19 from "../card-imgs/19.png";
import card20 from "../card-imgs/20.png";
import card21 from "../card-imgs/21.png";
import shaffle from "../assets/shaffle.gif";

const Game = () => {
  const [startGame, setStartGame] = useState(false);
  const [count, setCount] = useState(1);
  const [group1, setGroup1] = useState([]);
  const [group2, setGroup2] = useState([]);
  const [group3, setGroup3] = useState([]);
  const [answer, setAnswer] = useState([]);
  const [final, setFinal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [round, setRound] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [loader, setLoader] = useState(false);

  let card = [
    { number: 1, image: card1 },
    { number: 2, image: card2 },
    { number: 3, image: card3 },
    { number: 4, image: card4 },
    { number: 5, image: card5 },
    { number: 6, image: card6 },
    { number: 7, image: card7 },
    { number: 8, image: card8 },
    { number: 9, image: card9 },
    { number: 10, image: card10 },
    { number: 11, image: card11 },
    { number: 12, image: card12 },
    { number: 13, image: card13 },
    { number: 14, image: card14 },
    { number: 15, image: card15 },
    { number: 16, image: card16 },
    { number: 17, image: card17 },
    { number: 18, image: card18 },
    { number: 19, image: card19 },
    { number: 20, image: card20 },
    { number: 21, image: card21 },
  ];

  const cardStart = (cards) => {
    let g1 = [];
    let g2 = [];
    let g3 = [];
    for (let i = 0; i < card.length; i++) {
      if (
        i === 0 ||
        i === 3 ||
        i === 6 ||
        i === 9 ||
        i === 12 ||
        i === 15 ||
        i === 18
      ) {
        g1.push(cards[i]);
      } else if (
        i === 1 ||
        i === 4 ||
        i === 7 ||
        i === 10 ||
        i === 13 ||
        i === 16 ||
        i === 19
      ) {
        g2.push(cards[i]);
      } else {
        g3.push(cards[i]);
      }
    }
    setStartGame(true);
    setGroup1(g1);
    setGroup2(g2);
    setGroup3(g3);
  };

  const cardShaffle = (value) => {
    let cardHolder = [];
    if (value === 1) cardHolder = [...group2, ...group1, ...group3];
    else if (value === 2) cardHolder = [...group1, ...group2, ...group3];
    else cardHolder = [...group1, ...group3, ...group2];
    cardStart(cardHolder);
    setCount(count + 1);

    if (count === 3) {
      setLoader(true);
      setFinal(true);
      setRound(false);
      loaderMode();
      setAnswer(cardHolder[10].image);
    } else if (count === 2) {
      setRound(true);
    }
  };

  const loadingMode = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 4800);
  };

  const loaderMode = () => {
    setTimeout(() => setLoader(false), 5000);
  };

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <section>
      <TransitionEffect />
      <Header />
      <article className="flex justify-center items-center my-[120px]">
        {final ? (
          <div>
            {loader ? (
              <div className="mt-[150px]">
                <div className="circ">
                  <div className="load">Thinking . . . </div>
                  <div className="hands"></div>
                  <div className="body"></div>
                  <div className="head">
                    <div className="eye"></div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex justify-center items-center flex-col">
                  <h1 className="text-4xl font-semibold text-[#4db5ff] my-5">
                    Your Card
                  </h1>
                  <p className="text-lg font-medium text-white">
                    I know what you're thinking.
                  </p>
                  <section className="w-[300px] flex justify-center flex-col mt-10 items-center">
                    <div className="card">
                      <div
                        className={
                          isActive ? "content content-active" : "content"
                        }
                      >
                        <div className="back">
                          <div className="back-content">
                            <button
                              className="btn"
                              onClick={() => toggleMenu()}
                            >
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span> CLICK ME
                            </button>
                          </div>
                        </div>
                        <div className="front flex justify-center items-center">
                          <div className="front-content flex items-center justify-center">
                            <img
                              src={answer}
                              alt="card"
                              className="object-contain w-[98%] z-10"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      className="button my-12"
                      onClick={() => {
                        toggleMenu();
                        setStartGame(false);
                        setFinal(false);
                        setCount(1);
                      }}
                    >
                      <span>PLAY AGAIN</span>
                    </button>
                  </section>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div>
            {!startGame ? (
              <section className="flex justify-center items-center flex-col">
                <h1 className="text-4xl font-semibold text-[#4db5ff] mb-2">
                  Let's Play a Card Trick
                </h1>
                <p className="mb-[50px] text-lg font-medium text-white">
                  Enjoy playing!
                </p>
                <ul className="gap-4 flex flex-wrap justify-center items-center lg:w-[1100px] md:w-[700px]">
                  {card.map((item) => {
                    return (
                      <li
                        className="neumorphism-3 w-[130px] p-1 rounded-xl overflow-hidden"
                        key={item.number}
                      >
                        <img src={item.image} alt="card" />
                      </li>
                    );
                  })}
                </ul>
                <div className="neumorphism-2 my-10 p-5 w-[300px] rounded-2xl flex justify-between items-center flex-col text-white">
                  <p className="flex flex-wrap mt-5">
                    Please think of one card and remember it. If you are ready,
                    click the START button below.
                  </p>
                  <button
                    className="button my-5"
                    onClick={() => {
                      loadingMode();
                      cardStart(card);
                    }}
                  >
                    <span>START</span>
                  </button>
                </div>
              </section>
            ) : (
              <div>
                {!loading ? (
                  <section className="flex flex-col text-center">
                    <h1 className="text-4xl font-semibold text-[#4db5ff] mb-2">
                      {!round ? `Round ${count}` : `Final Round`}
                    </h1>
                    <p className="mb-[50px] text-lg font-medium text-white">
                      Choose which group your card belongs to!
                    </p>
                    <article className="flex relative justify-evenly items-center flex-row flex-wrap gap-10">
                      <div className="flex items-center flex-col neumorphism-2 py-10 rounded-3xl">
                        <ul className="gap-4 flex flex-wrap w-[380px] justify-center ">
                          {group1.map((item) => {
                            return (
                              <li
                                className="shadow-xl w-[100px]"
                                key={item.number}
                              >
                                <img src={item.image} alt="card" />
                              </li>
                            );
                          })}
                        </ul>
                        <button
                          className="neumorphism-1 py-3 px-10 rounded-lg text-white mt-10 text-[20px] hover:px-16 hover:scale-110 transition-all"
                          onClick={() => {
                            loadingMode();
                            cardShaffle(1);
                          }}
                        >
                          Group 1
                        </button>
                      </div>
                      <div className="flex items-center flex-col neumorphism-2 py-10 rounded-3xl">
                        <ul className="gap-4 flex flex-wrap w-[380px] justify-center ">
                          {group2.map((item) => {
                            return (
                              <li
                                className="shadow-xl w-[100px]"
                                key={item.number}
                              >
                                <img src={item.image} alt="card" />
                              </li>
                            );
                          })}
                        </ul>
                        <button
                          className="neumorphism-1 py-3 px-10 rounded-lg text-white mt-10 text-[20px] hover:px-16 hover:scale-110 transition-all"
                          onClick={() => {
                            loadingMode();
                            cardShaffle(2);
                          }}
                        >
                          Group 2
                        </button>
                      </div>
                      <div className="flex items-center flex-col neumorphism-2 py-10 rounded-3xl">
                        <ul className="gap-4 flex flex-wrap w-[380px] justify-center ">
                          {group3.map((item) => {
                            return (
                              <li
                                className="shadow-xl w-[100px]"
                                key={item.number}
                              >
                                <img src={item.image} alt="card" />
                              </li>
                            );
                          })}
                        </ul>
                        <button
                          className="neumorphism-1 py-3 px-10 rounded-lg text-white mt-10 text-[20px] hover:px-16 hover:scale-110 transition-all"
                          onClick={() => {
                            loadingMode();
                            cardShaffle(3);
                          }}
                        >
                          Group 3
                        </button>
                      </div>
                    </article>
                  </section>
                ) : (
                  <div>
                    {loading && (
                      <div className="h-[100px] -mt-[150px] midMax:mt-[50px]">
                        <img src={shaffle} alt="shaffle" />
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </article>
    </section>
  );
};

export default Game;
