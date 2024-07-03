import React from 'react';
import hero from '../../assets/hero.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () => {
  return (
    <div id='home' className='hero flex items-center flex-col gap-7'>
      <img className='mt-32 w-72 rounded-full' src={hero} alt="" />
      <h1 className='w-[70%] md:text-5xl 2xl:text-8xl text-center font-medium'>
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
      <p className='text-xl w-[50%] text-center'>I am a FrontEnd Developer from hunza with the 3-4 years of experience.</p>
      <div className='hero-action flex items-center gap-6 text-xl mb-12 font-medium'>
        <div className="hero-connect px-5 py-3  rounded-full"
        style={{background:'linear-gradient(267deg, #AD7C25 0.36%, #B923E1 102.06%)'}}>
           <AnchorLink className='anchor-link ' offset={50} href='#contact'>
          Connect with me</AnchorLink></div>
        <div className="hero-resume px-5 py-3 border rounded-full cursor-pointer hover:border-[#B415FF]">My resume</div>
      </div>
    </div>
  )
}

export default Hero
