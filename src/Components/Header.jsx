import React, { useState } from 'react';
import menuopen from '../assets/menu_open.svg';
import { Link } from 'react-scroll';

function Header({ setSideBar }) {
    const [headervalue, setHeaderValue] = useState('home');

    return (
        <div className="h-14 w-full flex justify-between py-2 px-2 lg:px-10 xl:px-14 fixed z-30 bg-black text-white">
            {/* Logo */}
            <Link to="home" smooth={true} offset={-60} duration={500}>
                <div className="h-full text-xl md:text-lg lg:text-3xl font-semibold cursor-pointer">My Portfolio</div>
            </Link>

            {/* All Header Buttons */}
            <div className="h-0 w-0 md:h-auto md:w-auto invisible md:visible flex">
                <li className="headerBtn text-base list-none relative">
                    <Link to="home" onClick={() => setHeaderValue('home')} smooth={true} offset={-60} duration={500} className={`underlinearrow ${headervalue === 'home' ? 'solidunderline' : ''} cursor-pointer`}>
                        Home
                    </Link>
                </li>
                <li className="headerBtn text-base list-none relative md:ml-5 lg:ml-12">
                    <Link to="aboutus" onClick={() => setHeaderValue('aboutus')} smooth={true} offset={-80} duration={500} className={`underlinearrow ${headervalue === 'aboutus' ? 'solidunderline' : ''} cursor-pointer`}>
                        About Me
                    </Link>
                </li>
                <li className="headerBtn text-base list-none relative md:ml-5 lg:ml-12">
                    <Link to="latestwork" onClick={() => setHeaderValue('latestwork')} smooth={true} offset={-60} duration={500} className={`underlinearrow ${headervalue === 'latestwork' ? 'solidunderline' : ''} cursor-pointer`}>
                        My Work
                    </Link>
                </li>
                
                <li className="headerBtn text-base list-none relative md:ml-5 lg:ml-12">
                    <Link to="contact" onClick={() => setHeaderValue('contact')} smooth={true} offset={-80} duration={500} className={`underlinearrow ${headervalue === 'contact' ? 'solidunderline' : ''} cursor-pointer`}>
                        Contact
                    </Link>
                </li>
            </div>

            {/* Mobile Menu Icon */}
            <img onClick={() => setSideBar(true)} className="h-10 w-10 md:h-0 md:w-0 absolute right-4 visible md:invisible cursor-pointer" src={menuopen} alt="Open menu" />

            {/* Resume & Contact Me Buttons */}
            <div className="h-0 w-0 md:h-10 md:w-auto">
                <a href="https://drive.google.com/file/d/15LNzpXtVUYGO8j68JckXWw5Z9lowzEAB/view" className="h-auto w-auto md:visible">
                    <button className="btn md:h-8 md:w-20 lg:h-10 lg:w-28 md:mr-2 md:text-sm lg:text-base font-bold border-2 border-[#f10f8f] rounded-full">
                        Resume
                    </button>
                </a>
                <Link to="contact" smooth={true} offset={-80} duration={500}>
                    <button className="btn md:h-8 md:w-24 lg:h-10 lg:w-36 md:text-sm lg:text-base border-2 bg-[#f10f8f] rounded-full">
                        Contact Me
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Header;
