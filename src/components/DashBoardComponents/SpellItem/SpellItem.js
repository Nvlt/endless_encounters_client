import React from 'react';
import ReactTooltip from 'react-tooltip';
import './SpellItem.css';

export default function SpellItem(props) {
  return (
    <>
      <ReactTooltip id={props.spell.id} place="top" effect="solid">
        {props.spell.desc}
      </ReactTooltip>
      <div className='outer-spell'>
        <h2 data-tip={props.spell.id} data-for={props.spell.id}>
          {props.spell.name}
        </h2>
      </div>
    </>
  )
}