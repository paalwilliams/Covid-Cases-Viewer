import { ApiProperty } from '@nestjs/swagger';

export class StateCasesDto {
  @ApiProperty()
  public stateName: string;
  @ApiProperty()
  public abbreviation: string;
  @ApiProperty()
  public population: string;
  @ApiProperty()
  public cases: number;
  @ApiProperty()
  public casesPerWeek: number;
  @ApiProperty()
  public recovered: number;
  @ApiProperty()
  public weekIncidence: number;
  @ApiProperty()
  public casesPer100k: number;
  @ApiProperty()
  public delta: {
    cases: number;
    recovered: number;
    weekIncidence: number;
  };
  @ApiProperty()
  public hospitaliations: {
    cases7Days: number;
    incidence7Days: number;
    date: string;
    lastUpdate: string;
  };

  constructor({
    stateName,
    abbreviation,
    population,
    cases,
    casesPerWeek,
    weekIncidence,
    casesPer100k,
    delta,
    recovered,
    hospitaliations,
  }) {
    this.stateName = stateName;
    this.abbreviation = abbreviation;
    this.population = population;
    this.cases = cases;
    this.casesPerWeek = casesPerWeek;
    this.weekIncidence = weekIncidence;
    this.casesPer100k = casesPer100k;
    this.recovered = recovered;
    this.delta = {
      recovered: delta.recovered,
      cases: delta.cases,
      weekIncidence: delta.weekIncidence,
    };
    this.hospitaliations = hospitaliations;
  }
}
