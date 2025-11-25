import React from "react";
import Hero from "./Components/Hero/Hero";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
    </main>
  );
};

export default App;
