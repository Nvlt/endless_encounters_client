import React from 'react';
import './Bar.css';

export default function ApBar({curr=0, max=1}) {
  function generateBars() {
    let bars=[]
    for(let i=0;i<max;i++) {
      if(i<curr) {
        bars.push(<div className='flex-1 bg-verd height-5px flex-shrink ap bar-segment' key={i} />)
      }
      else {
        bars.push(<div className='flex-1 bg-timberwolf height-5px flex-shrink bar-segment' key={i} />)
      }
    }
    return bars;
  }

  return (
    <div id='ap-cont' name='ap-cont' data-event='click' clickable='true' data-tip={'AP: '+curr+'/'+max}
      data-for='char-ap'
      className={'ap-cont bar-container flex flex-1 flex-row'}>
      <p className='flex-1 flex-shrink1 bar-text'>AP</p>
      <div className='bg-timberwolf height-5px flex bar bar-outer' >
        {generateBars()}
      </div>
    </div>
  );
}
