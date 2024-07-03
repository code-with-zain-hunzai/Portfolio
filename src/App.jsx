import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Mywork from './components/Mywork/Mywork';
import Conatct from './components/Contact/Conatct';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='w-[90%] mx-auto'>
      <Hero />
      <About/>
      <Services/>
      <Mywork/>
      <Conatct/>
      <Footer/>
      </div>
    </div>
  )
}

export default App
