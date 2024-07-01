import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
const App = () => {
  return (
    <div>
      <Navbar />
      <div className='w-[90%] mx-auto'>
      <Hero />
      </div>
    </div>
  )
}

export default App
