import React from 'react';
import ReactTooltip from 'react-tooltip';
import icon from '../../../assets/images/hat.png';

export default function CardBack(props) {
  const charData=props.stats?
    `
      STR: ${props.stats.str}
      DEX: ${props.stats.dex}
      INT: ${props.stats.int}
    `
    :'No stats to display';
  return (
    <>
      <ReactTooltip id='bar-cont' place='top' effect='solid' />

      <img
        className='dance' data-event='click' clickable='true'
        data-for='char-stats' data-tip={charData}
        src={icon}
        alt='a floppy mage hat'/>
        <h3 className='name'>BACK </h3>

    </>
  )
}
