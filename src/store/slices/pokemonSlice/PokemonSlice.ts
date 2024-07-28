import { PokemonStates } from "./PokemonStates.ts";
import { Pokemon } from "../../../models/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialStates: PokemonStates = {
  items: 151,
  offset: 0,
  page: 1,
  limit: 20,
  favorites: [] as Pokemon[],
  modalImageUrl: "",
  isModalOpen: false,
};

export const PokemonSlice = createSlice({
  name: "pokemon",
  initialState: initialStates,
  reducers: {
    setItems: (states: PokemonStates, action: PayloadAction<number>) => {
      states.items = action.payload;
    },
    setOffset: (states: PokemonStates, action: PayloadAction<number>) => {
      states.offset = action.payload;
    },
    setLimit: (states: PokemonStates, action: PayloadAction<number>) => {
      states.limit = action.payload;
    },
    setPage: (states: PokemonStates, action: PayloadAction<number>) => {
      states.page = action.payload;
    },
    setFavorites: (states: PokemonStates, action: PayloadAction<Pokemon[]>) => {
      states.favorites = action.payload;
    },
    addFavorites: (states: PokemonStates, action: PayloadAction<Pokemon>) => {
      states.favorites = [...states.favorites, action.payload];
    },
    setModalImageUrl: (
      states: PokemonStates,
      action: PayloadAction<string>,
    ) => {
      states.modalImageUrl = action.payload;
    },
    setIsModalOpen: (states: PokemonStates, action: PayloadAction<boolean>) => {
      states.isModalOpen = action.payload;
    },
  },
});

export default PokemonSlice.reducer;
