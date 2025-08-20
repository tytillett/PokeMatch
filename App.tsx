
import React, { useState, useEffect, useCallback } from 'react';
import { Difficulty, GameState, CardData } from './types.ts';
import { POKEMON_LIST, DIFFICULTY_CONFIG } from './constants.ts';
import GameBoard from './components/GameBoard.tsx';
import DifficultySelector from './components/DifficultySelector.tsx';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.Initial);
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
  const [cards, setCards] = useState<CardData[]>([]);
  const [moves, setMoves] = useState<number>(0);
  const [flippedCardIndices, setFlippedCardIndices] = useState<number[]>([]);
  const [matchedPokemonIds, setMatchedPokemonIds] = useState<number[]>([]);
  const [isChecking, setIsChecking] = useState<boolean>(false);

  const shuffleArray = <T,>(array: T[]): T[] => {
    return array.sort(() => Math.random() - 0.5);
  };

  const prepareCards = useCallback((selectedDifficulty: Difficulty) => {
    const config = DIFFICULTY_CONFIG[selectedDifficulty];
    const selectedPokemon = shuffleArray(POKEMON_LIST).slice(0, config.pairs);
    
    const gameCards = selectedPokemon.flatMap((name, index) => {
      const pokemonId = index;
      return [
        { id: pokemonId * 2, pokemonId, pokemonName: name, isFlipped: false, isMatched: false },
        { id: pokemonId * 2 + 1, pokemonId, pokemonName: name, isFlipped: false, isMatched: false },
      ];
    });

    setCards(shuffleArray(gameCards));
  }, []);

  const startGame = () => {
    if (!difficulty) return;
    setMoves(0);
    setFlippedCardIndices([]);
    setMatchedPokemonIds([]);
    setIsChecking(false);
    prepareCards(difficulty);
    setGameState(GameState.Playing);
  };
  
  const resetGame = () => {
    setGameState(GameState.Initial);
    setDifficulty(null);
    setCards([]);
  }

  const handleCardClick = (index: number) => {
    if (isChecking || flippedCardIndices.includes(index) || cards[index].isMatched) {
      return;
    }

    const newFlippedIndices = [...flippedCardIndices, index];
    setFlippedCardIndices(newFlippedIndices);

    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);

    if (newFlippedIndices.length === 2) {
      setIsChecking(true);
      setMoves(prev => prev + 1);
    }
  };

  useEffect(() => {
    if (flippedCardIndices.length !== 2) return;

    const [firstIndex, secondIndex] = flippedCardIndices;
    const firstCard = cards[firstIndex];
    const secondCard = cards[secondIndex];

    if (firstCard.pokemonId === secondCard.pokemonId) {
      // It's a match
      setMatchedPokemonIds(prev => [...prev, firstCard.pokemonId]);
      const newCards = cards.map(card => 
        card.pokemonId === firstCard.pokemonId ? { ...card, isMatched: true } : card
      );
      setCards(newCards);
      setFlippedCardIndices([]);
      setIsChecking(false);
    } else {
      // Not a match, flip back after a delay
      setTimeout(() => {
        const newCards = [...cards];
        newCards[firstIndex].isFlipped = false;
        newCards[secondIndex].isFlipped = false;
        setCards(newCards);
        setFlippedCardIndices([]);
        setIsChecking(false);
      }, 1000);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flippedCardIndices, cards]);

  useEffect(() => {
    if (difficulty && matchedPokemonIds.length === DIFFICULTY_CONFIG[difficulty].pairs) {
      setTimeout(() => setGameState(GameState.Won), 500);
    }
  }, [matchedPokemonIds, difficulty]);


  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-white font-sans">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wider text-yellow-400" style={{ textShadow: '2px 2px 4px #000000' }}>Pokémon Memory Match</h1>
        <p className="text-slate-300 mt-2">Test your memory and find all the pairs!</p>
      </div>

      {gameState === GameState.Initial && (
        <div className="bg-slate-800 p-8 rounded-lg shadow-2xl text-center">
            <DifficultySelector selectedDifficulty={difficulty} onDifficultyChange={setDifficulty} />
            <button
              onClick={startGame}
              disabled={!difficulty}
              className="mt-6 w-full px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 disabled:bg-slate-600 disabled:cursor-not-allowed transform hover:scale-105 disabled:transform-none"
            >
              Start Game
            </button>
        </div>
      )}

      {gameState === GameState.Playing && difficulty && (
        <div className="w-full max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-4 bg-slate-800/50 p-3 rounded-lg">
                <p className="text-lg">Moves: <span className="font-bold text-yellow-400">{moves}</span></p>
                <button onClick={resetGame} className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition-colors">
                  Quit
                </button>
            </div>
            <GameBoard cards={cards} onCardClick={handleCardClick} difficulty={difficulty} />
        </div>
      )}

      {gameState === GameState.Won && difficulty && (
         <div className="flex flex-col items-center text-center bg-slate-800 p-8 rounded-lg shadow-2xl">
            <h2 className="text-3xl font-bold text-green-400 mb-2">You Won!</h2>
            <p className="text-slate-300 mb-4">Congratulations! You matched all pairs in {moves} moves.</p>
             <div className="flex space-x-4">
                <button
                    onClick={startGame}
                    className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                    Play Again
                </button>
                 <button
                    onClick={resetGame}
                    className="px-6 py-3 bg-gray-600 text-white font-bold rounded-lg shadow-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                >
                    Change Difficulty
                </button>
             </div>
        </div>
      )}
    </div>
  );
};

export default App;