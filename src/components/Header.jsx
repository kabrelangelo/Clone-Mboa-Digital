import React from 'react';
import Logo from './Logo';
import Navbar from './Navbar';

const Header = () => {
    return (
        <header className='w-full fixed top-0 left-0 z-[100] bg-white md:shadow-md' id="main-header">
            <div className="flex items-center justify-between w-full max-w-[1400px] mx-auto px-4 py-6 lg:px-32 ">
                <Logo />
                <Navbar />
            </div>
        </header>
    );
};

export default Header;
