import React from 'react';


export default function CharStatCard() {



  return (
    <div className='char-stat-cont flex-2 rounded-lighter flex-shrink
     align-self-left border height-fit max-height-40 width-fit text-left p-1-2 m-1' >
      <h3 className="flex-1">Dr. Magenstein</h3>
      <h4 className="flex-1 mx-1">Mage</h4>
      <h5 className="flex-1 mx-1">Strength: 10</h5>
      <h5 className="flex-1 mx-1">Stamina:10</h5>
      <div id="hp-cont" name="hp-cont" className="hp-cont mx-1 flex flex-1 flex-row center flex-shrink">
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
      <div id="ap-cont" name="ap-cont" className="ap-cont mx-1 flex-shrink flex flex-1 flex-row center">
        <p className="flex- flex-shrink1">AP</p>
        <div className="border flex-1 bg-verd height-5px width-10px flex-shrink" />
        <div className="border flex-1 bg-verd height-5px width-10px flex-shrink" />
        <div className="border flex-1 bg-verd height-5px width-10px flex-shrink" />
        <div className="border flex-1 bg-verd height-5px width-10px flex-shrink" />
        <div className="border flex-1 bg-verd height-5px width-10px flex-shrink" />
        <div className="border flex-1 bg-verd height-5px width-10px flex-shrink" />
        <div className="border flex-1 bg-verd height-5px width-10px flex-shrink" />
        <div className="border flex-1 bg-verd height-5px width-10px flex-shrink" />
      </div>
      <div id="mana-cont" name="mana-cont" className="mana-cont mx-1 flex-shrink flex flex-1 flex-row center">
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
