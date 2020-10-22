import React from 'react';
import {Link} from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import "../../App.css"
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
    const specialItemTip=(<div></div>);
    return (

      <main className="flex flex-col center flex-1 justify-stretch ">
        <h1 className="font-xxl flex-1 font-nerd center flex-grow tracking-wide hover">Endless Encounters</h1>
        <h3 className="p-2 font-lg font-nels">A place for those who seek to find a way to leave their world behind.</h3>



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
              Upon completing your registration, and logging in; you will be pushed to your user dashboard where you will be prompted to create your first character.
              <ol>
                <li>Give your character a name. All Alpha-Numeric Characters are valid for this.</li>
                <li>You will assign your character's Stat Points. Make sure you add some points to each attribute.</li>
                <li>You may choose from several abilities when you first begin your journey.</li>
                <li>Clicking on the FInalize Character Button will make this your active character. You can only have one character at a time.</li>
              </ol>
              <div className="cursor-pointer font-lg inline mx-1-2 text-blue font-bold" data-event="click" clickable="true"
                data-tip="Brief explain"
                data-for="something">something to highlight</div>more text here</div>}
          </div>
          <div className="Navigating inline text-left ">
            <h3 id="Navigating" onClick={this.handleExpand} className="font-handy center cursor-pointer">Navigating</h3>

            {this.state.showing==="Navigating"&&<div className="font-lg inline m-0">
              <ReactTooltip id="Navigating" place="top" effect="solid" getContent={(dataTip) => `${dataTip}`} />
              After creatig your character, you will immediately be pushed into the world.
              <ul>
                <li>You will be given some action choices presented to you in the left middle portion of your dashboard.</li>
                <li>Upon hovering over any option in the dashboard, you will be able to see an explanation of what that choice/acyion will do.</li>
                <li>Clicking an action will send your choice, causing that action to happen, and whatever consequences occur from that are now tied to your character!</li>
                <li>Be careful, make good choices, or dson't, I'm a website, not a cop.</li>
              </ul>
              <div className="cursor-pointer font-lg inline mx-1-2 text-blue font-bold" data-event="click" clickable="true"
                data-tip="Brief explain"
                data-for="Navigating">something to highlight</div>more text here</div>}
          </div>

          <div className="Buying/Selling inline text-left ">
            <h3 id="Buying/Selling" onClick={this.handleExpand} className="font-handy center cursor-pointer">Buying/Selling</h3>
            {this.state.showing==="Buying/Selling"&&<div className="font-lg inline m-0">
              <ReactTooltip id="Buying/Selling" place="top" effect="solid" getContent={(dataTip) => `${dataTip}`} />
              While in a town, you will have several options, one of which will be to visit the shop.
              <br />
              Shops can have a variety of item, and have a small chance of having <div className="cursor-pointer font-lg inline mx-1-2 text-blue font-bold" data-event="click" clickable="true"
                data-tip="Side effects may include, but are not limited to: nausea, heartburn, indigestion, upset stomach diarrhea, popcorn tooth, heavy fingernail, cold shirt, wrinkled laundry, traffic toe jam, happy feet, angry feet, hungry feet, feet, enjoying country music, not enjoying country music, hip-hop head, dizziness, fever, mild insanity, murderous fertility, frenzied bouts of learning, and death."
                data-for="Buying/Selling">Special</div>items occasionally.</div>}
          </div>

          <div className="Combat inline text-left ">
            <h3 id="Combat" onClick={this.handleExpand} className="font-handy center cursor-pointer">Combat</h3>
            {this.state.showing==="Combat"&&<div className="font-lg inline m-0">
              <ReactTooltip id="Combat" place="top" effect="solid" getContent={(dataTip) => `${dataTip}`} />
              Comabt is turn based.
            <br />
            On your turn, you may click on an ability or spell to perform on your target.
            <br />
            You character will attempt the ability.
            <br />
            If you hit your target damage or effect will be applied.
            <br />
            ABilities and Spells have cost, make sure you have enough to perform this action.
            <br />
            Heads up for
            <div className="cursor-pointer font-lg inline mx-1-2 text-blue font-bold" data-event="click" clickable="true"
                data-tip="Critical misses happen if your character rolls 1, critical hits on a roll of 20."
                data-for="Combat">Critical</div>misses or hits.</div>}
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
