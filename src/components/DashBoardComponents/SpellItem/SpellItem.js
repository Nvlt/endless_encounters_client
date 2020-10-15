import React from 'react';
import ReactTooltip from 'react-tooltip';

export default function SpellItem(props) {
  return (
    <>
      <ReactTooltip id={props.spell.id} place="top" effect="solid" getContent={(dataTip) => `${dataTip}`} />
      <div className="flex-1 flex flex-col hover-spell width-full mx-1">
        <h2 className="text-red font-handy" data-tip={props.spell.desc} data-for={props.spell.id}>{props.spell.name}</h2>
      </div>
    </>
  )
}