import React from 'react'
import NavComponent from './components/NavComponent';
import FooterComponent from './components/FooterComponent';
import { Card } from "flowbite-react";
import Blogs from './pages/Blog';
const App = () => {
  return (
    <section >
      <NavComponent/>
      <FooterComponent/>
      <h1>helow</h1>
      <h2>helow</h2>
      <h3>helow</h3>
      <h4>helow</h4>
      <h5>helow</h5>
      <p className='description'>From intuitive design features to built-in marketing tools, discover the complete solution for building an online portfolio that stands out.</p>
      <Blogs/>
    </section>
  )
}

export default App
