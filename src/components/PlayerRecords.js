import React from 'react';

function PlayerRecords({ records: recordGroup }) {
  return (
    <div className="player-records">
      <ul>
        {recordGroup.map((records, index) => (
          <li key={index}>{`플레이어 ${index + 1}    ${records[0]} X ${getSecondDisplayRecord(records)} = ${getResultOfRecords(records)}`}</li>
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

export default PlayerRecords;
