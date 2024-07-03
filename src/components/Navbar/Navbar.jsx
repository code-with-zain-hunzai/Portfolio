import React from 'react';
import zain from '../../assets/zain.svg'
import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {

    const [menu, setmenu] = useState("home")
    return (
        <div className='w-full'>
            <div className='navbar flex justify-between items-center w-[90%] mx-auto mt-5'>
                <img src={zain} alt="" />
                <ul className="nav-menu flex items-center list-none gap-16 text-lg">
                    <li className='hover:cursor-pointer'> <AnchorLink className='anchor-link ' offset={50} href='#home'><p onClick={() => setmenu("home")}>Home</p></AnchorLink>{menu === "home" ? <hr className='nav-line' /> : <></>}</li>
                    <li className='hover:cursor-pointer'> <AnchorLink className='anchor-link ' offset={50} href='#about'><p onClick={() => setmenu("about me")}>About me</p></AnchorLink>{menu === "about me" ? <hr className='nav-line' /> : <></>}</li>
                    <li className='hover:cursor-pointer'> <AnchorLink className='anchor-link ' offset={50} href='#services'><p onClick={() => setmenu("services")}>Services</p></AnchorLink>{menu === "services" ? <hr className='nav-line' /> : <></>}</li>
                    <li className='hover:cursor-pointer'> <AnchorLink className='anchor-link ' offset={50} href='#portfolio'><p onClick={() => setmenu("portfolio")}>Portfolio</p></AnchorLink>{menu === "portfolio" ? <hr className='nav-line' /> : <></>}</li>
                    <li className='hover:cursor-pointer'> <AnchorLink className='anchor-link ' offset={50} href='#contact'><p onClick={() => setmenu("contact")}>Contact</p></AnchorLink>{menu === "contact" ? <hr className='nav-line' /> : <></>}</li>
                </ul>
                <div className="nav-connect px-4 py-2 rounded-3xl cursor-pointer text-lg transform transition-transform duration-500 hover:scale-105"
                    style={{ backgroundImage: 'linear-gradient(267deg, #AD7C25 0.36%, #B923E1 102.06%)' }}>
                        <AnchorLink className='anchor-link ' offset={50} href='#contact'>
                    Connect-with-me
                    </AnchorLink>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
