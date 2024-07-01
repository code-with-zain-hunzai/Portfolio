import React from 'react';

const Navbar = () => {
    return (
        <div className='w-full'>
            <div className='navbar flex justify-between items-center w-[90%] mx-auto mt-5'>
                <a href="">ZaiN</a>
                <ul className="nav-menu flex items-center list-none gap-16 text-lg">
                    <li>Home</li>
                    <li>About me</li>
                    <li>Services</li>
                    <li>Portfolio</li>
                    <li>contact</li>
                </ul>
                <div className="nav-connect px-4 py-2 rounded-3xl cursor-pointer text-lg transform transition-transform duration-500 hover:scale-105"
                     style={{ backgroundImage: 'linear-gradient(267deg, #AD7C25 0.36%, #B923E1 102.06%)' }}>
                    Connect-with-me
                </div>
            </div>
        </div>
    );
}

export default Navbar;
