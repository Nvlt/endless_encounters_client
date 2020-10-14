import React from 'react';

export default function InventoryItem(props) {
  return (
    <div className=" tooltip bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none ">
      <div className={"tooltiptext " + props.item.rarity}>{props.item.name}</div>
    </div>
  )
}