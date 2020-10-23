import React from 'react';
import Accordion from '../../components/AccordionBtn/AccordionBtn';
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom'
// import "../../App.css" 
import './About.css'

export default function About() {

  const specials=` ! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [  ] ^ _ { | } ~ `
  const upperNum=`If you can do this PLEASE send us an email because we haven't seen one yet!`
  let aboutData = [
    {
      header: 'What is Endless Encounters?',
      content: (  
        <div className="font-lg inline m-0 ">
        <ReactTooltip id="rpg" place="top" effect="solid" getContent={(dataTip) => `${dataTip}`} />
          Simply put, Endless Encounters is a text based {<div className="font-lg inline mx-1-2 text-blue font-bold cursor-pointer" data-event="click" clickable="true" data-tip="Role Playing Game"
          data-for="rpg">RPG</div>} with a fun and intuitive UI (we hope)</div>
      )
    },
    {
      header: 'How do I sign up?',
      content:(
      <>
      <p className="font-lg inline m-0">Creating an account is simple.</p>
        <ol>
          <li>Click the register link above or {<Link to="/register" className="cursor-pointer text-dec-none font-lg inline text-blue font-bold mx-1-2">here</Link>}
           
          </li>
          <li>Enter a fun and unique Username</li>
          <li>Enter a memorable password with at least one of each:
        <ul className="list-style-none p-1 font-sm center p-0">
              <li className="text-left ">An upper case Letter</li>
              <li className="text-left ">A lower case Letter</li>
              <li className="text-left ">A number</li>
              <li className="cursor-pointer text-dec-none text-blue font-bold text-left" data-event="click"
                clickable="true" data-tip={specials}
                data-for="special-characters">A special character</li>
              <li className="cursor-pointer text-dec-none text-blue font-bold text-left" data-event="click"
                clickable="true" data-tip={upperNum} data-for="uppercaseNum">
                Bonus points for upper/lower case numbers</li>
            </ul>
          </li>
          <li>Enter an email that you actually use</li>
          <li>Wait for verification Email to arrive in your inbox</li>
          <li>Click verification link in the Email</li>
          <li>Come back to Endless Encounters and log in</li>
        </ol>
        </>)
    },
    {
      header: 'How Do I Create my Character?',
      content: (
        <div className="font-lg inline m-0">
          <ReactTooltip id="something" place="top" effect="solid" getContent={(dataTip) => `${dataTip}`} />
          Some text to explain {<div className="cursor-pointer font-lg inline mx-1-2 text-blue font-bold" data-event="click" clickable="true"
          data-tip="Brief explain"
          data-for="something">something to highlight</div>} more text here</div>
      )
    },
    {
      header: 'Navigating',
      content: (
        <div className="font-lg inline m-0">
          <ReactTooltip id="something" place="top" effect="solid" getContent={(dataTip) => `${dataTip}`} />
          Some text to explain {<div className="cursor-pointer font-lg inline mx-1-2 text-blue font-bold" data-event="click" clickable="true"
          data-tip="Brief explain"
          data-for="something">something to highlight</div>} more text here</div>
      )
    },
    {
      header: 'Combat',
      content: (
        <div className="font-lg inline m-0">
          <ReactTooltip id="something" place="top" effect="solid" getContent={(dataTip) => `${dataTip}`} />
          Some text to explain {<div className="cursor-pointer font-lg inline mx-1-2 text-blue font-bold" data-event="click" clickable="true"
          data-tip="Brief explain"
          data-for="something">something to highlight</div>} more text here</div>
      )
    },
    {
      header: 'Progression',
      content: (
        <div className="font-lg inline m-0">
          <ReactTooltip id="something" place="top" effect="solid" getContent={(dataTip) => `${dataTip}`} />
          Some text to explain {<div className="cursor-pointer font-lg inline mx-1-2 text-blue font-bold" data-event="click" clickable="true"
          data-tip="Brief explain"
          data-for="something">something to highlight</div>} more text here</div>
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

  return(
    <main className="flex flex-col center flex-1 justify-stretch">
        <h1 className="font-xxl flex-1 font-nerd center flex-grow tracking-wide hover">Endless Encounters</h1>
        <h3 className="p-2 font-lg font-nels">A place for those who seek to find a way to leave their world behind.</h3>
          {aboutLoop()}
    </main>
  )
}