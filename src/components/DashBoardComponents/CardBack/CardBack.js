import React from 'react';
import ReactTooltip from 'react-tooltip';

export default function CardBack(props) {
  const charData=props.stats?
    `
      STR: ${props.stats.str}
      DEX: ${props.stats.dex}
      INT: ${props.stats.int}
    `
    :'No stats to display';
  return (
    <>
      <ReactTooltip id="bar-cont" place="top" effect="solid" />

      <h3 className="name">BACK </h3>
      <img
        className="charIcon dance" data-event="click" clickable="true"
        data-for="char-stats" data-tip={charData}
        src={require("../../../assets/images/wizard-hat.png")}
        alt="a floppy mage hat" />




    </>
  )
}
