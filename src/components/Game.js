import React, { useState, useEffect } from 'react';
import Stopwatch from './Stopwatch';
import ControlButtons from './ControlButtons';
import PlayerRecords from './PlayerRecords';

function Game() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [records, setRecords] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [currentRecord, setCurrentRecord] = useState([]);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!isRunning && time !== 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning, time]);

  const handleInit = () => {
    setTime(0);
    setIsRunning(false);
    setRecords([]);
    setCurrentPlayer(0);
    setCurrentRecord([]);
  };

  const handleGo = () => {
    const milliseconds = Math.floor((time % 1000) / 10);

    if (isRunning) {
      const lastDigit = milliseconds % 10;

      const newRecords = [...currentRecord, lastDigit];
      setCurrentRecord(newRecords);
      
      if (isNextTurnRequired(newRecords)) {
        setRecords((prevRecords) => [newRecords, ...prevRecords]);
        setCurrentRecord([]);
        setCurrentPlayer((prevPlayer) => prevPlayer + 1);
      }
    } 
    setIsRunning(!isRunning);
    setTime((time) => Math.floor(time / 1000) * 1000 + milliseconds * 10);
  };

  const isNextTurnRequired = (records) => {
    return records.length === 2 || (records.length === 1 && records[0] === 0);
  }

  return (
    <div className="game">
      <div className="top-half">
        <Stopwatch time={time} />
        <ControlButtons onInit={handleInit} onGo={handleGo} isRunning={isRunning} />
      </div>
      <div className="bottom-half">
        <PlayerRecords records={records} currentPlayer={currentPlayer} />
      </div>
    </div>
  );
}

export default Game;
