import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Instruction from "../components/Instruction";
import Rules from "../components/Rules";
import { Route, Routes } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/*" element={<Hero />} />
        <Route path="/instruction" element={<Instruction />} />
        <Route path="/rules" element={<Rules />} />
      </Routes>
    </div>
  );
};

export default Home;
