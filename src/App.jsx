import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Mywork from './components/Mywork/Mywork';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='w-[90%] mx-auto'>
      <Hero />
      <About/>
      <Services/>
      <Mywork/>
      </div>
    </div>
  )
}

export default App
