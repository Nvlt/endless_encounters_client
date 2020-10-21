import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import './Character.css'
import ApBar from '../Bar/ApBar';
import Bar from '../Bar/Bar';
import { useSpring, animated } from 'react-spring'


export default function CharStatCard({stats={}}) {

  // const charData=`
  // Class: Mage
  // INT:10
  // WILL:10
  // `
    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
      opacity: flipped ? 1 : 0,
      transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
      config: { mass: 5, tension: 500, friction: 80 }
    })

  const charData=stats?
    `
      STR: ${stats.str}
      DEX: ${stats.dex}
      INT: ${stats.int}
    `
    :'No stats to display';

  return (

    <div onClick={() => set(state => !state)} className='outterCard'>

      <animated.div style={{opacity: opacity.interpolate(o => 1 -o), transform}} className='innerCard' >
        <ReactTooltip id="bar-cont" place="top" effect="solid" />

        <h3 className="name">Dr. Magenstein</h3>
        <img
          className="charIcon dance" data-event="click" clickable="true"
          data-for="char-stats" data-tip={charData}
          src={require("../../../assets/images/wizard-hat.png")}
          alt="a floppy mage hat" />


        <Bar bar={'HP'} curr={stats.hp} max={stats.hpMax} text={'Health'} />
        <Bar bar={'MP'} curr={stats.mp} max={stats.mpMax} text={'Mana'} />
        <ApBar curr={2} max={5} />

      </animated.div>
      <animated.div style={{ opacity, transform: transform.interpolate(t => `${t} rotateY(180deg)`) }}>
        <ReactTooltip id="bar-cont" place="top" effect="solid" />

        <h3 className="name">BACK </h3>
        <img
          className="charIcon dance" data-event="click" clickable="true"
          data-for="char-stats" data-tip={charData}
          src={require("../../../assets/images/wizard-hat.png")}
          alt="a floppy mage hat" />


        <Bar bar={'HP'} curr={stats.hp} max={stats.hpMax} text={'Health'} />
        <Bar bar={'MP'} curr={stats.mp} max={stats.mpMax} text={'Mana'} />
        <ApBar curr={2} max={5} />

      </animated.div>
    </div>
  )
}
