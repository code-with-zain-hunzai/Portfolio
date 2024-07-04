import React  from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import hero from '../../assets/hero.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import 'aos/dist/aos.css';
const Hero = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
}, []);

  return (
    <div data-aos="fade-right"  id='home' className='hero flex items-center flex-col gap-7 overflow-hidden'>
      <img className='mt-32 w-72 rounded-full' src={hero} alt="" />
      <div data-aos="fade-left" className='text-center items-center justify-center flex'>
      <h1 className='w-[90%] lg:w-[70%] text-3xl lg:md:text-5xl 2xl:text-8xl text-center font-medium'>
        <span
          style={{
            backgroundImage: 'linear-gradient(267deg, #AD7C25 0.36%, #B923E1 102.06%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textFillColor: 'transparent',
          }}
        >
          I'm Zain,
        </span>
        FrontEnd Developer base on pakistan</h1>
        </div>
      <p className='text-md lg:text-xl w-3/5 lg:w-[50%] text-center'>I am a FrontEnd Developer from hunza with the 3-4 years of experience.</p>
      <div className='hero-action flex items-center gap-3 lg:gap-6 lg:text-xl mb-12 font-medium'>
        <div  data-aos="fade-right" className="hero-connect px-5 py-3  rounded-full"
        style={{background:'linear-gradient(267deg, #AD7C25 0.36%, #B923E1 102.06%)'}}>
           <AnchorLink className='anchor-link ' offset={50} href='#contact'>
          Connect with me</AnchorLink></div>
        <div className="hero-resume px-5 py-3 border rounded-full cursor-pointer hover:border-[#B415FF]">My resume</div>
      </div>
    </div>
  )
}

export default Hero
