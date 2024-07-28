import { Pokemon } from "../../../models/types";

export type PokemonStates = {
  items: number;
  offset: number;
  page: number;
  limit: number;
  favorites: Pokemon[];
  modalImageUrl: string;
  isModalOpen: boolean;
};
