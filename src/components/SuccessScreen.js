import React from 'react';

const SuccessScreen = ({ score, time, onRestart }) => {
  return (
    <div>
      <h1>Congratulations!</h1>
      <p>Your score: {score}</p>
      <p>Time taken: {time}</p>
      <button onClick={onRestart}>Play Again</button>
    </div>
  );
};

export default SuccessScreen;
