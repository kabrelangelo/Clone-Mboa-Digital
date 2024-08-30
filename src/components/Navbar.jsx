import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='relative'>
            {/* Menu Button for Mobile */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className='lg:hidden p-2 text-gray-600 hover:text-gray-900'
                aria-label="Toggle menu"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {/* Menu for Desktop and Mobile */}
            <div className={`lg:flex ${isOpen ? 'block' : 'hidden'} flex-col lg:flex-row lg:space-x-6 lg:items-center`}>
                <NavLink to="/home" className={({isActive})=>(isActive? "text-gray-900":
                "block py-2 px-4 text-sm text-gray-400 hover:bg-gray-200 lg:hover:bg-transparent")}>Accueil</NavLink>
                <NavLink to="/about-us" className={({isActive})=>(isActive? "text-gray-900":
                "block py-2 px-4 text-sm text-gray-400 hover:bg-gray-200 lg:hover:bg-transparent")}>À propos de</NavLink>
                <NavLink to="/pricing" className={({isActive})=>(isActive? "text-gray-900":
                "block py-2 px-4 text-sm text-gray-400 hover:bg-gray-200 lg:hover:bg-transparent")}>Tarification</NavLink>
                <NavLink to="/case-studies" className={({isActive})=>(isActive? "text-gray-900":
              "block py-2 px-4 text-sm text-gray-400 hover:bg-gray-200 lg:hover:bg-transparent")}>Cas d'étude</NavLink>
                <NavLink to="/contact-us" className={({isActive})=>(isActive? "text-gray-900":                 
                "block py-2 px-4 text-sm text-gray-400 hover:bg-gray-200 lg:hover:bg-transparent")}>Contact</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;