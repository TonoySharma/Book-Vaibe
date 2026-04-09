import React from 'react';
import { NavLink } from 'react-router';

const linkClass = ({ isActive }) =>
  `font-semibold text-white rounded-none ${
    isActive ? "text-green-500 border-b-2 border-green-600" : ""
  }`;

const NavBar = () => {
    const links = 
  <>
    <li>
      <NavLink to="/" className={linkClass}>
        Home
      </NavLink>
    </li>

    <li>
      <NavLink to="/books" className={linkClass}>
        Listed Books
      </NavLink>
    </li>

    <li>
      <NavLink to="/dashboard" className={linkClass}>
        Dashboard
      </NavLink>
    </li>

    <li>
      <NavLink to="/pages-to-read" className={linkClass}>
        Pages to Read
      </NavLink>
    </li>
  </>

    
 return (
  <nav className='bg-[#0a1d3d] shadow-sm sticky z-10 top-0'>
    <div className="navbar container mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn bg-black lg:hidden border-none">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-black rounded-box z-1 mt-3 w-50 p-2 shadow">
        <div className=''>
          {links}
  
         <div className='text-white my-3 cursor-pointer'>
         
          <a className='border border-gray-800 w-fit px-4 py-1 font-semibold my-2 rounded-3xl'>Sign In</a>
          <a className='ml-3 border border-gray-800 w-fit px-4 py-1 font-semibold rounded-3xl'>Sign Up</a>
      
         </div>
        </div>
      </ul>
    </div>
    <a className="text-3xl ml-3"><span className='text-white'>Book</span> <span className='text-purple-700'>Vibe</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-4">
       {links}
    </ul>
  </div>
  <div className="navbar-end gap-3 hidden lg:flex">
    <button className="btn bg-[#0a1d3d] hover:bg-amber-500 border-yellow-500 text-white ">Sign In</button>
    <button className="btn btn-info border-yellow-500 bg-amber-500 text-black">Sign Up</button>

  </div>
</div>
  </nav>
    );
};

export default NavBar;