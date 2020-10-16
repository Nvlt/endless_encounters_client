import React from 'react';
import {Link} from 'react-router-dom';
import './HomeMain.css';
import ReactTooltip from 'react-tooltip';
export default function Home() {



  return (
    <main className='main'>
      <h1 className="font-xxl flex-1 font-nerd center flex-grow text-pop-up-bottom my-2">Endless Encounters</h1>
      <h3 className='subHead'>A place for those seeking a way to leave their world behind... </h3>
      <nav className='mainNav'>
        <Link className='mainLink' to='/main'>Start</Link>
        <Link className='mainLink' to='/register'>Register</Link>
      </nav>
      <p className='intro'>Lorem ipsum dolor sit amet,
      consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </main>
  )
}
