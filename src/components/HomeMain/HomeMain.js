import React from 'react';
import {Link} from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
export default function Home() {



  return (
    <main className="flex flex-col center flex-1 justify-stretch">
      <h1 className="font-3r flex-1 font-nerd center flex-grow text-pop-up-bottom">Endless Encounters</h1>
      <h3 className="p-2 font-lg">A place for those who seek to find a way to leave their world behind.</h3>
      <div className="flex-row">
        <Link to='/main'><button className="flex-1 font-mono m-2 max-w-8">Start</button></Link>
        <Link to='/register'><button className="flex-1 font-mono m-2 max-w-8">Register</button></Link>
        <Link to='/about'><button className="flex-1 font-mono m-2 max-w-8">How To</button></Link>
      </div>
      <p className="m-2">Lorem ipsum dolor sit amet,
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
