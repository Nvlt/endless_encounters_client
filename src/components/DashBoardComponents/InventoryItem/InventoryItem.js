import React from 'react';
import ReactTooltip from 'react-tooltip';

export default function InventoryItem(props) {
  return (
    <>
      <ReactTooltip id={props.index+''} place="top" effect="solid" getContent={(dataTip) => `${dataTip}`}/>
      <div className="text-red font-handy tooltip bg-timber rounded-light hover-inv width-20px height-20px m-1px shrink-none ">
        
        {/*Image should display*/}
        <img className='bg-timber rounded-light' src={props.item.img} data-tip={props.item.name} data-for={props.index}></img>

      </div>
    </>
  )
}
