import { usePokemonSliceProvider } from "../../store/slices/pokemonSlice/usePokemonSliceProvider.tsx";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../models/enums";
import { DisplayInfoService } from "../../services";

export const Favorites = () => {
  const {
    pokemonStates: { favorites },
  } = usePokemonSliceProvider();

  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-wrap justify-center relative">
      <button
        className="absolute top-[.5rem] left-[1rem] bg-red-500"
        onClick={() => navigate(AppRoutes.POKEMONS)}
      >
        Back
      </button>
      <div className="my-8 w-full flex flex-wrap justify-center">
        {favorites.map((pokemon) => (
          <div
            key={pokemon.id}
            className="w-1/6 bg-blue-400 rounded-3xl p-4 m-4 flex flex-col items-center animated fadeIn fast"
          >
            <img
              className="w-40 h-40 cursor-pointer"
              src={pokemon.img}
              alt={pokemon.name}
            />

            <div className="mt-5 font-bold">
              {DisplayInfoService.getCapitalizedWord(pokemon.name)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
