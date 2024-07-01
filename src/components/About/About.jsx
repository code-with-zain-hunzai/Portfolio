import React from 'react'
import profile from '../../assets/profile.jpg'

const About = () => {
    return (
        <div className='about flex flex-col items-center gap-202'>
            <div className='about-title mb-20'>
                <h1 className='text-7xl font-medium'>About me</h1>
            </div>
            <div className='about-section flex gap-20'>
                <div className="about-left w-1/3">
                    <img className='' src={profile} alt="" />
                </div>
                <div className="about-right flex flex-col gap-20">
                    <div className="about-para flex flex-col text-2xl gap-5 font-medium">
                        <p>A front-end developer designs interactive, visually engaging web interfaces using HTML, CSS, and JavaScript, enhancing user experience.</p>
                        <p>A front-end developer creates dynamic web pages, focusing on user experience through the use of HTML, CSS, and JavaScript, React & Next.js </p>
                    </div>
                    <div className="about-skills flex flex-col gap-5">
                        <div className="about-skill flex gap-10 items-center transition"><p className='min-w-52 text-xl font-medium'>HTML5 & Css3</p> <hr style={{ width: '80% ' }} /></div>
                        <div className="about-skill flex gap-10 items-center transition"><p className='min-w-52 text-xl font-medium'>Tailwind css & Bootstrap</p> <hr style={{ width: '75%' }} /></div>
                        <div className="about-skill flex gap-10 items-center transition"><p className='min-w-52 text-xl font-medium'>Javascript ES6</p> <hr style={{ width: '70%' }} /></div>
                        <div className="about-skill flex gap-10 items-center transition"><p className='min-w-52 text-xl font-medium'>React</p> <hr style={{ width: '65%' }} /></div>
                        <div className="about-skill flex gap-10 items-center transition"><p className='min-w-52 text-xl font-medium'>Next.js</p> <hr style={{ width: '60%' }} /></div>
                    </div>
                </div> 
            </div>
            <div className="about-achievements mt-14">
                <div className="about-achievement">
                    <h1 className='text-4xl text-center'>3+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1 className='text-4xl text-center'>20+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1 className='text-4xl text-center'>15+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    )
}
export default About
