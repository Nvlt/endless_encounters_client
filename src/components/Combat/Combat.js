import React from 'react';
import CombatTextBox from '../CombatTextBox/CombatTextBox';
import './Combat.css';

export default class Combat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static defaultProps = {
    opponents: []
  }

  renderOpponents = () => {
    return <div className='opponent-list'>
      {this.props.opponents.map((opp, index) => {
        return <div key={index} className='opponent-container'>
          {opp.name}
        </div>
      })}
    </div>
  }

  renderTextBox = () => {
    return <CombatTextBox text={'Hit something for a billions of billions of billions of damage!!!'}/>
  }

  render() {
    return (
      <div className='combat'>
        {this.renderOpponents()}
        {this.renderTextBox()}
      </div>
    )
  }
}