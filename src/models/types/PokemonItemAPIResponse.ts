import { PokemonItemSpritesAPIResponse } from "./PokemonItemSpritesAPIResponse.ts";
import { PokemonTypesAPI } from "./PokemonTypesAPI.ts";
import { PokemonAbilitiesAPIResponse } from "./PokemonAbilitiesAPIResponse.ts";
import { PokemonStatsAPIResponse } from "./PokemonStatsAPIResponse.ts";

export type PokemonItemAPIResponse = {
  id: number;
  name: string;
  weight: number;
  height: number;
  sprites: PokemonItemSpritesAPIResponse;
  types: PokemonTypesAPI[];
  abilities: PokemonAbilitiesAPIResponse[];
  stats: PokemonStatsAPIResponse[];
};
