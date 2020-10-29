import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring';
import CardFront from '../CardFront/CardFront';
import CardBack from '../CardBack/CardBack';
import './Character.css';

export default function CharStatCard({stats={}, pools={}}) {
  const [flipped, set]=useState(false)
  const {transform, opacity}=useSpring({
    opacity: flipped? 1:0,
    transform: `perspective(600px) rotateY(${flipped? 180:0}deg)`,
    config: {mass: 5, tension: 500, friction: 80}
  })
  
  return (

    <div onClick={() => set(state => !state)} id='outer-card' className='border'>

      <animated.div className='absolute inner-card' style={{opacity: opacity.interpolate(o => 1-o), transform}}>
        <CardFront stats={pools} />
      </animated.div>

      <animated.div className='inner-card' style={{opacity, transform: transform.interpolate(t => `${t} rotateY(180deg)`)}}>
        <CardBack stats={stats} />
      </animated.div>
    </div>
  )
}
