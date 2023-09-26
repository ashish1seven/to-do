import React from 'react';
import DateTime from './date-time';
// const date = new Date().toLocaleTimeString()
// console.log(date);

const Navbar = () => {
    return (
        <div className='w-screen h-16 bg-slate-300 flex items-center justify-evenly '>
            <div className='h-10 w-56 bg-white rounded-md ps-4'>
                <input type="text" className='h-10 border-none outline-0 ' placeholder='Search Task'/>
                <i className="fi fi-rr-search h-10 text-black/60 "></i>
            </div>
            <DateTime/>
            <div className='flex items-center'>
                <i className="fi fi-rr-bell-ring text-2xl text-black/60"></i>
                <button className='bg-white h-10 w-32 rounded-lg ms-6 text-black/60 hover:text-black'> + Create Event</button>
            </div>
        </div>
    );
}

export default Navbar;
