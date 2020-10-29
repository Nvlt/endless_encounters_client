import useSound from 'use-sound';
import React, {useState} from 'react';
import '../../Styles/width-height.css';
import '../../Styles/flex.css';
export default function SoundPlayCheck() {
  const title=require('../../assets/sounds/music/title.wav');
  const [play, {stop}]=useSound(title, {
    interrupt: true, onend: () => {play()}
  });
  const [playing, setPlay]=useState(false)

  const handlePlay=function () {
    if(playing) stop();
    if(!playing) play();
    setPlay(!playing)
  }

  return <form onChange={handlePlay} className='flex-1 height-10px borderwidth-20px font-xxs'>
    {!playing&&<label htmlFor='sound'>Play Sound?</label>}
    {playing&&<label htmlFor='sound'> Playing</label>}
    <input name='sound' id='sound' type='checkbox' />
  </form>;
};

//      const title=require('../../assets/sounds/music/title.mp3');
