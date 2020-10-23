import React from 'react';
import ReactTooltip from 'react-tooltip';
import './SpellItem.css';

export default function SpellItem(props) {
  return (
    <>
      <ReactTooltip id={props.spell.id} place="top" effect="solid">
        {props.spell.desc}
      </ReactTooltip>
      <div className="flex-1 flex flex-col hover-spell mx-1">
        <h2 className="text-red font-handy" data-tip={props.spell.id} data-for={props.spell.id}>
          {props.spell.name}
        </h2>
      </div>
    </>
  )
}