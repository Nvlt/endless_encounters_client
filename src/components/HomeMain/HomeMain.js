import React from 'react';
import { Link } from 'react-router-dom';
import mntn from '../../assets/images/mountains.png'
import './HomeMain.css';
//import UserContext from '../../contexts/UserContext';

export default function Home() {
  return (
    <main>
      <h1 className='header text-pop-up-bottom'>Endless Encounters</h1>
      <div className='main-inner'>
        <h3 className='sub-head'>A place for those seeking a way to leave their world behind...</h3>
        <img src={mntn} alt='digital drawing of a mountain range in a circle frame' className='mntn' />
        <nav className='main-nav'>
          <Link className='main-link' to='/main'>Start</Link>
        </nav>
        <p className='intro'>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </main>
  )
}
