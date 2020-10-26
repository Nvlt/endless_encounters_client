import React from 'react';
import './Abilities.css'
import SpellItem from '../SpellItem/SpellItem';
import ReactTooltip from 'react-tooltip';
export default function Abilities({abilities=[]}) {


  function generateAbilityList() {
    return abilities.map((ability, index) => {
      return <SpellItem spell={ability} key={index} />
    })
  }

  return (
    <div className="abilities border bg-snow center flex flex-2 rounded-lightest
    flex-col shrink-none p-1">
      {/* {generateAbilityList()} */}

      <ReactTooltip id="fireball" place="top" effect="solid" getContent={(dataTip) => `${dataTip}`} />
      <ReactTooltip id="incinerate" place="top" effect="solid" getContent={(dataTip) => `${dataTip}`} />
      <ReactTooltip id="conjure-water" place="top" effect="solid" getContent={(dataTip) => `${dataTip}`} />
      <ReactTooltip id="polymorph" place="top" effect="solid" getContent={(dataTip) => `${dataTip}`} />
      <ReactTooltip id="magic-missile" place="top" effect="solid" getContent={(dataTip) => `${dataTip}`} />
      <ReactTooltip id="telekinesis" place="top" effect="solid" getContent={(dataTip) => `${dataTip}`} />
      <div className="text-black flex-1 flex flex-col hover-abi width-full mx-1">
        <h2 className="font-handy" data-tip="Hit target with your main hand weapon." data-for="fireball">Strike</h2>
      </div>
      <div className="text-black flex-1 flex flex-col hover-abi width-full mx-1 overflow-show">
        <h2 className="font-handy" data-tip="Punch your target with a closed fist." data-for="incinerate">Punch</h2>
      </div>
      <div className="text-black flex-1 flex flex-col hover-abi width-full mx-1">
        <h2 className="font-handy" data-tip="Slap your target with an open hand." data-for="conjure-water">Slap</h2>
      </div>
      <div className="text-black flex-1 flex flex-col hover-abi width-full mx-1">
        <h2 className="font-handy" data-tip="Tickle your target." data-for="polymorph">Tickle</h2>
      </div>
      <div className="text-black flex-1 flex flex-col hover-abi width-full mx-1">
        <h2 className="font-handy" data-tip="Loudly brag of your accomplishments to everyrone around you." data-iscapture='true' data-for="magic-missile">Boast</h2>
      </div>
      <div className="text-black flex-1 flex flex-col hover-abi width-full mx-1">
        <h2 className="font-handy" data-tip="Attempt to flatter your target." data-for="telekinesis">Flatter</h2>
      </div>
    </div>)
}
