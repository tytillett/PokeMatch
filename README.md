# Pokémon Memory Match

An interactive Pokémon-themed memory matching game built with React and TypeScript. Test your memory by finding all the matching Pokémon pairs on a beautifully designed, responsive interface.

## ✨ Features

*   **Four Difficulty Levels**: Normal (3 pairs), Great (6 pairs), Ultra (9 pairs), and Master (12 pairs). Each represented by its corresponding Poké Ball.
*   **Interactive 3D Card Flip Animation**: Smooth and engaging card flip effect powered by CSS transitions.
*   **Responsive Design**: Fully playable on desktop, tablet, and mobile devices.
*   **Move Counter**: Track your number of moves to solve the puzzle.
*   **Zero-Setup Local Launch**: Runs directly in the browser without any build steps or local server required.
*   **Offline-First**: All assets are local, so the game can be played without an internet connection after the initial load.

## 🛠️ Tech Stack

*   **Frontend**: [React](https://reactjs.org/)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **In-Browser Transpilation**: [Babel Standalone](https://babeljs.io/docs/babel-standalone) for easy local development.

## 🚀 Running the Application Locally

This project is configured to run directly in your web browser without needing a local development server or any complex installation steps.

**Prerequisites:**
*   A modern web browser (e.g., Chrome, Firefox, Safari, Edge).
*   The project files downloaded to your computer.

**Instructions:**

1.  **Download or Clone the Code:**
    If you have `git` installed, you can clone the repository. Otherwise, you can download the project files as a ZIP folder and extract them.

2.  **Navigate to the Project Folder:**
    Open your file explorer and navigate to the root directory of the project where you see the `index.html` file.

3.  **Open `index.html` in Your Browser:**
    Simply **drag and drop the `index.html` file into a new browser tab**, or right-click the file, choose "Open with", and select your preferred browser.

That's it! The game should now be running.

#### How It Works
The project uses **Babel Standalone**, a library that transpiles the TypeScript (TSX) code into browser-readable JavaScript on the fly. This eliminates the need for a traditional build process (like `npm install` and `npm start`), making it incredibly simple to run the game locally.

## 룰 How to Play

1.  **Choose a Difficulty**: Select 'Normal', 'Great', 'Ultra', or 'Master' from the main screen by clicking on the corresponding Poké Ball image. The 'Start Game' button will become active.
2.  **Start Game**: Click the "Start Game" button to begin.
3.  **Find Pairs**: Click on a card to flip it over and reveal a Pokémon. Then, click on a second card to see if you've found a match.
    *   If the Pokémon match, the cards will stay face-up.
    *   If they don't match, they will flip back over after a short delay.
4.  **Win the Game**: You win when you have successfully matched all the pairs of Pokémon. Your total number of moves will be displayed on the victory screen.
5.  **Restart or Change Difficulty**: After winning, you can choose to 'Play Again' with the same difficulty or 'Change Difficulty' to return to the main menu. You can also 'Quit' mid-game to go back to the start.

## 📁 Project Structure 

```
.
├── components/
│   ├── Card.tsx                 # Renders a single game card
│   ├── DifficultySelector.tsx   # Renders the difficulty buttons
│   └── GameBoard.tsx            # Renders the grid of cards
├── images/
│   ├── pokeball.png
│   ├── greatball.png
│   ├── ultraball.png
│   ├── masterball.png
│   └── [pokemon_name].gif       # All Pokémon images
├── App.tsx                      # Main application component with game logic
├── constants.ts                 # Game constants (Pokémon list, difficulty config)
├── index.html                   # Main HTML entry point
├── index.tsx                    # Root React script to mount the app
├── metadata.json                # App metadata
├── README.md                    # You are here!
└── types.ts                     # TypeScript types and enums
```
