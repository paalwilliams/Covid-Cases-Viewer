export class StateCasesDto {
  public stateName: string;
  public abbreviation: string;
  public population: string;
  public cases: number;
  public casesPerWeek: number;
  public recovered: number;
  public weekIncidence: number;
  public casesPer100k: number;
  public delta: {
    cases: number;
    recovered: number;
    weekIncidence: number;
  };
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
