import React from 'react';
import SpellItem from '../SpellItem/SpellItem';
import ReactTooltip from 'react-tooltip';
import './Abilities.css';

export default function Abilities({ abilities = [] }) {
  return (
    <div className='abl-outer'>
      <div className='abl-inner'>
        {generateAbilityList(abilities)}
      </div>
    </div>
  )
}

function generateAbilityList(abilities) {
  return abilities.map((ability, index) => {
    if (ability.type) {
      return (
        <>
          {/* On click, should send name/id of clicked item to backend here */}
          <ReactTooltip id='fireball' place='top' effect='solid' getContent={(dataTip) => `${dataTip}`} />
          <h2 data-tip={`${ability.desc} Cost: ${ability.cost} AP`} data-for='fireball'>{ability.displayName}</h2>
        </>
      )
    }
  })
}