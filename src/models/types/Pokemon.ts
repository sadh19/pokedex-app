export type Pokemon = {
  id: number;
  name: string;
  types: string[];
  img: string;
  weight: number;
  height: number;
  abilities: string[];
  stats: PokemonStats[];
};

export type PokemonStats = {
  name: string;
  value: number;
};
