
import React from 'react';
import { CardData } from '../types.ts';
import { getPokemonImageUrl } from '../constants.ts';

interface CardProps {
  cardData: CardData;
  onClick: () => void;
  sizeClass: string;
  ballImage: string;
}

const Card: React.FC<CardProps> = ({ cardData, onClick, sizeClass, ballImage }) => {
  const { isFlipped, isMatched, pokemonName } = cardData;

  const cardClasses = `relative transition-transform duration-700 transform-style-preserve-3d ${sizeClass} ${
    (isFlipped || isMatched) ? 'rotate-y-180' : '' // Keep card flipped if it's a match
  }`;
  
  const cursorClass = isMatched || isFlipped ? 'cursor-default' : 'cursor-pointer';

  const frontAndBackBaseClasses = 'absolute w-full h-full backface-hidden rounded-lg shadow-xl flex items-center justify-center';

  return (
    <div className={`perspective-1000 ${cursorClass}`} onClick={onClick}>
      {/* The main card container. The card remains fully visible on match instead of greying out. */}
      <div className={cardClasses}>
        {/* Card Front (Pokéball) */}
        <div
          className={`${frontAndBackBaseClasses} bg-gradient-to-br from-red-500 to-red-600 border-4 border-slate-800`}
        >
          <div className="w-full h-full bg-white/10 p-2 flex items-center justify-center">
             <img src={ballImage} alt="Pokéball" className="w-1/2 h-1/2 object-contain" />
          </div>
        </div>
        {/* Card Back (Pokémon) */}
        <div
          className={`${frontAndBackBaseClasses} bg-gradient-to-br from-blue-400 to-indigo-500 rotate-y-180 border-4 ${isMatched ? 'border-green-400' : 'border-yellow-400'}`}
        >
          <img src={getPokemonImageUrl(pokemonName)} alt={pokemonName} className="w-full h-full object-contain p-2" />
        </div>
      </div>
    </div>
  );
};

export default Card;