import { LatestStateDeathsHistory } from 'src/types';

export class LatestStateDeathsDTO {
  public stateName: string;
  public abbreviation: string;
  public history: LatestStateDeathsHistory;
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
    history: LatestStateDeathsHistory;
  }) {
    this.stateName = stateName;
    this.abbreviation = abbreviation;
    this.history = history;
    this.dayRange = dayRange;
  }
}
