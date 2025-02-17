import React from 'react'
import profile from '../../assets/profile.jpg'

const About = () => {
    return (
        <div id='about' className='about flex flex-col items-center gap-20 overflow-hidden'>
            <div data-aos="fade-left" className='about-title mb-20'>
                <h1 className='text-5xl lg:text-7xl font-medium'>About me</h1>
            </div>
            <div className='about-section  lg:flex gap-20'>
                <div className="about-left w-1/3">
                    <img className='hidden lg:block' src={profile} alt="" />
                </div>
                <div className="about-right flex flex-col gap-20">
                    <div data-aos="fade-right" className="about-para flex flex-col text-lg lg:text-2xl gap-5">
                        <p>A front-end developer designs interactive, visually engaging web interfaces using HTML, CSS, and JavaScript, enhancing user experience.</p>
                        <p>A front-end developer creates dynamic web pages, focusing on user experience through the use of HTML, CSS, and JavaScript, React & Next.js </p>
                    </div>
                    <div data-aos="fade-left" className="about-skills flex flex-col gap-5">
                        <div className="about-skill flex gap-10 items-center transition"><p className='min-w-52 text-md lg:text-xl font-medium'>HTML5 & Css3</p> <hr style={{ width: '90% ' }} /></div>
                        <div className="about-skill flex gap-10 items-center transition"><p className='min-w-52 text-md lg:text-xl font-medium'>Tailwind & Bootstrap</p> <hr style={{ width: '70%' }} /></div>
                        <div className="about-skill flex gap-10 items-center transition"><p className='min-w-52 text-md lg:text-xl font-medium'>Javascript ES6</p> <hr style={{ width: '85%' }} /></div>
                        <div className="about-skill flex gap-10 items-center transition"><p className='min-w-52 text-md lg:text-xl font-medium'>React</p> <hr style={{ width: '65%' }} /></div>
                        <div className="about-skill flex gap-10 items-center transition"><p className='min-w-52 text-md lg:text-xl font-medium'>Next.js</p> <hr style={{ width: '60%' }} /></div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-right" className="about-achievements lg:flex">
                <div className="about-achievement mt-3">
                    <h1 className='text-4xl text-center'>3+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr className="vertical-hr hidden lg:block" />
                <div className="about-achievement mt-3">
                    <h1 className='text-4xl text-center'>20+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr className="vertical-hr hidden lg:block" />
                <div className="about-achievement mt-3">
                    <h1 className='text-4xl text-center'>15+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    )
}
export default About
