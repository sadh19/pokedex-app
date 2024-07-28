import {
  Pokemon,
  PokemonItemAPIResponse,
  PokemonStats,
} from "../../../models/types";

export const PokemonApiAdapter = (
  pokemonItem: PokemonItemAPIResponse,
): Pokemon => {
  const pokemon = {
    types: [] as string[],
    abilities: [] as string[],
    stats: [] as PokemonStats[],
  } as Pokemon;
  pokemon.id = pokemonItem.id;
  pokemon.name = pokemonItem.name;
  pokemon.height = pokemonItem.height;
  pokemon.weight = pokemonItem.weight;
  pokemon.img = pokemonItem.sprites.other.dream_world.front_default;
  pokemonItem.types.forEach((pokemonType) => {
    pokemon.types.push(pokemonType.type.name);
  });
  pokemonItem.abilities.forEach((ability) => {
    pokemon.abilities.push(ability.ability.name);
  });
  pokemonItem.stats.forEach((stat) => {
    const newStat: PokemonStats = {
      name: stat.stat.name,
      value: stat.base_stat,
    };
    pokemon.stats.push(newStat);
  });

  return pokemon;
};
