import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About_guidexa from "../components/About_guidexa";
import Working from "../components/Working";
import CareerCard from "../components/CareerCard";
import Footer from "../components/Footer";
import AInavigation from "../components/AInavigation";

const cardsData = [
  {
    image:
      "https://i.pinimg.com/736x/6a/bd/48/6abd48b5414bcc4d2c5ed3a9f3c6e8c5.jpg",
    heading: "AI-Based Suggessions",
    paragraph: " Get tool, skill, and learning resource suggestions via chat.",
  },
  {
    image:
      "https://i.pinimg.com/1200x/40/76/fc/4076fcfe75ac91635549cda45a12fe6a.jpg",
    heading: "Discover Career Tracks",
    paragraph: "Choose from curated paths like Web Dev, AI, Marketing...",
  },
  {
    image:
      "https://i.pinimg.com/736x/bc/b3/56/bcb356dc096cff446a06e5d4ee98d778.jpg",
    heading: "Track Your Progress",
    paragraph: "Stay on track with personalized checklists and guidance.",
  },
];

function Home() {
  return (
    <>
      <Navbar />
      <AInavigation />
      <Hero />
      <About_guidexa />
      <Working cards={cardsData} />
      <CareerCard />
      <Footer />
    </>
  );
}

export default Home;
