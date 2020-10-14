import React from 'react';


export default function Gear() {

  return (
    <div className="gear border bg-snow center min-w-4r flex flex-2 rounded-lightest
    flex-col shrink-none max-width-80 m-2 max-height-40
overflow-scroll p-1-2">
      <div className="flex-1 flex flex-col rounded-light sq-5r-5r border m-10px p-1-2">
        <div className="flex-2">Helm</div>
        <h3 className="flex-1">Merlin's Hat</h3>
      </div>
      <div className="flex-1 flex flex-row">
        <div className="flex-1 flex flex-col rounded-light sq-5r-5r border m-10px p-1-2">
          <div className="flex-1">Shoulders</div>
          <h3 className="flex-1 flex-shrink">Tom Brady's Shoulderpads</h3>
        </div>
        <div className="flex-1 flex flex-col rounded-light sq-5r-5r border m-10px p-1-2">
          <div className="flex-1">Chest</div>
          <h3 className="flex-1">Robe of Winter Night</h3>
        </div>
        <div className="flex-1 flex flex-col rounded-light sq-5r-5r border m-10px p-1-2">
          <div className="flex-1">Gloves</div>
          <h3 className="flex-1">Merlin's Hat</h3>
        </div>
      </div>
      <div className="flex-1 flex flex-row">
        <div className="flex-1 flex flex-col rounded-light sq-5r-5r border m-10px p-1-2">
          <div className="flex-1 ">Legs</div>
          <h3 className="flex-1">Merlin's Hat</h3>
        </div>
        <div className="flex-1 flex flex-col rounded-light sq-5r-5r border m-10px p-1-2">
          <div className="flex-1">Feet</div>
          <h3 className="flex-1">Boots of Haste</h3>
        </div>
      </div>
      <div className="flex-1 flex flex-row">
        <div className="flex-1 flex flex-col rounded-light sq-5r-5r border m-10px p-1-2">
          <div className="flex-1">Main Hand</div>
          <h3 className="flex-1">Elder Wand</h3>
        </div>
        <div className="flex-1 flex flex-col rounded-light sq-5r-5r border m-10px p-1-2">
          <div className="flex-1">Off Hand</div>
          <h3 className="flex-1">Lantern</h3>
        </div>
      </div>
    </div>
  )
}
