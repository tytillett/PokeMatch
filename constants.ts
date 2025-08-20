import { Difficulty } from './types';

export const POKEMON_LIST = [
  'Kyogre', 'Arceus', 'Lugia', 'Tapu Coco', 'Tapu Fini',
  'Tapu Lele', 'Tapu Bulu', 'Groudon', 'Lunala', 'Solgaleo', 'Rayquaza', 'Mew',
  'aerodactyl', 'alolandugtrio', 'alolanexeggutor', 'articuno', 'guzzlord', 
  'gyrados', 'hooh', 'hoopa', 'ludicolo', 'magikarp', 'moltres', 'slowking', 'suicune', 'zapdos'
];

// Using a local path for the Pokéball image for offline use.
export const POKEBALL_URL = './images/pokeball.png';
export const GREATBALL_URL = './images/greatball.png';
export const ULTRABALL_URL = './images/ultraball.png';
export const MASTERBALL_URL = './images/masterball.png';


// Using local paths for Pokémon images for offline use.
// Assumes images are in an 'images' folder with names like 'pikachu.gif'.
export const getPokemonImageUrl = (name: string) => `./images/${name}.gif`;

interface DifficultyConfig {
  gridClass: string;
  pairs: number;
  cardSizeClass: string;
  ballImage: string;
}

export const DIFFICULTY_CONFIG: Record<Difficulty, DifficultyConfig> = {
  [Difficulty.Normal]: { gridClass: 'grid-cols-3', pairs: 3, cardSizeClass: 'w-32 h-32 md:w-40 md:h-40', ballImage: POKEBALL_URL },
  [Difficulty.Great]: { gridClass: 'grid-cols-4', pairs: 6, cardSizeClass: 'w-24 h-24 md:w-32 md:h-32', ballImage: GREATBALL_URL },
  [Difficulty.Ultra]: { gridClass: 'grid-cols-6', pairs: 9, cardSizeClass: 'w-20 h-20 md:w-24 md:h-24', ballImage: ULTRABALL_URL },
  [Difficulty.Master]: { gridClass: 'grid-cols-6', pairs: 15, cardSizeClass: 'w-20 h-20 md:w-24 md:h-24', ballImage: MASTERBALL_URL },
};