import React from "react";
import Home from "./pages/home";
import TermsConditions from "./pages/Terms&Conditions";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CareerOptions from "./pages/CareerOptions";
import DomainRoadmaps from "./pages/DomainRoadmaps";
import AboutPage from "./pages/AboutPage";
import AIpage from "./GuidexaAI/AIpage/AIpage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Terms&Conditions" element={<TermsConditions />} />
        <Route path="/CareerOptions" element={<CareerOptions />} />
        <Route path="/DomainRoadmaps" element={<DomainRoadmaps />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/AIpage" element={<AIpage />} />
      </Routes>
    </>
  );
}

export default App;
