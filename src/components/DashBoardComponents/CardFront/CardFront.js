import React from 'react';
import ReactTooltip from 'react-tooltip';
import ApBar from '../Bar/ApBar';
import Bar from '../Bar/Bar';
import {useSpring, animated} from 'react-spring';
import icon from '../../../assets/images/wizard-hat.png';

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
      <h3 className="name">Dr. Magenstein</h3>
      <img
        className="charIcon dance"
        src={icon}
        alt="a floppy mage hat" />

      <div className='bar-list flex flex-col'>
        <Bar bar={'HP'} curr={props.stats.hp} max={props.stats.hpMax} text={'Health'} />
        <Bar bar={'MP'} curr={props.stats.mp} max={props.stats.mpMax} text={'Mana'} />
        <ApBar curr={2} max={5} />
      </div>
    </>
  )
}
