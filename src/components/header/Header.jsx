import React from 'react';
import Profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between mx-4 p-4 border-b-2'>
            <h1 className='text-4xl font-bold  text-center'>Knowledge-Cafe</h1>
            <img src={Profile}></img>
        </div>
    );
};

export default Header;