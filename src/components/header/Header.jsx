import React from 'react';
import Profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between  p-4 border-b-2 max-w-7xl mx-auto'>
            <h1 className='text-4xl font-bold  text-center'>Knowledge-Cafe</h1>
            <img src={Profile}></img>
        </div>
    );
};

export default Header;