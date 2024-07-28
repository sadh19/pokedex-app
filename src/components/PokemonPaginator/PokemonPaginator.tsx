import { usePokemonSliceProvider } from "../../store/slices/pokemonSlice/usePokemonSliceProvider.tsx";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../models/enums";

export const PokemonPaginator = () => {
  const {
    pokemonStates: { page, items },
    setPage,
  } = usePokemonSliceProvider();

  const navigate = useNavigate();

  const handlePrevious = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (items > page * 20) {
      setPage(page + 1);
    }
  };

  return (
    <div className="w-full flex justify-center animated fadeIn fast my-4">
      <div
        className={
          page === 1
            ? "rounded-md bg-gray-500 py-1 px-2 mr-3 cursor-not-allowed"
            : "rounded-md bg-pink-700 py-1 px-2 mr-3 cursor-pointer"
        }
        onClick={() => handlePrevious()}
      >
        Previous
      </div>
      {[...Array(Math.ceil(items / 20))].map((_e, i) => (
        <div
          key={i + 1}
          className={
            page === i + 1
              ? "w-8 text-center rounded-md bg-blue-300 py-1 px-2 mx-2"
              : "w-8 text-center rounded-md bg-blue-500 py-1 px-2 mx-2 cursor-pointer"
          }
          onClick={() => setPage(i + 1)}
        >
          {i + 1}
        </div>
      ))}
      <div
        className={
          items < page * 20
            ? "rounded-md bg-gray-500 py-1 px-2 ml-3 cursor-not-allowed"
            : "rounded-md bg-pink-700 py-1 px-2 ml-3 cursor-pointer"
        }
        onClick={() => handleNext()}
      >
        Next
      </div>
      <div
        className="rounded-md bg-amber-300 py-1 px-2 ml-4 cursor-pointer"
        onClick={() => navigate(AppRoutes.FAVORITES)}
      >
        Favourites
      </div>
    </div>
  );
};
