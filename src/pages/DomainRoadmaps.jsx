import React from "react";
import Navbar from "../components/Navbar";
import DomainHeading from "../components/DomainHeading";
import DomainStages from "../components/DomainStages";
import AiTools from "../components/AiTools";
import GeneralTips from "../components/GeneralTips";
import Footer from "../components/Footer";
import AInavigation from "../components/AInavigation";
function DomainRoadmaps() {
  return (
    <>
      <Navbar />
      <AInavigation />
      <DomainHeading />
      <DomainStages />
      <AiTools />
      <GeneralTips />
      <Footer />
    </>
  );
}

export default DomainRoadmaps;
