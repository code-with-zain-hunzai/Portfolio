import React from 'react'
import hero from '../../assets/hero.jpg'
const Hero = () => {
  return (
    <div className='hero flex items-center flex-col gap-7'>
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
      <p className='text-3xl w-[50%] text-center'>I am a FrontEnd Developer from hunza with the 3-4 years of experience.</p>
      <div className='hero-action'>
        <div className="hero-connect">connect with me</div>
        <div className="hero-resume">my resume</div>
      </div>
    </div>
  )
}

export default Hero
