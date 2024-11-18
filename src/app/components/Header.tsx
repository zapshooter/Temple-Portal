'use client';

import Link from "next/link";
import Image from "next/image";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState, useEffect } from 'react';

const Header = () => {
    // Manage header bg change on scroll
    const [scrollY, setScrollY] = useState(0);
    const [headerBackground, setHeaderBackground] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For the Top Places dropdown

    // Update the scroll position state when the user scrolls
    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (scrollY > 0) {
            setHeaderBackground('bg-hotpink shadow-md');
        } else {
            setHeaderBackground('');
        }
    }, [scrollY]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className={`py-5 px-[5%] top-0 w-full fixed flex items-center justify-between z-20 ${headerBackground} special-font`}>
            <Link href="/" className="w-[80px]">
                <Image src="/img/logoo.png" width={80} height={80} alt="logo" className="w-full" loading="eager" />
            </Link>

            <section className={`${isMenuOpen ? 'left-0' : 'left-[-100%]'} nav-transition md:transition-none absolute top-[68px] md:top-0 md:left-0 md:relative md:flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between gap-4 lg:gap-8 text-[16px] text-litedark font-bold bg-orange md:bg-transparent pl-[5%] md:pl-auto py-10 md:py-0 w-full md:w-auto`}>
                
                {/* Top Places Dropdown */}
                {/* <div className="relative group">
                    <a href="#destination" className="hover:text-white md:hover:text-orange transition delay-200" onClick={toggleDropdown}>
                        Top Places
                    </a> */}
                    {/* Dropdown Menu */}
                    {/* <div className={`absolute left-0 mt-2 py-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform-gpu scale-95 group-hover:scale-100 transition-all duration-300 ease-in-out ${isDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} md:group-hover:block`}>
                        <Link href="/states/uttarakhand" className="block px-4 py-2 hover:bg-gray-200">Uttarakhand</Link>
                        <Link href="/states/rajasthan" className="block px-4 py-2 hover:bg-gray-200">Rajasthan</Link>
                        <Link href="/states/tamilnadu" className="block px-4 py-2 hover:bg-gray-200">Tamil Nadu</Link>
                        <Link href="/states/kerala" className="block px-4 py-2 hover:bg-gray-200">Kerala</Link>
                        <Link href="/states/madhya-pradesh" className="block px-4 py-2 hover:bg-gray-200">Madhya Pradesh</Link>
                    </div>
                </div> */}

                

                <Link href="/prominent-saints" className="hover:text-white md:hover:text-orange transition delay-200" onClick={toggleMenu}>
      Prominent Saints of India
    </Link>



                <Link href="/origin-of-hinduism" className="hover:text-white md:hover:text-orange transition delay-200" onClick={toggleMenu}>
            Hinduism & philosophy
    </Link>

    <Link href="/religious-texts" className="hover:text-white md:hover:text-orange transition delay-200" onClick={toggleMenu}>
      Religious texts
    </Link>

                <Link href="/temples" className="hover:text-white md:hover:text-orange transition delay-200" onClick={toggleMenu}>
                Prominent Temples of India
                </Link>
                <Link href="/dosndonts" className="hover:text-white md:hover:text-orange transition delay-200" onClick={toggleMenu}>
                Beliefs and festivals
                </Link>
            </section>

            {isMenuOpen ? 
            <IoClose className="block md:hidden text-4xl text-orange font-bold cursor-pointer" onClick={toggleMenu} />
            : 
            <IoMenu className="block md:hidden text-4xl text-orange font-bold cursor-pointer" onClick={toggleMenu} />
            }
        </nav>
    );
}

export default Header;
