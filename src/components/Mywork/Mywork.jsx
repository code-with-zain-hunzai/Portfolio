import React from 'react';
import { workData } from './workData';
import { FaArrowRightLong } from "react-icons/fa6";
const Mywork = () => {
    return (
        <div id='portfolio' className='mywork flex flex-col justify-center items-center gap-20'>
            <div className='mywork-title'>
                <h1 className='text-4xl font-bold '>My latest work</h1>
            </div>
            <div className="mywork-container">
                {workData.map((work, index) => {
                    return <img key={index} src={work.w_img} alt="" />
                })}
            </div>
            <div className="mywork-showmore flex gap-4 border border-white items-center px-7 py-5 rounded-full cursor-pointer font-semibold text-xl mb-20 transition">
                <p>Show More</p>
                <FaArrowRightLong />
            </div>
        </div>
    )
}

export default Mywork
