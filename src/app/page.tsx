"use client"

import { useState } from "react";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import FunPage from "./components/FunPage";
import Experience from "./components/Experience";

export default function Home() {
  const [currentTab, setCurrentTab] = useState<number>(0);
  return (
    <div className="overflow-none">
      <Navbar setCurrentTab={setCurrentTab} />
      <div className="component-container">
        {
          currentTab === 0 &&
          <AboutMe />
        }
        {
          currentTab === 1 &&
          <Projects />
        }
        {
          currentTab === 2 &&
          <Experience />
        }
        {
          currentTab === 3 &&
          <FunPage />
        }
      </div>
    </div>
  )
}