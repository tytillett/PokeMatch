
import React from 'react';
import { CardData, Difficulty } from '../types.ts';
import { DIFFICULTY_CONFIG } from '../constants.ts';
import Card from './Card.tsx';

interface GameBoardProps {
  cards: CardData[];
  onCardClick: (index: number) => void;
  difficulty: Difficulty;
}

const GameBoard: React.FC<GameBoardProps> = ({ cards, onCardClick, difficulty }) => {
  const config = DIFFICULTY_CONFIG[difficulty];

  return (
    <div className={`grid ${config.gridClass} gap-2 sm:gap-4 justify-center`}>
      {cards.map((card, index) => (
        <Card
          key={card.id}
          cardData={card}
          onClick={() => onCardClick(index)}
          sizeClass={config.cardSizeClass}
          ballImage={config.ballImage}
        />
      ))}
    </div>
  );
};

export default GameBoard;