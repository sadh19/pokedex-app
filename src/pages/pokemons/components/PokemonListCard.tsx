import { Pokemon, PokemonListAPIResponseItem } from "../../../models/types";
import { useEffect, useState } from "react";
import { PokemonApiAdapter } from "../adapters/PokemonAdapter.ts";
import { PokemonsService } from "../services/PokemonsService.ts";
import { PokemonTypes } from "../../../models/enums";
import { Skeleton } from "@mui/material";
import { usePokemonSliceProvider } from "../../../store/slices/pokemonSlice/usePokemonSliceProvider.tsx";
import { useNavigate } from "react-router-dom";
import { DisplayInfoService, HttpCallsService } from "../../../services";

export const PokemonListCard = ({
  pokemonListItem,
}: {
  pokemonListItem: PokemonListAPIResponseItem;
}) => {
  const { handleOpenModal } = usePokemonSliceProvider();

  const navigate = useNavigate();

  const [currentPokemon, setCurrentPokemon] = useState<Pokemon>({
    name: "",
    types: [] as string[],
  } as Pokemon);

  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isLoadedImage, setIsLoadedImage] = useState<boolean>(false);

  useEffect(() => {
    HttpCallsService.getPokemonDetails(pokemonListItem.url)
      .then((resp) => {
        setCurrentPokemon(PokemonApiAdapter(resp.data));
        setIsLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {isLoaded ? (
        <div
          className="w-1/6 bg-red-600 rounded-3xl p-4 m-4 flex flex-col items-center animated fadeIn fast"
          onDoubleClick={() => navigate("/pokemons/:" + currentPokemon.id)}
        >
          <div className="mb-10 font-bold">
            {DisplayInfoService.getCapitalizedWord(currentPokemon.name)}
          </div>

          {!isLoadedImage && (
            <Skeleton variant="rectangular" width={250} height={250} />
          )}

          <img
            style={isLoaded ? { display: "block" } : { display: "none" }}
            className="w-40 h-40 cursor-pointer"
            src={currentPokemon.img}
            alt={currentPokemon.name}
            onLoad={() => setIsLoadedImage(true)}
            onClick={() => handleOpenModal(currentPokemon.img)}
          />

          <div className="my-2 flex">
            {currentPokemon.types.map((type) => (
              <div
                key={type}
                className="rounded-2xl m-2 p-2"
                style={{
                  background: PokemonsService.getTypeBackground(
                    type as PokemonTypes,
                  ),
                }}
              >
                {DisplayInfoService.getCapitalizedWord(type)}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Skeleton
          variant="rectangular"
          className="rounded-3xl p-4 m-4"
          style={{ height: "350px", width: "16.666667%" }}
        />
      )}
    </>
  );
};
