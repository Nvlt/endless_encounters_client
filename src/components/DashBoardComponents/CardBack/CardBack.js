import React from 'react';
import ReactTooltip from 'react-tooltip';
import icon from '../../../assets/images/hat.png';
import './CardBack.css'

export default function CardBack(props) {
  return (
    <>
      <ReactTooltip id='bar-cont' place='top' effect='solid' />

      <img
        className='dance' data-event='click' clickable='true'
        data-for='char-stats'
        src={icon}
        alt='a floppy mage hat'/>
        <h3 className='name' style={{margin: 0}}>STATS</h3>
      <div className='stat-display flex'>
        {renderOffensive(props.stats)}
        {renderDefensive(props.stats)}
      </div>
    </>
  )
}

function renderOffensive(stats) {
  return <div className='stat-container' style={{borderRight: '2px solid black', paddingLeft: 0}}>
    <div className='stat'><p>STR:</p><p>{stats.str || 0}</p></div>
    <div className='stat'><p>DEX:</p><p>{stats.dex || 0}</p></div>
    <div className='stat'><p>INT:</p><p>{stats.int || 0}</p></div>
  </div>
}

function renderDefensive(stats) {
  return <div className='stat-container' style={{borderLeft: '2px solid black', paddingRight: 0}}>
    <div className='stat'><p>STA:</p><p>{stats.stam || 0}</p></div>
    <div className='stat'><p>AGI:</p><p>{stats.agi || 0}</p></div>
    <div className='stat'><p>WIL:</p><p>{stats.will || 0}</p></div>
  </div>
}

CardBack.defaultProps = {
  stats: {
    str: 0,
    dex: 0,
    int: 0,
    stam: 0,
    agi: 0,
    will: 0,
    cha: 0
  }
}