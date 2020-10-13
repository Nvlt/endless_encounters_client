import React, { Component } from 'react';

export default function Header() {
  return (
    <nav className="border flex flex-row-wrap flex-1 width-full">
      <div className="flex-1">User Name</div>
      <div className="flex-1">Home</div>
      <div className="flex-1">About</div>
      <div className="flex-1">Login/Logout</div>
    </nav>
  )
}