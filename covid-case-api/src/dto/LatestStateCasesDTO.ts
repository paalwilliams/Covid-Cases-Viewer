import { LatestStateCasesHistory } from 'src/types';

export class LatestStateCasesDTO {
  public stateName: string;
  public abbreviation: string;
  public history: LatestStateCasesHistory;
  public dayRange: number;

  constructor({
    stateName,
    abbreviation,
    history,
    dayRange,
  }: {
    stateName: string;
    abbreviation: string;
    dayRange: number;
    history: LatestStateCasesHistory;
  }) {
    this.stateName = stateName;
    this.abbreviation = abbreviation;
    this.history = history;
    this.dayRange = dayRange;
  }
}
