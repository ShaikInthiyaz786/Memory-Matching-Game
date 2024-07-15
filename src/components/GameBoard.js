import React, { useState, useEffect } from 'react';
import Tile from './Tile';

const GameBoard = ({ onGameEnd }) => {
  const userName = localStorage.getItem('userName') || 'Unknown User';
  const [tiles, setTiles] = useState(generateTiles());
  const [flippedTiles, setFlippedTiles] = useState([]);
  const [matchedTiles, setMatchedTiles] = useState([]);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setTime((prevTime) => prevTime + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (matchedTiles.length === tiles.length) {
      onGameEnd(score, time);
    }
  }, [matchedTiles, tiles.length, score, time, onGameEnd]);

  const handleTileClick = (index) => {
    if (flippedTiles.length === 2 || flippedTiles.includes(index) || matchedTiles.includes(index)) return;

    const newFlippedTiles = [...flippedTiles, index];
    setFlippedTiles(newFlippedTiles);

    if (newFlippedTiles.length === 2) {
      const [first, second] = newFlippedTiles;
      if (tiles[first].image === tiles[second].image) {
        setMatchedTiles([...matchedTiles, first, second]);
        setScore(score + 1);
        setFlippedTiles([]);
      } else {
        setTimeout(() => setFlippedTiles([]), 1000);
        setScore(score - 1);
      }
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div>
    <h1>Mahajong Game</h1>
    <div style={{display: "flex", justifyContent: "space-between"}}>
    <h2>Score: {score}</h2>
    <h2>Time: {formatTime(time)}</h2>
      </div>
      <h2 style={{display: "flex", justifyContent: "right"}}>Welcome: {userName}</h2>      
      <div className="game-board">
        {tiles.map((tile, index) => (
          <Tile
            key={index}
            tile={tile}
            isFlipped={flippedTiles.includes(index) || matchedTiles.includes(index)}
            onClick={() => handleTileClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const generateTiles = () => {
  const tileImages = [
    'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
    'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
    'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
    'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
    'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
    'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
    'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
    'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',  

  ];
  const tilePairs = [...tileImages, ...tileImages];
  const shuffledTiles = shuffleArray(tilePairs);
  
  return shuffledTiles.map((image, index) => ({ id: index, image }));
};

export default GameBoard;
