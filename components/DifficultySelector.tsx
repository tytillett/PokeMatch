
import React from 'react';
import { Difficulty } from '../types.ts';
import { DIFFICULTY_CONFIG } from '../constants.ts';

interface DifficultySelectorProps {
  selectedDifficulty: Difficulty | null;
  onDifficultyChange: (difficulty: Difficulty) => void;
}

const DifficultySelector: React.FC<DifficultySelectorProps> = ({ selectedDifficulty, onDifficultyChange }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-center">Choose Difficulty</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {(Object.keys(Difficulty) as Array<keyof typeof Difficulty>).map((key) => {
          const difficulty = Difficulty[key];
          const config = DIFFICULTY_CONFIG[difficulty];
          const isSelected = selectedDifficulty === difficulty;
          return (
            <div
              key={difficulty}
              onClick={() => onDifficultyChange(difficulty)}
              className={`flex flex-col items-center justify-center p-4 rounded-lg cursor-pointer transition-all duration-200 border-4 ${
                isSelected
                  ? 'bg-slate-600 border-yellow-400 scale-105 shadow-lg'
                  : 'bg-slate-700 border-transparent hover:bg-slate-600 hover:border-slate-500'
              }`}
              role="button"
              aria-pressed={isSelected}
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onDifficultyChange(difficulty)}
            >
              <img src={config.ballImage} alt={`${difficulty} Ball`} className="w-16 h-16 md:w-20 md:h-20 object-contain mb-2" />
              <span className="font-bold text-base md:text-lg">{difficulty}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DifficultySelector;