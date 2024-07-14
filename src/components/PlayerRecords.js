import React from 'react';

function PlayerRecords({ records: recordGroup }) {
  return (
    <div className="player-records">
      <ul>
        {recordGroup.map((records, index) => (
          <li key={recordGroup.length - index}>
            <span>{getEmoji(records)} &nbsp;</span>
            <span className='player-name'>{`Player ${recordGroup.length - index}`}</span>    
            <span className='player-record'>{`${records[0]} X ${getSecondDisplayRecord(records)} = ${getResultOfRecords(records)}`}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const getSecondDisplayRecord = (records) => {
    return records.length === 1 && records[0] === 0 ? '?' : records[1];
}

const getResultOfRecords = (records) => {
    return records.length === 2 ? records[0] * records[1] : 0;
}

const getEmoji = (records) => {
    const result = getResultOfRecords(records);
    if (result >= 81) {
        return '🥳';
    } else if (result >= 60) {
        return '🤩';
    } else if (result >= 40) {
        return '😚';
    } else if (result >= 20) {
        return '😀';
    } else if (result >= 10) {
        return '🤣'
    } else if (result > 0) {
        return '😭';
    } else {
        return '💣';
    }
}

export default PlayerRecords;
