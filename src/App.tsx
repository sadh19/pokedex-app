import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Pokemons } from "./pages/pokemons";
import { AppRoutes } from "./models/enums";
import { Provider } from "react-redux";
import { Store } from "./store/Store.ts";
import { Layout } from "./pages/Layout.tsx";
import { PokemonDetails } from "./pages/pokemonDetails";
import { Favorites } from "./pages/favorites";

function App() {
  return (
    <>
      <Provider store={Store}>
        <Layout>
          <Routes>
            <Route
              path={AppRoutes.ROOT}
              element={<Navigate to={AppRoutes.POKEMONS} />}
            />
            <Route path={AppRoutes.POKEMONS} element={<Pokemons />} />
            <Route
              path={AppRoutes.POKEMON_DETAILS}
              element={<PokemonDetails />}
            />
            <Route path={AppRoutes.FAVORITES} element={<Favorites />} />
            <Route
              path={AppRoutes.NOT_FOUND}
              element={<Navigate to={AppRoutes.POKEMONS} />}
            />
          </Routes>
        </Layout>
      </Provider>
    </>
  );
}

export default App;
