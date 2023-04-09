import React, { createContext } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const cartItem = createContext()
    return (
        <div className="navbar bg-pink-500 text-white px-4">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-2xl">T-Shirt</a>
        </div>
        <div className="flex-none gap-2 font-bold ">
         <Link to='/'>Home</Link>
         <Link to='/about'>About</Link>
         <Link to='/Manage'>Manage Inventory</Link>
        </div>
      </div>
    );
};

export default Header;