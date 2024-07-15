import React from 'react';

function ControlButtons({ onInit, onGo, isRunning }) {
  return (
    <div className="control-buttons">
      <button className='init' onClick={onInit}>RESET!</button>
      <button className={isRunning ? 'stop' : 'go'} onClick={onGo}>{isRunning ? 'STOP!' : 'GO!'}</button>
    </div>
  );
}

export default ControlButtons;
