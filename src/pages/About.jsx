import React from "react";
import NavComponent from "../components/NavComponent";
import HeroBanner from "../components/AboutComponents/HeroBanner";
import About_Project from "../components/AboutComponents/About_Project";
import Our_Vision from "../components/AboutComponents/Our_Vision";
import Our_Mission from "../components/AboutComponents/Our_Mission";
import Mentor from "../components/AboutComponents/Mentor";

export default function About() {
  return (
    <>
      <main>
        <HeroBanner />
        <About_Project />
        <Our_Vision />
        <Our_Mission />
        <Mentor />
      </main>
    </>
  );
}
