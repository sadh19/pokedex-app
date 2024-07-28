import { useDispatch, useSelector } from "react-redux";
import { StoreStates } from "../../StoreStates.ts";
import { PokemonSlice } from "./PokemonSlice.ts";
import { Pokemon } from "../../../models/types";
import { Store } from "../../Store.ts";

export const usePokemonSliceProvider = () => {
  const pokemonStates = useSelector(({ pokemons }: StoreStates) => pokemons);
  const pokemonActions = PokemonSlice.actions;

  const dispatch = useDispatch();

  const setPage = (payload: number) => {
    dispatch(pokemonActions.setPage(payload));
    if (payload === 1) {
      dispatch(pokemonActions.setOffset(0));
      dispatch(pokemonActions.setLimit(20));

      if (pokemonStates.items < 20) {
        dispatch(pokemonActions.setLimit(pokemonStates.limit));
      }
    } else {
      if (pokemonStates.items < payload * 20) {
        const currentPageItems = (payload - 1) * 20;
        dispatch(
          pokemonActions.setLimit(pokemonStates.items - currentPageItems),
        );
        dispatch(pokemonActions.setOffset((payload - 1) * 20));
      } else {
        dispatch(pokemonActions.setOffset((payload - 1) * 20));
        dispatch(pokemonActions.setLimit(20));
      }
    }
  };

  const addToFavorites = (payload: Pokemon) => {
    dispatch(pokemonActions.addFavorites(payload));
  };

  const removeFromFavorites = (payload: Pokemon) => {
    const currentState = { ...Store.getState().pokemons };
    const currentFavorites = currentState.favorites;

    const filteredFavorites = currentFavorites.filter(
      (favorite) => favorite.id !== payload.id,
    );

    dispatch(pokemonActions.setFavorites(filteredFavorites));
  };

  const setModalImageUrl = (payload: string) => {
    dispatch(pokemonActions.setModalImageUrl(payload));
  };

  const setIsModalOpen = (payload: boolean) => {
    dispatch(pokemonActions.setIsModalOpen(payload));
  };

  const handleOpenModal = (imageUrl: string) => {
    setModalImageUrl(imageUrl);
    setIsModalOpen(true);
  };

  return {
    pokemonStates,
    setPage,
    addToFavorites,
    removeFromFavorites,
    setIsModalOpen,
    handleOpenModal,
  };
};
