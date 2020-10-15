import React from 'react';
import {Link} from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

export default class About extends React.Component {
  state={showing: ''}
  handleExpand=(ev) => {
    if(this.state.showing!==ev.target.id) {
      this.setState({showing: ev.target.id})
    }
    else {this.setState({showing: ''})}
  }
  render() {
    const specials=` ! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [  ] ^ _ { | } ~ `
    const upperNum=`If you can do this PLEASE send us an email because we haven't seen one yet!`
    return (

      <main className="flex flex-col center flex-1 justify-stretch ">
        <h1 className="font-xxl flex-1 font-nerd center flex-grow tracking-wide">Endless Encounters</h1>
        <h3 className="p-2 font-lg">A place for those who seek to find a way to leave their world behind.</h3>



        <div className="p-2 flex flex-col">
          <div className="whatis inline text-left ">
            <h3 id="whatis" onClick={this.handleExpand} className="font-handy center cursor-pointer">What is Endless Encounters?</h3>
            {this.state.showing==="whatis"&&
              <div className="font-lg inline m-0">
                <ReactTooltip id="rpg" place="top" effect="solid" getContent={(dataTip) => `${dataTip}`} />
              Simply put, Endless Encounters is a text based
            <div className="font-lg inline mx-1-2 text-blue font-bold cursor-pointer" data-event="click" clickable="true" data-tip="Role Playing Game"
                  data-for="rpg">RPG</div>with a fun and intuitive UI (we hope)</div>}
          </div>
          <div className="signup inline text-left ">
            <h3 id="signup" onClick={this.handleExpand} className="font-handy center cursor-pointer">How do i sign up?</h3>
            {this.state.showing==="signup"&&
              <div >
                <ReactTooltip id="special-characters" place="top" effect="solid" getContent={(dataTip) => `${dataTip}`} />
                <ReactTooltip id="uppercaseNum" place="top" effect="solid" getContent={(dataTip) => `${dataTip}`} />
                <p className="font-lg inline m-0">Creating an account is simple.</p>
                <ol>
                  <li>Click the register link above or
                  <Link to="/register" className="cursor-pointer text-dec-none font-lg inline text-blue font-bold mx-1-2">here</Link>
                  </li>
                  <li>Enter a fun and unique Username</li>
                  <li>Enter a memorable password with at least one of each:
                <ul className="list-style-none p-1 font-sm center">
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
              </div>
            }
          </div>
          <div className="create inline text-left ">
            <h3 id="create" onClick={this.handleExpand} className="font-handy center cursor-pointer">How Do I Create my Character?</h3>

            {this.state.showing==="create"&&<div className="font-lg inline m-0">
              <ReactTooltip id="something" place="top" effect="solid" getContent={(dataTip) => `${dataTip}`} />
              Some text to explain
            <div className="cursor-pointer font-lg inline mx-1-2 text-blue font-bold" data-event="click" clickable="true"
                data-tip="Brief explain"
                data-for="something">something to highlight</div>more text here</div>}
          </div>
          <div className="Navigating inline text-left ">
            <h3 id="Navigating" onClick={this.handleExpand} className="font-handy center cursor-pointer">Navigating</h3>

            {this.state.showing==="Navigating"&&<div className="font-lg inline m-0">
              <ReactTooltip id="Navigating" place="top" effect="solid" getContent={(dataTip) => `${dataTip}`} />
              Some text to explain
            <div className="cursor-pointer font-lg inline mx-1-2 text-blue font-bold" data-event="click" clickable="true"
                data-tip="Brief explain"
                data-for="Navigating">something to highlight</div>more text here</div>}
          </div>

          <div className="Buying/Selling inline text-left ">
            <h3 id="Buying/Selling" onClick={this.handleExpand} className="font-handy center cursor-pointer">Buying/Selling</h3>
            {this.state.showing==="Buying/Selling"&&<div className="font-lg inline m-0">
              <ReactTooltip id="Buying/Selling" place="top" effect="solid" getContent={(dataTip) => `${dataTip}`} />
              Some text to explain
            <div className="cursor-pointer font-lg inline mx-1-2 text-blue font-bold" data-event="click" clickable="true"
                data-tip="Brief explain"
                data-for="Buying/Selling">something to highlight</div>more text here</div>}
          </div>


          <div className="Combat inline text-left ">
            <h3 id="Combat" onClick={this.handleExpand} className="font-handy center cursor-pointer">Combat</h3>
            {this.state.showing==="Combat"&&<div className="font-lg inline m-0">
              <ReactTooltip id="Combat" place="top" effect="solid" getContent={(dataTip) => `${dataTip}`} />
              Some text to explain
            <div className="cursor-pointer font-lg inline mx-1-2 text-blue font-bold" data-event="click" clickable="true"
                data-tip="Brief explain"
                data-for="Combat">something to highlight</div>more text here</div>}
          </div>


          <div className="Progression inline text-left ">
            <h3 id="Progression" onClick={this.handleExpand} className="font-handy center cursor-pointer">Progression</h3>
            {this.state.showing==="Progression"&&<div className="font-lg inline m-0">
              <ReactTooltip id="Progression" place="top" effect="solid" getContent={(dataTip) => `${dataTip}`} />
              Some text to explain
            <div className="cursor-pointer font-lg inline mx-1-2 text-blue font-bold" data-event="click" clickable="true"
                data-tip="Brief explain"
                data-for="Progression">something to highlight</div>more text here</div>}
          </div>

          <div className="Looting inline text-left ">
            <h3 id="Looting" onClick={this.handleExpand} className="font-handy center cursor-pointer">Looting</h3>
            {this.state.showing==="Looting"&&<div className="font-lg inline m-0">
              <ReactTooltip id="Looting" place="top" effect="solid" getContent={(dataTip) => `${dataTip}`} />
              Some text to explain
            <div className="cursor-pointer font-lg inline mx-1-2 text-blue font-bold" data-event="click" clickable="true"
                data-tip="Brief explain"
                data-for="Looting">something to highlight</div>more text here</div>}
          </div>

          <div className="Items inline text-left ">
            <h3 id="Items" onClick={this.handleExpand} className="font-handy center cursor-pointer">Items</h3>
            {this.state.showing==="Items"&&<div className="font-lg inline m-0">
              <ReactTooltip id="Items" place="top" effect="solid" getContent={(dataTip) => `${dataTip}`} />
              Some text to explain
            <div className="cursor-pointer font-lg inline mx-1-2 text-blue font-bold" data-event="click" clickable="true"
                data-tip="Brief explain"
                data-for="Items">something to highlight</div>more text here</div>}
          </div>

        </div>
      </main>

    )
  }
}





// Creating a character

// Navigating

// Buying/Selling

// Combat

// Progression/ Level Up

// Looting/Items
