import React from 'react';
import Accordion from '../../components/AccordionBtn/AccordionBtn';

import mntn from '../../assets/images/mountains.png';
import './About.css'

export default function About() {


  let aboutData = [
    {
      header: (
        <h3 className='question'>
          What is Endless Encounters?
        </h3>
      ),
      content: (
        <div>
          <span>Endless Encounters is a text-base RPG developed by EE; John Pendergast, Alexis Felts, Scott Whiteman, and Tiffany Summerford. Once you're in, you can explore in search of ravenous enemies to fight, and quirky moments with npcs you encounter.</span>
        </div>
      )
    },
    {
      header: (
        <h3 className='question'>
          How do I sign up?
        </h3>
      ),
      content: (
        <div>
          <p>Creating an account is simple:</p>
          <ol>
            <li>Click the register link above</li>
            <li>Enter a fun and unique Username</li>
            <li>Enter a memorable password with at least one of each:
            <ul>
                <li>A special character</li>
                <li>An upper case letter</li>
                <li>A lower case letter</li>
                <li>A number</li>
                <li>Bonus points for upper/lower case numbers</li>
              </ul>
            </li>
            <li>Enter an email that you use</li>
            <li>Navigate back to Endless Encounters, login, and have fun!</li>
          </ol>
        </div>
      )
    },
    {
      header: (
        <h3 className='question'>
          How Do I Create my Character?
        </h3>
      ),
      content: (
        <div>
          <p>Upon completing your registration, and logging in you can go to the dash where you'll be prompted to create your character.</p>
          <ol>
            <li>Give your character a name.</li>
            <li>Give your character a description</li>
            <li>Choose an existing class</li>
          </ol>
        </div>
      )
    },
    {
      header: (
        <h3 className='question'>
          Navigating
        </h3>
      ),
      content: (
        <div>
          <p>After creating your character, your game begins immediately.</p>
          <p>You will be presented with a scene, your status, and some choices you can make.</p>
          <p>You can make choices by typing them into the text input and pressing enter or the 'make choice' button.</p>
          <p>Your goal is simply to explore the world and find funny encounters.</p>
        </div>
      )
    },
    {
      header: (
        <h3 className='question'>
          Combat
        </h3>
      ),
      content: (
        <div>
          <span>
            Combat is turn based using what we call "Action Points" or AP, which you will see on display throughout the game.
            In every combat scene you will start with 10 of these and when you run out, you wont be able to attack anymore, and will have to end your turn.
            There is also magic points or 'mp' which are similarly used to cast spells.
            Similarly as well you'll have health points or 'hp', if you run out of these, unfortunately you've died.
          </span>
        </div>
      )
    }
  ]

  function aboutLoop() {
    let html = [];
    for (const index in aboutData) {
      html.push(
        <Accordion
          key={index}
          header={aboutData[index].header}
          content={aboutData[index].content}
        />
      );
    }
    return html;
  }

  return (
    <main className = 'abt-outer'>
      <h1 className='header'>Endless Encounters</h1>
      <div className='abt-inner'>
        <h2 className='sub-head'>A place for those seeking a way to leave their world behind...</h2>
        <img src={mntn} alt='digital drawing of a mountain range in a circle frame' className='mntn' />
        <section className='abt-sect'>
          {aboutLoop()}
        </section>
      </div>
    </main>
  )
}
