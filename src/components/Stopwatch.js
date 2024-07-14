import React from 'react';

function Stopwatch({ time }) {
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10).toString().padStart(2, '0');
    return {
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0'),
      milliseconds: milliseconds
    };
  };

  const { minutes, seconds, milliseconds } = formatTime(time);

  return (
    <div className="stopwatch">
      <span className="time-part">{minutes}</span>:
      <span className="time-part">{seconds}</span>.
      <span className="milliseconds">
        <span>{milliseconds.slice(0, -1)}</span>
        <span className="last-digit">{milliseconds.slice(-1)}</span>
      </span>
    </div>
  );
}

export default Stopwatch;
