import React from 'react';
import ReactTooltip from 'react-tooltip';

export default function Bar({bar='hp', curr=0, max=0, text='Health'}) {
  return (
    <>
      <ReactTooltip id={"char-"+bar} place="top" effect="solid" />
      <div id={bar+"-cont"} name={bar+"-cont"} data-event="click" clickable="true" data-tip={text+ ': ' + curr+"/"+max}
      data-for="char-hp"
      className={bar+"-cont mx-1 flex-shrink flex flex-1 flex-row center"}>
        <p className="flex-1 flex-shrink1">{bar}</p>
        <div className="border bg-timberwolf height-5px width-80" >
          <div className="bg-red height-5px" style={{width: (curr/max*100)+'%'}}/>  
        </div>
      </div>
    </>
  );
}