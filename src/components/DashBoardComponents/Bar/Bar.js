import React from 'react';
import './Bar.css';

export default function Bar({bar='hp', curr=0, max=0, text='Health'}) {
  return (
    <>
      <div id={bar+'-cont'} name={`${bar}-cont`} data-event='click' clickable='true' data-tip={`${text} :   ${curr}/${max}`}
        data-for='bar-cont'
        className={bar+'-cont bar-container flex flex-row flex-1'}>
        <p className='flex-1 flex-shrink1 bar-text'>{bar}</p>
        <div className='bg-timberwolf height-5px bar bar-outer' >
          <div className={'height-5px '+bar} style={{width: (curr/max*100)+'%'}} />
        </div>
      </div>
    </>
  );
}
