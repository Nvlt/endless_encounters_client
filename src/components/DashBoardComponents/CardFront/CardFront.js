import React from 'react';
import ApBar from '../Bar/ApBar';
import Bar from '../Bar/Bar';
import icon from '../../../assets/images/hat.png';

export default function CardFront(props) {
  const charData=props.stats?
    `
      STR: ${props.stats.str}
      DEX: ${props.stats.dex}
      INT: ${props.stats.int}
    `
    :'No stats to display';
  return (
    <>
    <img
        className='dance'
        src={icon}
        alt='a floppy mage hat'
    />
      <h3 className='name'>Dr. Magenstein</h3>
      <div className='bar-list'>
        <Bar bar={'HP'} curr={props.stats.hp} max={props.stats.hpMax} text={'Health'} />
        <Bar bar={'MP'} curr={props.stats.mp} max={props.stats.mpMax} text={'Mana'} />
        <ApBar curr={2} max={5} />
      </div>
    </>
  )
}
