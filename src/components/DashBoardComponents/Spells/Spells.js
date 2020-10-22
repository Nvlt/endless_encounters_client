import React from 'react';
import SpellItem from '../SpellItem/SpellItem';
import './Spells.css';
import ReactTooltip from 'react-tooltip';
export default function Spells({spells=[]}) {

  function generateSpellList() {
    return spells.map((spell, index) => {
      return <SpellItem spell={spell} key={index} />
    })
  }
  return (
    <div className="spells border bg-snow center min-w-4r flex flex-2 rounded-lightest
    flex-col shrink-none mx-2 p-1">
      {/* {generateSpellList()} */}


      <ReactTooltip id="fireball" place="top" effect="solid" getContent={(dataTip) => `${dataTip}`} />
      <ReactTooltip id="incinerate" place="top" effect="solid" getContent={(dataTip) => `${dataTip}`} />
      <ReactTooltip id="conjure-water" place="top" effect="solid" getContent={(dataTip) => `${dataTip}`} />
      <ReactTooltip id="polymorph" place="top" effect="solid" getContent={(dataTip) => `${dataTip}`} />
      <ReactTooltip id="magic-missile" place="top" effect="solid" getContent={(dataTip) => `${dataTip}`} />
      <ReactTooltip id="telekinesis" place="top" effect="solid" getContent={(dataTip) => `${dataTip}`} />
      <div className="flex-1 flex flex-col hover-spell width-full mx-1">
        <h2 className="text-red font-handy" data-tip="   Hurl a fiery ball at your target.
          2 D 6 + INT Modifier" data-for="fireball">Fireball</h2>
      </div>
      <div className="flex-1 flex flex-col hover-spell width-full mx-1 overflow-show">
        <h2 className="text-red font-handy" data-tip="Set your target on fire.
          1 D 4 for 4 Turns." data-for="incinerate">Incinerate</h2>
      </div>
      <div className="flex-1 flex flex-col hover-spell width-full mx-1">
        <h2 className="text-blue font-handy" data-tip="Conjure 1 Fresh Water to drink.
          Replenish 1 D 4 MP." data-for="conjure-water">Conjure Water</h2>
      </div>
      <div className="flex-1 flex flex-col hover-spell width-full mx-1">
        <h2 className="text-green font-handy" data-tip="Turn 1 Enemy to a harmless sheep for 5 turns.
          Only 1 target can be polymorphed at a time." data-for="polymorph">Polymorph</h2>
      </div>
      <div className="flex-1 flex flex-col hover-spell width-full mx-1">
        <h2 className="text-purple font-handy" data-tip="Shoot a barrage of arcane missiles at your target.
          1 D 4 DMG 1 D 6 Times." data-iscapture='true' data-for="magic-missile">Magic Missile</h2>
      </div>
      <div className="flex-1 flex flex-col hover-spell width-full mx-1">
        <h2 className="text-purple font-handy" data-tip="You can move an object weighing up to 5 lbs up to 3 yards." data-for="telekinesis">Telekinesis</h2>
      </div>
    </div>)
}
