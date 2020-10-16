import React from 'react';
import ReactTooltip from 'react-tooltip';
import './InventoryItem.css';

export default function InventoryItem(props) {
  return (
    <>
      <ReactTooltip
      id={props.index+''}
      place="top"
      effect="solid"
      disable={!props.item}>
        <span className={props.item.rarity + '-text item-name'}>{props.item.name}</span>
        <p>{props.item.desc}</p>
      </ReactTooltip>
      <div className={"text-red font-handy tooltip bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none " + props.item.rarity + "-border"}
      data-tip={props.index}
      data-for={props.index}>
        
        <img className='bg-timber rounded-light item-image' src={props.item.img}></img>

      </div>
    </>
  )
}
