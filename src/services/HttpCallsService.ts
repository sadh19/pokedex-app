import axios from "axios";
import {
  PokemonItemAPIResponse,
  PokemonListAPIResponse,
  ResponseAPI,
} from "../models/types";

export class HttpCallsService {
  public static getPokemonList = (
    offset: number,
    limit: number,
  ): Promise<ResponseAPI<PokemonListAPIResponse>> => {
    return axios.get(
      `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`,
    );
  };

  public static getPokemonDetails = (
    url: string,
  ): Promise<ResponseAPI<PokemonItemAPIResponse>> => {
    return axios.get(url);
  };

  public static getPokemonDetailsById = (
    id: string,
  ): Promise<ResponseAPI<PokemonItemAPIResponse>> => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  };
}
