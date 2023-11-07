import { ApiProperty } from '@nestjs/swagger';

export class StateDeathsDTO {
  @ApiProperty()
  public stateName: string;
  @ApiProperty()
  public abbreviation: string;
  @ApiProperty()
  public population: string;
  @ApiProperty()
  public deaths: number;
  @ApiProperty()
  public deathsPerWeek: number;
  @ApiProperty()
  public deathsPerCapita: number;
  @ApiProperty()
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
