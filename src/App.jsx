import React from 'react'
import NavComponent from './components/NavComponent';
import FooterComponent from './components/FooterComponent';
import Card from './components/CardComponent'
import Data from './components/CardComponent'
const App = () => {

const Data = {
    id: 1,
    image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/knuford-free-template-408x322.jpg.avif',
    title: 'Knuford',
    categories: 'Business, Agency',
    template: 'Portfolio',
  };

  return (
    <>
    <section >
      <NavComponent/>
      <FooterComponent/>
      <h1>helow</h1>
      <h2>helow</h2>
      <h3>helow</h3>
      <h4>helow</h4>
      <h5>helow</h5>
      <p className='description'>From intuitive design features to built-in marketing tools, discover the complete solution for building an online portfolio that stands out.</p>
    </section>
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card {...Data} />
    </div>
    </>

  )
}

export default App
