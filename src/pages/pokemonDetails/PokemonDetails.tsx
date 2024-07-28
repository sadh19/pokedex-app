import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Pokemon, PokemonStats } from "../../models/types";
import { PokemonApiAdapter } from "../pokemons/adapters/PokemonAdapter.ts";
import { DisplayInfoService, HttpCallsService } from "../../services";
import { AppRoutes } from "../../models/enums";
import { usePokemonSliceProvider } from "../../store/slices/pokemonSlice/usePokemonSliceProvider.tsx";

export const PokemonDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    pokemonStates: { favorites },
    addToFavorites,
    removeFromFavorites,
  } = usePokemonSliceProvider();

  const existsInFavorites = () => {
    return (
      favorites.filter((pokemon) => pokemon.id === Number(id!.replace(":", "")))
        .length > 0
    );
  };

  const [currentPokemon, setCurrentPokemon] = useState<Pokemon>({
    name: "",
    types: [] as string[],
    abilities: [] as string[],
    stats: [] as PokemonStats[],
  } as Pokemon);

  const [isFavoritePokemon, setIsFavoritePokemon] =
    useState<boolean>(existsInFavorites());

  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const handleAddToFavorites = () => {
    if (!existsInFavorites()) {
      addToFavorites(currentPokemon);
      setIsFavoritePokemon(true);
    }
  };

  const handleRemoveFromFavorites = () => {
    if (existsInFavorites()) {
      removeFromFavorites(currentPokemon);
      setIsFavoritePokemon(false);
    }
  };

  useEffect(() => {
    HttpCallsService.getPokemonDetailsById(id!.replace(":", ""))
      .then((resp) => {
        setCurrentPokemon(PokemonApiAdapter(resp.data));
        setIsLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="w-full bg-white flex justify-around p-8 rounded relative">
      <button
        className="absolute top-[1rem] left-[1rem] bg-red-500"
        onClick={() => navigate(AppRoutes.POKEMONS)}
      >
        Back
      </button>

      {isFavoritePokemon ? (
        <button
          className="absolute top-[1rem] right-[1rem] bg-blue-400"
          onClick={() => handleRemoveFromFavorites()}
        >
          Remove from Favs
        </button>
      ) : (
        <button
          className="absolute top-[1rem] right-[1rem] bg-yellow-400"
          onClick={() => handleAddToFavorites()}
        >
          Add to Favs
        </button>
      )}

      <div className="w-3/5 flex justify-center items-center flex-col">
        <h2 className="text-blue-500 mb-4 mt-2 text-3xl">
          {DisplayInfoService.getCapitalizedWord(currentPokemon.name)}
        </h2>
        <img
          style={isLoaded ? { display: "block" } : { display: "none" }}
          className="w-64 h-64 cursor-pointer"
          src={currentPokemon.img}
          alt={currentPokemon.name}
        />
      </div>
      <div className="flex flex-col items-start w-2/5">
        <h3 className="text-blue-700 text-2xl mt-2">Size:</h3>
        <div className="flex justify-between w-3/6">
          <span className="text-black text-lg mr-3 font-bold">Height:</span>
          <span className="text-black text-lg">
            {DisplayInfoService.getPokemonMeasurements(currentPokemon.height)} M
          </span>
        </div>
        <div className="flex justify-between w-3/6">
          <span className="text-black text-lg mr-3 font-bold">Weight:</span>
          <span className="text-black text-lg">
            {DisplayInfoService.getPokemonMeasurements(currentPokemon.weight)}{" "}
            KG
          </span>
        </div>

        <h3 className="text-blue-700 text-2xl mt-2">Abilities:</h3>

        {currentPokemon.abilities.map((ability) => (
          <div key={ability} className="flex justify-between">
            <span className="text-black text-lg mr-3 font-bold">
              {DisplayInfoService.getCapitalizedWord(ability)}
            </span>
          </div>
        ))}

        <h3 className="text-blue-700 text-2xl mt-2">Stats:</h3>

        {currentPokemon.stats.map((stat) => (
          <div key={stat.name} className="flex justify-between w-3/6">
            <span className="text-black text-lg mr-3 font-bold">
              {DisplayInfoService.getCapitalizedWord(stat.name)}:
            </span>
            <span className="text-black text-lg">{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
