import React, { useState } from 'react';

const WelcomeScreen = ({ onStartGame }) => {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    localStorage.setItem('userName', name);
    onStartGame(name);
  };

  return (
    <div>
      <h1>Welcome to Tile Matching Game</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={handleSubmit}>Start Game</button>
    </div>
  );
};

export default WelcomeScreen;
