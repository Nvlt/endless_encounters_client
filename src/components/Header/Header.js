import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="border flex flex-row-wrap flex-1 width-full">
      <div className="flex-1">User Name</div>


      <div className="flex-1">
        <Link to='/'>
          <button>Home</button>
        </Link>
      </div>
      
      
      <div className="flex-1">
        <Link to='/about'>
          <button>About</button>
        </Link>
      </div>
      
      
      <div className="flex-1">
        <Link to='/login'>
          <button>Login/Logout</button>
        </Link>
      </div>
      
    </nav>
  )
}