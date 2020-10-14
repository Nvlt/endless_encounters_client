import React from 'react';
import ReactTooltip from "react-tooltip";

export default function Abilities() {

  return (
    <div className=" border bg-snow center min-w-4r flex flex-2 rounded-lightest
    flex-col shrink-none max-width-80 mx-2 max-height-40 overflow-scroll p-1">
      <ReactTooltip id="fireball" place="top" effect="solid" getContent={(dataTip) => `${dataTip}`} />
      <ReactTooltip id="incinerate" place="top" effect="solid" getContent={(dataTip) => `${dataTip}`} />
      <ReactTooltip id="conjure-water" place="top" effect="solid" getContent={(dataTip) => `${dataTip}`} />
      <ReactTooltip id="polymorph" place="top" effect="solid" getContent={(dataTip) => `${dataTip}`} />
      <ReactTooltip id="magic-missile" place="top" effect="solid" getContent={(dataTip) => `${dataTip}`} />
      <ReactTooltip id="telekinesis" place="top" effect="solid" getContent={(dataTip) => `${dataTip}`} />
      <div className="flex-1 flex flex-col hover-abi width-full mx-1">
        <h2 className="font-handy" data-tip="Hit target with your main hand weapon." data-for="fireball">Strike</h2>
      </div>
      <div className="flex-1 flex flex-col hover-abi width-full mx-1 overflow-show">
        <h2 className="font-handy" data-tip="Punch your target with a closed fist." data-for="incinerate">Punch</h2>
      </div>
      <div className="flex-1 flex flex-col hover-abi width-full mx-1">
        <h2 className="font-handy" data-tip="Slap your target with an open hand." data-for="conjure-water">Slap</h2>
      </div>
      <div className="flex-1 flex flex-col hover-abi width-full mx-1">
        <h2 className="font-handy" data-tip="Tickle your target." data-for="polymorph">Tickle</h2>
      </div>
      <div className="flex-1 flex flex-col hover-abi width-full mx-1">
        <h2 className="font-handy" data-tip="Loudly brag of your accomplishments to everyrone around you." data-iscapture='true' data-for="magic-missile">Boast</h2>
      </div>
      <div className="flex-1 flex flex-col hover-abi width-full mx-1">
        <h2 className="font-handy" data-tip="Attempt to flatter your target." data-for="telekinesis">Flatter</h2>
      </div>
    </div>)
}