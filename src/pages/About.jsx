
import React from 'react'
import NavComponent from '../components/NavComponent'
import HeroBanner from '../components/AboutComponents/HeroBanner'
import About_Project from '../components/AboutComponents/About_Project'
import Our_Vision from '../components/AboutComponents/Our_Vision'
import Our_Mission from '../components/AboutComponents/Our_Mission'
import Mentor from '../components/AboutComponents/Mentor'
import Our_Team from '../components/AboutComponents/Our_Team'
import Our_Values from '../components/AboutComponents/Our_Values'
import Contact_Us from '../components/AboutComponents/Contact_Us'

export default function About() {
  return (
    <>
      <header>
        <NavComponent/>
      </header>
      
      <main>
        <HeroBanner/>
        <About_Project/>
        <Our_Vision/>
        <Our_Mission/>
        <Mentor/>
        <Our_Team/>
        <Our_Values/>
        <Contact_Us/>
      </main>

    </>
  );
}
