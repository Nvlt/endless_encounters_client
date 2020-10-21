import React from 'react';
import Viewport from '../../Viewport/Viewport';
import CharStatCard from '../CharacterStatCard/CharacterStatCard';
import Inventory from '../Inventory/Inventory';
import Gear from '../Gear/Gear';
import Spells from '../Spells/Spells';
import Abilities from '../Abilities/Abilities';
import './Dash.css'
import EventContext from '../../../contexts/EventContext';
import SwitchTabSound from '../../SoundWidgets/SwitchTabSound';
import { Transition, animated } from 'react-spring/renderprops';

//Using indexes
const pages = [
  style => (<animated.div style={{...style}}><Inventory /></animated.div>),
  style => (<animated.div style={{...style}}><Gear /></animated.div>),
  style => (<animated.div style={{...style}}><Spells /></animated.div>),
  style => (<animated.div style={{...style}}><Abilities /></animated.div>),
]

//Using display state
const tabs = {
  inventory: style => (<animated.div style={{...style}}><Inventory /></animated.div>),
  gear: style => (<animated.div style={{...style}}><Gear /></animated.div>),
  spells: style => (<animated.div style={{...style}}><Spells /></animated.div>),
  abilities: style => (<animated.div style={{...style}}><Abilities /></animated.div>),
}


export default class Dashboard extends React.Component {
  static defaultProps={
    character: {},
  }

  constructor(props) {
    super(props)
    const state={
      display: 'gear',
      view: 'explore',
    }
    this.state=state;
  }
  static contextType=EventContext;

  handleShop = (e) => {
    e.preventDefault();

    this.setState({view: 'shop'});
  }

  handleTavern = (e) => {
    e.preventDefault();

    this.setState({view: 'tavern'});
  }

  handleExplore = (e) => {
    e.preventDefault();
    if (Math.random() > 0.2) {
      this.setState({view: 'explore'});
    }
    else {
      this.setState({view: 'combat'});
    }    
  }

  handleDisplayChange=(ev) => {
    ev.preventDefault();
    let newIndex= ev.target.value === 'inventory' ? 0 :
    ev.target.value === 'gear' ? 1 :
    ev.target.value === 'spells' ? 2
    : 3
    this.setState({display: ev.target.value, index: newIndex})
  }

  renderTabButttons() {
    const tabs=[
      {name: 'Inventory', tabName: 'inventory', func: this.handleDisplayChange},
      {name: 'Gear', tabName: 'gear', func: this.handleDisplayChange},
      {name: 'Spells', tabName: 'spells', func: this.handleDisplayChange},
      {name: 'Abilities', tabName: 'abilities', func: this.handleDisplayChange}
    ]
    return tabs.map((tab, index)=> <SwitchTabSound props={tab} key={index}/>)
  }
  render() {
    return (
      <main className="p-2">
        <Viewport view={this.state.view}/>

        <div className="btnsNav">
          <button className='dashBtn' onClick={this.handleShop}>Shop</button>
          <button className='dashBtn' onClick={this.handleTavern}>Tavern</button>
          <button className='dashBtn' onClick={this.handleExplore}>Explore</button>
          {/* <button className='dashBtn' value='inventory' onClick={(ev) => this.handleDisplayChange(ev)}>Inventory</button>
          <button className='dashBtn' value='gear' onClick={(ev) => this.handleDisplayChange(ev)}>Gear</button>
          <button className='dashBtn' value='spells' onClick={(ev) => this.handleDisplayChange(ev)}>Spells</button>
          <button className='dashBtn' value='abilities' onClick={(ev) => this.handleDisplayChange(ev)}>Abilities</button> */}
          {this.renderTabButttons()}
        </div>
        <div className="charAssets">
          <CharStatCard />
          <div className='transition-container'>
            <Transition
            reset
            unique
            items={this.state.display}
            from={{opacity: 0, transform: `perspective(600px) translate3d(0%, 0, 0) rotateY(${0}deg)`}}
            enter={{opacity: 1, transform: `perspective(600px) translate3d(0%, 0, 0) rotateY(${0}deg)`}}
            leave={{opacity: 0, transform: `perspective(600px) translate3d(-50%, 0, 0) rotateY(${-90}deg)`}}
            >
              {display => tabs[display]}
            </Transition>
          </div>
        </div>

      </main>
    )
  }
}
