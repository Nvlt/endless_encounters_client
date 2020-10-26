import React from 'react';
import './LevelUp.css';

export default class LevelUp extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      stats: this.props.stats,
      points: this.props.points
    }
  }

  static defaultProps={
    stats: {
      str: 15,
      dex: 7,
      int: 5,
      sta: 17,
      agi: 9,
      will: 13
    },
    points: 1
  }

  handleStatIncrease(key, value) {
    const newStats=this.state.stats;
    newStats[key]++;
    this.setState({
      stats: newStats,
      points: this.state.points-1
    });
  }

  renderStats() {
    let stats=[];
    for(const [key, value] of Object.entries(this.state.stats)) {
      const htmlStat=<li className='stat'>
        <div className='stat-name'>{key}:</div>
        <div className='stat-value'>
          {value}
          {this.state.points>0&&<button onClick={() => this.handleStatIncrease(key, value)}>+</button>}
        </div>
      </li>
      stats.push(htmlStat);
    }
    return (
      <div className='primary-stats'>
        <ul className='stat-list'>
          {stats}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <section className='level-up'>
        <h3 className='level-header'>Level Up!</h3>
        <p className='level-text'>Choose a stat to increase</p>
        <p className='level-text'>You have: {this.state.points} points left</p>
        {this.renderStats()}
      </section>
    )
  }
}
