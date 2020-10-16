import React from 'react';
import ReactTooltip from 'react-tooltip';
import './Character.css'
import ApBar from '../Bar/ApBar';
import Bar from '../Bar/Bar';



export default function CharStatCard({stats={}}) {

  // const charData=`
  // Class: Mage
  // INT:10
  // WILL:10
  // `

  const charData = stats ?
    `
      STR: ${stats.str}
      DEX: ${stats.dex}
      INT: ${stats.int}
    `
    : 'No stats to display';

  return (

    <div className='statBody'>

    <div className='char-stat-cont flex-2 rounded-lighter center flex  flex-col flex-grow
     align-self-left border height-fit width-fit text-left p-1-2 m-1 justify-stretch' >
      <ReactTooltip id="char-stats" place="top" effect="solid" />        
      <ReactTooltip id="char-mp" place="top" effect="solid" />

      <h3 className="name">Dr. Magenstein</h3>
      <img
        className="charIcon" data-event="click" clickable="true"
        data-for="char-stats" data-tip={charData}
        src={require("../../../assets/images/wizard-hat.png")}
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

      
      <Bar bar={'hp'} curr={stats.hp} max={stats.hpMax} text={'Health'}/>
      <Bar bar={'mp'} curr={stats.mp} max={stats.mpMax} text={'Mana'}/>
      <ApBar curr={2} max={5}/>
      {/* <div id="ap-cont" name="ap-cont" data-event="click" clickable="true"
        data-tip="Action Points: 8/8" data-for="char-ap"
        className="ap-cont mx-1 flex-shrink flex flex-1 flex-row center">
        <p className="flex-1 flex-shrink1">AP</p>
        <div className="flex border bg-timberwolf height-5px width-80">
        
        </div>
        <p className="flex-1 flex-shrink1">AP</p>
        <div className="border flex-1 bg-verd height-5px width-10px flex-shrink" />
        <div className="border flex-1 bg-verd height-5px width-10px flex-shrink" />
        <div className="border flex-1 bg-verd height-5px width-10px flex-shrink" />
        <div className="border flex-1 bg-verd height-5px width-10px flex-shrink" />
        <div className="border flex-1 bg-verd height-5px width-10px flex-shrink" />
        <div className="border flex-1 bg-verd height-5px width-10px flex-shrink" />
        <div className="border flex-1 bg-verd height-5px width-10px flex-shrink" />
        <div className="border flex-1 bg-verd height-5px width-10px flex-shrink" />
      </div> */}

    </div>)
}
