import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import yLogo from '../images/yt-logo.png';
import ytLogoMobile from '../images/yt-logo-mobile.png';
import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

import { Context } from '../context/contextApi';
import { useState } from 'react';
import { useContext } from 'react';
import Loader from "../shared/Loader";

// Header component for the application
const Header = () => {
    // State variables
    const [searchQuery, SetsearchQuery] = useState("");
    const { loading, mobileMenu, setMobileMenu, setselectCategories } = useContext(Context);
    const navigate = useNavigate();

    // Function to handle search input and navigation
    const searchQueryHandler = (event) => {
        if ((event?.key === "Enter" || event === "searchButton") && searchQuery?.length > 0) {
            navigate(`/searchResult/${searchQuery}`);
            setselectCategories(`${searchQuery}`);
        }
    }

    // Function to toggle mobile menu
    const mobileMenuToggle = () => {
        setMobileMenu(!mobileMenu);
    };

    // Extracting current pathname from the location
    const { pathname } = useLocation();
    const pageName = pathname?.split("/")?.filter(Boolean)?.[0];

    return (
        // Header container
        <div className='sticky p-6 top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-white dark:bg-black'>
            {loading && <Loader />} {/* Display loader if loading */}
            <div className='flex h-5 item-center'>
                {/* Mobile menu icon */}
                {pageName !== "video" && (
                    <div className='flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6' onClick={mobileMenuToggle}>
                        {mobileMenu ? (<CgClose className='text-white text-xl mb-3' />) :
                            (<SlMenu className='text-white text-xl mb-3' />)}
                    </div>
                )}
                {/* Logo */}
                <Link to='/' className='flex h-5 items-center'>
                    <img className='h-full hidden dark:md:block' src={yLogo} alt='Youtube' />
                    <img alt='Youtube' className='h-full md:hidden mt-4 ml-2 mb-3' src={ytLogoMobile} />
                </Link>
            </div>
            {/* Search bar and button */}
            <div className='group flex items-center'>
                <div className="flex h-8 w-25  md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
                    <div className="w-10 item-center justify-center hidden group-focus-within:md:flex">
                        <IoIosSearch className="text-white text-xl mt-2" />
                    </div>
                    <input
                        type='text'
                        className=' bg-transparent outline-none text-white pr-5 pl=5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]'
                        onChange={(e) => SetsearchQuery(e.target.value)}
                        onKeyUp={searchQueryHandler}
                        value={searchQuery}
                    />
                </div>
                <button onClick={() => searchQueryHandler("searchButton")} className='w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]'>
                    <IoIosSearch className="text-white text-xl" />
                </button>
            </div>
            {/* Icons and user profile */}
            <div className='flex item-center'>
                <div className="hidden md:flex">
                    {/* Video and notification icons */}
                    <div className='flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]'>
                        <RiVideoAddLine className='text-white text-xl cursor-pointer' />
                    </div>
                    <div className='flex items-center justify-center h-10 ml-2 w-10 rounded-full hover:bg-[#303030]/[0.6]'>
                        <FiBell className='text-white text-xl cursor-pointer' />
                    </div>
                </div>
                {/* User profile image */}
                <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
                    <img src="https://xsgames.co/randomusers/assets/avatars/male/26.jpg " alt="User" />
                </div>
            </div>
        </div>
    );
}

export default Header;
