export class DisplayInfoService {
  public static getPokemonMeasurements = (measure: number): number => {
    return measure / 10;
  };

  public static getCapitalizedWord = (word: string): string => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
}
