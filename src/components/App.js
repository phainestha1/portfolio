import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../routes/Home";
import Ideas from "../routes/Ideas";
import Profile from "../routes/Profile";
import Mbti from "../routes/Mbti";

import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route expact path="/" element={<Home />} />
        <Route expact path="/profile" element={<Profile />} />
        <Route expact path="/ideas" element={<Ideas />} />
        <Route expact path="/mbti" element={<Mbti />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
