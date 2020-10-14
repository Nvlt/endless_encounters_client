import React from 'react';
import ReactTooltip from 'react-tooltip';

export default function InventoryItem(props) {
  return (
    <div className="text-red font-handy tooltip bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none "
      data-tip data-for={props.index}>
      <div className=""></div>
      <ReactTooltip id={props.index+''} place="top" effect="float" />
      <div className={props.item.rarity}>{props.item.name}</div>
      {props.item.desc}

    </div>
  )
}
