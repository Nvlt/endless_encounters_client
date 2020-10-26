import React, {useState} from 'react';

import {useSpring, animated} from 'react-spring';
import './Character.css'
import CardFront from '../CardFront/CardFront';
import CardBack from '../CardBack/CardBack';



export default function CharStatCard({stats={}}) {

  // const charData=`
  // Class: Mage
  // INT:10
  // WILL:10
  // `
  const [flipped, set]=useState(false)
  const {transform, opacity}=useSpring({
    opacity: flipped? 1:0,
    transform: `perspective(600px) rotateY(${flipped? 180:0}deg)`,
    config: {mass: 5, tension: 500, friction: 80}
  })



  return (

    <div onClick={() => set(state => !state)} id='outterCard' className='border'>

      <animated.div className='absolute innerCard' style={{opacity: opacity.interpolate(o => 1-o), transform}}>
        {/* <ReactTooltip id="bar-cont" place="top" effect="solid" />

        <h3 className="name">Dr. Magenstein</h3>
        <img
          className="charIcon dance" data-event="click" clickable="true"
          data-for="char-stats" data-tip={charData}
          src={require("../../../assets/images/wizard-hat.png")}
          alt="a floppy mage hat" />


        <Bar bar={'HP'} curr={stats.hp} max={stats.hpMax} text={'Health'} />
        <Bar bar={'MP'} curr={stats.mp} max={stats.mpMax} text={'Mana'} />
        <ApBar curr={2} max={5} /> */}
        <CardFront stats={stats} />
      </animated.div>

      <animated.div className='innerCard' style={{opacity, transform: transform.interpolate(t => `${t} rotateY(180deg)`)}}>
        {/* <ReactTooltip id="bar-cont" place="top" effect="solid" />

        <h3 className="name">BACK </h3>
        <img
          className="charIcon dance" data-event="click" clickable="true"
          data-for="char-stats" data-tip={charData}
          src={require("../../../assets/images/wizard-hat.png")}
          alt="a floppy mage hat" />


        <Bar bar={'HP'} curr={stats.hp} max={stats.hpMax} text={'Health'} />
        <Bar bar={'MP'} curr={stats.mp} max={stats.mpMax} text={'Mana'} />
        <ApBar curr={2} max={5} /> */}
        <CardBack stats={stats} />
      </animated.div>
    </div>
  )
}
