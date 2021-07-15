import React from 'react';

const CalenderHeader = ({ onNext, onBack, dateDisplay }) => {
  return (
    <div id="header">
      <div id="monthDisplay">{dateDisplay}</div>
      <div>
        <button onClick={onBack} id="backButton">
          Back
        </button>
        <button onClick={onNext} id="nextButton">
          Next
        </button>
      </div>
    </div>
  );
};

export default CalenderHeader;
