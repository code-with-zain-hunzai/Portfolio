import React from 'react';
import {ServicesData} from './ServicesData';
import { FaArrowRightLong } from "react-icons/fa6";

const Services = () => {
    return (
        <div id='services' className='services flex flex-col justify-center items-center gap-20 '>
            <div className='services-title'>
                <h1 className='text-4xl font-semibold'>My Services</h1>
            </div>
            <div className='services-container'>
                {ServicesData.map((service, index) => (
                    <div key={index} className="services-format flex flex-col justify-center gap-5 p-14 border border-white rounded-lg transition-all cursor-pointer">
                        <h3 className='font-semibold text-3xl'>{service.serviceNo}</h3>
                        <h2 className='text-4xl font-extrabold'>{service.serviceName}</h2>
                        <p>{service.serviceDesc}</p>
                        <div className="services-readmore flex items-center gap-5">
                            <p>Read More</p>
                            <FaArrowRightLong />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;