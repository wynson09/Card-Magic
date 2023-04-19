import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Instruction from "../components/Instruction";
import About from "../components/About";
import { Route, Routes } from "react-router-dom";
import Game from "../components/Game";

const Home = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/*" element={<Hero />} />
        <Route path="/instruction" element={<Instruction />} />
        <Route path="/about" element={<About />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
};

export default Home;
