import React from 'react';
import ReactTooltip from "react-tooltip";

export default function Spells() {


  return (
    <div className="gear border bg-snow center width-fit flex flex-2 rounded-lightest
    flex-col shrink-none max-width-80 m-2 max-height-40
    p-1">
      <div className="flex-1 flex flex-col hover-spell width-full mx-4">
        <h2 className="text-red font-handy" data-tip data-for="fireball">Fireball</h2>
        <ReactTooltip id="fireball" place="top" effect="float">
          Hurl a fiery ball at your target.
          2 D 6 + INT Modifier
        </ReactTooltip>
      </div>
      <div className="flex-1 flex flex-col hover-spell width-full mx-4">
        <h2 className="text-red font-handy" data-tip data-for="incinerate">Incinerate</h2>
        <ReactTooltip id="incinerate" place="top" effect="float">
          Set your target on fire.
          1 D 4 for 4 Turns.
        </ReactTooltip>
      </div>
      <div className="flex-1 flex flex-col hover-spell width-full mx-4">
        <h2 className="text-blue font-handy" data-tip data-for="conjure-water">Conjure Water</h2>
        <ReactTooltip id="conjure-water" place="top" effect="solid">
          Conjure 1 Fresh Water to drink.
          Replenish 1 D 4 MP.
        </ReactTooltip>
      </div>

      <div className="flex-1 flex flex-col hover-spell width-full mx-4">
        <h2 className="text-green font-handy" data-tip data-for="polymorph">Polymorph</h2>
        <ReactTooltip id="polymorph" place="top" effect="float">
          Turn 1 Enemy to a harmless sheep for 5 turns.
          Only 1 target can be polymorphed at a time.
        </ReactTooltip>
      </div>
      <div className="flex-1 flex flex-col hover-spell width-full mx-4">
        <h2 className="text-purple font-handy" data-tip data-for="magic-missile">Magic Missile</h2>
        <ReactTooltip id="magic-missile" place="top" effect="float">
          Shoot a barrage of arcane missiles at your target.
          1 D 4 DMG 1 D 6 Times.
        </ReactTooltip>
      </div>
      <div className="flex-1 flex flex-col hover-spell width-full mx-4">
        <h2 className="text-purple font-handy" data-tip data-for="telekinesis">Telekinesis</h2>
        <ReactTooltip id="telekinesis" place="top" effect="float">
          You can move an object weighing up to 5 lbs up to 3 yards.
        </ReactTooltip>
      </div>


    </div>)
}
