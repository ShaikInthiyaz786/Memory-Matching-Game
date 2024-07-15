import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import GameBoard from './components/GameBoard';
import SuccessScreen from './components/SuccessScreen';

import "./App.css"

const App = () => {
  const [gameState, setGameState] = useState('welcome'); // 'welcome', 'playing', 'success'
  const [finalScore, setFinalScore] = useState(0);
  const [finalTime, setFinalTime] = useState(0);

  const handleStartGame = () => {
    setGameState('playing');
  };

  const handleGameEnd = (score, time) => {
    setFinalScore(score);
    setFinalTime(time);
    setGameState('success');
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleRestart = () => {
    setGameState('welcome');
  };

  return (
    <div className="App">
      {gameState === 'welcome' && <WelcomeScreen onStartGame={handleStartGame} />}
      {gameState === 'playing' && <GameBoard onGameEnd={handleGameEnd} />}
      {gameState === 'success' && (
        <SuccessScreen score={finalScore} time={formatTime(finalTime)} onRestart={handleRestart} />
      )}
    </div>
  );
};

export default App;
