import React from 'react';
import ReactTooltip from 'react-tooltip';


export default function CharStatCard() {

  const charData=`
  Class: Mage
  INT:10
  WILL:10
  `

  return (
    <div className='char-stat-cont flex-2 rounded-lighter center flex-shrink
     align-self-left border height-fit max-height-40 width-fit text-left p-1-2 m-1' >
      <ReactTooltip id="char-stats" place="top" effect="solid" />
      <ReactTooltip id="char-hp" place="top" effect="solid" />
      <ReactTooltip id="char-ap" place="top" effect="solid" />
      <ReactTooltip id="char-mp" place="top" effect="solid" />
      <h3 className="flex-1 center border-b" >Dr. Magenstein</h3>
      <img
        className="flex-1 width-half center mx-2 dance" data-event="click" clickable="true"
        data-for="char-stats" data-tip={charData}
        src={require("../../../assets/images/77-774812_open-mage-hat-png.png")}
        alt="a floppy mage hat" />
      <div id="hp-cont" name="hp-cont" data-event="click" clickable="true" data-tip="Hit Points: 6/8"
        data-for="char-hp"
        className="hp-cont mx-1 flex flex-1 flex-row center flex-shrink">
        <p className="flex-1 flex-shrink">HP</p>
        <div className="border flex-1 bg-red height-5px width-10px flex-shrink" />
        <div className="border flex-1 bg-red height-5px width-10px flex-shrink" />
        <div className="border flex-1 bg-red height-5px width-10px flex-shrink" />
        <div className="border flex-1 bg-red height-5px width-10px flex-shrink" />
        <div className="border flex-1 bg-red height-5px width-10px flex-shrink" />
        <div className="border flex-1 bg-red height-5px width-10px flex-shrink" />
        <div className="border flex-1 bg-timberwolf height-5px width-10px flex-shrink" />
        <div className="border flex-1 bg-timberwolf height-5px width-10px flex-shrink" />
      </div>
      <div id="ap-cont" name="ap-cont" data-event="click" clickable="true"
        data-tip="Action Points: 8/8" data-for="char-ap"
        className="ap-cont mx-1 flex-shrink flex flex-1 flex-row center">
        <p className="flex-1 flex-shrink1">AP</p>
        <div className="border flex-1 bg-verd height-5px width-10px flex-shrink" />
        <div className="border flex-1 bg-verd height-5px width-10px flex-shrink" />
        <div className="border flex-1 bg-verd height-5px width-10px flex-shrink" />
        <div className="border flex-1 bg-verd height-5px width-10px flex-shrink" />
        <div className="border flex-1 bg-verd height-5px width-10px flex-shrink" />
        <div className="border flex-1 bg-verd height-5px width-10px flex-shrink" />
        <div className="border flex-1 bg-verd height-5px width-10px flex-shrink" />
        <div className="border flex-1 bg-verd height-5px width-10px flex-shrink" />
      </div>
      <div id="mana-cont" name="mana-cont" data-event="click" clickable="true"
        data-tip="Mana Points: 8/8" data-for="char-mp"
        className="mana-cont mx-1 flex-shrink flex flex-1 flex-row center">
        <p className="flex-1 flex-shrink">MP</p>
        <div className="border flex-1 bg-liberty height-5px width-10px flex-shrink" />
        <div className="border flex-1 bg-liberty height-5px width-10px flex-shrink" />
        <div className="border flex-1 bg-liberty height-5px width-10px flex-shrink" />
        <div className="border flex-1 bg-liberty height-5px width-10px flex-shrink" />
        <div className="border flex-1 bg-liberty height-5px width-10px flex-shrink" />
        <div className="border flex-1 bg-liberty height-5px width-10px flex-shrink" />
        <div className="border flex-1 bg-liberty height-5px width-10px flex-shrink" />
        <div className="border flex-1 bg-liberty height-5px width-10px flex-shrink" />
      </div>
    </div>)
}
