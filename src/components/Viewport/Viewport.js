import React from 'react';
import Shop from '../Shop/Shop';
import Tavern from '../Tavern/Tavern';
import Explore from '../Explore/Explore';
import Combat from '../Combat/Combat';
import './Viewport.css';

export default class Viewport extends React.Component {
  constructor(props) {
    super(props);
  }
  
  renderShop() {
    const dummyItems = [
      {
        name: 'Schward'
      },
      {
        name: 'Sandwitch'
      },
      {
        name: 'A Stick'
      }
    ];
    return <Shop stock={dummyItems}/>
  }

  renderTavern() {
    return <Tavern />
  }

  renderText() {
    return <Explore />
  }

  renderCombat = () => {
    const dummyOpp = [
      {
        name: 'Gobber'
      },
      {
        name: 'Gobber'
      },
      {
        name: 'Drunk-erd'
      }
    ];
    return <Combat opponents={dummyOpp}/>
  }

  render() {
    return (
      <div className='viewport border'>
        {this.props.view === 'shop' && this.renderShop()}
        {this.props.view === 'tavern' && this.renderTavern()}
        {this.props.view === 'explore' && this.renderText()}
        {this.props.view === 'combat' && this.renderCombat()}
      </div>
    )
  }
}