import { usePokemonSliceProvider } from "../../store/slices/pokemonSlice/usePokemonSliceProvider.tsx";
import { useEffect, useState } from "react";
import { PokemonListAPIResponseItem } from "../../models/types";
import { PokemonListCard } from "./components/PokemonListCard.tsx";
import { PokemonPaginator } from "../../components/PokemonPaginator";
import { PokemonImageModal } from "./components/PokemonImageModal.tsx";
import { HttpCallsService } from "../../services";

export const Pokemons = () => {
  const {
    pokemonStates: { offset, page, limit },
  } = usePokemonSliceProvider();

  const [pokemonList, setPokemonList] = useState<PokemonListAPIResponseItem[]>(
    [] as PokemonListAPIResponseItem[],
  );

  const fetchPokemonList = () => {
    HttpCallsService.getPokemonList(offset, limit)
      .then((resp) => {
        setPokemonList(resp.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchPokemonList();
  }, [page]);

  return (
    <>
      <PokemonPaginator />
      <div className="w-full flex flex-wrap justify-center">
        {pokemonList.map((pokemon) => (
          <PokemonListCard key={pokemon.name} pokemonListItem={pokemon} />
        ))}
        <PokemonImageModal />
      </div>
    </>
  );
};
