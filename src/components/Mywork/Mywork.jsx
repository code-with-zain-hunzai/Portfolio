import React, { useState } from 'react';
import { workData } from './workData';
import { FaArrowRightLong } from "react-icons/fa6";

const Mywork = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div id='portfolio' className='mywork flex flex-col justify-center items-center gap-20 overflow-hidden'>
            <div data-aos="fade-left" className='mywork-title'>
                <h1 className='text-4xl font-bold'>My latest work</h1>
            </div>
            <div data-aos="fade-left" className="mywork-container grid grid-cols-2 lg:grid-cols-3 gap-10">
                {workData.map((work, index) => {
                    return (
                        <div 
                            key={index} 
                            className={`image-container ${hoveredIndex !== null && hoveredIndex !== index ? 'blurred' : ''}`} 
                            onMouseEnter={() => setHoveredIndex(index)} 
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <img src={work.w_img} alt="" className={`${hoveredIndex === index ? 'zoomed' : ''}`} />
                        </div>
                    )
                })}
            </div>
            <div data-aos="fade-right" className="mywork-showmore flex gap-4 border border-white items-center px-7 py-5 rounded-full cursor-pointer font-semibold text-xl mb-20 transition">
                <p>Show More</p>
                <FaArrowRightLong />
            </div>
        </div>
    )
}

export default Mywork;
