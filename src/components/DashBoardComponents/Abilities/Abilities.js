import React from 'react';
import SpellItem from '../SpellItem/SpellItem';

export default function Abilities({ abilities=[] }) {

  // let abilityList = [
  //   {
  //     id: 'strike',
  //     name: 'Strike',
  //     desc: "Hit target with your main hand weapon."
  //   },
  //   {
  //     id: 'punch',
  //     name: 'Punch',
  //     desc: "Punch your target with a closed fist."
  //   },
  //   {
  //     id: 'slap',
  //     name: 'Slap',
  //     desc: "Slap your target with an open hand."
  //   },
  //   {
  //     id: 'tickle',
  //     name: 'Tickle',
  //     desc: "Tickle your target."
  //   },
  //   {
  //     id: 'boast',
  //     name: 'Boast',
  //     desc: "Loudly brag of your accomplishments to everyrone around you."
  //   },
  //   {
  //     id: 'flatter',
  //     name: 'Flatter',
  //     desc: "Attempt to flatter your target."
  //   },
  //   {
  //     id: 'test-extreme',
  //     name: 'Test',
  //     desc: `Fill the entire page with tooltip text Cillum amet irure fugiat occaecat velit eiusmod proident. Tempor elit officia velit nostrud est enim amet minim. Cupidatat duis adipisicing ex ex.
  //       Elit ex nulla laborum quis proident reprehenderit elit esse laborum culpa dolor Lorem laborum. Pariatur deserunt nisi Lorem ad adipisicing veniam consequat dolore aute ut quis incididunt mollit ullamco. Amet consectetur exercitation culpa laboris do enim occaecat elit amet cillum in velit non. Sit elit mollit ex ea qui Lorem. Magna do sint veniam sunt occaecat deserunt magna enim anim eu. Ut dolor aliquip dolore cillum esse nostrud dolore aliquip culpa qui tempor. Proident aute aliqua est aute ea cupidatat proident elit in nostrud pariatur non Lorem.
  //       Dolore ex aute fugiat id aute ullamco occaecat do proident consequat consequat sunt. Laborum et dolor commodo minim duis ipsum occaecat do culpa voluptate. Sit mollit ipsum mollit in officia. Minim reprehenderit Lorem magna aute reprehenderit nostrud eiusmod aliqua consequat labore commodo voluptate. Aliqua Lorem aliqua anim nisi sit cupidatat nulla fugiat ut.
  //       Ullamco eiusmod quis occaecat aliqua. Magna cupidatat voluptate enim tempor ea sint magna irure dolore aute nostrud. Voluptate sint tempor sit sunt irure enim. Ut id fugiat id enim cupidatat incididunt est quis tempor laborum enim in. Reprehenderit tempor incididunt nisi ullamco est aliquip Lorem ea nulla ullamco incididunt. Voluptate dolor id anim aute Lorem tempor reprehenderit consectetur incididunt nostrud ea cillum occaecat. Voluptate nostrud cillum in reprehenderit incididunt.`
  //   }
  // ]

  function generateAbilityList() {
    return abilities.map((ability, index) => {
      return <SpellItem spell={ability} key={index} />
    })
  }

  return (
    <div className=" border bg-snow center min-w-4r flex flex-2 rounded-lightest
    flex-col shrink-none max-width-80 mx-2 max-height-40 overflow-scroll p-1">
      {generateAbilityList()}

      {/* <ReactTooltip id="fireball" place="top" effect="solid" getContent={(dataTip) => `${dataTip}`} />
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
      </div> */}
    </div>)
}
