import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../routes/desktop/Home";
import Ideas from "../routes/desktop/Ideas";
import Profile from "../routes/desktop/Profile";
import Mbti from "../routes/desktop/Mbti";
import { AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import MobHome from "../routes/mobile/MobHome";
import MobProfile from "../routes/mobile/MobProfile";
import MobIdeas from "../routes/mobile/MobIdeas";
import MobMbti from "../routes/mobile/MobMbti";

const App = () => {
  const location = useLocation();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  // const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      {isDesktopOrLaptop && (
        <Routes location={location} key={location.pathname}>
          <Route expact path="/" element={<Home />} />
          <Route expact path="/profile" element={<Profile />} />
          <Route expact path="/ideas" element={<Ideas />} />
          <Route expact path="/mbti" element={<Mbti />} />
        </Routes>
      )}
      {isTabletOrMobile && (
        <Routes location={location} key={location.pathname}>
          <Route expact path="/" element={<MobHome />} />
          <Route expact path="/profile" element={<MobProfile />} />
          <Route expact path="/ideas" element={<MobIdeas />} />
          <Route expact path="/mbti" element={<MobMbti />} />
        </Routes>
      )}
    </AnimatePresence>
  );
};

export default App;
