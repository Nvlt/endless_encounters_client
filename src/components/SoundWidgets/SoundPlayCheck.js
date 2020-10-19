import useSound from 'use-sound';
import React from 'react';


export default function SoundPlayCheck() {
  const title=require('../../assets/sounds/music/title.mp3');
  const [play]=useSound(title);

  return <form onChange={play} className="flex-1 center">
    <label htmlFor='sound'>Play Sound?</label>
    <input name='sound' id='sound' type='checkbox' />
  </form>;
};

//      const title=require('../../assets/sounds/music/title.mp3');
