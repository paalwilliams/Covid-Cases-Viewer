import { ApiProperty } from '@nestjs/swagger';
import { LatestStateDeathsHistory } from 'src/types';

export class LatestStateDeathsDTO {
  @ApiProperty()
  public stateName: string;
  @ApiProperty()
  public abbreviation: string;
  @ApiProperty()
  public history: LatestStateDeathsHistory;
  @ApiProperty()
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
