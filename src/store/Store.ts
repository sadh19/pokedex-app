import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./slices/pokemonSlice/PokemonSlice";

export const Store = configureStore({
  reducer: {
    pokemons: pokemonReducer,
  },
});
