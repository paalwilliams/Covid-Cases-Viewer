import { ApiProperty, ApiResponse } from '@nestjs/swagger';
import { LatestStateCasesDTO } from './dto/LatestStateCasesDTO';
import { LatestStateDeathsDTO } from './dto/LatestStateDeathsDTO';
import { StateCasesDto } from './dto/StateCasesDTO';
import { StateDeathsDTO } from './dto/StateDeathsDTO';

export const states = {
  Hamburg: 'HH',
  'Schleswig-Holstein': 'SH',
  Niedersachsen: 'NI',
  Bremen: 'HB',
  'Nordrhein-Westfalen': 'NW',
  Hessen: 'HE',
  'Rheinland-Pfalz': 'RP',
  Berlin: 'BE',
  Bayern: 'BY',
  'Baden-Württemberg': 'BW',
  Sachsen: 'SN',
  Thüringen: 'TH',
  'Sachsen-Anhalt': 'ST',
  Brandenburg: 'BB',
  'Mecklenburg-Vorpommern': 'MV',
  Saarland: 'SL',
};

export type GermanyCasesDTOType = {
  [key in keyof typeof states]: StateCasesDto;
};

export type GermanyDeathsDTOType = {
  [key in keyof typeof states]: StateDeathsDTO;
};

export type GermanyLatestCasesDTOType = {
  [key in keyof typeof states]: LatestStateCasesDTO;
};

export type GermanyLatestDeathsDTOType = {
  [key in keyof typeof states]: LatestStateDeathsDTO;
};

export type RawCovidApiResponseType = {
  [key in keyof typeof states]: string;
};

export type HealthcheckResponseDTO = {
  uptime: number;
  version: string;
  ok: boolean;
};

export class LatestStateCasesHistory {
  @ApiProperty()
  public cases: number;
  @ApiProperty()
  public date: string;
}

export class LatestStateDeathsHistory {
  @ApiProperty()
  public deaths: number;
  @ApiProperty()
  date: string;
}
