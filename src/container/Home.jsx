import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Instruction from "../components/Instruction";
import About from "../components/About";
import { Route, Routes } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/*" element={<Hero />} />
        <Route path="/instruction" element={<Instruction />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default Home;
