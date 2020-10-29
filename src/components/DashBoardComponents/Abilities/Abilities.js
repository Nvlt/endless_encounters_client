import React from 'react';
import SpellItem from '../SpellItem/SpellItem';
import ReactTooltip from 'react-tooltip';
import './Abilities.css';

export default function Abilities({ abilities = [] }) {
  // function generateAbilityList() {
  //   return abilities.map((ability, index) => {

  //     return <SpellItem spell={ability} key={index} />
  //   })
  // }

  return (
    <div className='abl-outer'>
      <div className='abl-inner'>
        {generateAbilityList(abilities)}
      </div>
      {/* <div className='abl-inner'>
        <ReactTooltip id='fireball' place='top' effect='solid' getContent={(dataTip) => `${dataTip}`} />
        <ReactTooltip id='incinerate' place='top' effect='solid' getContent={(dataTip) => `${dataTip}`} />
        <ReactTooltip id='conjure-water' place='top' effect='solid' getContent={(dataTip) => `${dataTip}`} />
        <ReactTooltip id='polymorph' place='top' effect='solid' getContent={(dataTip) => `${dataTip}`} />
        <ReactTooltip id='magic-missile' place='top' effect='solid' getContent={(dataTip) => `${dataTip}`} />
        <ReactTooltip id='telekinesis' place='top' effect='solid' getContent={(dataTip) => `${dataTip}`} />
        <h2 data-tip='Hit target with your main hand weapon.' data-for='fireball'>Strike</h2>
        <h2 data-tip='Punch your target with a closed fist.' data-for='incinerate'>Punch</h2>
        <h2 data-tip='Slap your target with an open hand.' data-for='conjure-water'>Slap</h2>
        <h2 data-tip='Tickle your target.' data-for='polymorph'>Tickle</h2>
        <h2 data-tip='Loudly brag of your accomplishments to everyrone around you.' data-iscapture='true' data-for='magic-missile'>Boast</h2>
        <h2 data-tip='Attempt to flatter your target.' data-for='telekinesis'>Flatter</h2>
      </div> */}
    </div>
  )
}

function generateAbilityList(abilities) {
  return abilities.map((ability, index) => {
    if (ability.type) {
      return (
        <>
          <ReactTooltip id='fireball' place='top' effect='solid' getContent={(dataTip) => `${dataTip}`} />
          <h2 data-tip='Hit target with your main hand weapon.' data-for='fireball'>{ability.displayName}</h2>
        </>
      )
    }
  })
}