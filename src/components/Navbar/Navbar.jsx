import React, { useRef, useState } from 'react';
import zain from '../../assets/zain.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { MdOutlineLightMode } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [menu, setMenu] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef();

    const openMenu = () => {
        setIsMenuOpen(true);
        menuRef.current.style.right = '0';
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        menuRef.current.style.right = '-350px';
    };

    return (
        <div className='w-full bg-gray-900'>
            <div className='navbar  flex justify-between items-center w-[90%] mx-auto py-3'>
                <img src={zain} alt="Logo" />
                <div onClick={openMenu} className={`nav-mob-open block lg:hidden ${isMenuOpen ? 'hidden' : 'block'}`}>
                    <lord-icon
                        src="https://cdn.lordicon.com/ipnwkgdy.json"
                        trigger="hover"
                        colors="primary:#fff">
                    </lord-icon>
                </div>
                <ul ref={menuRef} className="nav-menu flex items-center list-none gap-0 lg:gap-16 text-lg">
                    <div onClick={closeMenu} className={`nav-mob-close ${isMenuOpen ? 'block' : 'hidden'}`}>
                        <lord-icon
                            src="https://cdn.lordicon.com/zxvuvcnc.json"
                            trigger="hover"
                            colors="primary:#fff">
                        </lord-icon>
                    </div>
                    <li className='hover:cursor-pointer'>
                        <AnchorLink className='anchor-link' offset={50} href='#home'>
                            <p onClick={() => setMenu("home")}>Home</p>
                        </AnchorLink>
                        {menu === "home" && <hr className='nav-line' />}
                    </li>
                    <li className='hover:cursor-pointer'>
                        <AnchorLink className='anchor-link' offset={50} href='#about'>
                            <p onClick={() => setMenu("about me")}>About me</p>
                        </AnchorLink>
                        {menu === "about me" && <hr className='nav-line' />}
                    </li>
                    <li className='hover:cursor-pointer'>
                        <AnchorLink className='anchor-link' offset={50} href='#services'>
                            <p onClick={() => setMenu("services")}>Services</p>
                        </AnchorLink>
                        {menu === "services" && <hr className='nav-line' />}
                    </li>
                    <li className='hover:cursor-pointer'>
                        <AnchorLink className='anchor-link' offset={50} href='#portfolio'>
                            <p onClick={() => setMenu("portfolio")}>Portfolio</p>
                        </AnchorLink>
                        {menu === "portfolio" && <hr className='nav-line' />}
                    </li>
                    <li className='hover:cursor-pointer'>
                        <AnchorLink className='anchor-link' offset={50} href='#contact'>
                            <p onClick={() => setMenu("contact")}>Contact</p>
                        </AnchorLink>
                        {menu === "contact" && <hr className='nav-line' />}
                    </li>
                </ul>
                <div className='flex'>
                <div className="nav-connect hidden lg:block px-4 py-2 rounded-3xl cursor-pointer text-lg transform transition-transform duration-500 hover:scale-105"
                    style={{ backgroundImage: 'linear-gradient(267deg, #AD7C25 0.36%, #B923E1 102.06%)' }}>
                    <AnchorLink className='anchor-link' offset={50} href='#contact'>
                        Connect with me
                    </AnchorLink>
                    
                </div>
                <button
                    className="px-4 absolute top-4 right-14 md:top-5 md:right-2  items-center"
                    onClick={toggleDarkMode}
                >
                    {darkMode ? <FaMoon size={25} color='black'   /> :<MdOutlineLightMode size={25} color='white' />}
                </button>
                </div>
                
            </div>
        </div>
    );
};

export default Navbar;
