import { ApiProperty } from '@nestjs/swagger';
import { LatestStateCasesHistory } from 'src/types';

export class LatestStateCasesDTO {
  @ApiProperty()
  public stateName: string;
  @ApiProperty()
  public abbreviation: string;
  @ApiProperty()
  public history: LatestStateCasesHistory;
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
    history: LatestStateCasesHistory;
  }) {
    this.stateName = stateName;
    this.abbreviation = abbreviation;
    this.history = history;
    this.dayRange = dayRange;
  }
}
