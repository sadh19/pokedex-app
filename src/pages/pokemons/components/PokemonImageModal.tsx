import { usePokemonSliceProvider } from "../../../store/slices/pokemonSlice/usePokemonSliceProvider.tsx";
import { Modal } from "@mui/material";

export const PokemonImageModal = () => {
  const {
    pokemonStates: { isModalOpen, modalImageUrl },
    setIsModalOpen,
  } = usePokemonSliceProvider();

  return (
    <>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="w-full h-screen flex justify-center items-center">
          <div className="w-96 h-96 flex justify-center items-center rounded-3xl bg-[#3a67c2] relative overflow-hidden">
            <img
              className="w-72 h-72"
              src={modalImageUrl}
              alt={"PokemonDetails img"}
            />
            <div
              className="absolute w-12 h-12 top-[-2px] right-[25px]  bg-red-500 rounded flex justify-center items-center hover:cursor-pointer hover:bg-red-700"
              onClick={() => setIsModalOpen(false)}
            >
              <span>Close</span>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
