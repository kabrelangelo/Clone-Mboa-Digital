import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <div className='w-44'>
            <Link to={"/home"}>
                <img src="/logo.png" alt="logo" className='w-full' />
            </Link>
        </div>
    );
};

export default Logo;
