export type PokemonStatsAPIResponse = {
  stat: PokemonStat;
  base_stat: number;
};

type PokemonStat = {
  name: string;
};
