import React from 'react';
import ReactTooltip from 'react-tooltip';
import './GearItem.css';

export default function GearItem(props) {
  return (
    <>
      <ReactTooltip id={props.slot} place="top" effect="solid" />
      <div className="flex-1 flex flex-col center rounded-light width-full   m-10px p-1-2">
        <div className="flex-2 border-b width-fit px-1">{props.slot}</div>
        <h3 className={props.gear.rarity + " flex-1 font-handy hover-gear font-lg"}
          data-event="click" clickable="true" data-tip={props.gear.desc} data-for={props.slot}>
          {props.gear.name}</h3>
      </div>
    </>
  );
}