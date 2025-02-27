import React from 'react'
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
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card {...Data} />
    </div>
    </>

  )
}

export default App
