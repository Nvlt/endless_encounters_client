import React from 'react';
import ReactTooltip from 'react-tooltip';
import './Character.css'


export default function CharStatCard() {

  const charData=`
  Class: Mage
  INT:10
  WILL:10
  `

  return (
    <div className='statBody'>
      <ReactTooltip id="char-stats" place="top" effect="solid" />
      <ReactTooltip id="char-hp" place="top" effect="solid" />
      <ReactTooltip id="char-ap" place="top" effect="solid" />
      <ReactTooltip id="char-mp" place="top" effect="solid" />
      <h3 className="name">Dr. Magenstein</h3>
      <img
        className="charIcon" data-event="click" clickable="true"
        data-for="char-stats" data-tip={charData}
        src={require("../../../assets/images/77-774812_open-mage-hat-png.png")}
        alt="a floppy mage hat" />
      <div id="hp-cont" name="hp-cont" data-event="click" clickable="true" data-tip="Hit Points: 6/8"
        data-for="char-hp"
        className="statBar">
        <p className="statType">HP</p>
        <div className="hStat"/>
        <div className="hStat"/>
        <div className="hStat"/>
        <div className="hStat"/>
        <div className="hStat"/>
        <div className="hStat"/>
        <div className="emptyStat" />
        <div className="emptyStat" />
      </div>
      <div id="ap-cont" name="ap-cont" data-event="click" clickable="true"
        data-tip="Action Points: 8/8" data-for="char-ap"
        className="statBar">
        <p className="statType">AP</p>
        <div className="aStat" />
        <div className="aStat" />
        <div className="aStat" />
        <div className="aStat" />
        <div className="aStat" />
        <div className="aStat" />
        <div className="aStat" />
        <div className="aStat" />
      </div>
      <div id="mana-cont" name="mana-cont" data-event="click" clickable="true"
        data-tip="Mana Points: 8/8" data-for="char-mp"
        className="statBar">
        <p className="statType">MP</p>
        <div className="mStat"/>
        <div className="mStat"/>
        <div className="mStat"/>
        <div className="mStat"/>
        <div className="mStat"/>
        <div className="mStat"/>
        <div className="mStat"/>
        <div className="mStat"/>
      </div>
    </div>)
}
