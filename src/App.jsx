import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='w-[90%] mx-auto'>
      <Hero />
      <About/>
      </div>
    </div>
  )
}

export default App
