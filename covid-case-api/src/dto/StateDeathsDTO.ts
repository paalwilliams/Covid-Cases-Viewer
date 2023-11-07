export class StateDeathsDTO {
  public stateName: string;
  public abbreviation: string;
  public population: string;
  public deaths: number;
  public deathsPerWeek: number;
  public deathsPerCapita: number;
  public deathsPer100k: number;

  constructor({ stateName, abbreviation, population, deaths, deathsPerWeek }) {
    this.stateName = stateName;
    this.abbreviation = abbreviation;
    this.population = population;
    this.deaths = deaths;
    this.deathsPerWeek = deathsPerWeek;
    this.deathsPerCapita = deaths / population;
    this.deathsPer100k = deaths / 100000;
  }
}
