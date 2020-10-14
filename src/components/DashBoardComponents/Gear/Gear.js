import React from 'react';
import ReactTooltip from "react-tooltip";
// let gear={
//   helm: {},
//   shoulders: {},
//   chest: {},
//   gloves: {},
//   legs: {},
//   feet: {},
//   main: {},
//   off: {}
// }




export default function Gear() {

  return (
    <div className="gear border bg-snow center min-w-4r flex flex-2 rounded-lightest
    flex-col shrink-none max-width-80 mx-2 max-height-40
    overflow-scroll p-1">

      <ReactTooltip id="head" place="top" effect="solid" />
      <ReactTooltip id="shoulder" place="top" effect="solid" />
      <ReactTooltip id="chest" place="top" effect="solid" />
      <ReactTooltip id="gloves" place="top" effect="solid" />
      <ReactTooltip id="legs" place="top" effect="solid" />
      <ReactTooltip id="feet" place="top" effect="solid" />
      <ReactTooltip id="main" place="top" effect="solid" />
      <ReactTooltip id="off" place="top" effect="solid" />

      <div className="flex-1 flex flex-col center rounded-light width-full   m-10px p-1-2">
        <div className="flex-2 border-b width-fit px-1">Helm</div>
        <h3 className="flex-1 font-handy hover-gear font-lg"
          data-event="click" clickable="true" data-tip="+2 To Will" data-for="head">
          Merlin's Hat</h3>

      </div>
      <div className="flex-1 flex flex-col  center rounded-light width-full   m-10px p-1-2">
        <div className="flex-1 border-b width-fit px-1">Shoulders</div>
        <h3 className="flex-1 flex-shrink hover-gear font-handy font-lg"
          data-event="click" clickable="true" data-tip="+2 to STAM" data-for="shoulder">
          Tom Brady's Shoulderpads</h3>
      </div>
      <div className="flex-1 flex flex-col  center rounded-light width-full   m-10px p-1-2">
        <div className="flex-1 border-b width-fit px-1">Chest</div>
        <h3 className="flex-1 font-handy hover-gear font-lg"
          data-event="click" clickable="true" data-tip="+5 to Frost And Shadow Damage" data-for="chest">
          Robe of Winter Night</h3>
      </div>
      <div className="flex-1 flex flex-col  center rounded-light width-full   m-10px p-1-2">
        <div className="flex-1 border-b width-fit px-1">Gloves</div>
        <h3 className="flex-1 font-handy hover-gear  font-lg"
          data-event="click" clickable="true" data-tip="-1 to CHA" data-for="gloves">
          Hulk Hands</h3>
      </div>
      <div className="flex-1 flex flex-col  center rounded-light width-full  m-10px p-1-2">
        <div className="flex-1 border-b width-fit px-1">Legs</div>
        <h3 className="flex-1 font-handy hover-gear font-lg"
          data-event="click" clickable="true" data-tip="+5 Fire Damage Resistance" data-for="legs">
          Hot Pants</h3>
      </div>
      <div className="flex-1 flex flex-col center rounded-light width-full  m-10px p-1-2">
        <div className="flex-1 border-b width-fit px-1">Feet</div>
        <h3 className="flex-1 font-handy hover-gear font-lg"
          data-event="click" clickable="true" data-tip="+5 to Initiative rolls" data-for="feet">
          Boots of Haste</h3>
      </div>
      <div className="flex-1 flex flex-col  center rounded-light width-full  m-10px p-1-2">
        <div className="flex-1 border-b width-fit px-1">Main Hand</div>
        <h3 className="flex-1 font-handy hover-gear font-lg"
          data-event="click" clickable="true" data-tip="All Spells Will Hit" data-for="main">
          Elder Wand</h3>
      </div>
      <div className="flex-1 flex flex-col  center rounded-light width-full  m-10px p-1-2">
        <div className="flex-1 border-b width-fit px-1">Off Hand</div>
        <h3 className="flex-1 font-handy hover-gear font-lg"
          data-event="click" clickable="true" data-tip="Can see in the dark up to 10 yds." data-for="off">
          Lantern</h3>
      </div>
    </div>

  )
}
