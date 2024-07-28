import { PokemonTypes } from "../../../models/enums";

export class PokemonsService {
  public static getTypeBackground = (type: PokemonTypes): string => {
    switch (type) {
      case PokemonTypes.BUG:
        return "#8d9b10";
      case PokemonTypes.DARK:
        return "#4d3d30";
      case PokemonTypes.DRAGON:
        return "#725ddd";
      case PokemonTypes.ELECTRIC:
        return "#fdba18";
      case PokemonTypes.FAIRY:
        return "#efabef";
      case PokemonTypes.FIGHTING:
        return "#773621";
      case PokemonTypes.FIRE:
        return "#ee400e";
      case PokemonTypes.FLYING:
        return "#8fa2e7";
      case PokemonTypes.GHOST:
        return "#5c5cae";
      case PokemonTypes.GRASS:
        return "#75c236";
      case PokemonTypes.GROUND:
        return "#d3b158";
      case PokemonTypes.ICE:
        return "#93e3fc";
      case PokemonTypes.NORMAL:
        return "#c5bdb7";
      case PokemonTypes.POISON:
        return "#944393";
      case PokemonTypes.PSYCHIC:
        return "#e0336d";
      case PokemonTypes.ROCK:
        return "#9e873f";
      case PokemonTypes.STEEL:
        return "#b8b8c5";
      default:
        return "#3290ee";
    }
  };
}
