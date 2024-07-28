export type PokemonListAPIResponse = {
  results: PokemonListAPIResponseItem[];
};

export type PokemonListAPIResponseItem = {
  name: string;
  url: string;
};
