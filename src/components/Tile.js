import React from 'react';

const Tile = ({ tile, isFlipped, onClick }) => {
  return (
    <div className="tile" onClick={onClick}>
      {isFlipped ? (
        <img src={tile.image} alt="tile" />
      ) : (
        <div className="tile-cover"></div>
      )}
    </div>
  );
};

export default Tile;
