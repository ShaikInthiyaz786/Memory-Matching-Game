# Memory Matching Game

A simple memory matching game built with React.js. Players flip tiles to find matching pairs, with the goal of matching all pairs in the shortest time possible. The game tracks the player's score and time, and displays the results at the end.

## Features

- User can enter their name to personalize the game.
- Randomly shuffled tiles for each new game.
- Real-time score and time tracking.
- End game screen displaying final score and time.
- Responsive design.

## Getting Started

### Prerequisites

- Node.js (v12 or later)
- npm (v6 or later) or yarn

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/memory-matching-game.git
    cd memory-matching-game
    ```

2. Install dependencies:
    ```sh
    npm install
    ```
    or
    ```sh
    yarn install
    ```

### Running the Game

1. Start the development server:
    ```sh
    npm start
    ```
    or
    ```sh
    yarn start
    ```

2. Open your browser and go to `http://localhost:3000` to play the game.

## Project Structure

- `src`
  - `components`
    - `WelcomeScreen.js`: Component for capturing the user's name and starting the game.
    - `GameBoard.js`: Main component for the game logic, displaying tiles, tracking score, and time.
    - `Tile.js`: Represents each individual tile in the game.
    - `SuccessScreen.js`: Component to display the final score and time when the game ends.
  - `App.js`: Manages the overall state of the application, switching between welcome screen, game board, and success screen.
  - `index.js`: Entry point for the React application.

## Game Logic

### `WelcomeScreen.js`

- Captures the user's name and stores it in `localStorage`.
- Calls the `onStartGame` function to transition to the game screen.

### `GameBoard.js`

- Initializes the game state, including tiles, flipped tiles, matched tiles, score, and time.
- Uses `useEffect` to handle the timer, incrementing the time state every second.
- Another `useEffect` checks if all tiles are matched and calls `onGameEnd` when the game is finished.
- `handleTileClick` function manages the tile flipping logic and matching pairs.
- `formatTime` function converts the time in seconds to a `MM:SS` format.

### `Tile.js`

- Represents a single tile in the game.
- Displays the tile's image if it is flipped.

### `App.js`

- Manages the overall state of the application: welcome screen, game board, and success screen.
- Handles state transitions based on user actions and game state.

## Customization

- You can customize the tile images by replacing the images in the `generateTiles` function in `GameBoard.js`.
- Adjust the game board layout by modifying the CSS in `App.css`.

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.
