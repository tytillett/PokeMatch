
export enum Difficulty {
  Normal = 'Normal',
  Great = 'Great',
  Ultra = 'Ultra',
  Master = 'Master',
}

export enum GameState {
  Initial = 'Initial',
  Playing = 'Playing',
  Won = 'Won',
}

export interface CardData {
  id: number;
  pokemonId: number;
  pokemonName: string;
  isFlipped: boolean;
  isMatched: boolean;
}