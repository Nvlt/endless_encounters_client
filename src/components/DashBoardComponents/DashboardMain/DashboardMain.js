import React from 'react';
import Viewport from '../../Viewport/Viewport';
import CharStatCard from '../CharacterStatCard/CharacterStatCard';
import Abilities from '../Abilities/Abilities';
import EventContext from '../../../contexts/EventContext';
import SwitchTabSound from '../../SoundWidgets/SwitchTabSound';
import {Transition, animated} from 'react-spring/renderprops';
import './Dash.css';

//Using display state
const tabs={
  abilities: style => (<animated.div style={{...style}}><Abilities /></animated.div>),
}

export default class Dashboard extends React.Component {
  static defaultProps={
    character: {},
  }

  constructor(props) {
    super(props)
    const state={
      display: 'abilities',
      view: 'explore',
    }
    this.state=state;
  }
  static contextType=EventContext;

  handleShop=(e) => {
    e.preventDefault();

    this.setState({view: 'shop'});
  }

  handleTavern=(e) => {
    e.preventDefault();

    this.setState({view: 'tavern'});
  }

  handleExplore=(e) => {
    e.preventDefault();
    if(Math.random()>0.2) {
      this.setState({view: 'explore'});
    }
    else {
      this.setState({view: 'combat'});
    }
  }

  handleDisplayChange=(ev) => {
    ev.preventDefault();

    this.setState({display: ev.target.value});
  }

  renderTabButttons() {
    const tabs=[
      {name: 'Abilities', tabName: 'abilities', func: this.handleDisplayChange}
    ]
    return tabs.map((tab, index) => <SwitchTabSound props={tab} key={index} />)
  }
  render() {
    return (
      <main className='dashboard-main'>
        <Viewport view={this.state.view} />

        <div className='btnsNav'>
          <button onClick={this.handleTavern}>Tavern</button>
          <button onClick={this.handleExplore}>Explore</button>
          {this.renderTabButttons()}
        </div>
        <div className='charAssets'>
          <CharStatCard />
          <div className='transition-container'>
            <Transition
              reset
              unique
              items={this.state.display}
              from={{position: 'absolute', opacity: 0, transform: `perspective(2000px) translate3d(0%, 0, 0) rotateY(${0}deg)`}}
              enter={{position: 'initial', opacity: 1, transform: `perspective(2000px) translate3d(0%, 0, 0) rotateY(${0}deg)`}}
              leave={{top: 0, left: 0, bottom: 0, right: 0, position: 'absolute', opacity: 0, transform: `perspective(800px) translate3d(-50%, 0, 0) rotateY(${-90}deg)`}}
            >
              {display => tabs[display]}
            </Transition>
          </div>
        </div>

      </main>
    )
  }
}
