import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import Ideas from "../routes/Ideas";
import Profile from "../routes/Profile";
import WhyMe from "../routes/WhyMe";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route expact path="/" element={<Home />} />
        <Route expact path="/profile" element={<Profile />} />
        <Route expact path="/ideas" element={<Ideas />} />
        <Route expact path="/mbti" element={<WhyMe />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
